"use client"
import React, { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useFirebase } from "./FirebaseContext"

interface ProtectedPageProps {
  children: ReactNode // Define children prop type
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { user } = useFirebase()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true) // Loading state

  useEffect(() => {
    if (user !== null) {
      // Check if user data has been fetched
      setIsLoading(false)
      console.log(user)
      if (!user) {
        // If user is not signed in, redirect to Landing page
        router.push("/")
      }
    }
  }, [user, router])

  return (
    <>
      {isLoading ? (
        <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
          <div className="flex justify-center">
            <div
              className="text-gray-400 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </main>
      ) : (
        children
      )}
    </>
  )
}

export default ProtectedPage
