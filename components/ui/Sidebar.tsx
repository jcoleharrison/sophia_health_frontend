import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage} from './avatar'

export default function Sidebar() {
  let name:string = "Steven Lim"
  let image:string = "https://media.licdn.com/dms/image/C4E03AQEYQgpGsIDPoQ/profile-displayphoto-shrink_200_200/0/1575654668293?e=1710979200&v=beta&t=7nHkOJTejNAZ7rkONgzo_1GvouWuAUJC0KitMC1-H08"
  
  return (
    <main>
        <ScrollArea className="h-screen sticky w-80 z-50 flex flex-col text-xl py-6 px-3 shadow-lg ">
          <div className='flex items-center pb-12'>
            <Avatar>
              <AvatarImage src={image}></AvatarImage>
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className='px-3'>{name}</span>            
          </div>
            
          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className='px-3'>Home</span>
            </div>
          </a>
          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span className='px-3'>Patients</span>
            </div>
          </a>
          
          <Accordion type="single" collapsible className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
            <AccordionItem value="tools">
              <AccordionTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gantt-chart-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>
              <span className='px-3'>Tools</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className='px-12 pt-2 text-base'>
                  <li><a>SOAP Note Generator</a></li>
                  <li><a>ASAM Generator</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              <span className='px-3'>Settings</span>
            </div>
          </a>
          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              <span className='px-3'>Reports/Analytics</span>
            </div>
          </a>
          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-dot"><path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"/><circle cx="18" cy="6" r="3"/></svg>
              <span className='px-3'>Messages/Notifications</span>
            </div>
          </a>
          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              <span className='px-3'>Support/Help</span>
            </div>
          </a>

          <a>
            <div className='flex items-center py-3 px-3 hover:bg-slate-100 rounded-sm cursor-pointer duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              <span className='px-3'>Sign Out</span>
            </div>
          </a>
          
          
        </ScrollArea>
        <h1>
          Hello World
        </h1>
    </main>
  )
}
