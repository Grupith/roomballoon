"use client"
import React, { useEffect, useState } from "react"
import { useFirebase } from "../FirebaseContext"
import ProtectedPage from "../ProtectedPage"
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import Alert from "../components/Alert"
import { useRouter } from "next/navigation"
import Modal from "../components/Modal"

interface HouseholdData {
  householdName: string
  householdId: string
  created_by: string
  members: {
    uid: string
    nickname: string
    role: string
    // Add other member fields as needed
  }[]
}

export default function Settings() {
  const { user } = useFirebase()
  const [householdData, setHouseholdData] = useState<HouseholdData | null>(null)
  const [householdDocId, setHouseholdDocId] = useState<string | null>(null)
  const [isOwner, setIsOwner] = useState(false)
  const [deleteHouseholdAlert, setDeleteHouseholdAlert] = useState(false)
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const fetchHouseholdData = async () => {
    if (user) {
      // Fetch the users document from users collection
      const userDocRef = doc(db, "users", user.uid)
      try {
        const userDocSnap = await getDoc(userDocRef)
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data()
          const householdId = userData.householdId

          if (householdId) {
            const householdDocRef = doc(db, "households", householdId)
            const householdDocSnap = await getDoc(householdDocRef)

            if (householdDocSnap.exists()) {
              const data = householdDocSnap.data() as HouseholdData
              setHouseholdData(data)
              setHouseholdDocId(householdDocSnap.id)
              setIsOwner(data.created_by === user.uid)
            }
          }
        }
      } catch (error) {
        console.error("Error fetching household Data", error)
      }
    }
  }

  useEffect(() => {
    console.log("Fetching household data...")
    fetchHouseholdData()
  }, [user])

  const handleDeleteHousehold = async () => {
    setShowModal(true)
  }

  const confirmDeleteHousehold = async () => {
    if (user && householdDocId) {
      try {
        // Check if user is owner before deletion
        if (isOwner) {
          await deleteDoc(doc(db, "households", householdDocId))
          const userDocRef = doc(db, "users", user.uid)
          await updateDoc(userDocRef, { householdId: "" })

          setDeleteHouseholdAlert(true)
          setShowModal(false)

          // Refresh household data
          setHouseholdData(null)
          setHouseholdDocId(null)
          setIsOwner(false)

          setTimeout(() => {
            setDeleteHouseholdAlert(false)
          }, 4000) // Assuming the alert displays for 3 seconds
        } else {
          console.log("You are not the owner of the household")
        }
      } catch (error) {
        console.log("Error deleting household", error)
      }
    }
  }

  function findUserNickname(
    uid: string | undefined,
    householdData: HouseholdData
  ) {
    const member = householdData.members.find((member) => member.uid === uid)
    return member ? member.nickname : ""
  }

  function findUserRole(uid: string | undefined, householdData: HouseholdData) {
    const member = householdData.members.find((member) => member.uid === uid)
    return member ? member.role : ""
  }

  return (
    <ProtectedPage>
      <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
        <h1 className="text-white text-center text-2xl font-semibold pt-2">
          Settings
        </h1>

        <Modal
          show={showModal}
          title="Delete Household"
          onClose={() => setShowModal(false)}
          onConfirm={confirmDeleteHousehold}
        >
          {" "}
          Are you sure you want to delete this household?
        </Modal>
        {deleteHouseholdAlert && (
          <Alert type="success">Household was deleted Successfully</Alert>
        )}
        <div className=" bg-gray-200 rounded-lg mx-4 mt-6 p-4 md:mx-auto md:max-w-md">
          <p className="text-xl text-center pb-4">My Account</p>
          <div className="grid grid-cols-2 gap-2 text-md">
            <div className="text-gray-600">Display Name:</div>
            <div className="font-semibold">{user?.displayName}</div>

            <div className="text-gray-600">Email:</div>
            <div className="truncate font-semibold">{user?.email}</div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg mx-4 mt-6 p-4  md:mx-auto md:max-w-md">
          <p className="text-xl text-center pb-4">My HouseHold</p>
          <div className="grid grid-cols-2 gap-2 text-md">
            <div className="text-gray-600">Household Name:</div>
            <div>{householdData && householdData.householdName}</div>

            <div className="text-gray-600">Household Id:</div>
            <div className="truncate">{householdDocId && householdDocId}</div>

            <div className="text-gray-600">Household Nickname:</div>
            <div className="truncate">
              {householdData && findUserNickname(user?.uid, householdData)}
            </div>

            <div className="text-gray-600">Household Role:</div>
            <div className="truncate">
              {householdData && findUserRole(user?.uid, householdData)}
            </div>

            {isOwner ? (
              <div>
                <div className="text-gray-600">Delete HouseHold:</div>
                <button
                  onClick={handleDeleteHousehold}
                  className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold text-sm py-2 px-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete HouseHold
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>
    </ProtectedPage>
  )
}
