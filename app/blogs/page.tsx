import * as React from "react"

import { type Metadata } from "next"

import { ArrowUpRight } from "akar-icons"
import * as motion from "framer-motion/client"
import Link from "next/link"

import { BASE_TRANSITION } from "utils/animation"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Bitwise Builder",
  description:
    "Blogs on tech by team at Bitwise Builder, an development agency specializing in Python and Django, we and build high performance web applications.",
})

const blogs = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    date: "2021-01-01",
  },
]

const Blogs: React.FC = () => {
  return (
    <main className="">
      <section className="container mb-24 mt-40 px-5 xl:px-0">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="mb-24 mt-9 text-8xl font-semibold tracking-tighter text-zinc-900"
        >
          Blogs.
        </motion.h1>
        <div className="">
          {blogs.map((blog, index) => (
            <Link
              href="#"
              as={`/blogs/${index}`}
              key={index}
              className="group outline-none"
            >
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 0.1, ...BASE_TRANSITION }}
                className="flex w-9/12 items-center gap-6 rounded-2xl p-5 transition-colors group-hover:bg-zinc-900 group-hover:text-zinc-200 group-focus:bg-zinc-900 group-focus:text-zinc-200"
              >
                <div className="rounded-full bg-zinc-900 p-2.5 text-zinc-50">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.6] group-focus:-translate-y-1 group-focus:translate-x-1 group-focus:scale-150"
                  />
                </div>
                <div>
                  <h2 className="mb-1 text-2xl font-semibold tracking-tighter text-zinc-900 transition-colors group-hover:text-zinc-200 group-focus:text-zinc-200">
                    {blog.title}
                  </h2>
                  <p className="text-zinc-700 transition-colors group-hover:text-zinc-500 group-focus:text-zinc-500">
                    {blog.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blogs
