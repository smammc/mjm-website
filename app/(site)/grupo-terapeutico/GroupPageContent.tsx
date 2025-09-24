'use client'

import Button from '@/components/Button'
import Section from '@/components/Section'

export default function GroupPageContent() {
  const group = {
    title: 'Grupo Terapêutico para Mulheres',
    intro:
      'Um espaço seguro e confidencial para fortalecer autoestima, clarificar padrões relacionais e sentir pertença.',
    highlights: [
      'Grupos pequenos • encontros semanais • presencial/online',
      'Objetivos: autocuidado, limites, comunicação, suporte mútuo',
    ],
    cta: 'Inscrever-me no Grupo',
  }

  return (
    <Section title={group.title}>
      <p className="text-lg">{group.intro}</p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        {group.highlights.map((item: string) => (
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
