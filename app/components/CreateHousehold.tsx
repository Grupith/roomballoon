import React from "react"

export default function CreateHousehold() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-6 mx-4 mt-4 md:mx-auto md:max-w-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Create Household
      </h2>
      <form>
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
