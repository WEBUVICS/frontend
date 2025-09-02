'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const menuItems = [
  { href: '/Dashboard', label: 'Dashboard', icon: '/dashboard.png' },
  { href: '/profile', label: 'Profile UVICS', icon: '/profile.png' },
  { href: '/media-blog', label: 'Media Blog', icon: '/media.png' },
  { href: '/announcement', label: 'Announcement', icon: '/announcement.png' },
]

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMobileOpen(false)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen)
    }
  }

  return (
    <>
      {/* Mobile menu button (disembunyikan jika sidebar terbuka) */}
      {isMobile && !mobileOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-10 left-8 z-50 p-2 rounded-md bg-[#0059FF] text-white opacity-50 hover:opacity-100 transition-opacity"
        >
          ☰
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative top-0 left-0 min-h-screen bg-[#0059FF] text-white z-40
          transition-transform duration-300 ease-in-out
          ${isMobile ? (mobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          w-64 rounded-r-2xl shadow-lg mt-16
        `}
      >
        {/* Logo UVICS */}

        <nav className="p-2 mt-4">
          <ul>
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center p-3 my-1 rounded-md transition-colors
                      ${isActive ? 'bg-blue-700 font-medium' : 'hover:bg-blue-700'}
                    `}
                    onClick={() => isMobile && setMobileOpen(false)}
                  >
                    {/* Icon */}
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                      className="mr-3"
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
