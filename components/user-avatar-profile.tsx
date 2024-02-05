'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'
import { Skeleton } from './ui/skeleton'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  currentUser,
  SignIn,
  SignInButton,
  SignOutButton,
  useClerk,
  useUser,
  useSignUp,
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { User } from 'lucide-react'

const avatarSizes = cva('', {
  variants: {
    size: {
      default: 'h-8 w-8',
      lg: 'h-14 w-14',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string
  imageUrl: string
  isLive?: boolean
  showBadge?: boolean
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
  return <Skeleton className={cn('rounded-full', avatarSizes({ size }))} />
}

export default function UserAvatarProfile() {
  const clerk = useClerk()
  const { user } = useUser()
  const router = useRouter()
  return (
    <div className="right-0 mr-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage className="object-cover" src={user?.imageUrl} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {user?.firstName} {user?.lastName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button
              onClick={() => {
                router.push('/user-profile')
              }}
            >
              User Settings
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                router.push('/loading')
                clerk.signOut()
              }}
            >
              Sign Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
