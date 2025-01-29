import * as React from "react"

import * as motion from "motion/react-client"
import Image from "next/image"

import CoverImage from "assets/team.jpg"
import { BASE_TRANSITION } from "utils/animation"

const FullImage: React.FC = () => {
  return (
    <motion.section
      initial={{ translateY: 10, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ delay: 0, ...BASE_TRANSITION }}
      className="mb-48 flex animate-marquee gap-6 px-5"
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
  )
}

export default FullImage
