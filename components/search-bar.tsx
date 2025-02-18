import { SearchIcon } from 'lucide-react'
import Search from './search'

export default function SearchBar() {
  return (
    <div className="mx-2 my-2 flex items-center space-x-1">
      <SearchIcon className="2-[20px] h-[20px]" />
      <Search />
    </div>
  )
}
