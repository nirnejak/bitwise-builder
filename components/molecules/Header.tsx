import * as React from "react"

import { CircleFill } from "akar-icons"
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header className="container flex items-center justify-between py-8">
      <div className="flex items-center gap-20">
        <Link
          href={"/"}
          className="text-xl font-semibold leading-none text-zinc-900"
        >
          Bitwise Builder
        </Link>
        <nav className="flex items-center gap-6 font-medium leading-none text-zinc-500">
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
            <CircleFill size={5} className="text-pink-500" />
          </Link>
        </nav>
      </div>
      <div>
        <Link
          href={"/contact-us/"}
          className="rounded-full bg-zinc-200 px-5 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-300"
        >
          Contact us
        </Link>
      </div>
    </header>
  )
}

export default Header
