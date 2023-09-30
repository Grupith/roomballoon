"use client"
import {
  addDoc,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore"
import React, { useState, Dispatch, SetStateAction } from "react"
import { db } from "../firebase"
import { useFirebase } from "../FirebaseContext"
import Alert from "./Alert"

interface CreateHouseholdProps {
  onUpdateHouseholdId: (householdId: string) => void
  setCreateHouseholdAlert: Dispatch<SetStateAction<boolean>>
}

export default function CreateHousehold({
  onUpdateHouseholdId,
  setCreateHouseholdAlert,
}: CreateHouseholdProps) {
  const [householdName, setHouseholdName] = useState("")
  const [nickname, setNickname] = useState("")
  const { user } = useFirebase()

  // Add household document to households collection
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(db, "households"), {
        householdName: householdName,
        created_at: Timestamp.now(),
        created_by: user?.uid,
        members: [
          {
            name: user?.displayName,
            uid: user?.uid,
            nickname: nickname,
            role: "Owner",
          },
          // Add other members if needed
        ],
      })
      if (user) {
        setCreateHouseholdAlert(true)
        await updateUserDoc(user?.uid, docRef.id)
        // Update userHouseholdId state in parent household component
        onUpdateHouseholdId(docRef.id)
      }
      console.log("Successfully created household", householdName)
    } catch (error) {
      console.log("Error creating household", error)
    }
  }

  // Update users document with householdId
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
    <div className="bg-gray-200 rounded-lg shadow-lg p-6 mx-4 mt-4 md:mx-auto md:max-w-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Create Household
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="householdName"
            className="block text-gray-600 text-lg font-semibold mb-1"
          >
            Household Name
          </label>
          <p className="text-gray-500 text-sm mb-2">
            The household name is what others will see.
          </p>
          <input
            type="text"
            id="householdName"
            name="householdName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter HouseHold Name"
            onChange={(e) => setHouseholdName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nickname"
            className="block text-gray-600 text-lg font-semibold mb-1"
          >
            Household Nickname
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Your household nickname for this household. Others can change their
            nicknames too.
          </p>
          <input
            type="text"
            id="nickname"
            name="nickname"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Nickname"
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}
