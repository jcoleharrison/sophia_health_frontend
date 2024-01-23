import React, { Component } from "react"


interface SidebarItemProps {
    name: string;
    image: React.ReactNode;
}
export default function SidebarItem (props:SidebarItemProps) {
    return (
        <a>
          <div className="flex cursor-pointer items-center rounded-sm px-3 py-3 duration-300 hover:bg-slate-100">
            {props.image}
            <span className="px-3">{props.name}</span>
          </div>
        </a>
    )
  }