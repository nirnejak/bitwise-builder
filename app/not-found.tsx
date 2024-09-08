import * as React from "react"

import { type Metadata } from "next"

import Link from "next/link"

import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Not Found | Bitwise Builder",
  description:
    "Can't find the page you're looking for on the Bitwise Builder website.",
})

const NotFoundPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center text-center">
      <h1 className="mb-12 text-6xl font-semibold tracking-tighter text-zinc-900">
        Seems like you{"'"}re lost.
      </h1>
      <div>
        <Link
          href={"/"}
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800"
        >
          Go to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
