"use client";
import Image from 'next/image'
import CardDemo from "@/components/CardDemo"
import { Quicksand } from 'next/font/google'

// Load font Quicksand
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function LoginPage() {

    return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-screen text-gray-800 relative p-4 md:p-8 overflow-hidden">

      {/* Logo pojok kiri */}
        <span className="absolute top-4 left-4 z-10">
          <Image 
          src="/favicon.png" 
          alt="UVICS Logo" 
          width={80}
          height={80}
          className="w-16 md:w-20 object-contain" 
          priority
          />
        </span>

      {/* Header */}
    <div className="text-center md:text-left md:pr-8 lg:pr-12 xl:pr-16 mb-8 md:mb-0 w-full md:w-1/2 max-w-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 leading-snug mb-4">
          Welcome to Admin <br /> Portal UVICS
        </h1>
        <p className={`text-sm md:text-base text-black ${quicksand.className}`}>
            Please login to access the admin features
        </p>
    </div>
      {/* Login Box */}

    <main className="flex items-center justify-center w-full md:w-1/2 max-w-md">
      <CardDemo />
    </main>


      {/* Background Logo */}
    <Image
        src="/favicon.jpg"
        alt="UVICS Logo"
        width={400}
        height={400}
        className="fixed bottom-[-10%] right-[-10%] opacity-10 -z-10 w-1/2 max-w-md"
        priority
        />
    </div>
    );
}