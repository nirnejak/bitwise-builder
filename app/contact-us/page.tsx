import * as React from "react"

import { type Metadata } from "next"

import ContactForm from "@/components/blocks/ContactForm"
import { generateMetadata } from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/contact-us/",
  title: "Contact Us | Oven Studio",
  description: "Contact us at Oven Studio, a design-driven development agency.",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <ContactForm />
    </main>
  )
}

export default Home
