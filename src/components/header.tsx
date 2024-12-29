"use client";

import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";

const routes = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <nav className="fixed w-full top-0 z-10">
      <div className="w-full bg-[#B9D49E] py-10">
        <h1 className="text-2xl text-center text-2xl font-light tracking-tight">
          BELLA DAVIES
        </h1>
      </div>
      <div className="flex justify-center gap-6 py-1 bg-[#F7F9F9] border-b border-gray-300">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`px-1 py-1 font-[150] tracking-tight ${
              pathname === route.href ? "bg-[#F1F0EA]" : ""
            }`}
          >
            {route.name}
          </Link>
        ))}
        <style jsx>{`
          a:hover {
            color: gray;
          }
        `}</style>
      </div>
    </nav>
  );
}
