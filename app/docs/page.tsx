// app/docs/page.jsx atau app/docs/DocsPage.jsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Briefcase, Megaphone, HelpCircle, Code } from "lucide-react"; 

// --- Komponen Styling Kustom ---
// (SectionCard dan CodeBlock tidak perlu diubah, hanya cara mereka dipanggil)
const SectionCard = ({ title, children, icon }:{title:string, children: React.ReactNode, icon:React.ReactElement}) => (
    <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
            {icon} 
            <span className="ml-3 border-b-2 border-orange-500 pb-1">{title}</span>
        </h2>
        <div className="space-y-5 text-gray-700">{children}</div>
    </div>
);


const CodeBlock = ({ children, className }:{children: React.ReactNode, className?: string}) => (
    <pre className={`bg-gray-50 border border-gray-200 p-3 sm:p-4 rounded-lg text-sm font-mono overflow-x-auto my-3 text-gray-700 ${className || ''}`}>
        <div className="flex items-center text-orange-600 mb-1">
            <Code className="w-4 h-4 mr-2" />
            <span>Path:</span>
        </div>
        <code>{children}</code>
    </pre>
);

const InfoAlert = ({ children }:{children: React.ReactNode}) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md my-4">
        <p className="font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Penting:
         </p>
        <div className="ml-7 text-sm">{children}</div>
    </div>
);
// --- End Komponen Styling Kustom ---


