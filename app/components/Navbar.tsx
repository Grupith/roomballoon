import Link from "next/link"
import React from "react"
import { LuMenu } from "react-icons/lu"

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between mx-4 sm:justify-around text-xl py-4">
      <Link href="/">
        <h1 className="cursor-pointer hover:font-semibold transition-all">
          RoomBalloon
        </h1>
      </Link>
      <LuMenu size="25" className="cursor-pointer" />
    </div>
  )
}
