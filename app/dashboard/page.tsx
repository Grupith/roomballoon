"use client"
import React, { useEffect, useState } from "react"
import { useFirebase } from "../FirebaseContext"
import ProtectedPage from "../ProtectedPage"
import Alert from "../components/Alert"

export default function Dashboard() {
  const { user } = useFirebase()
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    // Check if the user is logged in and the alert has not been shown in this session
    if (user && !sessionStorage.getItem("alertShown")) {
      setShowAlert(true)

      // Mark the alert as shown in this session
      sessionStorage.setItem("alertShown", "true")
    }
  }, [user])

  return (
    <ProtectedPage>
      <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
        {showAlert && user && (
          <Alert type="success">
            Signed in with <span className="font-semibold">{user.email}</span>
          </Alert>
        )}
        <h1 className="text-white text-center text-2xl font-semibold pt-4">
          Dashboard
        </h1>
      </main>
    </ProtectedPage>
  )
}
