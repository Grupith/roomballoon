"use client"
import React, { useEffect, useState } from "react"
import { useFirebase } from "../FirebaseContext"
import ProtectedPage from "../ProtectedPage"
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import Alert from "../components/Alert"
import Modal from "../components/Modal"

interface HouseholdData {
  householdName: string
  householdId: string
  created_by: string
  members: {
    uid: string
    email: string
    name: string
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
  const [showModal, setShowModal] = useState(false)
  const [copyCodeAlert, setCopyCodeAlert] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          console.log("Fetching user data on /settings")
          const userDocRef = doc(db, "users", user.uid)
          const userDocSnap = await getDoc(userDocRef)
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data()
            const householdId = userData.householdId
            if (householdId) {
              setHouseholdDocId(householdId) // <-- set householdDocId for the next effect to use
            }
          }
        } catch (error) {
          console.error("Error fetching user data", error)
        }
        setLoading(false)
      }
    }

    fetchUserData()
  }, [user])

  useEffect(() => {
    const fetchHouseholdData = async () => {
      if (householdDocId) {
        try {
          console.log("Fetching household data on /settings")
          const householdDocRef = doc(db, "households", householdDocId)
          const householdDocSnap = await getDoc(householdDocRef)
          if (householdDocSnap.exists()) {
            const data = householdDocSnap.data() as HouseholdData
            setHouseholdData(data)
            setIsOwner(data.created_by === user?.uid) // <-- note the optional chaining here in case user is null
          }
        } catch (error) {
          console.error("Error fetching household data", error)
        }
      }
    }

    fetchHouseholdData()
  }, [householdDocId, user])

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

  const handleCopyCode = async () => {
    if (householdDocId) {
      try {
        await navigator.clipboard.writeText(householdDocId)
        setCopyCodeAlert(true)
        console.log("Code copied to clipboard")
        // Set a timeout to reset the alert state after 3 seconds
        setTimeout(() => {
          setCopyCodeAlert(false)
        }, 3000)
      } catch (error) {
        console.error("Failed to copy code", error)
      }
    }
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
        {copyCodeAlert && <Alert type="info">Code copied to clipboard</Alert>}
        {deleteHouseholdAlert && (
          <Alert type="success">Household was deleted Successfully</Alert>
        )}
        <div className=" bg-gray-200 rounded-lg mx-4 mt-6 p-4 md:mx-auto md:max-w-md">
          <p className="text-xl text-center pb-4 font-semibold">My Account</p>
          <div className="grid grid-cols-2 gap-2 text-md">
            <div className="text-gray-600">Display Name:</div>
            <div className="font-normal">{user?.displayName}</div>

            <div className="text-gray-600">Email:</div>
            <div className="truncate font-normal">{user?.email}</div>
          </div>
        </div>
        {!loading && householdData ? (
          <div className="bg-gray-200 p-6 mx-4 mt-6 rounded-lg shadow-md md:mx-auto md:max-w-md">
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-xl text-center font-semibold pb-4">
                My Household
              </p>
              <div className="mb-4">
                <span className="text-gray-600">Household Name: </span>
                <span>{householdData.householdName}</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Household Id: </span>
                <span className="truncate">
                  {householdDocId && householdDocId}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Household Nickname: </span>
                <span className="truncate">
                  {householdData && findUserNickname(user?.uid, householdData)}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Household Role: </span>
                <span className="truncate">
                  {householdData && findUserRole(user?.uid, householdData)}
                </span>
              </div>
            </div>

            <section className="space-y-6">
              {/* Invite Members */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-lg mb-2 text-center">
                  Invite Members
                </p>
                <p className="text-gray-600 text-center mb-4">
                  Invite people to the household by sending them the household
                  code.
                </p>
                <div className="text-center text-xl mb-4 font-mono font-bold">
                  {householdDocId && householdDocId}
                </div>
                <button
                  onClick={handleCopyCode}
                  className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold text-sm py-2 px-4 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Copy Code
                </button>
              </div>
              {/* Members Card */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-lg mb-2 text-center">
                  Members ({householdData.members.length})
                </p>
                <p className="text-gray-600 text-center mb-4">
                  The members currently in your household.
                </p>
                <div className="space-y-4">
                  {householdData.members.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-lg space-y-1"
                    >
                      <p className="text-xl font-semibold">{member.name}</p>
                      <p className="font-normal text-gray-700 text-md">
                        Email: {member.email}
                      </p>
                      <p className="font-normal text-gray-700 text-md">
                        Nickname: {member.nickname}
                      </p>
                      <p className="text-white text-sm font-normal bg-blue-500 rounded-full w-fit px-3">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Delete Household Card */}
              {isOwner && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold text-lg mb-2 text-center">
                    Delete Household
                  </p>
                  <p className="text-gray-600 text-center mb-4">
                    This deletes the household and all the data inside.
                  </p>
                  <div className="mb-6 text-center">
                    <button
                      onClick={handleDeleteHousehold}
                      className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold text-sm py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete Household
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <div
                className="text-white inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          </>
        )}
      </main>
    </ProtectedPage>
  )
}
