"use client"
import React, { useEffect, useState } from "react"
import ProtectedPage from "../ProtectedPage"
import CreateHousehold from "../components/CreateHousehold"
import JoinHousehold from "../components/JoinHousehold"
import { doc, getDoc } from "firebase/firestore"
import { useFirebase } from "../FirebaseContext"
import { db } from "../firebase"

interface Data {
  householdName: string
}

export default function HouseHold() {
  const { user } = useFirebase()
  const [userHouseholdId, setUserHouseholdId] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateHousehold, setShowCreateHousehold] = useState(false)
  const [showJoinHousehold, setShowJoinHousehold] = useState(false)
  const [data, setData] = useState<Data | undefined>(undefined)

  useEffect(() => {
    const fetchUserHouseholdData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid)

        try {
          const userDocSnap = await getDoc(userDocRef)

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data()
            const householdId = userData?.householdId || ""

            setUserHouseholdId(householdId)

            // Fetch the household data using the householdId
            const householdDocRef = doc(db, "households", householdId)
            const householdDocSnap = await getDoc(householdDocRef)

            if (!householdId) {
              setShowCreateHousehold(true)
              setShowJoinHousehold(true)
              setIsLoading(false) // Set isLoading to false immediately
            } else {
              // Fetch the household data using the householdId
              const householdDocRef = doc(db, "households", householdId)
              const householdDocSnap = await getDoc(householdDocRef)

              if (householdDocSnap.exists()) {
                const householdData = householdDocSnap.data() as Data
                setData(householdData)
                console.log("household name:", householdData.householdName)
              }
            }

            setIsLoading(false) // Set isLoading to false when the data is fetched
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
          setIsLoading(false)
        }
      }
    }

    if (user) {
      fetchUserHouseholdData()
    }
  }, [user])

  return (
    <ProtectedPage>
      <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16">
        {isLoading ? (
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
        ) : (
          <>
            {!userHouseholdId && (
              <>
                <CreateHousehold />
                <JoinHousehold />
              </>
            )}
            {userHouseholdId && data && (
              <h1 className="text-white text-center text-2xl font-semibold py-2">
                {data.householdName}
              </h1>
            )}
          </>
        )}
      </main>
    </ProtectedPage>
  )
}
