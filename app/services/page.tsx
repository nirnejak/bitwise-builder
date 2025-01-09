import * as React from "react"

import { type Metadata } from "next"

import ServicesHero from "@/components/blocks/ServicesHero"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/services/",
  title: "Services | Bitwise Builder",
  description:
    "Learn about the services we provide at Bitwise Builder, an development agency specializing in Python and Django, we and build high performance web applications.",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <ServicesHero />
    </main>
  )
}

export default Home
