"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Instagram, Linkedin, LucideLinkedin, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#7eb3ff] text-black pt-10 pb-4">
      {/* Top horizontal line with side margins */}
      <div className="border-t border-white mx-8"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-6 items-start">
          {/* Logos */}
          <div className="flex justify-center md:justify-start items-center gap-4 ">
            <Image
              src="/Logo_UVICS-removebg-preview.png"
              alt="UVICS Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <Image
              src="/Logo_Unklab-removebg-preview.png"
              alt="UNKLAB Logo"
              width={60}
              height={60}
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left md:ml-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <Link href="/faqs" className="hover:underline">
              FAQs
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/showcase" className="hover:underline">
              Showcase
            </Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-3 text-center md:mr-10">
            <h3 className="font-bold text-lg">Socials</h3>
            <div className="flex flex-col space-y-3 items-center">
              <a
                href="https://www.instagram.com/uvics_id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/uvics-unklab-virtue-in-computer-science/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LucideLinkedin />
              </a>
              <a
                href="https://github.com/WEBUVICS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <h3 className="font-bold text-lg">Contacts</h3>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} /> +62 853 0943 7394
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} /> uvics@unklab.ac.id
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-bold text-lg">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597345140158!2d124.98139947355307!3d1.4175081613575993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870a95df6309dd%3A0x21d86e4847556add!2sUniversitas%20Klabat!5e0!3m2!1sen!2sid!4v1756085704976!5m2!1sen!2sid"
              width="230"
              height="140"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom horizontal line with side margins */}
      <div className="border-t border-white mx-8 mt-2"></div>
      <p className="text-center text-sm mt-2 font-bold">
        Copyright © 2025 UVICS · UNKLAB Virtue in Computer Science.
      </p>
    </footer>
  );
}
