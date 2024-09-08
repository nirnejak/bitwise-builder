import * as React from "react"

import { type Metadata } from "next"

import { ArrowUpRight } from "akar-icons"
import Image from "next/image"
import Link from "next/link"

import CoverImage from "assets/team.jpg"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Bitwise Builder",
  description:
    "Bitwise Builder, an development agency specializing in Python and Django, we and build high performance web applications.",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="container mb-24 mt-40">
        <span className="rounded-full border bg-zinc-100 px-3.5 py-1.5 text-xs text-zinc-700">
          Open to projects
        </span>
        <h1 className="mb-12 mt-9 text-8xl font-semibold tracking-tighter text-zinc-900">
          A single place for <br />
          all your dev work.
        </h1>
        <div className="flex items-center justify-between">
          <p className="max-w-[670px] text-lg text-zinc-600">
            Building high-performance, scalable web apps with Python, Django,
            React, and Next.js. Empowering businesses with seamless user
            experiences and innovative digital solutions.
          </p>
          <div>
            <Link
              href={"/contact-us/"}
              className="rounded-full bg-zinc-900 px-10 py-4 text-zinc-50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-48 px-5">
        <Image
          src={CoverImage}
          alt="Team working together"
          className="w-full rounded-3xl"
          quality={100}
          priority
          width={1538.5}
          height={1054}
        />
      </section>
      <section className="container mb-48 grid grid-cols-3 gap-8">
        <Link
          href={"/services/web-development/"}
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:bg-zinc-900"
        >
          <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <p className="mt-auto text-2xl leading-none group-hover:text-zinc-50">
            Web Development
          </p>
        </Link>
        <Link
          href={"/services/app-development/"}
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:bg-zinc-900"
        >
          <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <p className="mt-auto text-2xl leading-none group-hover:text-zinc-50">
            App Development
          </p>
        </Link>
        <Link
          href={"/services/product-design/"}
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:bg-zinc-900"
        >
          <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <p className="mt-auto text-2xl leading-none group-hover:text-zinc-50">
            Product Design
          </p>
        </Link>
      </section>
    </main>
  )
}

export default Home
