"use client";
import Image from "next/image";
import CardDemo from "@/components/CardDemo";
import { Quicksand } from "next/font/google";

// Load font Quicksand
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-gray-800 relative p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Logo pojok kiri */}
      <span className="absolute top-4 left-4 z-10">
        <Image
          src="/favicon.png"
          alt="UVICS Logo"
          width={80}
          height={80}
          className="w-12 sm:w-14 md:w-20 object-contain"
          priority
        />
      </span>

      {/* Header */}
      <div className="text-center md:text-left md:pr-6 lg:pr-12 xl:pr-16 mb-8 md:mb-0 w-full md:w-1/2 max-w-lg">
        <h1 className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-blue-600 leading-snug mb-4">
          Welcome to Admin <br /> Portal UVICS
        </h1>
        <p className={`text-lg sm:text-lg md:text-lg text-black ${quicksand.className}`}>
          Please login to access the admin features
        </p>
      </div>
      
      {/* Login Box */}
      <main className="flex items-center justify-center w-full md:w-1/2 max-w-md xl:p-1/2">
        <CardDemo />
      </main>

      {/* Background Logo */}
      <Image
        src="/favicon.jpg"
        alt="UVICS Logo"
        width={400}
        height={400}
        className="fixed bottom-[-15%] right-[-15%] opacity-10 -z-10 w-[250px] sm:w-[300px] md:w-[400px] max-w-md"
        priority
      />
    </div>
  );
}
