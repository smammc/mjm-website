'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import type { Locale, Translations } from '@/lib/translations'
import { locales, translations } from '@/lib/translations'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  translations: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
const STORAGE_KEY = 'preferred-language'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') {
      setLocale(stored)
      return
    }

    const browserLang = window.navigator.language.toLowerCase()
    if (browserLang.startsWith('en')) {
      setLocale('en')
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    document.documentElement.lang = locale === 'pt' ? 'pt-PT' : 'en'

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, locale)
    }
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, translations: translations[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return { locale: ctx.locale, setLocale: ctx.setLocale }
}

export function useTranslations() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useTranslations must be used within a LanguageProvider')
  }

  return ctx.translations
}

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
