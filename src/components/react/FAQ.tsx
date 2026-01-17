import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Phone, Search, Building2, Flame, Droplet, Leaf, Shield, Wrench } from 'lucide-react';

const faqCategories = [
  {
    id: 'about',
    name: 'Om AG Varmeteknikk',
    icon: Building2,
    questions: [
      {
        question: 'Hva gjør AG Varmeteknikk?',
        answer: 'AG Varmeteknikk jobber med service, vedlikehold og oppgradering av oljefyrings- og varmeanlegg, inkludert kontroll, bytte og sanering av oljetanker samt overgang til biofyringsolje.',
      },
      {
        question: 'Hvilke typer kunder jobber dere med?',
        answer: 'Vi leverer tjenester til private boligeiere, borettslag, sameier, næringsbygg, entreprenører og offentlige virksomheter.',
      },
      {
        question: 'Hvor holder dere til?',
        answer: 'Vi holder til på Østlandet og utfører oppdrag i store deler av regionen.',
      },
      {
        question: 'Har dere døgnåpen service?',
        answer: 'Ja, vi tilbyr døgnvakt ved akutte driftsstans og alvorlige feil på fyringsanlegg.',
      },
    ],
  },
  {
    id: 'service',
    name: 'Service og vedlikehold',
    icon: Wrench,
    questions: [
      {
        question: 'Hvor ofte bør et fyringsanlegg ha service?',
        answer: 'Vanligvis én gang i året for private boliger. For næringsbygg og større anlegg anbefales ofte to årlige servicebesøk.',
      },
      {
        question: 'Hva inngår i en service?',
        answer: 'Service inkluderer kontroll og rensing av brenner og kjele, justering, sikkerhetssjekk og vurdering av anleggets tilstand.',
      },
      {
        question: 'Hva skjer hvis jeg ikke utfører service jevnlig?',
        answer: 'Manglende service kan føre til høyere energiforbruk, flere driftsstopp, kortere levetid og økt risiko for feil eller lekkasjer.',
      },
      {
        question: 'Tilbyr dere serviceavtaler?',
        answer: 'Ja, vi tilbyr serviceavtaler med faste intervaller for både private og næringskunder.',
      },
    ],
  },
  {
    id: 'regulations',
    name: 'Oljefyr og regelverk',
    icon: Flame,
    questions: [
      {
        question: 'Er det lov å bruke oljefyr i Norge?',
        answer: 'Ja, det er tillatt å bruke oljefyr så lenge anlegget bruker biofyringsolje og ikke fossil fyringsolje.',
      },
      {
        question: 'Må jeg bytte hele anlegget selv om jeg har oljefyr?',
        answer: 'Nei, i mange tilfeller kan eksisterende anlegg videreføres ved overgang til biofyringsolje.',
      },
    ],
  },
  {
    id: 'biofuel',
    name: 'Biofyringsolje',
    icon: Leaf,
    questions: [
      {
        question: 'Hva er biofyringsolje?',
        answer: 'Biofyringsolje er et fornybart alternativ til fossil fyringsolje, laget av biologiske råvarer som avfallsoljer og fett.',
      },
      {
        question: 'Hvilken biofyringsolje anbefaler dere?',
        answer: 'I de fleste tilfeller anbefaler vi HVO, fordi den er driftssikker, har gode kuldeegenskaper og lang lagringstid.',
      },
      {
        question: 'Må anlegget bygges om for å bruke biofyringsolje?',
        answer: 'HVO kan ofte brukes uten ombygging. Andre typer biofyringsolje kan kreve tilpasning og mer vedlikehold.',
      },
      {
        question: 'Gir biofyringsolje lavere utslipp?',
        answer: 'Ja, biofyringsolje kan redusere klimagassutslipp med opptil 80–90 % sammenlignet med fossil olje.',
      },
    ],
  },
  {
    id: 'tanks',
    name: 'Oljetanker',
    icon: Droplet,
    questions: [
      {
        question: 'Hva er en oljetankkontroll?',
        answer: 'En kontroll innebærer inspeksjon, testing og vurdering av tankens tilstand for å avdekke rust, slitasje eller lekkasjer.',
      },
      {
        question: 'Hvor ofte bør en oljetank kontrolleres?',
        answer: 'Dette avhenger av alder, type og plassering, men eldre og nedgravde tanker bør kontrolleres jevnlig.',
      },
      {
        question: 'Når bør en oljetank byttes?',
        answer: 'Når tanken er gammel, viser tegn til rust, har mye slam, eller ikke oppfyller dagens krav.',
      },
      {
        question: 'Hva er sanering av oljetank?',
        answer: 'Sanering betyr at en tank som ikke lenger er i bruk enten fjernes eller sikres permanent i henhold til regelverk.',
      },
      {
        question: 'Må nedgravde oljetanker fjernes?',
        answer: 'Ikke alltid, men de må enten fjernes eller saneres forskriftsmessig.',
      },
      {
        question: 'Hvem har ansvar for oljetanken?',
        answer: 'Det er alltid eier av eiendommen som er ansvarlig for tankens tilstand.',
      },
    ],
  },
  {
    id: 'safety',
    name: 'Risiko, miljø og trygghet',
    icon: Shield,
    questions: [
      {
        question: 'Hva skjer hvis en oljetank lekker?',
        answer: 'Lekkasjer kan føre til alvorlig grunnforurensning og store økonomiske konsekvenser.',
      },
      {
        question: 'Kan forsikringen dekke skader fra oljelekkasje?',
        answer: 'Ofte ikke fullt ut. Manglende kontroll eller dokumentasjon kan føre til avkortning eller avslag.',
      },
      {
        question: 'Gir nytt tankutstyr økt trygghet?',
        answer: 'Ja, moderne tanker og riktig installasjon reduserer risiko for lekkasje betydelig.',
      },
    ],
  },
  {
    id: 'process',
    name: 'Prosess og gjennomføring',
    icon: Building2,
    questions: [
      {
        question: 'Tilbyr dere befaring før arbeid?',
        answer: 'Ja, vi gjennomfører befaring og gir et konkret forslag før oppstart.',
      },
      {
        question: 'Håndterer dere dokumentasjon og myndighetskrav?',
        answer: 'Ja, vi sørger for nødvendig dokumentasjon og melding til myndigheter der det er påkrevd.',
      },
      {
        question: 'Hvor lang tid tar et tankbytte?',
        answer: 'Tidsbruk varierer, men de fleste tankbytter gjennomføres i løpet av én til to dager.',
      },
    ],
  },
  {
    id: 'pricing',
    name: 'Økonomi og valg',
    icon: Building2,
    questions: [
      {
        question: 'Er det dyrt å bytte oljetank?',
        answer: 'Kostnaden varierer, men et tankbytte er ofte rimeligere enn konsekvensene av en lekkasje.',
      },
      {
        question: 'Lønner det seg å vedlikeholde fremfor å reparere?',
        answer: 'Ja, forebyggende vedlikehold er nesten alltid rimeligere enn akutte reparasjoner.',
      },
      {
        question: 'Kan jeg få råd om hva som lønner seg for mitt anlegg?',
        answer: 'Ja, vi gir ærlige og faglige anbefalinger basert på befaring og behov.',
      },
    ],
  },
  {
    id: 'contact',
    name: 'Praktisk kontakt',
    icon: Phone,
    questions: [
      {
        question: 'Jobber dere kun med oljeanlegg?',
        answer: 'Hovedfokuset er olje- og biofyringsbaserte anlegg, inkludert varmluft og byggvarme.',
      },
      {
        question: 'Kan dere ta hasteoppdrag?',
        answer: 'Ja, ved akutte situasjoner prioriterer vi rask utrykning.',
      },
      {
        question: 'Hvordan bestiller jeg service eller befaring?',
        answer: 'Du kan kontakte oss direkte på telefon eller e-post.',
      },
      {
        question: 'Kan jeg få skriftlig tilbud?',
        answer: 'Ja, etter befaring gir vi et tydelig og oversiktlig tilbud.',
      },
      {
        question: 'Gir dere råd til borettslag og sameier?',
        answer: 'Ja, vi har bred erfaring med større fellesanlegg og styresaker.',
      },
      {
        question: 'Hva er deres viktigste fokus?',
        answer: 'Trygg drift, forskriftsmessige løsninger, lavere risiko og mer miljøvennlig oppvarming.',
      },
    ],
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('about');
  const [openIndex, setOpenIndex] = useState<string | null>('about-0');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter questions based on search
  const filteredCategories = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(
          q =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  const activeQuestions = filteredCategories.find(cat => cat.id === activeCategory)?.questions || [];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ofte stilte <span className="text-brand-blue">spørsmål</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Finn svar på det du lurer på om oljefyr, service og biobrensel
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Søk etter spørsmål..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all bg-white"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(`${category.id}-0`);
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap text-sm ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white border border-zinc-200 text-zinc-700 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Questions */}
        <div className="max-w-4xl mx-auto">
          {searchQuery ? (
            // Search results view
            <div className="space-y-8">
              {filteredCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <category.icon className="w-6 h-6 text-blue-600" />
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((faq, index) => {
                      const faqId = `${category.id}-${index}`;
                      return (
                        <motion.div
                          key={faqId}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-blue-600 transition-colors"
                        >
                          <button
                            onClick={() => setOpenIndex(openIndex === faqId ? null : faqId)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
                          >
                            <span className="font-semibold pr-8">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: openIndex === faqId ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {openIndex === faqId && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4 text-zinc-600 leading-relaxed">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-zinc-500 text-lg">Ingen spørsmål matchet søket ditt</p>
                </div>
              )}
            </div>
          ) : (
            // Category view
            <div className="space-y-3">
              {activeQuestions.map((faq, index) => {
                const faqId = `${activeCategory}-${index}`;
                return (
                  <motion.div
                    key={faqId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-blue-600 transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === faqId ? null : faqId)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
                    >
                      <span className="font-semibold text-lg pr-8">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === faqId ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === faqId && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-zinc-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-50 rounded-2xl p-8 border border-blue-200 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-3">Fant du ikke svar på det du lurte på?</h3>
          <p className="text-zinc-700 mb-6">
            Kontakt oss gjerne direkte, så hjelper vi deg videre
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:40213090"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Ring 40 21 30 90</span>
            </a>
            <a
              href="mailto:post@agvarmeteknikk.no"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
            >
              <span>Send e-post</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
