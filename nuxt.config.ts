// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable CSS inlining for better LCP
  experimental: {
    inlineSSRStyles: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@vercel/analytics/nuxt',
    '@vercel/speed-insights/nuxt',
  ],

  site: {
    url: 'https://thaiapp.cloud',
    name: 'ThAi Referti Medici',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'it',
      },
      title: 'ThAi - Capire i Referti Medici con l\'AI | Spiegazioni Chiare e Immediate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'ThAi - Capire i Referti Medici con l\'AI | Spiegazioni Chiare e Immediate' },
        { name: 'description', content: 'Non capisci i referti medici? L\'AI di ThAi te li spiega in pochi secondi. Fai domande sui tuoi valori, chatta con l\'AI e gestisci la salute di tutta la famiglia. Dati al sicuro nel tuo Google Drive o iCloud.' },
        { name: 'author', content: 'BerviFix' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'language', content: 'Italian' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'theme-color', content: '#536DFE' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://thaiapp.cloud/' },
        { property: 'og:title', content: 'ThAi - L\'AI che ti Spiega i Referti Medici' },
        { property: 'og:description', content: 'Non capisci un referto? Caricalo su ThAi: l\'AI te lo spiega. Chatta per approfondire i tuoi valori. Dati al sicuro nel tuo cloud personale.' },
        { property: 'og:image', content: 'https://thaiapp.cloud/og-image.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'ThAi app per capire e leggere i referti medici con l\'intelligenza artificiale' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:site_name', content: 'ThAi Referti Medici' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://thaiapp.cloud/' },
        { name: 'twitter:title', content: 'ThAi - L\'AI che ti Spiega i Referti Medici' },
        { name: 'twitter:description', content: 'Non capisci un referto medico? L\'AI di ThAi te lo spiega. Chatta per approfondire i tuoi valori.' },
        { name: 'twitter:image', content: 'https://thaiapp.cloud/og-image.png' },
        { name: 'twitter:image:alt', content: 'ThAi app per capire e leggere i referti medici con l\'intelligenza artificiale' },
        { name: 'twitter:creator', content: '@BerviFix' },
        { name: 'twitter:site', content: '@BerviFix' },
      ],
      link: [
        { rel: 'canonical', href: 'https://thaiapp.cloud/' },
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/web-app-manifest-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://play.google.com' },
        { rel: 'preload', href: '/images/screen-1.webp', as: 'image', type: 'image/webp', fetchpriority: 'high' },
        // LLMs.txt for AI assistants (ChatGPT, Gemini, Perplexity, Claude)
        { rel: 'alternate', href: '/llms.txt', type: 'text/plain', title: 'LLMs.txt' },
        { rel: 'alternate', href: '/llms-full.txt', type: 'text/plain', title: 'LLMs Full Context' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ThAi",
            "alternateName": "ThAi Referti Medici",
            "description": "App che ti spiega i referti medici con l'intelligenza artificiale. Carica un referto e ottieni una spiegazione chiara e comprensibile. Chatta con l'AI per fare domande sui tuoi valori. Archivia i documenti sanitari nel tuo Google Drive o iCloud personale.",
            "applicationCategory": "HealthApplication",
            "applicationSubCategory": "Medical AI Assistant",
            "operatingSystem": ["Android 6.0+", "iOS 14.0+"],
            "offers": [
              {
                "@type": "Offer",
                "name": "Free",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Platinum",
                "price": "19.99",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              }
            ],
            "author": {
              "@type": "Organization",
              "name": "BerviFix",
              "url": "https://x.com/BerviFix"
            },
            "publisher": {
              "@type": "Organization",
              "name": "BerviFix"
            },
            "downloadUrl": "https://play.google.com/store/apps/details?id=com.bervifix.thai&hl=it",
            "installUrl": "https://play.google.com/store/apps/details?id=com.bervifix.thai&hl=it",
            "screenshot": [
              "https://thaiapp.cloud/images/screen-1.webp",
              "https://thaiapp.cloud/images/screen-2.webp",
              "https://thaiapp.cloud/images/screen-3.webp"
            ],
            "softwareVersion": "0.1.5",
            "datePublished": "2025-01-01",
            "dateModified": "2026-03-21",
            "inLanguage": "it",
            "isAccessibleForFree": true,
            "featureList": [
              "Spiegazione referti medici con AI chiara e comprensibile",
              "Chat AI per domande sui valori e gli esami medici",
              "Lettura e comprensione automatica del linguaggio clinico",
              "Riassunti AI istantanei dei referti medici",
              "Digitalizzazione referti medici con fotocamera",
              "Archiviazione sicura su Google Drive o iCloud personale",
              "Gestione profili famiglia e pazienti multipli",
              "Organizzazione per categorie personalizzabili",
              "Consultazione offline dei referti e delle spiegazioni AI",
              "Ricerca globale tra tutti i documenti e pazienti"
            ],
            "keywords": "capire referti medici, spiegazione referti, lettura referti medici, AI per referti medici, intelligenza artificiale referti medici, comprendere esami del sangue, app per capire le analisi, app referti medici, spiegare referti medici, chat AI referti, documenti sanitari, digitalizzare referti"
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ThAi Referti Medici",
            "alternateName": "ThAi",
            "url": "https://thaiapp.cloud/",
            "description": "L'app con intelligenza artificiale che ti spiega i referti medici. Fai domande sui tuoi valori e gestisci la salute di tutta la famiglia.",
            "inLanguage": "it-IT",
            "publisher": {
              "@type": "Organization",
              "name": "BerviFix",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thaiapp.cloud/web-app-manifest-512x512.png"
              }
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ThAi - App AI per Capire e Leggere i Referti Medici",
            "url": "https://thaiapp.cloud/",
            "description": "Landing page ufficiale di ThAi: l'app che ti spiega i referti medici con l'AI. Fai domande sui tuoi valori e archivia i documenti nel tuo cloud personale.",
            "inLanguage": "it-IT",
            "isPartOf": {
              "@type": "WebSite",
              "name": "ThAi Referti Medici",
              "url": "https://thaiapp.cloud/"
            },
            "about": {
              "@type": "Thing",
              "name": "Comprensione e spiegazione dei referti medici con intelligenza artificiale"
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BerviFix",
            "url": "https://thaiapp.cloud/",
            "logo": "https://thaiapp.cloud/web-app-manifest-512x512.png",
            "sameAs": [
              "https://x.com/BerviFix",
              "https://play.google.com/store/apps/developer?id=BerviFix"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "simone.bervi@gmail.com",
              "contactType": "customer support",
              "availableLanguage": "Italian"
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Come posso capire i miei referti medici senza aspettare il medico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Con l'app ThAi puoi caricare qualsiasi referto medico (foto o PDF) e ricevere in pochi secondi una spiegazione chiara e comprensibile, generata dall'intelligenza artificiale. Puoi anche chattare con l'AI per fare domande specifiche sui tuoi valori. ThAi non sostituisce il medico, ma ti aiuta a capire i referti in attesa della visita."
                }
              },
              {
                "@type": "Question",
                "name": "Esiste un'app per farsi spiegare i referti medici con l'intelligenza artificiale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "S\u00ec, ThAi \u00e8 l'app italiana che usa l'intelligenza artificiale per spiegarti i referti medici. Basta caricare il referto e l'AI lo analizza, evidenzia i valori importanti e ti fornisce una spiegazione comprensibile. Puoi anche fare domande specifiche tramite la chat AI integrata."
                }
              },
              {
                "@type": "Question",
                "name": "I miei dati sanitari sono al sicuro con l'app ThAi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Assolutamente s\u00ec. I tuoi documenti e referti medici sono salvati sul tuo Google Drive o iCloud personale, non su server proprietari. Usiamo i sistemi di sicurezza enterprise di Google e Apple. Nessuno, nemmeno noi, pu\u00f2 accedere ai tuoi dati sanitari."
                }
              },
              {
                "@type": "Question",
                "name": "L'app ThAi per referti medici sostituisce il medico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, mai. ThAi \u00e8 uno strumento di supporto per capire i referti medici in attesa della visita. Non fornisce diagnosi mediche e non sostituisce il parere del medico. Ti aiuta a prepararti meglio e a fare domande pi\u00f9 mirate durante la visita."
                }
              },
              {
                "@type": "Question",
                "name": "Quali piani offre ThAi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ThAi offre due piani attivi: Free (con pubblicit\u00e0, 1 paziente, 3 analisi AI e 9 messaggi chat a settimana, categorie illimitate) e Platinum (19,99\u20ac/anno) con pazienti, analisi AI, chat e categorie illimitate e senza pubblicit\u00e0."
                }
              },
              {
                "@type": "Question",
                "name": "Posso usare ThAi per consultare i referti medici offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parzialmente s\u00ec. Una volta caricato un referto medico e generata la spiegazione AI, puoi consultarla offline quando vuoi, ovunque tu sia. Per caricare nuovi documenti o generare nuove spiegazioni serve la connessione internet."
                }
              },
              {
                "@type": "Question",
                "name": "Posso gestire i referti medici di tutta la famiglia con ThAi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Certamente! ThAi permette di creare profili paziente separati per figli, genitori, nonni o chiunque tu assista. Ogni profilo ha i suoi documenti sanitari, gestiti dal tuo unico account con ricerca globale super veloce."
                }
              },
              {
                "@type": "Question",
                "name": "Come funziona l'intelligenza artificiale di ThAi per i referti medici?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ThAi utilizza un'intelligenza artificiale specializzata nell'analisi dei referti medici. La nostra AI \u00e8 addestrata per comprendere il linguaggio clinico e tradurlo in modo chiaro e comprensibile. Puoi anche chattare con l'AI per fare domande specifiche sui tuoi valori e ottenere chiarimenti immediati."
                }
              },
              {
                "@type": "Question",
                "name": "Cosa significa il logo di ThAi? Perch\u00e9 c'\u00e8 un serpente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il logo di ThAi si ispira al Bastone di Asclepio, simbolo universale della medicina fin dall'antica Grecia. Asclepio era il dio della guarigione e il serpente attorcigliato al bastone rappresenta rinascita e rinnovamento. Abbiamo reinterpretato questo simbolo millenario in chiave moderna: la tradizione medica che incontra l'intelligenza artificiale per aiutarti a comprendere la tua salute."
                }
              }
            ]
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://thaiapp.cloud/"
              }
            ]
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Come capire i referti medici con l'AI di ThAi",
            "description": "Guida passo passo per capire i tuoi referti medici con l'intelligenza artificiale dell'app ThAi",
            "totalTime": "PT1M",
            "tool": {
              "@type": "HowToTool",
              "name": "Smartphone con app ThAi installata"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Carica il referto",
                "text": "Apri l'app ThAi e carica il referto medico: scatta una foto al documento cartaceo o importa un PDF. L'app lo salva automaticamente nel tuo Google Drive o iCloud personale.",
                "image": "https://thaiapp.cloud/images/screen-1.webp"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Ricevi la spiegazione AI",
                "text": "In pochi secondi, l'intelligenza artificiale analizza il referto e ti fornisce una spiegazione chiara e comprensibile. Ogni valore viene spiegato senza termini medici complessi.",
                "image": "https://thaiapp.cloud/images/screen-2.webp"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Fai domande all'AI",
                "text": "Hai dubbi su un valore specifico? Usa la chat AI per fare domande e ottenere risposte immediate. Come avere un assistente medico sempre disponibile per spiegarti i referti.",
                "image": "https://thaiapp.cloud/images/screen-3.webp"
              }
            ]
          })
        }
      ],
      noscript: [
        {
          children: `<div style="padding: 40px; max-width: 800px; margin: 0 auto;">
            <h1>ThAi - App per Capire i Referti Medici con l'Intelligenza Artificiale</h1>
            <p>Non capisci i referti medici? L'AI di ThAi te li spiega in pochi secondi. Fai domande sui tuoi valori, chatta con l'intelligenza artificiale e gestisci la salute di tutta la famiglia. I tuoi dati sanitari sono salvati nel tuo Google Drive o iCloud personale, garantendo privacy totale.</p>
            <h2>Funzionalit\u00e0 Principali dell'App per Capire i Referti Medici</h2>
            <ul>
              <li><strong>Spiegazione referti medici con AI</strong> - L'intelligenza artificiale ti spiega i referti in modo chiaro e comprensibile</li>
              <li><strong>Chat AI per domande</strong> - Fai domande specifiche sui tuoi valori e ottieni risposte immediate</li>
              <li><strong>Lettura linguaggio clinico</strong> - L'AI traduce il linguaggio medico in parole semplici</li>
              <li><strong>Digitalizzazione referti</strong> - Fotografa qualsiasi referto cartaceo con la fotocamera dello smartphone</li>
              <li><strong>Gestione famiglia</strong> - Crea profili separati per figli, genitori e nonni</li>
              <li><strong>Privacy garantita</strong> - I dati sono salvati nel TUO cloud personale, non su server esterni</li>
              <li><strong>Consultazione offline</strong> - Accedi ai tuoi referti e alle spiegazioni AI anche senza connessione internet</li>
            </ul>
            <p><a href="https://play.google.com/store/apps/details?id=com.bervifix.thai&hl=it">Scarica ThAi su Google Play Store</a> | <a href="https://apps.apple.com/it/app/thai/id6756217296">Scarica ThAi su App Store</a></p>
          </div>`
        }
      ]
    }
  },

  googleFonts: {
    families: {
      Lexend: [300, 400, 500, 600, 700, 800],
      'Montserrat+Alternates': [400, 700],
    },
    display: 'swap',
    preconnect: true,
    prefetch: true,
  },

  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg'],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },
})
