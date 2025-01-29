"use client"
import * as React from "react"

import { ArrowUpRight } from "akar-icons"
import { useInView, useAnimation } from "framer-motion"
import * as motion from "framer-motion/client"
import Link from "next/link"

import { BASE_TRANSITION } from "utils/animation"

const ServicesHero: React.FC = () => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, isInView])

  const variants = {
    hidden: { translateY: 10, opacity: 0, filter: "blur(20px)" },
    visible: { translateY: 0, opacity: 1, filter: "none" },
  }

  return (
    <section className="container mb-48 px-5 xl:px-0">
      <div>
        <motion.h1
          initial={"hidden"}
          animate={"visible"}
          variants={variants}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-6 mt-48 text-center text-8xl font-semibold tracking-tighter text-zinc-900"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={"hidden"}
          animate={"visible"}
          variants={variants}
          className="mb-24 text-center text-base tracking-tight text-zinc-600 md:text-lg"
        >
          What can we do for you?
        </motion.p>
        <div className="grid w-full grid-cols-2 gap-8 px-24 md:grid-cols-4">
          <Link
            href={"/services/web-development/"}
            className="group outline-hidden"
          >
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              variants={variants}
              transition={{ delay: 0.2, ...BASE_TRANSITION }}
              className="relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors group-hover:bg-zinc-900 group-focus:bg-zinc-900"
            >
              <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-2 group-focus:-translate-y-1 group-focus:translate-x-1 group-focus:scale-2"
                />
              </span>
              <p className="mt-auto text-xl leading-none tracking-tight group-hover:text-zinc-50 group-focus:text-zinc-50">
                Web Development
              </p>
            </motion.div>
          </Link>
          <Link
            href={"/services/app-development/"}
            className="group outline-hidden"
          >
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              variants={variants}
              transition={{ delay: 0.3, ...BASE_TRANSITION }}
              className="relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors group-hover:bg-zinc-900 group-focus:bg-zinc-900"
            >
              <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-2 group-focus:-translate-y-1 group-focus:translate-x-1 group-focus:scale-2"
                />
              </span>
              <p className="mt-auto text-xl leading-none tracking-tight group-hover:text-zinc-50 group-focus:text-zinc-50">
                App Development
              </p>
            </motion.div>
          </Link>
          <Link href={"/services/cloud-devops/"} className="group outline-hidden">
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              variants={variants}
              transition={{ delay: 0.4, ...BASE_TRANSITION }}
              className="relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors group-hover:bg-zinc-900 group-focus:bg-zinc-900"
            >
              <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-2 group-focus:-translate-y-1 group-focus:translate-x-1 group-focus:scale-2"
                />
              </span>
              <p className="mt-auto text-xl leading-none tracking-tight group-hover:text-zinc-50 group-focus:text-zinc-50">
                Cloud & DevOps
              </p>
            </motion.div>
          </Link>
          <Link
            href={"/services/product-design/"}
            className="group outline-hidden"
          >
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              variants={variants}
              transition={{ delay: 0.5, ...BASE_TRANSITION }}
              className="relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors group-hover:bg-zinc-900 group-focus:bg-zinc-900"
            >
              <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-2 group-focus:-translate-y-1 group-focus:translate-x-1 group-focus:scale-2"
                />
              </span>
              <p className="mt-auto text-xl leading-none tracking-tight group-hover:text-zinc-50 group-focus:text-zinc-50">
                Product Design
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
