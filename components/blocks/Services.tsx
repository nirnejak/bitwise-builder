"use client"
import * as React from "react"

import Link from "next/link"
import { ArrowUpRight } from "akar-icons"
import { useInView, useAnimation, motion } from "motion/react"

import { BASE_TRANSITION } from "@/utils/animation"

const Services: React.FC = () => {
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
    hidden: { translateY: 10, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  }

  return (
    <section className="container mb-48 flex flex-col md:flex-row px-5 xl:px-0">
      <div className="flex-1" ref={ref}>
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-12 mt-9 text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 max-w-[9ch]"
        >
          What can we do for you?
        </motion.h2>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-4 md:gap-8">
        <Link href={"/services/website-design/"}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="group relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors hover:bg-zinc-900"
          >
            <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150"
              />
            </span>
            <p className="mt-auto text-xl md:text-2xl leading-none tracking-tight group-hover:text-zinc-50">
              Website Design
            </p>
          </motion.div>
        </Link>
        <Link href={"/services/product-design/"}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.2, ...BASE_TRANSITION }}
            className="group relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors hover:bg-zinc-900"
          >
            <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150"
              />
            </span>
            <p className="mt-auto text-xl md:text-2xl leading-none tracking-tight group-hover:text-zinc-50">
              Product Design
            </p>
          </motion.div>
        </Link>
        <Link href={"/services/website-development/"}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.3, ...BASE_TRANSITION }}
            className="group relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors hover:bg-zinc-900"
          >
            <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150"
              />
            </span>
            <p className="mt-auto text-xl md:text-2xl leading-none tracking-tight group-hover:text-zinc-50">
              Website Development
            </p>
          </motion.div>
        </Link>
        <Link href={"/services/product-development/"}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.4, ...BASE_TRANSITION }}
            className="group relative flex aspect-square rounded-3xl bg-zinc-100 p-5 transition-colors hover:bg-zinc-900"
          >
            <span className="absolute right-3 top-3 rounded-full bg-zinc-900 p-2.5 text-zinc-50">
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150"
              />
            </span>
            <p className="mt-auto text-xl md:text-2xl leading-none tracking-tight group-hover:text-zinc-50">
              Product Development
            </p>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}

export default Services
