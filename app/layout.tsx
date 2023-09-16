import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Navbar from "./components/Navbar"

const mont = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RoomBalloon",
  description: "Elevate your Roommate Experiance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
