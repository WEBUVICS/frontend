// app/layout.tsx
import type { Metadata } from "next";
import { Quicksand, Open_Sans, Poppins, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  title: "UVICS | Bersama Meraih Prestasi",
  description:
    "Organisasi mahasiswa Unklab untuk kompetisi teknologi & bisnis. Kembangkan potensi, bangun tim solid, raih prestasi bersama-sama.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://uvics.my.id",
    siteName: "UVICS - Unklab Virtue in Computer Science",
    title: "UVICS | Bersama Meraih Prestasi",
    description:
      "Organisasi mahasiswa Unklab untuk kompetisi teknologi & bisnis. Kembangkan potensi, bangun tim solid, raih prestasi bersama-sama.",
    images: [
      {
        url: "https://uvics.my.id/uvics-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UVICS - Unklab Virtue in Computer Science",
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
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
