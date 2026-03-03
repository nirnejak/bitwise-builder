import type { Metadata } from "next"
import Link from "next/link"
import type * as React from "react"

import { generateMetadata } from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Not Found | Bitwise Builder",
  description:
    "Can't find the page you're looking for on the Bitwise Builder website.",
})

const NotFoundPage: React.FC = () => {
  return (
    <main className="grid h-dvh place-content-center text-center">
      {/* eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping */}
      <h1 className="mb-12 font-semibold text-6xl text-zinc-900 tracking-tighter">
        Seems like you{"'"}re lost.
      </h1>
      <div>
        <Link
          href={"/"}
          className="rounded-full bg-zinc-900 px-5 py-2.5 font-medium text-sm text-zinc-50 transition-colors hover:bg-zinc-800"
        >
          Go to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
