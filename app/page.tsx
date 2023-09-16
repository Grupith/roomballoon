import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="flex flex-col justify-center items-center py-60">
        <h2 className="text-5xl text-center text-white font-bold">
          Elevate your Roommate Experiance
        </h2>
        <h3 className="text-white font-normal text-xl mt-5 text-center">
          Organize Rent Payments, Groceries, Tasks and More!
        </h3>
      </div>
    </main>
  )
}
