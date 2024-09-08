"use client"
import * as React from "react"

import { ArrowUpRight } from "akar-icons"
import Link from "next/link"

const Services: React.FC = () => {
  return (
    <section className="container mb-48 flex">
      <div className="flex-1">
        <h2 className="mb-12 mt-9 text-7xl font-semibold tracking-tighter text-zinc-900">
          What can we
          <br />
          do for you?
        </h2>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-8">
        <Link
          href={"/services/web-development/"}
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:border-zinc-900 hover:bg-zinc-900"
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
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:border-zinc-900 hover:bg-zinc-900"
        >
          <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <p className="mt-auto text-2xl leading-none group-hover:text-zinc-50">
            App Development
          </p>
        </Link>
        <Link
          href={"/services/cloud-devops/"}
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:border-zinc-900 hover:bg-zinc-900"
        >
          <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <p className="mt-auto text-2xl leading-none group-hover:text-zinc-50">
            Cloud & DevOps
          </p>
        </Link>
        <Link
          href={"/services/product-design/"}
          className="group relative flex aspect-square cursor-pointer rounded-2xl border p-5 transition-colors hover:border-zinc-900 hover:bg-zinc-900"
        >
          <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <p className="mt-auto text-2xl leading-none group-hover:text-zinc-50">
            Product Design
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Services
