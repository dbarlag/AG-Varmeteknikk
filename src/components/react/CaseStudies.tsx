import { motion } from 'motion/react';
import { Building2, Home, Factory, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  icon: typeof Building2;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'borettslag',
    icon: Building2,
    category: 'Borettslag',
    title: 'Borettslag i Oslo byttet til HVO og moderniserte tankrom',
    challenge: 'Et større borettslag med 40 leiligheter hadde en 30 år gammel nedgravd oljetank og oljefyr som gikk på fossil olje. Styret ønsket både miljøvennlig løsning og redusert risiko for lekkasje.',
    solution: 'Vi utførte sanering av gammel tank, installerte ny innendørs plasttank med moderne sikkerhetsutstyr, oppgraderte oljefyret og konverterte anlegget til HVO biofyringsolje.',
    results: [
      'Reduksjon i klimagassutslipp med 85%',
      'Eliminert risiko for grunnforurensning',
      'Lavere vedlikeholdskostnader',
      'Forskriftsmessig dokumentasjon på plass',
    ],
  },
  {
    id: 'private',
    icon: Home,
    category: 'Privatbolig',
    title: 'Enebolig fikk kontroll på høyt oljeforbruk',
    challenge: 'Huseier opplevde stadig høyere oljeforbruk og dårlig varmeeffekt. Anlegget var 12 år gammelt og hadde ikke hatt årlig service på mange år.',
    solution: 'Fullstendig service med rensing av brenner og kjele, justering av forbrenning, bytte av slitte komponenter og oppgradering til mer energieffektiv styring.',
    results: [
      'Reduksjon i oljeforbruk på 20%',
      'Bedre og jevnere varme',
      'Lengre levetid på utstyret',
      'Serviceavtale sikrer fremtidig drift',
    ],
  },
  {
    id: 'commercial',
    icon: Factory,
    category: 'Næringseiendom',
    title: 'Industribygg fikk akutt hjelp og forebyggende plan',
    challenge: 'En produksjonsbedrift opplevde totalstopp på oljefyranlegget midt i en kald vinteruke, med risiko for frostskader og produksjonsstans.',
    solution: 'Døgnvakt rykket ut innen 2 timer, midlertidig løsning ble etablert samme dag, permanent reparasjon gjennomført og serviceavtale med to årlige kontroller opprettet.',
    results: [
      'Produksjon gjenopptatt etter 6 timer',
      'Forebyggende serviceavtale på plass',
      'Identifisert andre potensielle feil',
      'Trygghet for fremtidig drift',
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case studies og <span className="text-blue-600">suksesshistorier</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Se hvordan vi har hjulpet kunder med service, oppgraderinger og miljøvennlige løsninger
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:border-blue-600 transition-all"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <study.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600">{study.category}</span>
                    <h3 className="text-2xl font-bold">{study.title}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-zinc-800 mb-2">Utfordring</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-800 mb-2">Løsning</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-800 mb-2">Resultater</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-zinc-600 mb-4">
            Har du en liknende utfordring? Vi hjelper gjerne deg også.
          </p>
          <a
            href="tel:40213090"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            Ring oss for en uforpliktende prat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
