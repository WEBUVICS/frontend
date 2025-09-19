// app/layout.tsx
import type { Metadata } from "next";
import { Quicksand, Open_Sans, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
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
  title: "UVICS WEBSITE",
  description: "Silahkan kunjungi website uvics.",
  icons: { icon: { url: "/favicon.jpg", type: "image/jpg" } },
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
