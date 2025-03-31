import * as React from "react"

import { type Metadata } from "next"

import HomeHero from "@/components/blocks/HomeHero"
import Services from "@/components/blocks/Services"
import { generateMetadata } from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Bitwise Builder - Baking Beautiful Software",
  description: "Bitwise Builder, Python and Django development agency.",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <HomeHero />
      <Services />
    </main>
  )
}

export default Home
