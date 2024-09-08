import * as React from "react"

import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header className="container flex items-center justify-between py-8">
      <div className="flex items-center gap-20">
        <p className="text-xl font-semibold leading-none text-zinc-900">
          Bitwise Builder
        </p>
        <nav className="flex items-center gap-6 font-medium leading-none text-zinc-500">
          <Link href={"/"} className="transition-colors hover:text-zinc-900">
            Services
          </Link>
          <Link href={"/"} className="transition-colors hover:text-zinc-900">
            Projects
          </Link>
          <Link href={"/"} className="transition-colors hover:text-zinc-900">
            Blogs
          </Link>
          <Link href={"/"} className="transition-colors hover:text-zinc-900">
            About
          </Link>
          <Link href={"/"} className="transition-colors hover:text-zinc-900">
            Careers
          </Link>
        </nav>
      </div>
      <div>
        <Link
          href={"/contact-us/"}
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm text-zinc-50"
        >
          Contact us
        </Link>
      </div>
    </header>
  )
}

export default Header
