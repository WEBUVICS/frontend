"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const deptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only for desktop (md and up)
    const handleClickOutside = (event: MouseEvent) => {
      if (deptRef.current && !deptRef.current.contains(event.target as Node)) {
        setDeptOpen(false);
      }
    };

    if (window.innerWidth >= 768) {
      // md breakpoint
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigateMobile = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setDeptOpen(false);
  };

  const handleDepartmentToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setDeptOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#4d8bff] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <Image
              src="/Logo UVICS White.jpeg"
              alt="Logo"
              width={40}
              height={40}
              priority
              className="rounded-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className={`${quicksand.className} font-bold text-3xl`}>
            UVICS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 relative">
          <Link
            href="/"
            className={`${
              quicksand.className
            } px-5 py-2 rounded-md font-bold transition-colors duration-300 ${
              pathname === "/"
                ? "bg-[#ff9e3d]"
                : "hover:bg-[#ff9e3d] hover:text-black text-white"
            }`}
          >
            Home
          </Link>

          {/* Department Dropdown */}
          <div ref={deptRef} className="relative">
            <button
              onClick={() => setDeptOpen((prev) => !prev)}
              className={`${
                quicksand.className
              } px-5 py-2 rounded-md font-bold transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
                pathname.startsWith("/department")
                  ? "bg-[#ff9e3d]"
                  : "hover:bg-[#ff9e3d] hover:text-black text-white"
              }`}
            >
              Department
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  deptOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {deptOpen && (
              <div className="font-semibold absolute left-0 top-full mt-1 bg-[#4d8bff] text-white rounded-md shadow-lg w-40 z-50">
                <Link
                  href="/department/batch-1"
                  className={`block px-4 py-2 rounded-md transition-colors duration-300 ${
                    pathname === "/department/batch-1"
                      ? "bg-[#ff9e3d]"
                      : "hover:bg-[#ff9e3d] hover:text-black"
                  }`}
                >
                  Batch-1
                </Link>
                <Link
                  href="/department/batch-2"
                  className={`block px-4 py-2 rounded-md transition-colors duration-300 ${
                    pathname === "/department/batch-2"
                      ? "bg-[#ff9e3d]"
                      : "hover:bg-[#ff9e3d] hover:text-black"
                  }`}
                >
                  Batch-2
                </Link>
              </div>
            )}
          </div>

          {["showcase", "faqs", "about"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className={`${
                quicksand.className
              } px-5 py-2 rounded-md font-bold transition-colors duration-300 ${
                pathname === `/${page}`
                  ? "bg-[#ff9e3d]"
                  : "hover:bg-[#ff9e3d] hover:text-black text-white"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:scale-110 transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#4d8bff] transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <Link
          href="/"
          className={`block px-4 py-3 font-semibold border-b border-white/20 transition-colors duration-300 ${
            pathname === "/"
              ? "bg-[#ff9e3d]"
              : "hover:bg-[#ff9e3d] hover:text-black text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        {/* Department Mobile Dropdown */}
        <div className="border-b border-white/20">
          <button
            onClick={handleDepartmentToggle}
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold transition-colors duration-300 ${
              pathname.startsWith("/department")
                ? "bg-[#ff9e3d]"
                : "text-white hover:bg-[#ff9e3d] hover:text-black"
            }`}
          >
            Department
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                deptOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {deptOpen && (
            <div className="flex flex-col">
              <Link
                href="/department/batch-1"
                className={`px-6 py-2 text-left font-medium rounded-md transition-colors duration-300 ${
                  pathname === "/department/batch-1"
                    ? "bg-[#ff9e3d] text-black"
                    : "text-white hover:bg-[#ff9e3d] hover:text-black"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setDeptOpen(false);
                }}
              >
                Batch-1
              </Link>
              <Link
                href="/department/batch-2"
                className={`px-6 py-2 text-left font-medium rounded-md transition-colors duration-300 ${
                  pathname === "/department/batch-2"
                    ? "bg-[#ff9e3d] text-black"
                    : "text-white hover:bg-[#ff9e3d] hover:text-black"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setDeptOpen(false);
                }}
              >
                Batch-2
              </Link>
            </div>
          )}
        </div>

        {["showcase", "faqs", "about"].map((page) => (
          <Link
            key={page}
            href={`/${page}`}
            className={`block px-4 py-3 font-semibold border-b border-white/20 transition-colors duration-300 ${
              pathname === `/${page}`
                ? "bg-[#ff9e3d]"
                : "hover:bg-[#ff9e3d] hover:text-black text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
