<script setup lang="ts">
import { onMounted, ref } from 'vue'

const logoUrl = '/images/logo.webp'
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bervifix.thai&hl=it'
const appStoreUrl = 'https://apps.apple.com/it/app/thai/id6756217296'

const faqs = [
  {
    question: 'Come posso capire i miei referti medici senza aspettare il medico?',
    answer: 'Con <span class="font-brand">ThAi</span> puoi caricare qualsiasi referto medico (foto o PDF) e ricevere in pochi secondi una <strong>spiegazione chiara e comprensibile</strong>, generata dall\'intelligenza artificiale. Puoi anche <strong>chattare con l\'AI</strong> per fare domande specifiche sui tuoi valori. <span class="font-brand">ThAi</span> non sostituisce il medico, ma ti aiuta a capire i referti in attesa della visita.'
  },
  {
    question: "Esiste un'app per farsi spiegare i referti medici con l'intelligenza artificiale?",
    answer: 'S\u00ec, <span class="font-brand">ThAi</span> \u00e8 l\'app italiana che usa l\'intelligenza artificiale per <strong>spiegarti i referti medici</strong>. Basta caricare il referto e l\'AI lo analizza, evidenzia i valori importanti e ti fornisce una spiegazione comprensibile. Puoi anche fare domande specifiche tramite la <strong>chat AI integrata</strong>.'
  },
  {
    question: 'I miei dati sanitari e referti medici sono al sicuro?',
    answer: '<strong>Assolutamente sì.</strong> I tuoi documenti e referti medici sono salvati sul <strong>tuo Google Drive o iCloud personale</strong>, non su server proprietari. Usiamo i sistemi di sicurezza enterprise di Google e Apple. Nessuno, nemmeno noi, può accedere ai tuoi dati sanitari.'
  },
  {
    question: 'Ho bisogno di un account per usare <span class="font-brand">ThAi</span> per i referti medici?',
    answer: '<strong>Sì, ma usi quello che già hai.</strong> Accedi con il tuo <strong>account Google o Apple</strong>. In questo modo i tuoi referti medici restano nel tuo spazio cloud personale, non su server di terze parti.'
  },
  {
    question: "L'app per referti medici funziona senza internet?",
    answer: '<strong>Parzialmente sì.</strong> Una volta caricato un referto medico e generato il riassunto AI, <strong>puoi consultarlo offline</strong> quando vuoi. Per caricare nuovi documenti o generare nuovi riassunti serve la connessione.'
  },
  {
    question: 'Posco gestire i referti medici di tutta la famiglia?',
    answer: '<strong>Certamente!</strong> <span class="font-brand">ThAi</span> permette di creare <strong>profili paziente separati</strong> per figli, genitori, nonni o chiunque tu assista. Ogni profilo ha i suoi referti medici, gestiti dal tuo unico account con ricerca globale.'
  },
  {
    question: "L'app <span class=\"font-brand\">ThAi</span> con AI sostituisce il mio medico?",
    answer: '<strong>No, mai.</strong> <span class="font-brand">ThAi</span> è uno <strong>strumento di supporto</strong> per capire i referti medici in attesa della visita. Non fornisce diagnosi mediche e non sostituisce il medico. Ti aiuta a prepararti meglio e a fare domande più mirate.'
  },
  {
    question: "Quali piani offre <span class=\"font-brand\">ThAi</span>?",
    answer: '<span class="font-brand"><strong>ThAi</strong></span> offre due piani attivi: <strong>Free</strong> (con pubblicità, 1 paziente, 3 analisi AI e 9 messaggi chat a settimana, categorie illimitate) e <strong>Platinum</strong> (19,99€/anno) con pazienti, analisi AI, chat e categorie illimitate, senza pubblicità.'
  },
  {
    question: "Come funziona l'intelligenza artificiale per i referti medici?",
    answer: "<span class=\"font-brand\">ThAi</span> utilizza un'<strong>intelligenza artificiale specializzata nell'analisi dei referti medici</strong>. La nostra AI è addestrata per comprendere il linguaggio clinico e tradurlo in modo chiaro e comprensibile. Puoi anche chattare con l'AI per fare domande specifiche sui tuoi valori e ottenere chiarimenti immediati."
  },
  {
    question: "Cosa significa il logo di <span class=\"font-brand\">ThAi</span>? Perché c'è un serpente?",
    answer: "Il logo di <span class=\"font-brand\">ThAi</span> si ispira al <strong>Bastone di Asclepio</strong>, simbolo universale della medicina fin dall'antica Grecia. Asclepio era il dio della guarigione, e il serpente attorcigliato al bastone rappresenta <strong>rinascita e rinnovamento</strong>. Abbiamo reinterpretato questo simbolo millenario in chiave moderna: la tradizione medica che incontra l'intelligenza artificiale per aiutarti a <strong>comprendere la tua salute</strong>."
  }
]

