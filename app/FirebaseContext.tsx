"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { User, GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "./firebase"
import { useRouter } from "next/navigation"

interface AuthContextProps {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const FirebaseContext = createContext<AuthContextProps | undefined>(undefined)

export function useFirebase() {
  const context = useContext(FirebaseContext)
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider")
  }
  return context
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithRedirect(auth, provider)
    } catch (error) {
      console.error("Google Sign in Error", error)
    }
  }

  const signOut = async () => {
    await auth.signOut()
  }

  const value = {
    user,
    signInWithGoogle,
    signOut,
  }

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}
