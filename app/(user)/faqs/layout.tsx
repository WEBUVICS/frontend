import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ UVICS",
  description: "Jawaban atas pertanyaan umum tentang keanggotaan dan kegiatan UVICS.",
  alternates: { canonical: "/faqs" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
