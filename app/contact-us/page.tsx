import * as React from "react"

import { type Metadata } from "next"

import ContactForm from "@/components/blocks/ContactForm"
import { generateMetadata } from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/contact-us/",
  title: "Contact Us | Bitwise Builder",
  description:
    "Contact us at Bitwise Builder, Python and Django development agency.",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <ContactForm />
    </main>
  )
}

export default Home
