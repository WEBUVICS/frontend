"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

const batchItems: Array<{
  href: string;
  label: string;
  disabled?: boolean;
}> = [
  { href: "/batch/batch1", label: "Batch-1" },
  { href: "/batch/batch2", label: "Batch-2" },
  { href: "/batch/batch3", label: "Batch-2.5" },
  { href: "#", label: "Batch-3.0", disabled: true },
];

const desktopLinkClass =
  "font-quick rounded-lg px-4 py-2 text-base font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const mobileLinkClass =
  "block min-h-11 px-5 py-3 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);
  const pathname = usePathname();
  const deptRef = useRef<HTMLLIElement>(null);
  const desktopDeptButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDeptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!deptOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (deptRef.current && !deptRef.current.contains(event.target as Node)) {
        setDeptOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [deptOpen]);

  useEffect(() => {
    if (!isOpen && !deptOpen && !mobileDeptOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (deptOpen) {
        setDeptOpen(false);
        desktopDeptButtonRef.current?.focus();
        return;
      }

      if (mobileDeptOpen) {
        setMobileDeptOpen(false);
        mobileDeptButtonRef.current?.focus();
        return;
      }

      setIsOpen(false);
      mobileMenuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [deptOpen, isOpen, mobileDeptOpen]);

  useEffect(() => {
    setIsOpen(false);
    setDeptOpen(false);
    setMobileDeptOpen(false);
  }, [pathname]);

  const isActiveRoute = (route: string) => {
    if (route === "/") return pathname === "/";
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDeptOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isOpen) setMobileDeptOpen(false);
    setDeptOpen(false);
    setIsOpen((open) => !open);
  };

  return (
    <nav
      id="top"
      aria-label="Navigasi utama"
      className="relative z-50 border-b border-white/15 bg-[#2f6fd6] text-white shadow-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="UVICS - Beranda"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Image
            src="/icon/logo_uvics.webp"
            alt=""
            width={50}
            height={50}
            priority
            quality={100}
            className="rounded-full"
          />
          <span className="font-quick text-2xl font-bold sm:text-3xl">UVICS</span>
        </Link>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-1" aria-label="Menu utama">
            <li>
              <Link
                href="/"
                aria-current={isActiveRoute("/") ? "page" : undefined}
                className={cn(
                  desktopLinkClass,
                  isActiveRoute("/")
                    ? "bg-[#ff9e3d] text-white"
                    : "hover:bg-[#ff9e3d] hover:text-white"
                )}
              >
                Home
              </Link>
            </li>

            <li
              ref={deptRef}
              className="relative"
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null
                  )
                ) {
                  setDeptOpen(false);
                }
              }}
            >
              <button
                ref={desktopDeptButtonRef}
                type="button"
                aria-expanded={deptOpen}
                aria-controls="desktop-batch-menu"
                onClick={() => setDeptOpen((open) => !open)}
                className={cn(
                  desktopLinkClass,
                  "flex cursor-pointer items-center gap-1",
                  isActiveRoute("/batch")
                    ? "bg-[#ff9e3d] text-white"
                    : "hover:bg-[#ff9e3d] hover:text-white"
                )}
              >
                Batch
                <ChevronDown
                  aria-hidden="true"
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    deptOpen && "rotate-180"
                  )}
                />
              </button>

              <ul
                id="desktop-batch-menu"
                aria-label="Daftar departemen"
                aria-hidden={!deptOpen}
                className={cn(
                  "absolute left-0 top-full z-50 mt-2 w-48 origin-top-left rounded-xl border border-white/15 bg-[#2f6fd6] p-2 shadow-xl transition-all duration-200",
                  deptOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0"
                )}
              >
                {batchItems.map((item) => (
                  <li key={item.label}>
                    {item.disabled ? (
                      <span
                        aria-disabled="true"
                        className="block cursor-not-allowed rounded-lg px-4 py-2.5 text-sm font-semibold text-white/60"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={
                          isActiveRoute(item.href) ? "page" : undefined
                        }
                        className={cn(
                          "block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white",
                          isActiveRoute(item.href)
                            ? "bg-[#ff9e3d] text-white"
                            : "hover:bg-[#ff9e3d] hover:text-white"
                        )}
                        onClick={() => setDeptOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>

            {navigationItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={
                    isActiveRoute(item.href) ? "page" : undefined
                  }
                  className={cn(
                    desktopLinkClass,
                    isActiveRoute(item.href)
                      ? "bg-[#ff9e3d] text-white"
                      : "hover:bg-[#ff9e3d] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          ref={mobileMenuButtonRef}
          type="button"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          onClick={toggleMobileMenu}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" size={28} />
          ) : (
            <Menu aria-hidden="true" size={28} />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation-menu"
        aria-hidden={!isOpen}
        className={cn(
          "overflow-y-auto bg-[#2f6fd6] transition-all duration-300 ease-in-out lg:hidden",
          isOpen
            ? "visible max-h-[calc(100dvh-4rem)] border-t border-white/15 opacity-100"
            : "invisible max-h-0 opacity-0"
        )}
      >
        <ul className="mx-auto max-w-7xl py-2" aria-label="Menu utama seluler">
          <li className="border-b border-white/15">
            <Link
              href="/"
              aria-current={isActiveRoute("/") ? "page" : undefined}
              className={cn(
                mobileLinkClass,
                isActiveRoute("/")
                  ? "bg-[#ff9e3d] text-white"
                  : "hover:bg-white/10"
              )}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li className="border-b border-white/15">
            <button
              ref={mobileDeptButtonRef}
              type="button"
              aria-expanded={mobileDeptOpen}
              aria-controls="mobile-batch-menu"
              onClick={() => setMobileDeptOpen((open) => !open)}
              className={cn(
                "flex min-h-11 w-full cursor-pointer items-center justify-between px-5 py-3 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white",
                isActiveRoute("/batch")
                  ? "bg-[#ff9e3d] text-white"
                  : "hover:bg-white/10"
              )}
            >
              <span>Batch</span>
              <ChevronDown
                aria-hidden="true"
                size={18}
                className={cn(
                  "transition-transform duration-200",
                  mobileDeptOpen && "rotate-180"
                )}
              />
            </button>

            <div
              id="mobile-batch-menu"
              aria-hidden={!mobileDeptOpen}
              className={cn(
                "overflow-hidden bg-black/10 transition-all duration-300",
                mobileDeptOpen
                  ? "visible max-h-48 opacity-100"
                  : "invisible max-h-0 opacity-0"
              )}
            >
              <ul aria-label="Daftar batch">
                {batchItems.map((item) => (
                  <li key={item.label}>
                    {item.disabled ? (
                      <span
                        aria-disabled="true"
                        className="block min-h-11 cursor-not-allowed px-7 py-3 font-medium text-white/60"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={
                          isActiveRoute(item.href) ? "page" : undefined
                        }
                        className={cn(
                          "block min-h-11 px-7 py-3 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white",
                          isActiveRoute(item.href)
                            ? "bg-[#ff9e3d] text-white"
                            : "hover:bg-white/10"
                        )}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {navigationItems.slice(1).map((item) => (
            <li key={item.href} className="border-b border-white/15 last:border-b-0">
              <Link
                href={item.href}
                aria-current={
                  isActiveRoute(item.href) ? "page" : undefined
                }
                className={cn(
                  mobileLinkClass,
                  isActiveRoute(item.href)
                    ? "bg-[#ff9e3d] text-white"
                    : "hover:bg-white/10"
                )}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
