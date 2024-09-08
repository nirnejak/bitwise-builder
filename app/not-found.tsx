import * as React from "react"

import { type Metadata } from "next"

import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Bitwise Builder",
  description:
    "Bitwise Builder, an development agency specializing in Python and Django, we and build high performance web applications.",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <h1 className="text-8xl font-semibold tracking-tighter text-zinc-900">
        404
      </h1>
    </main>
  )
}

export default Home
