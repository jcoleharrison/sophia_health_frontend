'use client'

import SearchBar from './search-bar'
import { FaBullhorn } from 'react-icons/fa'
import UserAvatar from './user-avatar'

export default function PageHeader() {
  const handleFeedback = () => {
    console.log('Feedback')
  }

  return (
    <div className="flex items-center space-x-2 border-b-2">
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
  )
}
