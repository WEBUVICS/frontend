
// app/dashboard/page.jsx
"use client";

export default function Dashboard() {
    // Misal username disimpan di localStorage saat login

    return (
        <div className="flex">
            
            <div className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-2">
                    Halo <span>Saudara</span>...
                </h2>
                <h1 className="text-3xl font-bold mb-4">
                    Selamat Datang di Dashboard!
                </h1>
                <p className="text-gray-600">
                    Anda berhasil login
                </p>
            </div>
        </div>
    );
}