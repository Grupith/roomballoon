"use client"
import React from "react"
import { useFirebase } from "../FirebaseContext"
import Image from "next/image"
import ProtectedPage from "../ProtectedPage"

export default function Settings() {
  const { user } = useFirebase()

  return (
    <ProtectedPage>
      <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
        <h1 className="text-white text-center text-2xl font-semibold pt-2">
          Settings
        </h1>
        <div className=" bg-gray-200 rounded-lg mx-4 mt-6 p-4 md:mx-auto md:max-w-md">
          <p className="text-xl text-center pb-4">My Account</p>
          <div className="grid grid-cols-2 gap-2 text-md">
            <div className="text-gray-600">Display Name:</div>
            <div className="font-semibold">{user?.displayName}</div>

            <div className="text-gray-600">Email:</div>
            <div className="truncate font-semibold">{user?.email}</div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg mx-4 mt-6 p-4  md:mx-auto md:max-w-md">
          <p className="text-xl text-center pb-4">My HouseHold</p>
          <div className="grid grid-cols-2 gap-2 text-md">
            <div className="text-gray-600">Household Name:</div>
            <div>household-name</div>

            <div className="text-gray-600">Household Nickname:</div>
            <div className="truncate">household-nickname</div>

            <div className="text-gray-600">Household Role:</div>
            <div className="truncate">household-role</div>

            <div className="text-gray-600">Delete HouseHold:</div>
            <button className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
              Delete HouseHold
            </button>
          </div>
        </div>
      </main>
    </ProtectedPage>
  )
}
