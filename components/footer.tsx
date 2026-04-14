"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  LucideLinkedin,
  GithubIcon,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { Quicksand as QuicksandFont } from "next/font/google";

const quicksand = QuicksandFont({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#4d8bff] via-[#3b7bf5] to-[#2d6ce0] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large blurred circle top-right */}
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl" />
        {/* Small blurred circle bottom-left */}
        <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ff9e3d]/10 blur-3xl" />
        {/* Geometric lines bottom-right */}
        <svg
          className="absolute bottom-0 right-0 w-[450px] h-[350px] opacity-10"
          viewBox="0 0 450 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="80" y1="350" x2="380" y2="60" stroke="#ff9e3d" strokeWidth="1.2" />
          <line x1="140" y1="350" x2="420" y2="90" stroke="white" strokeWidth="0.8" />
          <line x1="200" y1="350" x2="400" y2="160" stroke="#ff9e3d" strokeWidth="0.6" />
          <polygon points="350,90 380,50 410,90" fill="none" stroke="#ff9e3d" strokeWidth="1.2" />
          <circle cx="250" cy="280" r="40" fill="none" stroke="white" strokeWidth="0.4" />
        </svg>
        {/* Dot grid pattern */}
        <div
          className="absolute top-10 left-10 w-[150px] h-[150px] opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-14 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          {/* Left Column - Logo, Description, Socials */}
          <div className="md:col-span-4 flex flex-col space-y-5">
            {/* Logos & Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/icon/logo_uvics.webp"
                alt="UVICS Logo"
                width={48}
                height={48}
                className="rounded-full drop-shadow-lg"
              />
              <Image
                src="/icon/logo_unklab.webp"
                alt="UNKLAB Logo"
                width={42}
                height={42}
                className="drop-shadow-lg"
              />
              <span className={`${quicksand.className} font-bold text-2xl tracking-wide drop-shadow-sm`}>
                UVICS
              </span>
            </div>

            {/* Tagline */}
            <p className="text-white/75 text-sm leading-relaxed max-w-[300px]">
              Empowering Unklab students to grow through technology and business
              competitions. Build your team, sharpen your skills, achieve
              greatness together.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  href: "https://www.instagram.com/uvics_id/",
                  icon: <Instagram size={18} />,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/uvics-unklab-virtue-in-computer-science/",
                  icon: <LucideLinkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/WEBUVICS",
                  icon: <GithubIcon size={18} />,
                  label: "GitHub",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff9e3d] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 border border-white/30 rounded-lg px-5 py-2.5 w-fit text-xs font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#4d8bff] transition-all duration-300 cursor-pointer"
            >
              <ChevronUp
                size={14}
                className="transition-transform duration-300"
              />
              Back to Top
            </button>
          </div>

          {/* Site Map */}
          <div className="md:col-span-2 flex flex-col space-y-5">
            <h3 className="font-bold text-sm tracking-wide">
              Site Map
            </h3>
            <div className="w-8 h-[2px] bg-[#ff9e3d] rounded-full" />
            <div className="flex flex-col space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/showcase", label: "Showcase" },
                { href: "/media", label: "Media" },
                { href: "/about", label: "About" },
                { href: "/faqs", label: "FAQs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/75 hover:text-[#ff9e3d] transition-colors duration-300 text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col space-y-5">
            <h3 className="font-bold text-sm tracking-wide">
              Contact
            </h3>
            <div className="w-8 h-[2px] bg-[#ff9e3d] rounded-full" />
            <div className="flex flex-col space-y-3">
              <a
                href="https://wa.me/6285309437394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/75 hover:text-[#ff9e3d] transition-colors duration-300 text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#ff9e3d]/20 transition-colors duration-300">
                  <Phone size={14} />
                </div>
                +62 853 0943 7394
              </a>
              <a
                href="mailto:uvics@unklab.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/75 hover:text-[#ff9e3d] transition-colors duration-300 text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#ff9e3d]/20 transition-colors duration-300">
                  <Mail size={14} />
                </div>
                uvics@unklab.ac.id
              </a>
            </div>
          </div>

          {/* Location - Interactive Map */}
          <div className="md:col-span-3 flex flex-col space-y-5">
            <h3 className="font-bold text-sm tracking-wide">
              Location
            </h3>
            <div className="w-8 h-[2px] bg-[#ff9e3d] rounded-full" />
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597345140158!2d124.98139947355307!3d1.4175081613575993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870a95df6309dd%3A0x21d86e4847556add!2sUniversitas%20Klabat!5e0!3m2!1sen!2sid!4v1756085704976!5m2!1sen!2sid"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff9e3d]/60 to-transparent" />
        <div className="bg-black/10 backdrop-blur-sm py-4 px-6">
          <p className="text-center text-xs text-white/50 tracking-wide">
            Copyright © 2025 UVICS · UNKLAB Virtue in Computer Science. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
