"use client"

import Image from 'next/image'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import { useTranslations } from '@/components/LanguageProvider'

export default function HomePageClient() {
  const t = useTranslations()
  const { hero, sections } = t.home
  const phoneNumber = sections.contactos.phone?.trim()
  const sanitizedPhone = phoneNumber ? phoneNumber.replace(/\s+/g, '') : ''

  return (
    <>
      <section className="bg-gradient-to-br from-[#143D8F]/5 to-[#137DC7]/5">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:px-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{hero.title}</h1>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{hero.subtitle}</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/marcar" className="w-full sm:w-auto">
                {hero.ctaPrimary}
              </Button>
              <Button href="#contactos" variant="ghost" className="w-full sm:w-auto">
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image src="/images/maria-joao.jpg" alt={hero.imageAlt} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <Section id="sobre" title={sections.sobre.title}>
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{sections.sobre.body}</p>
      </Section>

      <Section id="quem" title={sections.quem.title}>
        <ul className="grid list-disc gap-3 pl-5 sm:grid-cols-2 sm:gap-4">
          {sections.quem.audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="areas" title={sections.areas.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.areas.items.map((area) => (
            <Card key={area} title={area} />
          ))}
        </div>
        {sections.areas.note && (
          <p className="mt-6 text-sm text-slate-600 sm:text-base">{sections.areas.note}</p>
        )}
      </Section>

      <Section id="processo" title={sections.processo.title}>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.processo.steps.map((step, index) => (
            <li key={step} className="rounded-2xl border bg-white p-6 shadow">
              <div className="text-2xl font-semibold sm:text-3xl">{index + 1}</div>
              <div className="mt-2 text-lg font-medium">{step}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="grupo" title={sections.grupo.title}>
        <p className="text-base leading-relaxed sm:text-lg">{sections.grupo.intro}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/grupo-terapeutico" className="w-full sm:w-auto">
            {sections.grupo.ctaPrimary}
          </Button>
          <Button href="#contactos" variant="ghost" className="w-full sm:w-auto">
            {sections.grupo.ctaSecondary}
          </Button>
        </div>
      </Section>

      <Section id="testemunhos" title={sections.testemunhos.title}>
        <Testimonial items={sections.testemunhos.items} />
      </Section>

      <Section id="consultas" title={sections.consultas.title}>
        <div className="space-y-3 text-base text-slate-700">
          <p>{sections.consultas.details}</p>
          <Button href="/marcar" className="w-full sm:w-auto">
            {sections.consultas.cta}
          </Button>
        </div>
      </Section>

      <Section id="contactos" title={sections.contactos.title}>
        <div className="space-y-3 text-base">
          <p>
            {sections.contactos.emailLabel}:{' '}
            <a
              className="underline transition hover:text-[#137DC7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7]"
              href={`mailto:${sections.contactos.email}`}
            >
              {sections.contactos.email}
            </a>
          </p>
          <p>
            {sections.contactos.phoneLabel}:{' '}
            {phoneNumber ? (
              <a
                className="underline transition hover:text-[#137DC7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137DC7]"
                href={`tel:${sanitizedPhone}`}
              >
                {phoneNumber}
              </a>
            ) : (
              '—'
            )}
          </p>
        </div>
      </Section>
    </>
  )
}

