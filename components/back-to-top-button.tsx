"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 300;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterBottomVisible, setIsFooterBottomVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  useEffect(() => {
    const footerBottom = document.getElementById("footer-bottom");
    if (!footerBottom) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterBottomVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(footerBottom);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Kembali ke bagian atas halaman"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={`fixed right-6 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white bg-[#ff9e3d] text-white shadow-lg shadow-black/25 transition-[bottom,opacity,transform] duration-300 ease-out motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:right-8 lg:right-[max(2rem,calc((100vw-80rem)/2+2rem))] ${
        isFooterBottomVisible ? "bottom-16" : "bottom-6 md:bottom-8"
      } ${
        isVisible
          ? "visible translate-y-0 scale-100 opacity-100"
          : "pointer-events-none invisible translate-y-3 scale-90 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" size={32} strokeWidth={2.25} />
    </button>
  );
}
