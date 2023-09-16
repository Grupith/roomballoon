"use client"
import Link from "next/link"
import React, { useState } from "react"
import { LuMenu, LuArrowRight, LuAlignCenter } from "react-icons/lu"
import logo from "../favicon.ico"
import Image from "next/image"

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="fixed w-full top-0 text-white pt-1">
      <div className="flex justify-between mx-4 sm:justify-around text-xl py-3 ">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Balloon Logo" height={35} width={35} />
          <h1 className="font-semibold">RoomBalloon</h1>
        </Link>
        <div
          onClick={toggleMenu}
          className="cursor-pointer transition-all relative"
        >
          {!isActive ? <LuMenu size="25" /> : <LuAlignCenter size="25" />}
        </div>
      </div>
      {isActive && (
        <div className="bg-stone-100 text-gray-800 w-44 absolute top-16 right-4 p-3 rounded-lg shadow-lg">
          <ul className="font-normal">
            <Link href="/dashboard" onClick={toggleMenu}>
              <div className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md">
                <LuArrowRight className="mr-1" />
                <li className="py-2">Dashboard</li>
              </div>
            </Link>
            <div className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md">
              <LuArrowRight className="mr-1" />
              <li className="py-2">Settings</li>
            </div>{" "}
            <div className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md">
              <LuArrowRight className="mr-1" />
              <li className="py-2">Sign Out</li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
