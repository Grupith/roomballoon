import React from "react"

export default function JoinHouseHold() {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg p-6 mx-4 mt-4 md:mx-auto md:max-w-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Join Household
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="householdId"
            className="block text-gray-600 text-lg font-semibold mb-1"
          >
            Household ID
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Enter the Household ID provided by the household owner to join.
          </p>
          <input
            type="text"
            id="householdId"
            name="householdId"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Household ID"
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
