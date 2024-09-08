"use client"
import * as React from "react"

import { CircleFill } from "akar-icons"
import { motion } from "framer-motion"

import { BASE_TRANSITION } from "utils/animation"

const ContactForm: React.FC = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
  }

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

      <form
        onSubmit={handleSubmit}
        className="flex max-w-screen-sm flex-col gap-4"
      >
        <motion.input
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="rounded-2xl bg-zinc-200 px-6 py-5 text-lg focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value })
          }}
        />
        <motion.input
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.25, ...BASE_TRANSITION }}
          className="rounded-2xl bg-zinc-200 px-6 py-5 text-lg focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value })
          }}
        />
        <motion.textarea
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="rounded-2xl bg-zinc-200 px-6 py-5 text-lg focus:outline-none"
          placeholder="Message"
          rows={4}
          name="message"
          value={state.message}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value })
          }}
        />
        <motion.button
          type="submit"
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.35, ...BASE_TRANSITION }}
          className="mt-4 rounded-2xl bg-zinc-900 py-5 text-zinc-50 focus:outline-none"
        >
          Contact us
        </motion.button>
      </form>
    </section>
  )
}

export default ContactForm
