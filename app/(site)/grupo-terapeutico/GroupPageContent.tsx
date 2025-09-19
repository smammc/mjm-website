'use client'

import Button from '@/components/Button'
import Section from '@/components/Section'
import { useTranslations } from '@/components/LanguageProvider'

export default function GroupPageContent() {
  const t = useTranslations()
  const group = t.groupPage

  return (
    <Section title={group.title}>
      <p className="text-lg">{group.intro}</p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        {group.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href="/marcar" className="w-full sm:w-auto">
          {group.cta}
        </Button>
      </div>
    </Section>
  )
}
