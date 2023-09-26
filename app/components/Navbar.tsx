"use client"
import Link from "next/link"
import React, { useState, useRef, useEffect } from "react"
import { LuMenu, LuArrowRight, LuAlignCenter } from "react-icons/lu"
import Image from "next/image"
import { useFirebase } from "../FirebaseContext"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const { signOut, user } = useFirebase()
  const router = useRouter()
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const handleSignOut = () => {
    if (user) {
      signOut()
      router.push("/")
    } else {
      console.log("user not signed in")
    }
    setIsActive(false)
  }

  // Close nav menu when user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isActive &&
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsActive(false)
      }
    }
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isActive])

  return (
    <nav className="fixed w-full top-0 text-white pt-1">
      <div className="flex justify-between mx-4 text-xl py-3 ">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center">
          <Image
            src="/balloonlogo.png"
            alt="Balloon Logo"
            height={35}
            width={35}
          />
          <h1 className="font-semibold">RoomBalloon</h1>
        </Link>
        {/* Mobile Menu Icon */}
        <div className="flex items-center sm:hidden">
          {user ? (
            <Image
              src={user?.photoURL as string}
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
              alt="Profile Photo"
              onClick={toggleMenu}
            />
          ) : (
            <div
              onClick={toggleMenu}
              className="cursor-pointer transition-all relative"
            >
              {!isActive ? <LuMenu size="25" /> : <LuAlignCenter size="25" />}
            </div>
          )}
        </div>
        <ul className="hidden sm:flex items-center space-x-6 text-lg font-light">
          <Link href="/dashboard" className="transition-all hover:font-normal">
            Dashboard
          </Link>
          <Link href="/household" className="transition-all hover:font-normal">
            Household
          </Link>
          <Link href="/settings" className="transition-all hover:font-normal">
            Settings
          </Link>
          <div
            onClick={handleSignOut}
            className="cursor-pointer transition-all hover:font-normal"
          >
            {user ? (
              <li className="py-2">Sign Out</li>
            ) : (
              <li className="py-2 line-through">Sign Out</li>
            )}
          </div>
        </ul>
      </div>
      {/* Mobile Nav Menu Container */}
      {isActive && (
        <div
          ref={menuRef}
          className="bg-stone-100 text-gray-800 w-44 absolute top-16 right-4 p-3 rounded-lg shadow-lg"
        >
          <ul className="font-normal">
            <Link href="/dashboard" onClick={toggleMenu}>
              <div className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md">
                <LuArrowRight className="mr-1" />
                {user ? (
                  <li className="py-2">Dashboard</li>
                ) : (
                  <li className="py-2 line-through">Dashboard</li>
                )}
              </div>
            </Link>
            <Link href="/household" onClick={toggleMenu}>
              <div className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md">
                <LuArrowRight className="mr-1" />
                {user ? (
                  <li className="py-2">Household</li>
                ) : (
                  <li className="py-2 line-through">HouseHold</li>
                )}
              </div>
            </Link>
            <Link href="/settings" onClick={toggleMenu}>
              <div className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md">
                <LuArrowRight className="mr-1" />
                {user ? (
                  <li className="py-2">Settings</li>
                ) : (
                  <li className="py-2 line-through">Settings</li>
                )}
              </div>
            </Link>

            <div
              onClick={handleSignOut}
              className="flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md"
            >
              <LuArrowRight className="mr-1" />
              {user ? (
                <li className="py-2">Sign Out</li>
              ) : (
                <li className="py-2 line-through">Sign Out</li>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
