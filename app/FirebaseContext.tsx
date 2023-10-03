"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { User, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, db } from "./firebase"
import { useRouter } from "next/navigation"
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore"
import LoadingSpinner from "./components/LoadingSpinner"

interface AuthContextProps {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
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
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)

        // Check if the user document exists in database
        const CheckUserExists = async () => {
          const userDocRef = doc(db, "users", authUser.uid)
          const userDocSnapshot = await getDoc(userDocRef)

          // If doc does not exist, create one in users collection
          if (!userDocSnapshot.exists()) {
            await setDoc(userDocRef, {
              name: authUser.displayName,
              email: authUser.email,
              uid: authUser.uid,
              created_at: Timestamp.now(),
              householdId: "",
            })
            console.log("Added user to the database")
          }
        }
        CheckUserExists()
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error("Google Sign in Error", error)
    }
    router.push("/dashboard")
  }

  const signOut = async () => {
    await auth.signOut()
  }

  const value = {
    user,
    signInWithGoogle,
    signOut,
    loading,
  }

  return (
    <FirebaseContext.Provider value={value}>
      {loading ? <LoadingSpinner /> : children}
    </FirebaseContext.Provider>
  )
}
