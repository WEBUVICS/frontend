import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  LucideLinkedin,
  GithubIcon,
} from "lucide-react";

const siteMapLinks = [
  { href: "/", label: "Home" },
  { href: "/showcase", label: "Showcase" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/uvics_id/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/uvics-unklab-virtue-in-computer-science/",
    icon: LucideLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/WEBUVICS",
    icon: GithubIcon,
    label: "GitHub",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-gradient-to-br from-[#2f6fd6] via-[#245fc7] to-[#194fae] text-white"
    >

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-14 md:px-8 md:pb-14 md:pt-16">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-8 xl:grid-cols-[minmax(300px,1.4fr)_minmax(120px,0.6fr)_minmax(220px,0.9fr)_minmax(260px,1.1fr)] xl:gap-x-12 2xl:gap-x-16">
          <section aria-label="About UVICS" className="min-w-0">
            <div className="flex w-fit items-center gap-3">
              <Image
                src="/icon/logo_uvics.webp"
                alt="UVICS Logo"
                width={48}
                height={48}
                className="h-12 w-auto rounded-full drop-shadow-lg"
              />
              <span className="font-quick text-2xl font-bold tracking-wide drop-shadow-sm">
                UVICS
              </span>
            </div>

            <p className="mt-5 max-w-[340px] text-sm leading-[1.7] text-blue-50">
              UVICS is a student-driven organization at Universitas Klabat that
              connects students with shared ambitions and supports them through
              competitions, teamwork, mentoring, and collaborative growth.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-150 hover:bg-[#ff9e3d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon aria-hidden="true" size={18} />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-wide">Explore</h3>
            <nav
              aria-label="Footer Explore"
              className="mt-8 flex flex-col items-start gap-3"
            >
              {siteMapLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit rounded-sm text-sm text-blue-50 transition-colors duration-150 hover:text-[#ff9e3d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </section>

          <section className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-wide">Get In Touch</h3>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href="tel:+6285309437394"
                className="flex w-fit items-center gap-3 rounded-sm text-sm text-blue-50 transition-colors duration-150 hover:text-[#ff9e3d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Phone aria-hidden="true" size={16} />
                </span>
                <span className="whitespace-nowrap">+62 853 0943 7394</span>
              </a>
              <a
                href="mailto:uvics@unklab.ac.id"
                className="flex w-fit min-w-0 items-center gap-3 rounded-sm text-sm text-blue-50 transition-colors duration-150 hover:text-[#ff9e3d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Mail aria-hidden="true" size={16} />
                </span>
                <span className="min-w-0 break-all">uvics@unklab.ac.id</span>
              </a>
            </div>
          </section>

          <section className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-wide">Location</h3>
            <div className="mt-8 h-[168px] w-full overflow-hidden rounded-xl border border-white/10 shadow-lg lg:max-w-[290px]">
              <iframe
                title="Location Universitas Klabat di Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597345140158!2d124.98139947355307!3d1.4175081613575993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870a95df6309dd%3A0x21d86e4847556add!2sUniversitas%20Klabat!5e0!3m2!1sen!2sid!4v1756085704976!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full"
              />
            </div>
          </section>
        </div>
      </div>

      <div id="footer-bottom" className="relative z-10">
        <div className="h-[1px] bg-white/15" />
        <div className="bg-black/10 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs tracking-wide text-blue-50">
              © {currentYear} UVICS · UNKLAB Virtue in Computer Science. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
