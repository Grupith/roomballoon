"use client"
import React from "react"
import { useFirebase } from "../FirebaseContext"
import ProtectedPage from "../ProtectedPage"

export default function Dashboard() {
  const { user } = useFirebase()
  return (
    <ProtectedPage>
      <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
        <h1 className="text-white text-center text-2xl font-semibold pt-2">
          Dashboard
        </h1>
      </main>
    </ProtectedPage>
  )
}