export default function DocsPage() {
    return (
        <section className="bg-gray-50 min-h-screen p-4 md:p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    📘 Panduan Pengelolaan Data Proyek
                </h1>
                <p className="mb-10 text-lg text-gray-500 border-b pb-4">
                    Dokumen teknis untuk memperbarui *mock* data dan aset visual di seluruh aplikasi.
                </p>

                {/* --- Bagian 1: Departemen & Anggota Tim (Tidak Ada Perubahan) --- */}
                <SectionCard 
                    title="1. Data Departemen & Anggota Tim" 
                    icon={<Users className="w-6 h-6 text-orange-500" />}
                >
                    <p>Data anggota tim diatur berdasarkan *batch* dan *departemen*.</p>

                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Lokasi File Sumber:</h3>
                    <CodeBlock>app/(user)/department/&lt;batch&gt;/page.tsx</CodeBlock>
                    
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Proses Pembaruan Data:</h3>
                    <ol className="list-decimal list-inside ml-6 space-y-3">
                        <li>{'Masuk ke file `app/(user)/department/<batch>/page.tsx`.'}</li>
                        <li>Cari `array` of *objects* yang berisi data departemen.</li>
                        <li>Ubah data di dalam *array* tersebut sesuai dengan *field* berikut:
                            <ul className="list-disc list-inside ml-6 mt-2 text-sm">
                                <li>`id`: *Number* atau *String* unik.</li>
                                <li>`name`: Nama Anggota.</li>
                                <li>`position`: Jabatan di Departemen tersebut.</li>
                                <li>`image`: URL gambar (lihat bagian Penanganan Gambar).</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-6 text-blue-600">Penanganan Gambar Anggota:</h3>
                    <InfoAlert>
                        Dan untuk image wajib memiliki format .webp dengan size lebih kecil dari 1MB
                    </InfoAlert>
                    <ol className="list-decimal list-inside ml-6 space-y-3">
                        <li>Simpan file gambar (misalnya, `john.webp`) ke folder:
                            <CodeBlock>public/member/&lt;department&gt;</CodeBlock>
                        </li>
                        <li>Perbarui *field* `image` di *array* dengan URL relatif:
                            <CodeBlock>{"/member/<department>/<nama-file>.webp"}</CodeBlock>
                            <span className="text-xs text-gray-500 block mt-1">Contoh: `"image": "/member/dev/jane.webp"`</span>
                        </li>
                    </ol>
                </SectionCard>

                {/* --- Bagian 2: Showcase Proyek (Tidak Ada Perubahan) --- */}
                <SectionCard 
                    title="2. Data Showcase Proyek" 
                    icon={<Briefcase className="w-6 h-6 text-orange-500" />}
                >
                    <p>Data proyek untuk halaman *showcase* dikelola dalam satu *mock* data.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Lokasi File Sumber:</h3>
                    <CodeBlock>app/(user)/showcase/mockDate.ts</CodeBlock>

                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Field yang Harus Diperbarui:</h3>
                    <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
                        <li>`id` (Unik)</li>
                        <li>`image` (URL gambar proyek)</li>
                        <li>`title` (Judul Proyek)</li>
                        <li>`lomba` (Nama Lomba, jika ada)</li>
                        <li>`members` (Array of Strings: Nama anggota tim proyek)</li>
                        <li>`description` (Deskripsi Singkat Proyek)</li>
                        <li>`tags` (Array of Strings: Kategori atau *skill* yang digunakan)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 text-blue-600">Penanganan Gambar Proyek:</h3>
                    <InfoAlert>
                        Dan untuk image wajib memiliki format .webp dengan size lebih kecil dari 1MB
                    </InfoAlert>
                    <ol className="list-decimal list-inside ml-6 space-y-3">
                        <li>Simpan file gambar *showcase* (misalnya, `app_project.webp`) ke folder:
                            <CodeBlock>public/project</CodeBlock>
                        </li>
                        <li>Perbarui *field* `image` di `mockDate.ts` dengan URL relatif:
                            <CodeBlock>{"/project/<nama-file>.png"}</CodeBlock>
                            <span className="text-xs text-gray-500 block mt-1">Contoh: `"image": "/project/app_project.png"`</span>
                        </li>
                    </ol>
                </SectionCard>

                {/* --- Bagian 3: Media (Announcement & Event) (PERBAIKAN HYDRATION ERROR) --- */}
                <SectionCard 
                    title="3. Data Media (Announcement & Event)" 
                    icon={<Megaphone className="w-6 h-6 text-orange-500" />}
                >
                    <InfoAlert>
                        Pembaruan data media dibagi menjadi dua file terpisah: satu untuk pengumuman, satu untuk acara. Dan untuk image wajib memiliki format .webp dengan size lebih kecil dari 1MB
                    </InfoAlert>
                    
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">3.1. Announcement (Pengumuman)</h3>
                    <h4 className="font-semibold mt-2">Lokasi File:</h4>
                    <CodeBlock>app/(user)/media/dataAnnounce.ts</CodeBlock>
                    
                    {/* PERBAIKAN: Pisahkan teks dan CodeBlock */}
                    <p className="text-sm mt-2">Field kunci: `id`, `mainTitle`, `title`, `description`, `date`, `time`, `location`.</p>
                    <p className="text-sm">Gambar disimpan di:</p> 
                    <CodeBlock>public/announcement</CodeBlock>
                    {/* END PERBAIKAN */}

                    <CodeBlock className="mt-1 text-xs">Contoh URL: `"image": "/announcement/poster_rapat.webp"`</CodeBlock>

                    <h3 className="text-xl font-semibold mt-6 text-gray-700">3.2. Event (Acara)</h3>
                    <h4 className="font-semibold mt-2">Lokasi File:</h4>
                    <CodeBlock>app/(user)/media/dataEvent.ts</CodeBlock>
                    
                    {/* PERBAIKAN: Pisahkan teks dan CodeBlock */}
                    <p className="text-sm mt-2">Field kunci: `id`, `title`, `description`, `hastag`.</p>
                    <p className="text-sm">Gambar disimpan di:</p>
                    <CodeBlock>public/event</CodeBlock>
                    {/* END PERBAIKAN */}

                    <CodeBlock className="mt-1 text-xs">Contoh URL: `"image": "/event/webinar_poster.webp"`</CodeBlock>
                </SectionCard>
                
                {/* --- Bagian 4: Frequently Asked Questions (FAQ) (Tidak Ada Perubahan) --- */}
                <SectionCard 
                    title="4. Data Frequently Asked Questions (FAQ)" 
                    icon={<HelpCircle className="w-6 h-6 text-orange-500" />}
                >
                    <p>Konten FAQ dikelola dalam *array* yang terletak langsung di halaman FAQ.</p>

                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Lokasi File Sumber:</h3>
                    <CodeBlock>app/(user)/faqs/page.tsx</CodeBlock>
                    
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Field yang Harus Diperbarui:</h3>
                    <p>Cari variabel *array* `faqs` dan ubah objek di dalamnya sesuai *field* berikut:</p>
                    <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
                        <li>`q`: (Question) Pertanyaan yang akan ditampilkan di *accordion header*.</li>
                        <li>`a`: (Answer) Jawaban, bisa berupa *string* panjang atau elemen JSX.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 text-blue-600">Contoh Struktur Data:</h3>
                    <CodeBlock>
                        const faqs = [
                        {'  '}{'{'}
                        {'    '}q: "Apa itu UVICS?",
                        {'    '}a: "UVICS adalah komunitas...",
                        {'  '}{'},'}
                        {'  '}{'{'}
                        {'    '}q: "Kapan pendaftaran dibuka?",
                        {'    '}a: "Lihat di bagian announcement.",
                        {'  '}{'},'}
                        {'};'}
                    </CodeBlock>
                </SectionCard>
                
               <div className="mt-10 pt-6 border-t border-gray-200 text-center">
    
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 mb-4 mx-auto max-w-lg rounded-md">
                        <p className="font-bold flex items-center justify-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.427 2.65-1.427 3.414 0l4.757 8.845A1.75 1.75 0 0115.143 14H4.857a1.75 1.75 0 01-1.28-2.056l4.757-8.845zM10 13a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 000 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
                            </svg>
                            ⚠️ Peringatan Penting Sebelum Push!
                        </p>
                        <p className="text-sm">
                            Sebelum melakukan *push* ke **main branch**, **WAJIB** menjalankan 
                            <code className="bg-red-100 text-red-900 font-mono text-xs p-1 rounded mx-1">npm run build</code>. 
                            Jika *build* gagal (ada *error*), selesaikan *error* tersebut terlebih dahulu.
                        </p>
                    </div>

                    {/* <p className="text-sm text-gray-500 mb-3">Pastikan untuk menjalankan `npm run dev` atau *build* ulang setelah perubahan data untuk melihat hasilnya.</p> */}
                    <Link href="/" className="inline-flex items-center text-lg font-semibold text-orange-500 hover:text-orange-700 transition-colors duration-200">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Kembali ke Beranda Proyek
                    </Link>
                </div>
            </div>
        </section>
    );
}