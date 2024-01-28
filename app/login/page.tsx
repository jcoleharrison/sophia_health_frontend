'use client'

import UserAvatarProfile from '@/components/user-avatar-profile'
import {
  UserButton,
  UserProfile,
  currentUser,
  useClerk,
  useUser,
} from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()
  const clerk = useClerk()
  console.log(user)
  return (
    <div>
      <div>
        <UserButton />
        Hello {user?.firstName} {user?.lastName}
        <UserAvatarProfile />
        <button onClick={() => clerk.openSignIn({})}>Sign In Button</button>
      </div>
    </div>
  )
}
