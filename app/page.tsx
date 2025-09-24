import type { Metadata } from 'next'
import Button from '@/components/Button'
import Image from 'next/image'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Testimonial from '@/components/Testimonial'
import { text } from './TextPage'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Maria João Martins | Psicóloga',
    description: 'Apoio psicológico e psicoterapia para jovens, adultos e casais.',
  }
}

export default function HomePage() {
  const { hero, sections } = text
  const phoneNumber = sections.contactos.phone?.trim()
  const sanitizedPhone = phoneNumber ? phoneNumber.replace(/\s+/g, '') : ''

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate w-screen max-w-none overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2">
          {/* Left: images */}
          <div className="relative flex h-[45vh] min-h-[500px] w-full items-center gap-2 p-4 sm:gap-3 sm:p-6 md:h-[55vh] md:gap-4 lg:h-[60vh] lg:p-8">
            {/* Image 1 - Shorter */}
            <div className="relative h-[75%] flex-1 self-start">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/img2.png"
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Image 2 - Full height */}
            <div className="relative h-[90%] flex-1">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/img2.png"
                  alt="Foto 2"
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Image 3 - Shorter, bottom aligned */}
            <div className="relative h-[75%] flex-1 self-end">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/img2.png"
                  alt="Foto 3"
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </div>

          {/* Right: info panel - remains the same */}
          <div className="bg-primary flex h-[45vh] min-h-[500px] items-center px-6 py-14 sm:px-8 md:h-[55vh] lg:h-[60vh] lg:px-12">
            <div className="text-primary-foreground w-full max-w-xl">
              <p className="text-sm tracking-wide uppercase opacity-80">
                Psicologia Clínica &amp; Psicoterapia
              </p>

              <h1 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
                {hero.title}
              </h1>

              {/* decorative underline */}
              <div className="bg-primary-foreground/80 mt-3 h-[3px] w-28 rounded-full" />

              <p className="text-primary-foreground/90 mt-6 text-base leading-relaxed sm:text-lg">
                {hero.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/marcar" variant="surface" className="w-full sm:w-auto">
                  {hero.ctaPrimary}
                </Button>
                <Button href="#contactos" variant="ghost" className="w-full sm:w-auto">
                  {hero.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== END HERO ===== */}

      <Section id="sobre" title={sections.sobre.title}>
        <p className="text-base leading-relaxed sm:text-lg">{sections.sobre.body}</p>
      </Section>

      <Section id="quem" title={sections.quem.title}>
        <ul className="grid list-disc gap-3 pl-5 sm:grid-cols-2 sm:gap-4">
          {sections.quem.audience.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="areas" title={sections.areas.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.areas.items.map((area) => (
            <Card key={area.name} title={area.name}>
              <p className="mt-2 text-sm text-muted">{area.summary}</p>
              <a
                href={`/areas/${encodeURIComponent(area.name.toLowerCase().replace(/\s|\//g, '-'))}`}
                className="mt-3 inline-block text-accent underline underline-offset-4 hover:text-accent-700 transition"
              >
                Ler artigo completo
              </a>
            </Card>
          ))}
        </div>
        {sections.areas.note && (
          <p className="mt-6 text-sm text-muted sm:text-base">{sections.areas.note}</p>
        )}
      </Section>

      <Section id="processo" title={sections.processo.title}>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.processo.steps.map((step, index) => (
            <li key={step.name} className="rounded-lg border p-6 shadow bg-surface text-[color:var(--color-foreground-on-surface)]">
              <div className="text-2xl font-semibold sm:text-3xl">{index + 1}</div>
              <div className="mt-2 text-lg font-medium">{step.name}</div>
              <div className="mt-2 text-sm text-muted">{step.description}</div>
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
        <div className="space-y-3 text-base">
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
              className="text-accent hover:text-accent-700 focus-visible:ring-accent underline transition focus-visible:ring-2 focus-visible:ring-offset-2"
              href={`mailto:${sections.contactos.email}`}
            >
              {sections.contactos.email}
            </a>
          </p>
          <p>
            {sections.contactos.phoneLabel}:{' '}
            {phoneNumber ? (
              <a
                className="text-accent hover:text-accent-700 focus-visible:ring-accent underline transition focus-visible:ring-2 focus-visible:ring-offset-2"
                href={`tel:${sanitizedPhone}`}
              >
                {phoneNumber}
              </a>
            ) : (
              '\u2014'
            )}
          </p>
        </div>
      </Section>
    </>
  )
}
