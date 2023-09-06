import Image from "next/image"
import buttonImg from "../public/assets/btn-google.png"

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <div className="flex justify-center items-center py-32 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg mx-4 md:mx-20 my-10 shadow-lg">
        <h2 className="text-2xl text-center text-white">
          Elevate your Roommate Experiance
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl my-6">Join the Beta!</h3>
        <Image
          src={buttonImg}
          alt="google sign in"
          width={250}
          height={250}
          className="cursor-pointer hover:scale-105 transition-all"
        />
      </div>
    </main>
  )
}
