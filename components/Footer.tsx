'use client'

import { useMemo } from 'react'

import { useTranslations } from '@/components/LanguageProvider'

export default function Footer() {
  const t = useTranslations()
  const year = useMemo(() => new Date().getFullYear(), [])
  const rightsText = t.footer.rights.replace('{year}', String(year))

  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-10 text-center text-sm text-slate-600 sm:px-6 md:text-left">
        <div>{rightsText}</div>
        <div>{t.footer.license}</div>
        <div>
          <a
            href="/politica-de-privacidade"
            className="underline transition hover:text-[#137DC7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7]"
          >
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  )
}
