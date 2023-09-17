"use client"
import React, { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFirebase } from "./FirebaseContext"

interface ProtectedPageProps {
  children: ReactNode // Define children prop type
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { user } = useFirebase()
  const router = useRouter()

  useEffect(() => {
    // If the user is not signed in, redirect them to the Landing page
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  return <>{children}</>
}

export default ProtectedPage
