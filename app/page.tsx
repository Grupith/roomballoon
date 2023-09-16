import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="flex flex-col justify-center items-center pt-32 md:pt-60">
        <h2 className="text-4xl md:text-5xl text-center text-white font-bold">
          Elevate your Roommate Experiance
        </h2>
        <h3 className="text-gray-300 font-normal text-lg md:text-xl mt-5 text-center px-2 md:px-0">
          Organize Rent Payments, Groceries, Tasks and More!
        </h3>
      </div>
      <div className="pt-20 flex flex-col justify-center items-center">
        <h4 className="text-white text-2xl font-normal">
          Join our Beta Today!
        </h4>
        <button className="text-white border border-white py-1 px-3 rounded-md mt-4 shadow-lg hover:bg-gray-700">
          Sign in with Google
        </button>
      </div>
    </main>
  )
}
