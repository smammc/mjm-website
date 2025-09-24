import ContactPageContent from './ContactPageContent'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Contactos | Maria João Martins | Psicóloga'
  const description = 'Informação de contacto — email e detalhes para marcação de consultas.'
  const url = 'https://www.mariajoaomartins.com/contact'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
  }
}

export default function ContactPage() {
  return <ContactPageContent />
}
