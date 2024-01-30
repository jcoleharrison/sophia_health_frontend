'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const timeDelay = 1000
    const timeoutId = setTimeout(() => {
      router.push('/')
    }, timeDelay)

    return () => clearTimeout(timeoutId)
  }, [router])
  return (
    <div className="fixed z-50 h-screen w-screen bg-white opacity-90">
      <h1></h1>
    </div>
  )
}
