"use client"

import Link from "next/link"
import * as React from "react"
import { usePathname } from 'next/navigation'


export function Header() {
  const pathname = usePathname()
  return (
    <nav className="fixed w-full top-0 z-10">
      <div className="w-full bg-[#B9D49E] py-10">
        <h1 className="text-2xl text-center text-2xl font-light tracking-tight">
          BELLA DAVIES
        </h1>
      </div>
      <div className="flex justify-center gap-6 py-1 bg-[#F7F9F9] border-b border-gray-300">
        <Link 
          href="/about"
          className={`px-1 py-1 font-[150] tracking-tight ${pathname === '/about' ? 'bg-[#F1F0EA]' : ''}`}
        >
          About
        </Link>
        <Link 
          href="/projects"
          className={`px-1 py-1 font-[150] tracking-tight ${pathname === '/projects' ? 'bg-[#F1F0EA]' : ''}`}
        >
          Projects
        </Link>
        <style jsx>{`
          a:hover {
            color: gray;
          }
        `}</style>
      </div>
    </nav>
  )
}
