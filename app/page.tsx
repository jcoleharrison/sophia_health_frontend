'use client'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useClerk, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const { user } = useUser()
  const clerk = useClerk()
  const value = user

  return (
    <div
      className={
        !value
          ? 'fixed z-50 flex h-screen w-screen items-center justify-center bg-white'
          : ''
      }
    >
      <Card className={!value ? 'w-2/5 p-10' : 'hidden'}>
        <CardHeader>
          <CardTitle>Log In to Start Using Sophia Health</CardTitle>
          <CardDescription>
            Your one stop shop for streamlining your SOAP Notes. We save time on
            your note taking, so you can spend more time on your counseling.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            onClick={() => {
              clerk.redirectToSignIn()
              router.push('/loading')
            }}
          >
            Log In
          </Button>
        </CardFooter>
      </Card>
      <div className={value ? '' : 'hidden'}>
        <h1>Home Page Placeholder</h1>
      </div>
    </div>
  )
}
