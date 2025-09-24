'use client'

export default function AboutPageContent() {
  const content = {
    title: 'Sobre',
    body: 'Sou a Maria João Martins, Psicóloga Clínica, Psicoterapeuta e Coach Sistêmica com mais de 30 anos de experiência. Acompanho pessoas em processos de mudança pessoal e relacional, integrando diferentes abordagens para responder às necessidades de cada pessoa.',
  }

  return (
    <section className="bg-surface rounded-lg border p-8">
      <h2 className="text-foreground mb-4 text-2xl font-bold">{content.title}</h2>
      <p className="text-muted mt-4">{content.body}</p>
    </section>
  )
}
