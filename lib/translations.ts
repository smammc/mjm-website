export type Locale = 'pt' | 'en'

type NavLink = {
  href: string
  label: string
}

type Testimonial = {
  quote: string
  author?: string
}

type HomeContent = {
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    imageAlt: string
  }
  sections: {
    sobre: {
      title: string
      body: string
    }
    quem: {
      title: string
      audience: string[]
    }
    areas: {
      title: string
      items: string[]
      note: string
    }
    processo: {
      title: string
      steps: string[]
    }
    grupo: {
      title: string
      intro: string
      highlights: string[]
      ctaPrimary: string
      ctaSecondary: string
    }
    testemunhos: {
      title: string
      items: Testimonial[]
    }
    consultas: {
      title: string
      details: string
      cta: string
    }
    contactos: {
      title: string
      emailLabel: string
      email: string
      phoneLabel: string
      phone?: string
    }
  }
}

type GroupPageContent = {
  title: string
  intro: string
  highlights: string[]
  cta: string
}

type SimplePageContent = {
  title: string
  body: string
}

export type Translations = {
  header: {
    brand: string
    navLabel: string
    menuOpen: string
    menuClose: string
    book: string
    languageLabel: string
    languageNames: Record<Locale, string>
    links: NavLink[]
  }
  footer: {
    rights: string
    license: string
    privacy: string
  }
  home: HomeContent
  groupPage: GroupPageContent
  aboutPage: SimplePageContent
  contactPage: SimplePageContent
}

