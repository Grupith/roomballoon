"use client"
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import React, { useState } from "react"
import { db } from "../firebase"
import { useFirebase } from "../FirebaseContext"

interface JoinHouseholdProps {
  onUpdateHouseholdId: (householdId: string) => void
}

export default function JoinHousehold({
  onUpdateHouseholdId,
}: JoinHouseholdProps) {
  const [householdCode, setHouseholdCode] = useState("")
  const [nickname, setNickname] = useState("")
  const { user } = useFirebase()
  const [alert, setAlert] = useState()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      // Create a reference to household document with code provided by input
      const householdRef = doc(db, "households", householdCode)
      // Get the household document
      const householdDoc = await getDoc(householdRef)

      if (householdDoc.exists()) {
        // The household document was found
        console.log("Household document found!")
        // Update household document to add the new member
        await updateDoc(householdRef, {
          members: arrayUnion({
            name: user?.displayName,
            email: user?.email,
            uid: user?.uid,
            nickname: nickname,
            role: "Member",
          }),
        })
      } else {
        // The household document was not found
        console.log("No household found with code:", householdCode)
      }

      if (user) {
        // Update householdId in user document with newly joined householdId
        await updateUserDoc(user?.uid, householdRef.id)
        onUpdateHouseholdId(householdRef.id)
        console.log("User document updated with new household code")
      }
    } catch (error) {
      console.error("Error Joining HouseHold", error)
    }
  }

  // Update users document with new householdId
  const updateUserDoc = async (userId: string, householdId: string) => {
    try {
      const userDocRef = doc(db, "users", userId)
      await updateDoc(userDocRef, {
        householdId: householdId,
      })
    } catch (error) {
      console.log("Error updating user with householdId:", error)
    }
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-6 mx-4 mt-6 md:mx-auto md:max-w-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Join Household
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="householdId"
            className="block text-gray-600 text-lg font-semibold mb-1"
          >
            Household Code
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Enter the Household ID provided by the household owner to join.
          </p>
          <input
            type="text"
            id="householdId"
            name="householdId"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Household Code"
            onChange={(e) => setHouseholdCode(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="householdNickname"
            className="block text-gray-600 text-lg font-semibold mb-1"
          >
            Household Nickname
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Choose a nickname for your household. You can change this in the
            settings at any time.
          </p>
          <input
            type="text"
            id="householdNickname"
            name="householdNickname"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Nickname"
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Join
          </button>
        </div>
      </form>
    </div>
  )
}
