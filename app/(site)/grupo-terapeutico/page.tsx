import type { Metadata } from 'next'
import GroupPageContent from './GroupPageContent'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Grupo Terapêutico para Mulheres | Maria João Martins | Psicóloga'
  const description =
    'Informação sobre o grupo terapêutico: objetivos, formato e como inscrever-se.'
  const url = 'https://www.mariajoaomartins.com/grupo-terapeutico'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
  }
}

export default function GrupoPage() {
  return <GroupPageContent />
}
