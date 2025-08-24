"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Media", href: "/media" },
  { name: "Department", href: "/department" },
  { name: "Showcase", href: "/showcase" },
  { name: "FAQs", href: "/faq" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`${
                        quicksand.className
                      } px-5 py-2 rounded-md font-bold transition-colors duration-300 ${
                        isActive
                          ? "bg-[#ff9e3d]"
                          : "hover:bg-[#ff9e3d] hover:text-black"
                      }`}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:scale-110 transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#4d8bff] transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${
                quicksand.className
              } block px-4 py-3 font-semibold border-b border-white/20 transition-colors duration-300 active:bg-[#e68930] ${
                isActive
                  ? "bg-[#ff9e3d] text-black"
                  : "hover:bg-[#ff9e3d] hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
