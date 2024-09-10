import * as React from "react"

import { CircleFill, ArrowRight } from "akar-icons"
import Link from "next/link"

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
              Bitwise Builder
            </Link>
            <p className="mt-4 text-sm tracking-tight text-zinc-600">
              © 2024, By Bitwise Builder Pvt Ltd.
            </p>
            <div className="mt-auto flex">
              <Link
                href={"/contact-us/"}
                className="group flex items-center rounded-full bg-zinc-900 p-3 text-zinc-50"
              >
                <span className="pl-4 pr-8">Contact us</span>
                <span className="rounded-full bg-zinc-50 p-2.5 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-zinc-50">
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
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

            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Web Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              App Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Cloud and DevOps
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Django Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Flask Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Spring Development
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              Product Design
            </Link>
          </div>
          <div className="flex flex-col gap-5 tracking-tight">
            <p className="font-semibold text-zinc-900">Recent Blogs</p>

            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              How to structure the Django Project?
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              How to customize REST API responses per user in Django?
            </Link>
            <Link href={"/"} className="transition-colors hover:text-zinc-900">
              How to make REST APIs in Django using Django-rest-framework?
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
