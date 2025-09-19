import { translations, locales, Locale } from '@/lib/translations'
import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = locales.includes(params?.locale as string as Locale) ? params.locale : 'pt'
  const t = translations[locale as keyof typeof translations]
  const title = t.header.brand
  let description = t.home.hero.subtitle
  if (locale === 'pt') {
    description = description.replace('Lisboa', 'Lisboa')
  }
  const url = 'https://www.mariajoaomartins.com/'
  const image = '/images/maria-joao.jpg'
  return {
    title,
    description,
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
      languages: {
        'pt-PT': url,
        'en': url + 'en',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: title,
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

export default function HomePage() {
  return <HomePageClient />
}
