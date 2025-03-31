import * as React from "react"

import { type Metadata } from "next"

import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"
import { generateMetadata } from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/about/",
  title: "About Us | Oven Studio",
  description: "About Oven Studio, a design-driven development agency.",
})

const variants = {
  hidden: { translateY: 10, opacity: 0, filter: "blur(20px)" },
  visible: { translateY: 0, opacity: 1, filter: "none" },
}

const About: React.FC = () => {
  return (
    <main className="">
      <section className="container mb-24 mt-40 px-5 xl:px-0">
        <motion.h1
          initial={"hidden"}
          animate={"visible"}
          variants={variants}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-24 mt-9 text-8xl font-semibold tracking-tighter text-zinc-900"
        >
          About Us.
        </motion.h1>
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={variants}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className=""
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.div>
      </section>
    </main>
  )
}

export default About
