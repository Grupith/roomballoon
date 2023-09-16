import Link from "next/link"
import React from "react"
import { LuMenu } from "react-icons/lu"
import logo from "../favicon.ico"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 text-white pt-1">
      <div className="flex justify-between mx-2 sm:justify-around text-xl py-3">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Balloon Logo" height={35} width={35} />
          <h1 className="font-semibold">RoomBalloon</h1>
        </Link>
        <LuMenu size="25" className="cursor-pointer" />
      </div>
    </nav>
  )
}
