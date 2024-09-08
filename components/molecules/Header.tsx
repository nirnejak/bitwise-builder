import * as React from "react"

import { CircleFill } from "akar-icons"
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-20">
          <Link
            href={"/"}
            className="text-xl font-semibold leading-none tracking-tighter text-zinc-900"
          >
            Bitwise Builder
          </Link>
          <nav className="flex items-center gap-6 font-medium leading-none tracking-tight text-zinc-500">
            <Link
              href={"/services/"}
              className="transition-colors hover:text-zinc-900"
            >
              Services
            </Link>
            <Link
              href={"/projects/"}
              className="transition-colors hover:text-zinc-900"
            >
              Projects
            </Link>
            <Link
              href={"/blogs/"}
              className="transition-colors hover:text-zinc-900"
            >
              Blogs
            </Link>
            <Link
              href={"/about/"}
              className="transition-colors hover:text-zinc-900"
            >
              About
            </Link>
            <Link
              href={"/careers/"}
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-900"
            >
              Careers
              <CircleFill size={5} className="text-pink-600" />
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={"/contact-us/"}
            className="rounded-full bg-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300"
          >
            Contact us
          </Link>
          <Link
            href={"/contact-us/"}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-300"
          >
            Schedule call
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
