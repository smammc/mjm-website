'use client'

export default function ContactPageContent() {
  const content = {
    title: 'Contactos',
    body: 'Para marcar consulta ou obter mais informações, por favor envie um email para maria.aguiar.martins@hospitaldaluz.pt ou utilize o formulário de contacto.',
  }

  return (
    <section className="bg-surface rounded-lg border p-8">
      <h2 className="text-foreground mb-4 text-2xl font-bold">{content.title}</h2>
      <p className="text-muted mt-4">{content.body}</p>
    </section>
  )
}
