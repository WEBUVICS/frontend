import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  CircleAlert,
  HelpCircle,
  ImageIcon,
  Megaphone,
  Settings,
  Users,
} from "lucide-react";

function SectionCard({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 sm:text-2xl">
        <span aria-hidden="true" className="text-orange-500">
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({
  children,
  label = "Path",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="my-3 overflow-hidden rounded-lg border border-gray-200 bg-gray-950">
      <p className="border-b border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-300">
        {label}
      </p>
      <pre className="overflow-x-auto p-4 text-sm text-gray-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-gray-900">
      {children}
    </code>
  );
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-900">
      <CircleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}

const navigation = [
  ["workflow", "Workflow"],
  ["status-data", "Status data"],
  ["recruitment", "Rekrutmen"],
  ["department", "Anggota"],
  ["showcase", "Showcase"],
  ["media", "Media"],
  ["faq", "FAQ"],
  ["analytics", "Analytics"],
  ["checklist", "Checklist"],
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="rounded-2xl bg-[#2f6fd6] p-6 text-white shadow-lg sm:p-10">
          <div className="flex items-center gap-3 text-blue-100">
            <BookOpen aria-hidden="true" className="h-6 w-6" />
            <span className="text-sm font-bold uppercase tracking-[0.16em]">
              Dokumentasi Proyek
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            Panduan Kontributor UVICS
          </h1>
          <p className="mt-4 max-w-3xl leading-7 text-blue-50">
            Referensi untuk menjalankan proyek, memperbarui konten, memahami
            penyimpanan data saat ini, dan memverifikasi perubahan sebelum
            pull request atau deployment.
          </p>
        </header>

        <nav aria-label="Daftar isi dokumentasi" className="my-6">
          <ul className="flex flex-wrap gap-2">
            {navigation.map(([href, label]) => (
              <li key={href}>
                <a
                  href={`#${href}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          <SectionCard
            id="workflow"
            title="1. Menjalankan dan memeriksa proyek"
            icon={<Settings className="h-6 w-6" />}
          >
            <p>
              Gunakan Node.js 24 LTS. Instal dependency dan
              jalankan development server:
            </p>
            <CodeBlock label="Terminal">{`npm install
npm run dev`}</CodeBlock>
            <p>Sebelum mengirim perubahan, jalankan seluruh pemeriksaan berikut:</p>
            <CodeBlock label="Verifikasi">{`npm run lint
npm run typecheck
npm run build`}</CodeBlock>
            <p>
              Workflow branch dan format commit dijelaskan di file{" "}
              <InlineCode>BRANCH.md</InlineCode>.
            </p>
          </SectionCard>

          <SectionCard
            id="status-data"
            title="2. Pahami status penyimpanan data"
            icon={<CircleAlert className="h-6 w-6" />}
          >
            <Notice>
              Halaman admin belum menjadi CMS produksi. Jangan menganggap data
              preview sebagai data yang aman atau tersinkron.
            </Notice>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <InlineCode>/login</InlineCode> hanya membuka dashboard preview;
                autentikasi server-side belum tersedia.
              </li>
              <li>
                Pengumuman pada <InlineCode>/announcement</InlineCode> disimpan
                di <InlineCode>localStorage</InlineCode> browser dan tidak
                mengubah pengumuman publik.
              </li>
              <li>
                Edit media pada <InlineCode>/media-blog</InlineCode> hanya berada
                di React state dan hilang setelah reload.
              </li>
              <li>
                Konten publik tetap diperbarui melalui file source yang
                dijelaskan di bawah.
              </li>
            </ul>
          </SectionCard>

          <SectionCard
            id="recruitment"
            title="3. Rekrutmen"
            icon={<Megaphone className="h-6 w-6" />}
          >
            <CodeBlock>lib/recruitment-config.ts</CodeBlock>
            <p>
              File ini mengendalikan announcement bar, bagian rekrutmen di home,
              deadline, link formulir, dan daftar benefit.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Set <InlineCode>isActive</InlineCode> ke <InlineCode>false</InlineCode>{" "}
                untuk menonaktifkan seluruh CTA rekrutmen.
              </li>
              <li>
                Gunakan <InlineCode>showAnnouncementBar</InlineCode> dan{" "}
                <InlineCode>showHomeSection</InlineCode> untuk mengatur lokasi tampil.
              </li>
              <li>
                Pastikan <InlineCode>applicationUrl</InlineCode> menggunakan URL
                HTTPS yang valid dan tulis tahun pada deadline agar tidak ambigu.
              </li>
            </ul>
          </SectionCard>

          <SectionCard
            id="department"
            title="4. Batch, departemen, dan anggota"
            icon={<Users className="h-6 w-6" />}
          >
            <CodeBlock>app/(user)/department/batch&lt;nomor&gt;/page.tsx</CodeBlock>
            <p>
              Batch 1, 2, dan 2.5 menyimpan array anggota langsung di halamannya.
              Batch 3.0 masih berupa placeholder sampai data resmi tersedia.
            </p>
            <p>Setiap anggota mengikuti type berikut:</p>
            <CodeBlock label="Type">{`{
  id: number;
  name: string;
  position: string;
  image: string;
}`}</CodeBlock>
            <p>
              Simpan foto di <InlineCode>public/member/&lt;DEPARTMENT&gt;/</InlineCode>{" "}
              lalu gunakan URL seperti <InlineCode>/member/WEBDEV/nama.webp</InlineCode>.
              Nilai <InlineCode>id</InlineCode> harus unik di dalam array yang sama.
            </p>
            <Notice>
              Path bersifat case-sensitive saat deployment Linux. Huruf besar dan
              kecil pada folder, nama file, serta URL harus sama persis.
            </Notice>
          </SectionCard>

          <SectionCard
            id="showcase"
            title="5. Showcase proyek"
            icon={<BriefcaseBusiness className="h-6 w-6" />}
          >
            <CodeBlock>app/(user)/showcase/mockData.ts</CodeBlock>
            <p>
              Tambahkan atau ubah objek pada array <InlineCode>mockData</InlineCode>{" "}
              dengan field <InlineCode>id</InlineCode>, <InlineCode>image</InlineCode>,{" "}
              <InlineCode>title</InlineCode>, <InlineCode>lomba</InlineCode>,{" "}
              <InlineCode>members</InlineCode>, <InlineCode>description</InlineCode>, dan{" "}
              <InlineCode>tags</InlineCode>.
            </p>
            <p>
              Simpan gambar di <InlineCode>public/project/</InlineCode> dan gunakan
              URL seperti <InlineCode>/project/nama-proyek.webp</InlineCode>. ID
              harus unik karena digunakan oleh route detail showcase.
            </p>
          </SectionCard>

          <SectionCard
            id="media"
            title="6. Media, event, dan pengumuman"
            icon={<ImageIcon className="h-6 w-6" />}
          >
            <h3 className="font-bold text-gray-900">Galeri</h3>
            <CodeBlock>app/(user)/media/page.tsx</CodeBlock>
            <p>
              Simpan gambar di <InlineCode>public/gallery/</InlineCode>, lalu
              tambahkan URL-nya ke array <InlineCode>images</InlineCode> pada halaman media.
            </p>

            <h3 className="pt-2 font-bold text-gray-900">Event</h3>
            <CodeBlock>app/(user)/media/dataEvent.ts</CodeBlock>
            <p>
              Gunakan field <InlineCode>id</InlineCode>, <InlineCode>image</InlineCode>,{" "}
              <InlineCode>title</InlineCode>, <InlineCode>description</InlineCode>, dan{" "}
              <InlineCode>hashtag</InlineCode>. Array saat ini kosong; contoh lama
              masih tersedia sebagai komentar.
            </p>

            <h3 className="pt-2 font-bold text-gray-900">Pengumuman publik</h3>
            <CodeBlock>app/(user)/media/dataAnnounce.ts</CodeBlock>
            <p>
              Gunakan field <InlineCode>id</InlineCode>, <InlineCode>mainTitle</InlineCode>,{" "}
              <InlineCode>title</InlineCode>, <InlineCode>description</InlineCode>,{" "}
              <InlineCode>date</InlineCode>, <InlineCode>time</InlineCode>,{" "}
              <InlineCode>location</InlineCode>, dan <InlineCode>image</InlineCode>.
              Poster event dan pengumuman disimpan di <InlineCode>public/event/</InlineCode>.
            </p>
          </SectionCard>

          <SectionCard
            id="faq"
            title="7. FAQ"
            icon={<HelpCircle className="h-6 w-6" />}
          >
            <CodeBlock>app/(user)/faqs/page.tsx</CodeBlock>
            <p>
              Ubah array <InlineCode>faqs</InlineCode>. Setiap item memiliki field{" "}
              <InlineCode>q</InlineCode> untuk pertanyaan dan <InlineCode>a</InlineCode>{" "}
              untuk jawaban. Gunakan kalimat singkat, konsisten, dan perbarui
              informasi kontak atau benefit bila kebijakan organisasi berubah.
            </p>
          </SectionCard>

          <SectionCard
            id="analytics"
            title="8. Dashboard analytics"
            icon={<BarChart3 className="h-6 w-6" />}
          >
            <p>
              Endpoint <InlineCode>/api/analytics</InlineCode> memakai Google
              Analytics Data API. Salin file contoh environment terlebih dahulu:
            </p>
            <CodeBlock label="PowerShell">Copy-Item .env.example .env.local</CodeBlock>
            <CodeBlock label="Bash">cp .env.example .env.local</CodeBlock>
            <p>Isi variable server-side berikut:</p>
            <CodeBlock label="Environment">{`GA4_PROPERTY_ID=
GA4_CLIENT_EMAIL=
GA4_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"`}</CodeBlock>
            <Notice>
              Jangan commit <InlineCode>.env.local</InlineCode> dan jangan memakai
              prefix <InlineCode>NEXT_PUBLIC_</InlineCode> untuk kredensial GA4.
            </Notice>
          </SectionCard>

          <SectionCard
            id="checklist"
            title="9. Checklist sebelum push"
            icon={<CheckCircle2 className="h-6 w-6" />}
          >
            <ul className="list-disc space-y-2 pl-6">
              <li>Pastikan seluruh path aset benar dan file tersedia.</li>
              <li>Periksa tampilan mobile dan desktop untuk perubahan UI.</li>
              <li>
                Jangan commit secret, <InlineCode>.env.local</InlineCode>,{" "}
                <InlineCode>.next</InlineCode>, atau <InlineCode>node_modules</InlineCode>.
              </li>
              <li>Jalankan lint, typecheck, dan production build.</li>
              <li>
                Ikuti panduan branch dan pull request di <InlineCode>BRANCH.md</InlineCode>.
              </li>
            </ul>
          </SectionCard>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
