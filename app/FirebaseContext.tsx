"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { User, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, db } from "./firebase"
import { useRouter } from "next/navigation"
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore"

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
            })
            console.log("Added user to the database")
          } else {
            console.log("User already exists in database")
          }
        }
        CheckUserExists()
      } else {
        setUser(null)
      }
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
