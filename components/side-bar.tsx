'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Home,
  Users,
  GanttChartSquare,
  Settings,
  BarChart3,
  MessageSquareDot,
  MessageCircleQuestion,
  LogOut,
} from 'lucide-react'
import SidebarItem from './side-bar-item'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  // TODO: Replace with user data and props
  const [isOpen, setIsOpen] = useState(false)
  let name: string = 'Steven Lim'
  let image: string =
    'https://media.licdn.com/dms/image/C4E03AQEYQgpGsIDPoQ/profile-displayphoto-shrink_200_200/0/1575654668293?e=1710979200&v=beta&t=7nHkOJTejNAZ7rkONgzo_1GvouWuAUJC0KitMC1-H08'

  const openNavigation = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target || !target.closest || !target.closest('#sidebar')) {
        setIsOpen(false)
      }
    }
    document.body.addEventListener('click', handleOutsideClick)

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <>
      <button
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        onClick={openNavigation}
        className="inline-flex h-12 rounded-lg p-2 text-sm focus:outline-none lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-gray-200 pt-[17px] transition-transform lg:translate-x-0 lg:pt-[71px] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }
          ${isOpen && 'bg-stone-50'}
        `}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto border-r-2 border-gray-200 px-3 pb-4">
          <div className="flex items-center pb-8 lg:pt-8">
            <Avatar>
              <AvatarImage src={image}></AvatarImage>
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="px-3">{name}</span>
          </div>
          <ul className="space-y-2 font-medium">
            <SidebarItem name="Home" image={<Home />} />
            <SidebarItem name="Patients" image={<Users />} />
            <Accordion
              type="single"
              collapsible
              className="flex cursor-pointer items-center rounded-sm px-3 py-3 duration-300 hover:bg-slate-100"
            >
              <AccordionItem value="tools">
                <AccordionTrigger>
                  <GanttChartSquare />
                  <span className="px-3">Tools</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="px-12 pt-2 text-base">
                    <li>
                      <a>SOAP Note Generator</a>
                    </li>
                    <li>
                      <a>ASAM Generator</a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SidebarItem name="Settings" image={<Settings />} />
            <SidebarItem name="Reports/Analytics" image={<BarChart3 />} />
            <SidebarItem name="Notifications" image={<MessageSquareDot />} />
            <SidebarItem
              name="Support/Help"
              image={<MessageCircleQuestion />}
            />
            <SidebarItem name="Sign Out" image={<LogOut />} />
          </ul>
        </div>
      </aside>
    </>
  )
}
