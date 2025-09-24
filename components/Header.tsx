'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/Button'
import { clsx } from 'clsx'
import React, { useState, useRef, useEffect } from 'react'

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas' },
  { href: '#processo', label: 'Como Funciona' },
  { href: '#grupo', label: 'Grupo' },
  { href: '#contactos', label: 'Contactos' },
  { href: '/blog', label: 'Blog' }, // Added Blog link
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Close menu on outside click or Escape
  useEffect(() => {
    if (!mobileOpen) return
    function handle(e: MouseEvent | KeyboardEvent) {
      if (e instanceof KeyboardEvent && e.key === 'Escape') setMobileOpen(false)
      if (e instanceof MouseEvent && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) setMobileOpen(false)
    }
    document.addEventListener('mousedown', handle)
    document.addEventListener('keydown', handle)
    return () => {
      document.removeEventListener('mousedown', handle)
      document.removeEventListener('keydown', handle)
    }
  }, [mobileOpen])

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex h-16 items-center border-b border-slate-200 w-full justify-between">
          {/* Left: Logo/Brand */}
          <div className="flex-1 flex items-center min-w-0">
            <Link href="/" className="font-semibold whitespace-pre-line leading-tight truncate">
              Maria João Martins
              {'\n'}<span className="opacity-70">| Psicóloga</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="flex-1 hidden md:flex justify-center gap-6">
            {nav.map((n) => (
              <div key={n.href} className="flex items-center justify-center text-center">
                <a
                  href={n.href}
                  className={clsx(
                    'text-sm transition hover:text-white',
                    'hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent duration-200',
                    'text-[color:var(--color-primary)]',
                    pathname === n.href && 'text-white',
                  )}
                  style={{ width: '100%' }}
                >
                  {n.label}
                </a>
              </div>
            ))}
          </nav>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="6" width="28" height="2.5" rx="1.25" fill="currentColor" className={mobileOpen ? 'opacity-0' : 'opacity-100'} />
              <rect y="13" width="28" height="2.5" rx="1.25" fill="currentColor" className={mobileOpen ? 'rotate-45 translate-y-3' : ''} />
              <rect y="20" width="28" height="2.5" rx="1.25" fill="currentColor" className={mobileOpen ? '-rotate-45 -translate-y-3' : ''} />
            </svg>
          </button>

          {/* Right: Button (desktop only) */}
          <div className="flex-1 justify-end items-center min-w-0 hidden md:flex">
            <Button href="/marcar" variant="ghost">
              Marcar Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        ref={mobileMenuRef}
        className={clsx(
          'fixed left-0 top-0 z-50 w-full bg-white shadow-lg border-b border-slate-200 transition-all duration-300 overflow-hidden md:hidden',
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
        role="menu"
        aria-label="Navegação principal"
      >
        <div className="flex justify-end px-6 pt-4">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
          >
            <span className="sr-only">Fechar</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6 py-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={clsx(
                'py-3 text-lg font-medium text-[color:var(--color-primary)] text-center rounded transition hover:bg-primary/10 hover:underline hover:decoration-accent',
                pathname === n.href && 'bg-primary text-white',
              )}
              tabIndex={mobileOpen ? 0 : -1}
              role="menuitem"
              onClick={() => setMobileOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <Button href="/marcar" variant="ghost" className="mt-2 mb-2 w-full">
            Marcar Consulta
          </Button>
        </nav>
      </div>
    </header>
  )
}
