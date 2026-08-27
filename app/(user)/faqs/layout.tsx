import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ UVICS",
  description:
    "Jawaban tentang organisasi, keanggotaan, departemen, program, dan kompetisi UVICS.",
  alternates: { canonical: "/faqs" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
