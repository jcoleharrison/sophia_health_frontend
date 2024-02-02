'use client'

import UserAvatarProfile from '@/components/user-avatar-profile'
import { UserProfile, useClerk, useUser } from '@clerk/nextjs'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Home() {
  const { user } = useUser()
  const clerk = useClerk()
  return (
    <div className="flex flex-grow justify-center">
      {' '}
      <UserProfile
        appearance={{
          elements: {
            rootBox: 'shadow-none flex flex-grow',
            card: 'shadow-none flex flex-grow',
            scrollBox: 'rounded-none',
          },
        }}
      />
    </div>
  )
}
