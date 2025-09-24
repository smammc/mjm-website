import AboutPageContent from './AboutPageContent'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Sobre | Maria João Martins | Psicóloga'
  const description =
    'Informação sobre a formação e experiência de Maria João Martins, psicóloga clínica e psicoterapeuta.'
  const url = 'https://www.mariajoaomartins.com/about'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
  }
}

export default function AboutPage() {
  return <AboutPageContent />
}
