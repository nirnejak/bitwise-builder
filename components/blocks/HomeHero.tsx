"use client"
import * as React from "react"

import { CircleFill } from "akar-icons"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import CoverImage from "assets/team.jpg"
import { BASE_TRANSITION } from "utils/animation"

const HomeHero: React.FC = () => {
  return (
    <>
      <section className="container mb-24 mt-40">
        <div className="flex">
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="flex items-center gap-1.5 rounded-full bg-pink-100 px-3.5 py-1.5 text-xs text-pink-700"
          >
            <CircleFill size={5} className="text-pink-500" />
            Open to projects
          </motion.span>
        </div>
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="mb-12 mt-9 text-8xl font-semibold tracking-tighter text-zinc-900"
        >
          <span>
            A single place for <br />
          </span>
          <span>all your dev work.</span>
        </motion.h1>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="flex items-center justify-between"
        >
          <p className="max-w-[690px] text-lg tracking-tight text-zinc-600">
            Building high-performance, scalable web apps with Python, Django,
            React, and Next.js. Empowering businesses with seamless user
            experiences and innovative digital solutions.
          </p>
          <div>
            <Link
              href={"/contact-us/"}
              className="rounded-full bg-zinc-900 px-10 py-4 text-zinc-50"
            >
              Contact us
            </Link>
          </div>
        </motion.div>
      </section>
      <motion.section
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3, ...BASE_TRANSITION }}
        className="mb-48 px-5"
      >
        <Image
          src={CoverImage}
          alt="Team working together"
          className="w-full rounded-3xl"
          quality={100}
          priority
          width={1538.5}
          height={1054}
        />
      </motion.section>
    </>
  )
}

export default HomeHero
