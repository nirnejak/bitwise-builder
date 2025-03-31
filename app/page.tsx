import * as React from "react"

import { type Metadata } from "next"

import HomeHero from "@/components/blocks/HomeHero"
import Services from "@/components/blocks/Services"
import { generateMetadata } from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Oven Studio - Baking Beautiful Software",
  description: "Oven Studio, a design-driven development agency.",
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
