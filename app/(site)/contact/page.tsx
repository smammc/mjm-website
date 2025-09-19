import ContactPageContent from './ContactPageContent'
import { translations, locales } from '@/lib/translations'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = locales.includes(params?.locale as any) ? params.locale : 'pt'
  const t = translations[locale as keyof typeof translations]
  const title = t.contactPage.title + ' | ' + t.header.brand
  const description = t.contactPage.body
  const url = 'https://www.mariajoaomartins.com/contact'
  const image = '/images/maria-joao.jpg'
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'pt-PT': url,
        'en': url.replace('/contact', '/en/contact'),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: t.header.brand,
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default function ContactPage() {
  return <ContactPageContent />
}
