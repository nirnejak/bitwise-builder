import * as React from "react"

import type { Viewport } from "next"

import { Instrument_Sans } from "next/font/google"
import localFont from "next/font/local"

import Header from "components/molecules/Header"
import classNames from "utils/classNames"
import { renderSchemaTags } from "utils/seo"

import "../styles/main.css"

const sansFont = Instrument_Sans({
  variable: "--sans-font",
  subsets: ["latin"],
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>{renderSchemaTags()}</head>

      <body
        className={classNames(
          sansFont.variable,
          monoFont.variable,
          "overflow-x-hidden font-sans"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
