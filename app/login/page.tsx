'use client'

import UserAvatarProfile from '@/components/user-avatar-profile'
import { SignIn, UserButton, useClerk, useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()
  const clerk = useClerk()
  return (
    <div>
      <div>
        <SignIn />
        <UserButton />
        Hello {user?.firstName} {user?.lastName}
        <UserAvatarProfile />
        <button onClick={() => clerk.openSignIn({})}>Sign In Button</button>
      </div>
    </div>
  )
}
