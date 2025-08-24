'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile UVICS' },
  { href: '/media-blog', label: 'Media Blog' },
  { href: '/announcement', label: 'Announcement' },
]

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
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

    const savedState = localStorage.getItem('sidebarExpanded')
    if (savedState !== null) setIsExpanded(JSON.parse(savedState))

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebarExpanded', JSON.stringify(isExpanded))
  }, [isExpanded])

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white"
      >
        ☰
      </button>

      {/* Overlay for mobile */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative top-0 left-0 h-full bg-blue-800 text-white z-40
          transition-all duration-300 ease-in-out
          ${isMobile ? (mobileOpen ? 'translate-x-0' : '-translate-x-full') : ''}
          ${isExpanded ? 'w-64' : 'w-20'}
        `}
      >
        <div className="p-4 flex items-center justify-between border-b border-blue-700">
          {isExpanded && <h2 className="text-xl font-bold">UVICS Dashboard</h2>}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-blue-700"
          >
            {isExpanded ? '◀' : '▶'}
          </button>
        </div>

        <nav className="p-2">
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
                    <span className="mr-3">●</span>
                    {(isExpanded || isMobile) && <span>{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Expand/collapse button for desktop */}
        {!isMobile && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-600"
            >
              {isExpanded ? '◀' : '▶'}
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
