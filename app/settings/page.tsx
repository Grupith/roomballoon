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
        <div className="bg-gradient-to-r from-stone-200 to-stone-300 rounded-lg mx-4 mt-6 p-4">
          <p className="text-xl text-center pb-4">Account Information</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-600">Display Name:</div>
            <div>{user?.displayName}</div>

            <div className="text-gray-600">Email:</div>
            <div className="truncate">{user?.email}</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-stone-200 to-stone-300 rounded-lg mx-4 mt-6 p-4">
          <p className="text-xl text-center pb-4">HouseHold Settings</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-600">Household Name:</div>
            <div>"household Name"</div>

            <div className="text-gray-600">Household Nickname:</div>
            <div className="truncate">"household Nickname"</div>

            <div className="text-gray-600">Household Role:</div>
            <div className="truncate">"household Role"</div>
          </div>
        </div>
      </main>
    </ProtectedPage>
  )
}
