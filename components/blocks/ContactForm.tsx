"use client"
import * as React from "react"

import { CircleFill } from "akar-icons"
import { motion } from "framer-motion"

import { BASE_TRANSITION } from "utils/animation"

const ContactForm: React.FC = () => {
  return (
    <section className="container mb-24 mt-40">
      <div className="flex">
        <motion.span
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="flex items-center gap-1.5 rounded-full bg-pink-100 px-3.5 py-1.5 text-xs text-pink-700"
        >
          <CircleFill size={5} className="text-pink-600" />
          Open to projects
        </motion.span>
      </div>
      <motion.h1
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.1, ...BASE_TRANSITION }}
        className="mb-12 mt-9 text-8xl font-semibold tracking-tighter text-zinc-900"
      >
        Contact us.
      </motion.h1>

      <div className="flex w-3/5 flex-col gap-4">
        <motion.input
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          type="text"
          className="rounded-2xl bg-zinc-200 px-6 py-5 text-lg focus:outline-none"
          placeholder="Name"
        />
        <motion.input
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.25, ...BASE_TRANSITION }}
          type="email"
          className="rounded-2xl bg-zinc-200 px-6 py-5 text-lg focus:outline-none"
          placeholder="Email"
        />
        <motion.textarea
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="rounded-2xl bg-zinc-200 px-6 py-5 text-lg focus:outline-none"
          placeholder="Message"
          rows={4}
        />
        <motion.button
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.35, ...BASE_TRANSITION }}
          className="mt-4 rounded-2xl bg-zinc-900 py-5 text-zinc-50"
        >
          Contact us
        </motion.button>
      </div>
    </section>
  )
}

export default ContactForm
