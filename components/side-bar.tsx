import { ScrollArea } from '@/components/ui/scroll-area'
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

export default function Sidebar() {
  // TODO: Replace with user data and props
  let name: string = 'Steven Lim'
  let image: string =
    'https://media.licdn.com/dms/image/C4E03AQEYQgpGsIDPoQ/profile-displayphoto-shrink_200_200/0/1575654668293?e=1710979200&v=beta&t=7nHkOJTejNAZ7rkONgzo_1GvouWuAUJC0KitMC1-H08'

  return (
    <div className="flex shadow-lg">
      <aside className="text-l sticky z-50 flex flex-col px-2 py-6 ">
        <div className="flex items-center pb-12">
          <Avatar>
            <AvatarImage src={image}></AvatarImage>
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="px-3">{name}</span>
        </div>

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
        <SidebarItem name="Support/Help" image={<MessageCircleQuestion />} />
        <SidebarItem name="Sign Out" image={<LogOut />} />
      </aside>
    </div>
  )
}
