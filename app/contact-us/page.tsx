import * as React from "react"

import { type Metadata } from "next"

import ContactForm from "@/components/blocks/ContactForm"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/contact-us/",
  title: "Contact Us | Bitwise Builder",
  description:
    "Contact us at Bitwise Builder, an development agency specializing in Python and Django, we and build high performance web applications.",
})

const Home: React.FC = () => {
  return (
    <main className="">
      <ContactForm />
    </main>
  )
}

export default Home
