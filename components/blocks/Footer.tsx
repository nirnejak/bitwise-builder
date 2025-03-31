import * as React from "react"

import Link from "next/link"
import { CircleFill, ArrowRight } from "akar-icons"

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-5">
      <div className="rounded-3xl bg-zinc-100">
        <div className="container grid grid-cols-5 gap-24 px-5 py-32 text-zinc-500 xl:px-0">
          <div className="col-span-2 flex flex-col">
            <Link
              href={"/"}
              className="text-2xl font-semibold leading-none tracking-tighter text-zinc-900"
            >
              Oven Studio
            </Link>
            <p className="mt-4 text-sm tracking-tight text-zinc-600">
              © 2025, By Oven Studio Pvt Ltd.
            </p>
            <div className="mt-auto flex">
              <Link
                href={"/contact-us/"}
                className="group flex items-center rounded-full bg-zinc-900 p-3 text-zinc-50"
              >
                <span className="pl-4 pr-8">Contact us</span>
                <span className="rounded-full bg-zinc-50 p-2.5 text-zinc-900 group-hover:bg-zinc-600 group-hover:text-zinc-50">
                  <ArrowRight size={17} />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 tracking-tight">
            <p className="font-semibold text-zinc-900">Highlights</p>

            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Home
            </Link>
            <Link
              href={"/projects/"}
              className="transition-colors hover:text-zinc-900"
            >
              Projects
            </Link>
            <Link
              href={"/careers/"}
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-900"
            >
              Careers
              <CircleFill size={5} className="text-pink-600" />
            </Link>
            <Link
              href={"/contact-us/"}
              className="transition-colors hover:text-zinc-900"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-5 tracking-tight">
            <p className="font-semibold text-zinc-900">Services</p>

            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Website Design
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Product Design
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Website Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Product Development
            </Link>
          </div>
          <div className="flex flex-col gap-5 tracking-tight">
            <p className="font-semibold text-zinc-900">Technologies</p>

            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              React Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Node.js Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Next.js Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Astro Development
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