export const translations: Record<Locale, Translations> = {
  pt: {
    header: {
      brand: 'Maria João Martins | Psicóloga',
      navLabel: 'Navegação principal',
      menuOpen: 'Abrir navegação',
      menuClose: 'Fechar navegação',
      book: 'Marcar Consulta',
      languageLabel: 'Selecionar idioma',
      languageNames: {
        pt: 'Português',
        en: 'Inglês',
      },
      links: [
        { href: '#sobre', label: 'Sobre' },
        { href: '#areas', label: 'Áreas' },
        { href: '#processo', label: 'Como Funciona' },
        { href: '#grupo', label: 'Grupo' },
        { href: '#contactos', label: 'Contactos' },
      ],
    },
    footer: {
      rights: '© {year} Maria João Martins | Psicóloga — Todos os direitos reservados',
      license: 'Cédula Profissional OPP nº 9920',
      privacy: 'Política de Privacidade',
    },
    home: {
      hero: {
        title: 'Apoio psicológico e psicoterapia para jovens, adultos e casais.',
        subtitle:
          'Mais de 30 anos de experiência. Consultas presenciais em Lisboa e online em todo o país.',
        ctaPrimary: 'Marcar Consulta',
        ctaSecondary: 'Falar Comigo',
        imageAlt: 'Psicóloga Maria João Martins',
      },
      sections: {
        sobre: {
          title: 'Sobre Mim',
          body:
            'Sou a Maria João Martins, Psicóloga Clínica, Psicoterapeuta e Coach Sistémica com mais de 30 anos de experiência. Acompanho pessoas em processos de mudança pessoal e relacional, integrando diferentes abordagens para responder às necessidades de cada pessoa.',
        },
        quem: {
          title: 'Quem Acompanho',
          audience: ['Jovens (16+)', 'Adultos', 'Casais', 'Grupos/Famílias'],
        },
        areas: {
          title: 'Áreas de Intervenção',
          items: [
            'Ansiedade e Stress',
            'Tristeza/Depressão',
            'Luto e Perdas',
            'Medos e Fobias',
            'Bullying e Ciberbullying',
            'Dificuldades de Comunicação e Interação Social',
            'Terapia de Casal',
            'Terapia de Grupo',
          ],
          note: 'Integração das 3 componentes ACC: afectiva, cognitiva e comportamental.',
        },
        processo: {
          title: 'Como Funciona',
          steps: ['Marcação', 'Sessão de Avaliação', 'Plano Personalizado'],
        },
        grupo: {
          title: 'Grupo Terapêutico para Mulheres',
          intro:
            'Um espaço seguro e confidencial para fortalecer autoestima, clarificar padrões relacionais e sentir pertença.',
          highlights: [
            'Grupos pequenos • encontros semanais • presencial/online',
            'Objetivos: autocuidado, limites, comunicação, suporte mútuo',
          ],
          ctaPrimary: 'Inscrever-me no Grupo',
          ctaSecondary: 'Falar Comigo',
        },
        testemunhos: {
          title: 'Testemunhos',
          items: [
            { quote: 'Encontrei um espaço onde pude ser eu própria, sem julgamentos.' },
            { quote: 'Sinto-me mais preparada para lidar com a ansiedade no trabalho.' },
            { quote: 'A terapia ajudou-me a reencontrar equilíbrio e confiança.' },
          ],
        },
        consultas: {
          title: 'Consultas',
          details: 'Horário: 09h–20h · Modalidade: Presencial e Online (Zoom/Teams)',
          cta: 'Marcar Consulta',
        },
        contactos: {
          title: 'Contactos',
          emailLabel: 'Email',
          email: 'maria.aguiar.martins@hospitaldaluz.pt',
          phoneLabel: 'Telefone/WhatsApp',
          phone: '',
        },
      },
    },
    groupPage: {
      title: 'Grupo Terapêutico para Mulheres',
      intro:
        'Espaço seguro e confidencial para fortalecer autoestima, clarificar padrões relacionais e sentir pertença.',
      highlights: [
        'Grupos pequenos • encontros semanais • presencial/online',
        'Objetivos: autocuidado, limites, comunicação, suporte mútuo',
      ],
      cta: 'Inscrever-me no Grupo',
    },
    aboutPage: {
      title: 'Sobre',
      body: 'Conte a sua história aqui.',
    },
    contactPage: {
      title: 'Contactos',
      body: 'Adicione um formulário ou detalhes de contacto.',
    },
  },
  en: {
    header: {
      brand: 'Maria João Martins | Psychologist',
      navLabel: 'Main navigation',
      menuOpen: 'Open navigation',
      menuClose: 'Close navigation',
      book: 'Book a Session',
      languageLabel: 'Select language',
      languageNames: {
        pt: 'Portuguese',
        en: 'English',
      },
      links: [
        { href: '#sobre', label: 'About' },
        { href: '#areas', label: 'Areas' },
        { href: '#processo', label: 'How It Works' },
        { href: '#grupo', label: 'Group' },
        { href: '#contactos', label: 'Contact' },
      ],
    },
    footer: {
      rights: '© {year} Maria João Martins | Psychologist — All rights reserved',
      license: 'OPP professional license nº 9920',
      privacy: 'Privacy Policy',
    },
    home: {
      hero: {
        title: 'Psychological support and psychotherapy for teens, adults, and couples.',
        subtitle:
          'Over 30 years of experience. In-person sessions in Lisbon and online across the country.',
        ctaPrimary: 'Book a Session',
        ctaSecondary: 'Contact Me',
        imageAlt: 'Psychologist Maria João Martins',
      },
      sections: {
        sobre: {
          title: 'About Me',
          body:
            "I'm Maria João Martins, a Clinical Psychologist, Psychotherapist, and Systemic Coach with over 30 years of experience. I support people through personal and relational change, combining different approaches to meet each person's needs.",
        },
        quem: {
          title: 'Who I Work With',
          audience: ['Young people (16+)', 'Adults', 'Couples', 'Groups/Families'],
        },
        areas: {
          title: 'Areas of Practice',
          items: [
            'Anxiety and Stress',
            'Sadness/Depression',
            'Grief and Loss',
            'Fears and Phobias',
            'Bullying and Cyberbullying',
            'Communication and Social Interaction Difficulties',
            'Couples Therapy',
            'Group Therapy',
          ],
          note: 'Integration of the three ACC components: affective, cognitive, and behavioural.',
        },
        processo: {
          title: 'How It Works',
          steps: ['Booking', 'Assessment Session', 'Personalized Plan'],
        },
        grupo: {
          title: 'Therapeutic Group for Women',
          intro:
            'A safe and confidential space to strengthen self-esteem, clarify relational patterns, and feel belonging.',
          highlights: [
            'Small groups • weekly meetings • in-person/online',
            'Goals: self-care, boundaries, communication, mutual support',
          ],
          ctaPrimary: 'Join the Group',
          ctaSecondary: 'Contact Me',
        },
        testemunhos: {
          title: 'Testimonials',
          items: [
            { quote: 'I found a space where I could be myself without judgment.' },
            { quote: 'I feel more prepared to deal with anxiety at work.' },
            { quote: 'Therapy helped me recover balance and confidence.' },
          ],
        },
        consultas: {
          title: 'Sessions',
          details: 'Schedule: 9am–8pm · Format: In-person and Online (Zoom/Teams)',
          cta: 'Book a Session',
        },
        contactos: {
          title: 'Contact',
          emailLabel: 'Email',
          email: 'maria.aguiar.martins@hospitaldaluz.pt',
          phoneLabel: 'Phone/WhatsApp',
          phone: '',
        },
      },
    },
    groupPage: {
      title: 'Therapeutic Group for Women',
      intro:
        'A safe and confidential space to strengthen self-esteem, clarify relational patterns, and feel belonging.',
      highlights: [
        'Small groups • weekly meetings • in-person/online',
        'Goals: self-care, boundaries, communication, mutual support',
      ],
      cta: 'Join the Group',
    },
    aboutPage: {
      title: 'About',
      body: 'Tell your story here.',
    },
    contactPage: {
      title: 'Contact',
      body: 'Add a form or contact details.',
    },
  },
}

export const locales: readonly Locale[] = ['pt', 'en'] as const
