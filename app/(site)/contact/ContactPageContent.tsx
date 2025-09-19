'use client'

import { useTranslations } from '@/components/LanguageProvider'

export default function ContactPageContent() {
  const t = useTranslations()
  const content = t.contactPage

  return (
    <section className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-semibold">{content.title}</h1>
      <p className="mt-4 text-slate-600">{content.body}</p>
    </section>
  )
}
