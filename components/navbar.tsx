"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Quicksand } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false); // <-- added state
  const pathname = usePathname();
  const deptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (deptRef.current && !deptRef.current.contains(event.target as Node)) {
        setDeptOpen(false);
      }
    };

    if (window.innerWidth >= 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActiveRoute = (route: string) => {
    if (route === "/") return pathname === "/";
    return pathname.startsWith(route);
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/media", label: "Media" },
    { href: "/showcase", label: "Showcase" },
    { href: "/faqs", label: "FAQs" },
    { href: "/about", label: "About" },
  ];

  const departmentItems = [
    { href: "/department/batch1", label: "Batch-1" },
    { href: "/department/batch2", label: "Batch-2" },
  ];

  return (
    <nav className="bg-[#4d8bff] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <Image
              src="/icon/logo_uvics.webp"
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

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu className="relative">
            <NavigationMenuList className="flex items-center gap-2">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      quicksand.className,
                      "px-5 py-2 rounded-md font-bold transition-colors duration-300 text-lg",
                      isActiveRoute("/")
                        ? "!bg-[#ff9e3d] !text-white"
                        : "hover:!bg-[#ff9e3d] hover:text-black"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Department Dropdown (Desktop) */}
              <div ref={deptRef} className="relative">
                <button
                  onClick={() => setDeptOpen((prev) => !prev)}
                  className={cn(
                    quicksand.className,
                    "px-5 py-2 rounded-md font-bold transition-colors duration-300 flex items-center gap-1 cursor-pointer text-sm",
                    isActiveRoute("/department")
                      ? "!bg-[#ff9e3d] !text-white"
                      : "hover:!bg-[#ff9e3d] hover:text-black"
                  )}
                >
                  Department
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      deptOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full mt-1 bg-[#4d8bff] text-white rounded-md shadow-lg w-40 z-50 border border-white/10 transform transition-all duration-200 ease-out ${
                    deptOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {departmentItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-md transition-colors duration-300 font-semibold text-sm first:rounded-t-md last:rounded-b-md",
                        isActiveRoute(item.href)
                          ? "!bg-[#ff9e3d] !text-white"
                          : "hover:!bg-[#ff9e3d] hover:text-black"
                      )}
                      onClick={() => setDeptOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Items */}
              {navigationItems.slice(1).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        quicksand.className,
                        "px-5 py-2 rounded-md font-bold transition-colors duration-300 text-lg",
                        isActiveRoute(item.href)
                          ? "!bg-[#ff9e3d] !text-white"
                          : "hover:!bg-[#ff9e3d] hover:text-black"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:scale-110 transition-transform duration-300"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-[#4d8bff] transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        )}
      >
        {/* Home */}
        <Link
          href="/"
          className={cn(
            "block px-4 py-3 font-semibold border-b border-white/20 transition-colors duration-300",
            isActiveRoute("/")
              ? "!bg-[#ff9e3d] !text-white"
              : "hover:!bg-[#ff9e3d] hover:text-black"
          )}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        {/* Department Dropdown (Mobile) */}
        <div className="border-b border-white/20">
          <button
            className="flex items-center justify-between w-full px-4 py-3 font-semibold transition-colors duration-300 cursor-pointer"
            onClick={() => setMobileDeptOpen((prev) => !prev)}
          >
            <span>Department</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                mobileDeptOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileDeptOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            {departmentItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-6 py-2 text-left font-medium transition-colors duration-300",
                  isActiveRoute(item.href)
                    ? "!bg-[rgb(255,158,61)] !text-white"
                    : "hover:!bg-[#ff9e3d] hover:text-black"
                )}
                onClick={() => {
                  setIsOpen(false);
                  setMobileDeptOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Other Items */}
        {navigationItems.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-3 font-semibold border-b border-white/20 transition-colors duration-300",
              isActiveRoute(item.href)
                ? "!bg-[#ff9e3d] !text-white"
                : "hover:!bg-[#ff9e3d] hover:text-black"
            )}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
