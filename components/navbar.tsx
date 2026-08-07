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

const batchItems = [
  { href: "/department/batch1", label: "Batch-1" },
  { href: "/department/batch2", label: "Batch-2" },
  { href: "/department/batch3", label: "Batch-2.5" },
  { href: "/department/batch4", label: "Batch-3.0" },
];

const desktopLinkClass =
  "font-quick rounded-lg px-4 py-2 text-base font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const mobileLinkClass =
  "block min-h-11 px-5 py-3 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);
  const [mobileBatchOpen, setMobileBatchOpen] = useState(false);
  const pathname = usePathname();
  const batchRef = useRef<HTMLLIElement>(null);
  const desktopBatchButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileBatchButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!batchOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (batchRef.current && !batchRef.current.contains(event.target as Node)) {
        setBatchOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [batchOpen]);

  useEffect(() => {
    if (!isOpen && !batchOpen && !mobileBatchOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (batchOpen) {
        setBatchOpen(false);
        desktopBatchButtonRef.current?.focus();
        return;
      }

      if (mobileBatchOpen) {
        setMobileBatchOpen(false);
        mobileBatchButtonRef.current?.focus();
        return;
      }

      setIsOpen(false);
      mobileMenuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [batchOpen, isOpen, mobileBatchOpen]);

  useEffect(() => {
    setIsOpen(false);
    setBatchOpen(false);
    setMobileBatchOpen(false);
  }, [pathname]);

  const isActiveRoute = (route: string) => {
    if (route === "/") return pathname === "/";
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileBatchOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isOpen) setMobileBatchOpen(false);
    setBatchOpen(false);
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
              ref={batchRef}
              className="relative"
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null
                  )
                ) {
                  setBatchOpen(false);
                }
              }}
            >
              <button
                ref={desktopBatchButtonRef}
                type="button"
                aria-expanded={batchOpen}
                aria-controls="desktop-batch-menu"
                onClick={() => setBatchOpen((open) => !open)}
                className={cn(
                  desktopLinkClass,
                  "flex cursor-pointer items-center gap-1",
                  isActiveRoute("/department")
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
                    batchOpen && "rotate-180"
                  )}
                />
              </button>

              <ul
                id="desktop-batch-menu"
                aria-label="Daftar batch"
                aria-hidden={!batchOpen}
                className={cn(
                  "absolute left-0 top-full z-50 mt-2 flex w-48 origin-top-left flex-col gap-1 rounded-xl border border-white/15 bg-[#2f6fd6] p-2 shadow-xl transition-all duration-200",
                  batchOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0"
                )}
              >
                {batchItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={
                        isActiveRoute(item.href) ? "page" : undefined
                      }
                      className={cn(
                        "block rounded-md px-4 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white",
                        isActiveRoute(item.href)
                          ? "bg-[#ff9e3d] text-white"
                          : "hover:bg-[#ff9e3d] hover:text-white"
                      )}
                      onClick={() => setBatchOpen(false)}
                    >
                      {item.label}
                    </Link>
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
              ref={mobileBatchButtonRef}
              type="button"
              aria-expanded={mobileBatchOpen}
              aria-controls="mobile-batch-menu"
              onClick={() => setMobileBatchOpen((open) => !open)}
              className={cn(
                "flex min-h-11 w-full cursor-pointer items-center justify-between px-5 py-3 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white",
                isActiveRoute("/department")
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
                  mobileBatchOpen && "rotate-180"
                )}
              />
            </button>

            <div
              id="mobile-batch-menu"
              aria-hidden={!mobileBatchOpen}
              className={cn(
                "overflow-hidden bg-black/10 transition-all duration-300",
                mobileBatchOpen
                  ? "visible max-h-64 opacity-100"
                  : "invisible max-h-0 opacity-0"
              )}
            >
              <ul aria-label="Daftar batch" className="flex flex-col gap-1 p-2">
                {batchItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={
                        isActiveRoute(item.href) ? "page" : undefined
                      }
                      className={cn(
                        "block min-h-11 rounded-md px-5 py-3 font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white",
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
