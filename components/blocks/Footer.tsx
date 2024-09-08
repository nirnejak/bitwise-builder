import * as React from "react"

import { CircleFill } from "akar-icons"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4">
      <div className="rounded-3xl bg-zinc-100">
        <div className="container grid grid-cols-5 gap-24 py-20 text-zinc-500">
          <div className="col-span-2 flex flex-col">
            <Link
              href={"/"}
              className="text-xl font-semibold leading-none tracking-tighter text-zinc-900"
            >
              Bitwise Builder
            </Link>
            <p className="mt-4 text-sm tracking-tight text-zinc-600">
              © 2024, By Happy Chases Inc.
            </p>
            <div className="mt-auto">
              <Link
                href={"/contact-us/"}
                className="rounded-full bg-zinc-900 px-10 py-4 text-zinc-50 hover:bg-zinc-800"
              >
                Contact us
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
          </div>
          <div className="flex flex-col gap-5 tracking-tight">
            <p className="font-semibold text-zinc-900">Services</p>

            <p>Web Development</p>
            <p>App Development</p>
            <p>Cloud and DevOps</p>
            <p>Django Development</p>
            <p>Flask Development</p>
            <p>Spring Development</p>
            <p>Product Design</p>
          </div>
          <div className="flex flex-col gap-5 tracking-tight">
            <p className="font-semibold text-zinc-900">Recent Blogs</p>

            <p>How to structure the Django Project?</p>
            <p>How to customize REST API responses per user in Django?</p>
            <p>How to make REST APIs in Django using Django-rest-framework?</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
