'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '/dashboard.png' },
  { href: '/admin/profile', label: 'Profile UVICS', icon: '/profile.png' },
  { href: '/media-blog', label: 'Media Blog', icon: '/media.png' },
  { href: '/announcement', label: 'Announcement', icon: '/announcement.png' },
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button (disembunyikan jika sidebar terbuka) */}
      {!mobileOpen && (
        <button
          type="button"
          aria-label="Open admin navigation"
          aria-expanded={mobileOpen}
          aria-controls="admin-navigation"
          onClick={() => setMobileOpen(true)}
          className="md:hidden fixed top-10 left-8 z-50 p-2 rounded-md bg-[#0059FF] text-white opacity-50 hover:opacity-100 transition-opacity"
        >
          ☰
        </button>
      )}

      {/* Overlay for mobile */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close admin navigation"
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        id="admin-navigation"
        className={`
          fixed md:relative top-0 left-0 min-h-screen bg-[#0059FF] text-white z-40
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          w-64 rounded-r-2xl shadow-lg mt-16
        `}
      >
        {/* Logo UVICS */}

        <nav className="p-2 mt-4">
          <ul>
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      flex items-center p-3 my-1 rounded-md transition-colors
                      ${isActive ? 'bg-blue-700 font-medium' : 'hover:bg-blue-700'}
                    `}
                    onClick={() => setMobileOpen(false)}
                  >
                    {/* Icon */}
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="mr-3 h-5 w-5 object-contain"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