const openFaqIndex = ref(0)

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}

onMounted(async () => {
  if (import.meta.client) {
    const gsap = (await import('gsap')).default
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).default

    gsap.registerPlugin(ScrollTrigger)

    // Hero animations - animate TO final state (initial states in CSS)
    gsap.to('.hero-content-text > *', {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2
    })

    gsap.to('.hero-phone', {
      opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)', delay: 0.5
    })

    // Problem cards
    gsap.utils.toArray('.problem-cards > article').forEach((card: any) => {
      gsap.from(card, {
        opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
      })
    })

    // Solutions
    gsap.utils.toArray('.solution-1, .solution-2').forEach((section: any) => {
      gsap.from(section.children, {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' }
      })
    })

    // Process steps
    gsap.utils.toArray('.process-steps > article').forEach((step: any, i: number) => {
      gsap.from(step, {
        opacity: 0, y: 50, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: step, start: 'top 85%', toggleActions: 'play none none reverse' }
      })
    })

    // Comparison table
    gsap.from('.comparison-table', {
      opacity: 0, y: 50, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.comparison-table', start: 'top 85%', toggleActions: 'play none none reverse' }
    })
  }
})
</script>

<template>
  <div>
    <!-- SKIP TO CONTENT FOR ACCESSIBILITY -->
    <a href="#main-content" class="skip-to-content">Vai al contenuto principale</a>

    <!-- HEADER -->
    <header class="navbar bg-base-100/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-white/5" role="banner">
      <div class="container mx-auto px-4">
        <div class="flex-1">
          <a href="/" class="flex items-center gap-3 hover:opacity-80 transition" aria-label="ThAi - Home">
            <img :src="logoUrl" alt="ThAi Logo - App Referti Medici AI" class="w-10 h-10 rounded-full" width="40" height="40" loading="eager">
            <span class="font-brand text-2xl font-bold gradient-text">ThAi</span>
          </a>
        </div>
        <nav class="flex-none hidden lg:flex gap-8 mr-6" role="navigation" aria-label="Menu principale">
          <a href="#funzionalita" class="text-sm font-medium text-white hover:text-white/80 transition">Funzionalità</a>
          <a href="#come-funziona" class="text-sm font-medium text-white hover:text-white/80 transition">Come Funziona</a>
          <a href="#faq" class="text-sm font-medium text-white hover:text-white/80 transition">FAQ</a>
        </nav>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main id="main-content" role="main">

      <!-- HERO SECTION -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern pt-20 md:pt-24" aria-labelledby="hero-title">
        <div class="absolute inset-0 opacity-30" aria-hidden="true">
          <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-400 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
          <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style="animation-delay: 2s; animation-duration: 4s"></div>
          <div class="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-blue-300 rounded-full mix-blend-screen filter blur-[90px] animate-pulse" style="animation-delay: 1s; animation-duration: 5s"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left hero-content-text">
              <div class="hidden lg:inline-block px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span class="text-white text-sm font-medium">🏥 L'AI che ti spiega i referti medici · Spiegazioni chiare e immediate</span>
              </div>

              <h1 id="hero-title" class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Capire i <span class="text-white font-extrabold" style="text-shadow: 0 0 30px rgba(255,255,255,0.3);">referti medici</span>? Ci pensa l'AI
              </h1>

              <p class="text-lg sm:text-xl lg:text-2xl text-white mb-8 leading-relaxed">
                Non capisci un referto? L'AI di <span class="font-brand">ThAi</span> te lo spiega in pochi secondi. Fai domande sui tuoi valori e gestisci la salute di tutta la famiglia. <strong>Dati al sicuro nel tuo Google Drive o iCloud.</strong>
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 items-center">
                <a :href="playStoreUrl" target="_blank" rel="noopener" class="hover:scale-105 transition-transform" aria-label="Scarica ThAi su Google Play Store">
                  <img src="/images/GetItOnGooglePlay_Badge_Web_color.svg" alt="Disponibile su Google Play" class="h-14" width="189" height="56" />
                </a>
                <a :href="appStoreUrl" target="_blank" rel="noopener" class="hover:scale-105 transition-transform" aria-label="Scarica ThAi su App Store">
                  <img src="/images/Download_on_the_App_Store_Badge.svg" alt="Scarica su App Store" class="h-14" width="167" height="56" />
                </a>
              </div>

              <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-white/90">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Login con Google o Apple</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dati nel tuo Drive personale</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Piani flessibili</span>
                </div>
              </div>
            </div>

            <div class="relative hero-phone">
              <img src="/images/screen-1.webp" alt="ThAi App - L'AI che ti spiega i referti medici" class="w-full max-w-[280px] sm:max-w-sm mx-auto float-anim feature-phone rounded-3xl" width="320" height="605" loading="eager" fetchpriority="high" decoding="async">
            </div>
          </div>
        </div>
      </section>

      <!-- LA SFIDA SECTION -->
      <section id="sfida" class="py-16 sm:py-24 bg-base-300" aria-labelledby="sfida-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 id="sfida-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Referti medici incomprensibili? <span class="text-white font-bold">La nostra risposta</span>.
            </h2>
            <p class="text-lg sm:text-xl text-white/90">
              <span class="font-brand text-white font-bold">ThAi</span> nasce per aiutarti a capire i referti medici e gestire i documenti sanitari
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto problem-cards">
            <article class="google-card p-6 sm:p-8">
              <div class="flex items-start gap-3 sm:gap-4">
                <div class="icon-wrapper flex-shrink-0" aria-hidden="true">
                  <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold mb-3 text-white">Il Caos dei Referti Cartacei</h3>
                  <p class="text-white/90 leading-relaxed mb-4">
                    Il Fascicolo Sanitario Elettronico? <strong>Contiene solo gli esami pubblici.</strong> Gli esami privati, le visite specialistiche, i controlli dal dentista... tutto su carta. Risultato? <strong>Cassetti pieni e referti impossibili da trovare quando servono davvero.</strong>
                  </p>
                  <div class="bg-white/10 border border-white/20 rounded-lg p-4">
                    <p class="text-sm text-white/90">
                      <span class="font-brand">ThAi</span> nasce proprio per questo: <strong>un archivio digitale completo</strong>, dove TUTTI i tuoi documenti sanitari sono sempre a portata di tap.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="google-card p-6 sm:p-8">
              <div class="flex items-start gap-3 sm:gap-4">
                <div class="icon-wrapper flex-shrink-0" aria-hidden="true">
                  <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold mb-3 text-white">Il Linguaggio Incomprensibile della Medicina</h3>
                  <p class="text-white/90 leading-relaxed mb-4">
                    <strong>"Emoglobina glicata 5.8%"</strong>... ma è buono o cattivo? Lo cerchi su Google e dopo 10 minuti sei convinto di essere prossimo al trapasso. <strong>Panico, ansia e giorni di attesa prima di parlare col medico.</strong>
                  </p>
                  <div class="bg-white/10 border border-white/20 rounded-lg p-4">
                    <p class="text-sm text-white/90">
                      <span class="font-brand">ThAi</span> usa l'intelligenza artificiale per <strong>tradurre il linguaggio medico in parole comprensibili</strong>. Niente più panico da Google, solo informazioni chiare.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- FUNZIONALITA SECTION -->
      <section id="funzionalita" class="py-16 sm:py-24 gradient-purple" aria-labelledby="funzionalita-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 id="funzionalita-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ecco come <span class="font-brand text-white">ThAi</span> ti aiuta a capire i referti medici
            </h2>
            <p class="text-lg sm:text-xl text-white">
              Spiegazioni AI, chat intelligente e archiviazione sicura. Tutto in un'app semplice
            </p>
          </div>

          <!-- Funzionalità 1: Archiviazione -->
          <article class="grid lg:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto solution-1">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 mb-6">
                <span class="text-2xl" aria-hidden="true">📱</span>
                <span class="text-white font-semibold">Archiviazione Intelligente Referti Medici</span>
              </div>
              <h3 class="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Digitalizza e <span class="text-white">ritrova</span> all'istante
              </h3>
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p class="text-lg text-white/95"><strong>Scannerizza qualsiasi referto medico</strong> cartaceo con la fotocamera</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p class="text-lg text-white/95"><strong>Salva nel tuo Drive personale</strong> (Google Drive o iCloud) - non su server di terzi</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p class="text-lg text-white/95"><strong>Consulta offline</strong> i documenti già caricati, ovunque tu sia</p>
                </div>
              </div>
              <div class="bg-white/10 border border-white/20 rounded-lg p-4">
                <p class="text-white/90 text-sm">
                  <strong>I tuoi dati sanitari restano tuoi</strong>. Salvati nel cloud che già usi, con la sicurezza di Google o Apple.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/screen-1.webp" alt="App ThAi per capire i referti medici con l'AI" class="w-full max-w-[280px] sm:max-w-md mx-auto feature-phone rounded-3xl" width="320" height="605" loading="lazy" decoding="async">
            </div>
          </article>

          <!-- Funzionalità 2: AI -->
          <article class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto solution-2">
            <div class="order-2 lg:order-1">
              <img src="/images/screen-2.webp" alt="Spiegazione AI dei referti medici chiara e comprensibile" class="w-full max-w-[280px] sm:max-w-md mx-auto feature-phone rounded-3xl" width="320" height="605" loading="lazy" decoding="async">
            </div>
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 mb-6">
                <span class="text-2xl" aria-hidden="true">🤖</span>
                <span class="text-white font-semibold">Intelligenza Artificiale per Referti Medici</span>
              </div>
              <h3 class="text-4xl lg:text-5xl font-bold mb-6 text-white">
                L'AI ti spiega i <span class="text-white">referti medici</span>
              </h3>
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p class="text-lg text-white/95"><strong>Spiegazione istantanea</strong> dei referti, chiara e comprensibile</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p class="text-lg text-white/95"><strong>Chat intelligente</strong> - fai domande specifiche sui tuoi valori</p>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p class="text-lg text-white/95"><strong>Spiegazione sempre disponibile</strong> - rileggila offline quando vuoi</p>
                </div>
              </div>
              <div class="bg-white/10 border border-white/20 rounded-lg p-4">
                <p class="text-white/90 text-sm">
                  <strong>Non sostituisce il medico</strong>. <span class="font-brand">ThAi</span> ti aiuta a leggere e capire i referti medici in attesa della visita. Per diagnosi e cure, consulta sempre il tuo medico.
                </p>
              </div>
            </div>
          </article>

          <!-- Funzionalità 3: Chat AI -->
          <article class="grid lg:grid-cols-2 gap-12 items-center mt-24 max-w-6xl mx-auto">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 mb-6">
                <span class="text-2xl" aria-hidden="true">💬</span>
                <span class="text-white font-semibold">Chat AI per Referti Medici</span>
              </div>
              <h3 class="text-4xl font-bold mb-6 text-white">
                Non capisci un valore? <span class="text-white">Chiedi all'AI</span>
              </h3>
              <p class="text-lg text-white/95 mb-8 leading-relaxed">
                Non limitarti alla spiegazione. <strong>Fai domande specifiche sui tuoi valori medici</strong>, chiedi chiarimenti dettagliati o confronta risultati nel tempo. L'intelligenza artificiale ti risponde subito, come un assistente sempre disponibile.
              </p>

              <!-- Chat Example -->
              <div class="space-y-4" role="img" aria-label="Esempio di chat con AI sui referti medici">
                <div class="flex justify-end">
                  <div class="bg-white/15 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 sm:px-5 py-3 max-w-[90%] sm:max-w-[80%] border border-white/20">
                    <p class="text-white/95 text-sm">Il mio colesterolo LDL a 135 mg/dL è alto? Dovrei preoccuparmi?</p>
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="rounded-2xl rounded-tl-sm px-4 sm:px-5 py-3 max-w-[95%] sm:max-w-[85%]" style="background: linear-gradient(135deg, rgba(140, 158, 255, 0.25), rgba(102, 126, 234, 0.3)); border: 1px solid rgba(140, 158, 255, 0.4);">
                    <p class="text-white/95 text-sm leading-relaxed">Il tuo valore di 135 mg/dL è <strong>leggermente sopra il range ottimale</strong> (&lt;100 mg/dL), ma non è preoccupante. È considerato "quasi ottimale". Ti consiglio di discuterne col medico per valutare insieme alimentazione e stile di vita.</p>
                  </div>
                </div>
                <div class="flex justify-end">
                  <div class="bg-white/15 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 sm:px-5 py-3 max-w-[85%] sm:max-w-[75%] border border-white/20">
                    <p class="text-white/95 text-sm">Cosa posso fare per abbassarlo naturalmente?</p>
                  </div>
                </div>
              </div>

              <p class="text-white/80 text-sm mt-6 italic">
                Le risposte AI sono informative e non sostituiscono il parere medico
              </p>
            </div>
            <div>
              <img src="/images/screen-3.webp" alt="Chat AI per farsi spiegare i valori dei referti medici" class="w-full max-w-[280px] sm:max-w-md mx-auto feature-phone rounded-3xl" width="320" height="605" loading="lazy" decoding="async">
            </div>
          </article>
        </div>
      </section>

      <!-- COME FUNZIONA SECTION -->
      <section id="come-funziona" class="py-16 sm:py-24 bg-base-300" aria-labelledby="come-funziona-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 id="come-funziona-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Come capire i referti medici con l'AI: 3 passi
            </h2>
            <p class="text-lg sm:text-xl text-white/90">
              Dal referto cartaceo alla comprensione totale. In meno di 60 secondi.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto process-steps">
            <article class="google-card p-6 sm:p-8 text-center">
              <div class="step-number mx-auto mb-6" aria-hidden="true">1</div>
              <div class="icon-wrapper mx-auto mb-6" aria-hidden="true">
                <svg class="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white">Carica il Referto</h3>
              <p class="text-white/90 leading-relaxed">
                Fotografa il referto cartaceo o importa un PDF. <span class="font-brand">ThAi</span> lo salva nel tuo Google Drive o iCloud e lo prepara per l'analisi AI. Facile come scattare una foto.
              </p>
            </article>

            <article class="google-card p-6 sm:p-8 text-center">
              <div class="step-number mx-auto mb-6" aria-hidden="true">2</div>
              <div class="icon-wrapper mx-auto mb-6" aria-hidden="true">
                <svg class="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white">Comprendi con l'AI</h3>
              <p class="text-white/90 leading-relaxed">
                In pochi secondi, l'intelligenza artificiale analizza il referto e ti spiega ogni valore in modo chiaro. Zero termini incomprensibili, solo spiegazioni chiare e utili sui tuoi referti medici.
              </p>
            </article>

            <article class="google-card p-6 sm:p-8 text-center">
              <div class="step-number mx-auto mb-6" aria-hidden="true">3</div>
              <div class="icon-wrapper mx-auto mb-6" aria-hidden="true">
                <svg class="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white">Approfondisci in Chat</h3>
              <p class="text-white/90 leading-relaxed">
                Hai dubbi su un valore? Non capisci un risultato? Chatta con l'AI e ottieni spiegazioni immediate sui tuoi referti medici. Come avere un assistente medico sempre disponibile.
              </p>
            </article>
          </div>

          <div class="mt-16 text-center">
            <p class="text-xl text-white/90">
              <strong>Il bello?</strong> Dalla foto alla spiegazione completa in <strong>meno di 1 minuto</strong>. E una volta analizzato, il referto con la spiegazione AI è tuo per sempre: consultalo offline, ovunque, in qualsiasi momento.
            </p>
          </div>
        </div>
      </section>

      <!-- FUNZIONALITA EXTRA -->
      <section class="py-16 sm:py-24 gradient-light" aria-labelledby="extra-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 id="extra-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Altre funzionalità per gestire i tuoi referti medici
            </h2>
            <p class="text-lg sm:text-xl text-white">
              Organizzazione e gestione dei documenti sanitari, sempre a portata di mano
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <article class="google-card p-6 sm:p-8">
              <div class="icon-wrapper mb-6" aria-hidden="true">
                <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-white">Gestione Referti Famiglia</h3>
              <p class="text-white/90 leading-relaxed">
                Crea <strong>profili separati</strong> per figli, genitori, nonni. Gestisci i referti medici di tutti da un unico posto, con ricerca globale super veloce.
              </p>
            </article>

            <article class="google-card p-6 sm:p-8">
              <div class="icon-wrapper mb-6" aria-hidden="true">
                <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-white">Categorie Su Misura</h3>
              <p class="text-white/90 leading-relaxed">
                Crea le <strong>categorie che ti servono</strong>: esami del sangue, radiografie, visite specialistiche, ricette... Organizza i referti come preferisci e ritrovali in un istante.
              </p>
            </article>

            <article class="google-card p-6 sm:p-8">
              <div class="icon-wrapper mb-6" aria-hidden="true">
                <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-white">Ricerca Fulminea</h3>
              <p class="text-white/90 leading-relaxed">
                Cerca <strong>tra tutti i referti e tutti i profili</strong> che gestisci con un'unica ricerca. Non ricordi a chi appartiene quel referto medico? <span class="font-brand">ThAi</span> lo trova per te.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- CONFRONTO SECTION -->
      <section id="confronto" class="py-16 sm:py-24 bg-base-300" aria-labelledby="confronto-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 id="confronto-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Perché scegliere <span class="font-brand gradient-text">ThAi</span> per i referti medici
            </h2>
            <p class="text-lg sm:text-xl text-white/90">
              Il confronto con le alternative tradizionali per capire e gestire i referti medici
            </p>
          </div>

          <div class="max-w-5xl mx-auto overflow-x-auto rounded-2xl">
            <table class="comparison-table" role="table" aria-label="Confronto ThAi vs alternative per referti medici">
              <thead>
                <tr>
                  <th scope="col" class="text-left rounded-tl-2xl">Funzionalità</th>
                  <th scope="col">Cartaceo</th>
                  <th scope="col">Fascicolo Sanitario</th>
                  <th scope="col" class="rounded-tr-2xl"><span class="font-brand">ThAi</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-semibold text-left">Tutti i referti medici in un posto</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="Parziale">⚠️ Solo pubblici</td>
                  <td aria-label="Sì">✅</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left">Riassunto AI comprensibile</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="Sì">✅ AI istantanea</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left">Chat AI per domande</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="Sì">✅</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left">Accesso offline</td>
                  <td aria-label="Sì ma problematico">✅ Ma si perde</td>
                  <td aria-label="No">❌ Serve internet</td>
                  <td aria-label="Sì">✅ Sempre</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left">Gestione referti famiglia</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="Parziale">⚠️ Limitata</td>
                  <td aria-label="Sì">✅ Completa</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left">Ricerca veloce documenti</td>
                  <td aria-label="No">❌</td>
                  <td aria-label="Parziale">⚠️ Base</td>
                  <td aria-label="Sì">✅ Globale</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left">Privacy totale dati sanitari</td>
                  <td aria-label="Sì">✅</td>
                  <td aria-label="No">❌ Server pubblici</td>
                  <td aria-label="Sì">✅ Solo tuo cloud</td>
                </tr>
                <tr>
                  <td class="font-semibold text-left rounded-bl-2xl">Costo</td>
                  <td>-</td>
                  <td>-</td>
                  <td class="rounded-br-2xl">✨ Da 0€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-12">
            <p class="text-xl text-white/90">
              <strong><span class="font-brand">ThAi</span></strong> unisce il meglio di entrambi i mondi: <span class="text-white font-semibold">spiegazioni AI chiare e immediate</span> + <span class="text-white font-semibold">privacy del cartaceo</span> + <span class="text-white font-semibold">potenza del digitale</span>
            </p>
          </div>
        </div>
      </section>

      <!-- SICUREZZA SECTION -->
      <section class="py-16 sm:py-24 gradient-purple" aria-labelledby="sicurezza-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 id="sicurezza-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              I tuoi dati sanitari, la tua privacy
            </h2>
            <p class="text-lg sm:text-xl text-white/95">
              Sicurezza e controllo dei referti medici garantiti
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <article class="google-card p-6 sm:p-8">
              <div class="icon-wrapper mb-6" aria-hidden="true">
                <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-white">Il Tuo Cloud Personale</h3>
              <p class="text-white/90 leading-relaxed">
                I referti medici sono salvati sul <strong>tuo Google Drive o iCloud</strong>. Nessun server proprietario, nessun accesso da parte nostra. Solo tu controlli i tuoi dati sanitari.
              </p>
            </article>

            <article class="google-card p-6 sm:p-8">
              <div class="icon-wrapper mb-6" aria-hidden="true">
                <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-white">Sicurezza Enterprise</h3>
              <p class="text-white/90 leading-relaxed">
                Affidati alla <strong>sicurezza di Google e Apple</strong>, le stesse aziende che proteggono miliardi di utenti. I tuoi referti medici sono al sicuro.
              </p>
            </article>

            <article class="google-card p-6 sm:p-8">
              <div class="icon-wrapper mb-6" aria-hidden="true">
                <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-4 text-white">Sempre Disponibile Offline</h3>
              <p class="text-white/90 leading-relaxed">
                Non devi fare nulla. <strong>Quando carichi un referto medico, tutto viene salvato automaticamente</strong> per la consultazione offline. In aereo, in metro, senza campo? I tuoi documenti ci sono sempre.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- FAQ SECTION -->
      <section id="faq" class="py-16 sm:py-24" style="background: linear-gradient(180deg, #1a1a2e 0%, #0f172a 100%);" aria-labelledby="faq-title">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 id="faq-title" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Domande Frequenti: Capire i Referti Medici con l'AI
            </h2>
            <p class="text-lg sm:text-xl text-white/90">
              Tutto quello che devi sapere sull'app <span class="font-brand">ThAi</span> per capire e gestire i referti medici
            </p>
          </div>

          <div class="max-w-3xl mx-auto space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="collapse collapse-plus bg-base-200/50">
              <input
                type="radio"
                :name="'faq-accordion'"
                :id="'faq-' + index"
                :checked="openFaqIndex === index"
                @change="toggleFaq(index)"
              />
              <label
                :for="'faq-' + index"
                class="collapse-title text-xl font-bold text-white cursor-pointer"
                v-html="faq.question"
              >
              </label>
              <div class="collapse-content">
                <p class="text-white/90 leading-relaxed" v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA FINALE -->
      <section class="py-16 sm:py-24 relative overflow-hidden gradient-primary" aria-labelledby="cta-title">
        <div class="absolute inset-0 opacity-10" aria-hidden="true">
          <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style="animation-delay: 1s"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 id="cta-title" class="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Pronto a capire finalmente i tuoi referti medici?
          </h2>
          <p class="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-2xl mx-auto text-white/90">
            Carica un referto e l'AI te lo spiega. Fai domande sui tuoi valori, gestisci la salute di tutta la famiglia. Tutto nel tuo cloud personale. Scarica <span class="font-brand font-bold">ThAi</span> oggi stesso.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8 items-center">
            <a :href="playStoreUrl" target="_blank" rel="noopener" class="hover:scale-105 transition-transform" aria-label="Scarica ThAi su Google Play Store">
              <img src="/images/GetItOnGooglePlay_Badge_Web_color.svg" alt="Disponibile su Google Play" class="h-14" width="189" height="56" />
            </a>
            <a :href="appStoreUrl" target="_blank" rel="noopener" class="hover:scale-105 transition-transform" aria-label="Scarica ThAi su App Store">
              <img src="/images/Download_on_the_App_Store_Badge.svg" alt="Scarica su App Store" class="h-14" width="167" height="56" />
            </a>
          </div>

          <div class="flex flex-wrap gap-8 justify-center text-sm text-white">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-semibold">Login con Google o Apple</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-semibold">Piani Free e Platinum</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-semibold">Dati nel tuo cloud personale</span>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- FOOTER -->
    <footer class="bg-base-100 border-t border-white/5" role="contentinfo">
      <div class="container mx-auto px-6 py-12">
        <div class="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <img :src="logoUrl" alt="ThAi Logo" class="w-12 h-12 rounded-full" width="48" height="48" loading="lazy">
              <span class="font-brand text-2xl font-bold gradient-text">ThAi</span>
            </div>
            <p class="text-white/90">L'app con intelligenza artificiale che ti spiega i referti medici. Capire la tua salute non è mai stato così facile.</p>
          </div>

          <div class="text-center">
            <h3 class="font-bold mb-3 text-white">Link Utili</h3>
            <nav class="space-y-2" aria-label="Link footer">
              <a :href="playStoreUrl" target="_blank" rel="noopener" class="block text-white/90 hover:text-white transition">Scarica App per Capire i Referti Medici</a>
              <a href="mailto:simone.bervi@gmail.com" class="block text-white/90 hover:text-white transition">Contatti</a>
              <a href="#faq" class="block text-white/90 hover:text-white transition">FAQ Referti Medici AI</a>
            </nav>
          </div>

          <div class="text-center md:text-right">
            <p class="text-white/90">© 2026 <span class="font-brand">ThAi</span>. Tutti i diritti riservati.</p>
            <p class="text-sm text-white/80 mt-2">
              Made with ♥️ by <a href="https://x.com/BerviFix" target="_blank" rel="noopener" class="text-white underline">BerviFix</a> from Italy 🍕
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
