import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Overgangen fra fossil olje til biofyringsolje – Alt du trenger å vite',
    excerpt: 'Lurer du på hvordan du bytter fra fossil fyringsolje til biofyringsolje? Vi forklarer prosessen, kostnadene og hvilke fordeler du får med fornybar oppvarming.',
    category: 'Biofyringsolje',
    readTime: '5 min',
    date: '2025-01-10',
    slug: 'overgang-til-biofyringsolje',
  },
  {
    id: '2',
    title: 'Tegn på at oljetanken din bør kontrolleres eller byttes',
    excerpt: 'Rust, lekkasjer og høy alder er faresignaler. Les om hvilke tegn du bør være oppmerksom på for å unngå alvorlig grunnforurensning og store kostnader.',
    category: 'Oljetanker',
    readTime: '4 min',
    date: '2025-01-08',
    slug: 'nar-bor-oljetank-byttes',
  },
  {
    id: '3',
    title: 'HVO vs FAME – Hvilken biofyringsolje passer best for ditt anlegg?',
    excerpt: 'HVO og FAME er to typer biofyringsolje med ulike egenskaper. Vi sammenligner driftssikkerhet, lagring, vedlikehold og miljøpåvirkning.',
    category: 'Biofyringsolje',
    readTime: '6 min',
    date: '2025-01-05',
    slug: 'hvo-vs-fame-sammenligning',
  },
  {
    id: '4',
    title: 'Årlig service av oljefyr – Hvorfor det lønner seg økonomisk',
    excerpt: 'Manglende service fører til høyere strømregninger og kortere levetid. Beregn hvor mye du kan spare med jevnlig vedlikehold av fyringsanlegget.',
    category: 'Service',
    readTime: '5 min',
    date: '2025-01-03',
    slug: 'lonner-seg-service-oljefyr',
  },
  {
    id: '5',
    title: 'Sanering av nedgravd oljetank – Regelverk og fremgangsmåte',
    excerpt: 'Skal du sanere en gammel nedgravd oljetank? Her er alt du må vite om regelverket, prosessen og hvem som har ansvar.',
    category: 'Oljetanker',
    readTime: '7 min',
    date: '2024-12-28',
    slug: 'sanering-nedgravd-oljetank',
  },
  {
    id: '6',
    title: 'Forsikring og oljetanker – Hva dekkes ved lekkasje?',
    excerpt: 'Mange tror forsikringen dekker alt ved oljelekkasje, men dette stemmer ofte ikke. Les om dokumentasjonskrav og hva som kan føre til avslag.',
    category: 'Risiko',
    readTime: '4 min',
    date: '2024-12-20',
    slug: 'forsikring-oljetank-lekkasje',
  },
];

export function ArticleSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kunnskap om oljefyr og <span className="text-brand-blue">biofyringsolje</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Fagartikler og guider som hjelper deg ta informerte beslutninger om oppvarming, vedlikehold og miljøvennlige løsninger
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/10 hover:border-brand-blue transition-all duration-300 relative"
            >
              {/* Gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('nb-NO', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <a
                    href={`/artikkel/${article.slug}`}
                    className="text-brand-blue flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all"
                    aria-label={`Les mer om ${article.title}`}
                  >
                    Les mer
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-full hover:shadow-2xl hover:shadow-brand-blue/30 transition-all font-semibold">
            Se alle artikler
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
