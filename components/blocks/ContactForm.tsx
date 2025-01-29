"use client"
import * as React from "react"

import { motion } from "motion/react"

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
    <section className="container mb-24 mt-40 px-5 xl:px-0">
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
        className="flex max-w-(--breakpoint-sm) flex-col gap-4"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.input
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.2, ...BASE_TRANSITION }}
            className="rounded-2xl bg-zinc-100 px-6 py-5 leading-none text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden"
            type="text"
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value })
            }}
            required
          />
          <motion.input
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.25, ...BASE_TRANSITION }}
            className="rounded-2xl bg-zinc-100 px-6 py-5 leading-none text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden"
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value })
            }}
            required
          />
        </div>
        <motion.textarea
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="rounded-2xl bg-zinc-100 px-6 py-5 text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden"
          placeholder="Message"
          rows={7}
          name="message"
          value={state.message}
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value })
          }}
          required
        />
        <motion.button
          type="submit"
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.35, ...BASE_TRANSITION }}
          className="mt-4 rounded-2xl bg-zinc-900 py-5 text-zinc-50 hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-hidden"
        >
          Contact us
        </motion.button>
      </form>
    </section>
  )
}

export default ContactForm
