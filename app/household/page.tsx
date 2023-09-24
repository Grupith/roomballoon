"use client"
import React from "react"
import ProtectedPage from "../ProtectedPage"
import CreateHousehold from "../components/CreateHousehold"
import JoinHouseHold from "../components/JoinHouseHold"

export default function HouseHold() {
  return (
    <ProtectedPage>
      <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
        <h1 className="text-white text-center text-2xl font-semibold py-2">
          Household
        </h1>
        <CreateHousehold />
        <JoinHouseHold />
      </main>
    </ProtectedPage>
  )
}
