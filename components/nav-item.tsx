'use client'
import { useRouter } from 'next/navigation'
interface NavItemProps {
  name: string
  route: string
}
export default function NavItem(props: NavItemProps) {
  const router = useRouter()
  return (
    <button onClick={() => router.push(props.route)} className="underline">
      {props.name}
    </button>
  )
}
