"use client"
import * as React from "react"

import { CircleFill } from "akar-icons"
import Link from "next/link"

import classNames from "utils/classNames"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={classNames("fixed top-0 w-full px-5 z-[9999]")}>
      <div
        className={classNames(
          "py-5",
          isScrolled
            ? "mt-3 rounded-3xl border border-zinc-100 bg-white/80 shadow-lg backdrop-blur-md transition-all"
            : ""
        )}
      >
        <div className="container flex items-center justify-between px-5 xl:px-0">
          <div className="flex items-center gap-20 leading-none">
            <Link
              href={"/"}
              className="text-xl font-semibold tracking-tighter text-zinc-900"
            >
              Bitwise Builder
            </Link>
            <nav className="flex items-center gap-6 font-medium tracking-tight text-zinc-500">
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
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800"
            >
              Schedule call
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
