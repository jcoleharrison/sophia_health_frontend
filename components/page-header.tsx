'use client'

import SearchBar from './search-bar'
import { FaBullhorn } from 'react-icons/fa'
import UserAvatar from './user-avatar'
import Image from 'next/image'

export default function PageHeader() {
  const handleFeedback = () => {
    console.log('Feedback')
  }

  return (
    <div className="z-100 sticky top-0">
      <div className="flex items-center space-x-2 border-b-2">
        <div>
          <Image
            src="/sophia-logo.png"
            alt="sophia-logo"
            width={180}
            height={30}
            className="m-4 object-contain"
          ></Image>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center gap-2" onClick={handleFeedback}>
          <div className="ml-4 mr-1">
            <FaBullhorn className="h-[20px] w-[20px] fill-zinc-400"></FaBullhorn>
          </div>
          <span className="select-none text-zinc-600">Feedback?</span>
        </div>
        <div>
          <UserAvatar></UserAvatar>
        </div>
      </div>
    </div>
  )
}
