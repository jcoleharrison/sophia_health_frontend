'use client'

import { UserProfile } from '@clerk/nextjs'

export default function Home() {
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
