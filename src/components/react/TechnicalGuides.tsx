import { motion } from 'motion/react';
import { FileText, ChevronRight } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

const technicalGuides: Guide[] = [
  {
    id: 'service-guide',
    title: 'Komplett guide til årlig oljefyrservice',
    description: 'Detaljert gjennomgang av hva som inngår i profesjonell service av oljefyr, inkludert brennerkontroll, kjelekontroll, røykgassanalyse og sikkerhetsjekk.',
    topics: [
      'Kontroll og rensing av oljebrenner',
      'Kjelekontroll og varmeveksler',
      'Røykgassanalyse og energieffektivitet',
      'Sikkerhetsfunksjoner og termostater',
    ],
  },
  {
    id: 'tank-inspection',
    title: 'Kontroll av oljetank – Metoder og regelverk',
    description: 'Hvordan gjennomføres en profesjonell tankkontroll? Les om inspeksjonsmetoder, tetthetsprøving, korrosjonsanalyse og når tanken må byttes eller saneres.',
    topics: [
      'Visuell inspeksjon av tankrom',
      'Tetthetsprøving og lekkasjedeteksjon',
      'Slamprøver og tankinnvendig kontroll',
      'Dokumentasjon og myndighetskrav',
    ],
  },
  {
    id: 'biofuel-conversion',
    title: 'Overgang til biofyringsolje – Steg for steg',
    description: 'Praktisk veiledning for å bytte fra fossil olje til biofyringsolje. Fra valg av biobrenseløsning til teknisk tilpasning og oppfølging.',
    topics: [
      'Valg mellom HVO, FAME og andre biobrensler',
      'Kompatibilitet med eksisterende anlegg',
      'Nødvendige tilpasninger og oppgraderinger',
      'Kostnader og subsidieordninger',
    ],
  },
  {
    id: 'tank-replacement',
    title: 'Utskifting av oljetank – Planlegging og gjennomføring',
    description: 'Alt om tankbytte: fra befaring og tilbud til utførelse, dokumentasjon og miljøhåndtering av gammel tank.',
    topics: [
      'Befaring og dimensjonering',
      'Nedgravd vs. innendørs tankløsninger',
      'Miljøforsvarlig håndtering av gammelt utstyr',
      'Tidsbruk og praktisk gjennomføring',
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Feilsøking på oljefyr – Vanlige problemer og løsninger',
    description: 'Identifiser og forstå de vanligste feilene på oljefyringsanlegg, fra driftsstans og støyproblemer til dårlig forbrenning og høyt forbruk.',
    topics: [
      'Brenneren starter ikke – mulige årsaker',
      'Støy, vibrasjoner og lukter',
      'Dårlig forbrenning og sotavleiringer',
      'Høyt oljeforbruk – hva kan være galt?',
    ],
  },
  {
    id: 'regulations',
    title: 'Regelverk for oljefyr og oljetanker i Norge',
    description: 'Oversikt over gjeldende krav fra myndigheter, brannvern og forsikringsselskaper. Hva er din plikt som eier?',
    topics: [
      'Krav til service og dokumentasjon',
      'Forskrifter for tankanlegg og sikkerhet',
      'Forbud mot fossil fyringsolje',
      'Forholdet til forsikring og ansvar',
    ],
  },
];

export function TechnicalGuides() {
  return (
    <section className="py-16 px-6 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">
            Tekniske <span className="text-blue-600">veiledninger</span>
          </h2>
          <p className="text-zinc-600 max-w-3xl">
            Grundig informasjon om service, vedlikehold, regelverk og tekniske løsninger for oljefyringsanlegg
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 hover:border-blue-600 hover:bg-white transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <FileText className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold flex-1 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                {guide.description}
              </p>

              <ul className="space-y-2 mb-5">
                {guide.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <button className="text-sm text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Les hele veiledningen
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
