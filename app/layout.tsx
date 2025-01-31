import * as React from "react"

import type { Viewport } from "next"
import { Instrument_Sans } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/seo"
import Footer from "@/components/blocks/Footer"
import Header from "@/components/molecules/Header"

import "../styles/main.css"

const sansFont = Instrument_Sans({
  variable: "--sans-font",
  subsets: ["latin"],
})

const monoFont = Instrument_Sans({
  variable: "--mono-font",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html
      lang="en"
      className={classNames(
        sansFont.variable,
        monoFont.variable,
        "overflow-x-hidden font-sans"
      )}
    >
      <head>{renderSchemaTags()}</head>

      <body className="overflow-x-hidden font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
