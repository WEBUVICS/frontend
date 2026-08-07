// app/layout.tsx
import type { Metadata } from "next";
import { Quicksand, Open_Sans, Poppins, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTopButton from "@/components/back-to-top-button";
import RecruitmentAnnouncementBar from "@/components/userComponents/RecruitmentAnnouncementBar";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const quicksandFont = Quicksand({
  variable: "--font-quick",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const poppinsFont = Poppins({
  variable: "--font-pop",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UVICS | Connect. Develop. Compete. Achieve.",
  description:
    "UVICS is a student-driven organization at Universitas Klabat that supports students through competitions, teamwork, mentoring, and collaborative growth.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://uvics.my.id",
    siteName: "UVICS - UNKLAB Virtue in Computer Science",
    title: "UVICS | Connect. Develop. Compete. Achieve.",
    description:
      "UVICS is a student-driven organization at Universitas Klabat that supports students through competitions, teamwork, mentoring, and collaborative growth.",
    images: [
      {
        url: "https://uvics.my.id/uvics-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UVICS - UNKLAB Virtue in Computer Science",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${robotoMono.variable} ${quicksandFont.variable} ${poppinsFont.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="sticky top-0 z-50">
          <RecruitmentAnnouncementBar />
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
