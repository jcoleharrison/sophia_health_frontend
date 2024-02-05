'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const timeDelay = 1500
    const timeoutId = setTimeout(() => {
      router.push('/')
    }, timeDelay)

    return () => clearTimeout(timeoutId)
  }, [router])
  return (
    <div className="fixed z-50 flex h-screen w-screen animate-pulse items-center justify-center bg-white opacity-90">
      <img src="/sophia-logo.png"></img>
    </div>
  )
}
