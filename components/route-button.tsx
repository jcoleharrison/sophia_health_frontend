import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface RouteButtonProps {
  url: string
  text: ReactNode
}

export default function RouteButton(props: RouteButtonProps) {
  const router = useRouter()
  return (
    <div>
      <button
        onClick={() => {
          router.push(props.url)
        }}
      >
        {props.text}
      </button>
    </div>
  )
}
