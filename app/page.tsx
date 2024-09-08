import * as React from "react"

import { type Metadata } from "next"

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
      <section className="mb-12 px-5">
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
    </main>
  )
}

export default Home
