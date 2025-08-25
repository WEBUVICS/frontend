// ========= UNTUK HALAMAN HOME UBAH DISINI ===========


import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang!</h1>
      <Link 
        href="/admin/LoginPage" 
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Pergi ke Halaman Admin
      </Link>
      <Link 
        href="/user/HomePage" 
        className="bg-blue-600 text-white px-6 py-2 m-2 rounded hover:bg-blue-700"
      >
        Pergi ke Halaman User
      </Link>
    </div>
  );
}