'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon'

import type { Locale } from '@/lib/translations'
import { locales } from '@/lib/translations'
import { useLanguage, useTranslations } from '@/components/LanguageProvider'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale } = useLanguage()
  const t = useTranslations()
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const menuLabel = isOpen ? t.header.menuClose : t.header.menuOpen

  const links = t.header.links

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale)
    if (isOpen) {
      setIsOpen(false)
      toggleRef.current?.focus()
    }
  }

  const languageButtons = useMemo(
    () =>
      locales.map((lang) => {
        const isActive = lang === locale
        return {
          value: lang,
          isActive,
          display: lang.toUpperCase(),
          ariaLabel: t.header.languageNames[lang],
          className: isActive
            ? 'border-[#137DC7] bg-[#137DC7] text-white'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100',
        }
      }),
    [locale, t.header.languageNames],
  )

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand/Logo */}
        <Link href="/" className="text-base font-semibold sm:text-lg">
          {t.header.brand}
        </Link>
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
          {/* Mobile menu toggle button (hamburger) */}
          <button
            type="button"
            ref={toggleRef}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7] md:hidden"
            aria-expanded={isOpen}
            aria-controls="main-nav"
            aria-label={menuLabel}
            aria-haspopup="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          {/* Desktop navigation and actions */}
          <nav className="hidden items-center gap-6 lg:gap-8 text-sm md:flex" aria-label={t.header.navLabel}>
            {/* Navigation links (e.g., Como Funciona, Sobre, etc.) */}
            <ul className="flex items-center gap-5 lg:gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  {/* This is where the 'Como Funciona' button is rendered if present in t.header.links */}
                  <Link
                    href={link.href}
                    className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-[#137DC7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7] text-center leading-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Booking button (e.g., 'Marcar Consulta') and language selector */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Booking button (right-aligned) */}
              <Link
                href="/marcar"
                className="flex items-center justify-center rounded-xl bg-[#137DC7] px-3 py-2 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-center leading-tight"
              >
                {t.header.book}
              </Link>
              {/* Language selector: dropdown at md, inline at lg+ */}
              <div className="relative">
                <div className="md:block lg:hidden">
                  <button
                    type="button"
                    aria-label={t.header.languageLabel}
                    className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-1.5 py-0.5 text-xs font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7]"
                    onClick={() => setIsOpen((open) => !open)}
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                  </button>
                  {/* Dropdown for language selection */}
                  {isOpen && (
                    <div className="absolute right-0 mt-2 inline-flex flex-col gap-1 rounded-lg border border-slate-200 bg-white p-1 shadow-lg z-50 w-auto min-w-fit">
                      {languageButtons.map((button) => (
                        <button
                          key={button.value}
                          type="button"
                          onClick={() => { handleLocaleChange(button.value); setIsOpen(false); }}
                          aria-label={button.ariaLabel}
                          className={`rounded-md px-2 py-1 text-left text-xs font-medium uppercase transition ${button.className}`}
                        >
                          {button.display}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="hidden lg:flex items-center gap-2" role="group" aria-label={t.header.languageLabel}>
                  {languageButtons.map((button) => (
                    <button
                      key={button.value}
                      type="button"
                      onClick={() => handleLocaleChange(button.value)}
                      aria-label={button.ariaLabel}
                      className={`rounded-lg border px-1.5 py-0.5 text-xs font-medium uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7] ${button.className}`}
                    >
                      {button.display}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile navigation dropdown (shows links and booking button) */}
      <nav
        id="main-nav"
        aria-label={t.header.navLabel}
        className={`md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t transition-all duration-200`}
        aria-hidden={!isOpen}
      >
        <div className="space-y-2 px-4 py-4">
          {/* Mobile navigation links (including 'Como Funciona' if present) */}
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Booking button for mobile */}
          <Link
            href="/marcar"
            className="block rounded-lg bg-[#137DC7] px-3 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setIsOpen(false)}
          >
            {t.header.book}
          </Link>
          {/* Language selector for mobile */}
          <div className="flex items-center gap-2" role="group" aria-label={t.header.languageLabel}>
            {languageButtons.map((button) => (
              <button
                key={button.value}
                type="button"
                onClick={() => handleLocaleChange(button.value)}
                aria-label={button.ariaLabel}
                className={`w-full rounded-lg border px-1.5 py-0.5 text-xs font-medium uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7] ${button.className}`}
              >
                {button.display}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
