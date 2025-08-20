"use client";
import Image from 'next/image'

export default function LoginPage() {

    return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-screen text-gray-800  relative">

      {/* Logo pojok kiri */}
        <span className="absolute top-4 left-4">
        <Image 
        src="/favicon.png" 
        alt="UVICS Logo" 
        width={96}   // sama dengan w-24
        height={96} 
        className="w-20 md:w-24" 
        />
    </span>

      {/* Header */}

      {/* Login Box */}

      {/* Background Logo */}
    <Image
        src="/favicon.png"
        alt="UVICS Logo"
        width={500}
        height={500}
        className="fixed bottom-[-150px] right-[-150px] opacity-20 -z-10"
        />
    </div>
    );
}
