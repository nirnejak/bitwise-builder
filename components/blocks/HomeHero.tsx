import * as React from "react"

import { CircleFill, ArrowRight } from "akar-icons"
import * as motion from "motion/react-client"
import Image from "next/image"
import Link from "next/link"

import { BASE_TRANSITION } from "@/utils/animation"

import ProjectImage1 from "@/assets/projects/auth.jpeg"
import ProjectImage5 from "@/assets/projects/components-grid.jpeg"
import ProjectImage2 from "@/assets/projects/job-board.png"
import ProjectImage3 from "@/assets/projects/kanban-board.jpeg"
import ProjectImage4 from "@/assets/projects/settings.jpeg"

const HomeHero: React.FC = () => {
  return (
    <>
      <section className="container mb-24 mt-40 px-5 xl:px-0">
        <div className="flex">
          <motion.span
            initial={{ translateY: 10, opacity: 0, filter: "blur(20px)" }}
            animate={{ translateY: 0, opacity: 1, filter: "none" }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="relative flex items-center gap-1.5 rounded-full bg-pink-100 px-3.5 py-1.5 pl-7 text-xs text-pink-700"
          >
            <CircleFill
              size={5}
              className="absolute left-3.5 animate-ping text-pink-600"
            />
            <CircleFill size={5} className="absolute left-3.5 text-pink-600" />
            Open to projects
          </motion.span>
        </div>
        <motion.h1
          initial={{ translateY: 10, opacity: 0, filter: "blur(20px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="mb-6 md:mb-12 mt-6 md:mt-9 text-6xl font-semibold tracking-tighter text-zinc-900 md:text-8xl max-w-[12ch]"
        >
          A single place for all your dev work.
        </motion.h1>
        <motion.div
          initial={{ translateY: 10, opacity: 0, filter: "blur(20px)" }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="flex items-start md:items-center justify-between flex-col md:flex-row gap-8"
        >
          <p className="max-w-[690px] text-base tracking-tight text-zinc-600 md:text-lg">
            Building high-performance, scalable web apps with Python, Django,
            React, and Next.js. Empowering businesses with seamless user
            experiences and innovative digital solutions.
          </p>
          <div>
            <Link
              href={"/contact-us/"}
              className="group flex items-center rounded-full bg-zinc-900 p-3 text-zinc-50"
            >
              <span className="pl-4 pr-8">Contact us</span>
              <span className="rounded-full bg-zinc-50 p-2.5 text-zinc-900 group-hover:bg-zinc-600 group-hover:text-zinc-50">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
      <section style={{ maxWidth: "100vw" }} className="overflow-x-hidden">
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="mb-48 flex animate-marquee gap-6 px-5"
        >
          <Image
            src={ProjectImage2}
            alt="Team working together"
            className="h-[600px] w-[900px] rounded-3xl border border-zinc-100"
            quality={100}
            priority
            width={1538.5}
            height={1054}
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
          <Image
            src={ProjectImage5}
            alt="Team working together"
            className="h-[600px] w-[900px] rounded-3xl border border-zinc-100"
            quality={100}
            priority
            width={1538.5}
            height={1054}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={ProjectImage3}
            alt="Team working together"
            className="h-[600px] w-[900px] rounded-3xl border border-zinc-100"
            quality={100}
            priority
            width={1538.5}
            height={1054}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={ProjectImage4}
            alt="Team working together"
            className="h-[600px] w-[900px] rounded-3xl border border-zinc-100"
            quality={100}
            priority
            width={1538.5}
            height={1054}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={ProjectImage1}
            alt="Team working together"
            className="h-[600px] w-[900px] rounded-3xl border border-zinc-100"
            quality={100}
            priority
            width={1538.5}
            height={1054}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </section>
    </>
  )
}

export default HomeHero
