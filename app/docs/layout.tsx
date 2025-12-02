import type { Metadata } from "next";
import { Quicksand, Open_Sans, Poppins, Roboto_Mono } from "next/font/google";
import "../globals.css";

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
  weight: ["400", "500", "600", "700", "800"], // pilih berat font yang dibutuhkan
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dokumentasi UVICS",
  description: "Silahkan kunjungi dokumentasi uvics",
  icons: {
    icon: {url: '/favicon.jpg', type: 'image/jpg', }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${robotoMono.variable} ${quicksandFont.variable} ${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
