import React from "react"


interface SidebarItemProps {
    name: string;
    image: string;
}
export default function SidebarItem (props:SidebarItemProps) {
    return (
        <a>
          <div className="flex cursor-pointer items-center rounded-sm px-3 py-3 duration-300 hover:bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="px-3">{props.name}</span>
          </div>
        </a>
    )
  }