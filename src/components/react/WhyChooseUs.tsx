import { motion, useReducedMotion } from 'motion/react';
import { Shield, Clock, Award, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Over 15 års erfaring',
    description: 'Siden 2008 har vi levert førsteklasses service på oljefyringsanlegg i Oslo og Akershus.',
  },
  {
    icon: Shield,
    title: 'Sertifiserte teknikere',
    description: 'Alle våre ansatte har fagbrev og nødvendige sertifiseringer. Vi følger alle forskrifter.',
  },
  {
    icon: Award,
    title: 'Kvalitetsgaranti',
    description: '2 års garanti på alle våre arbeider. Vi bruker kun godkjente komponenter og deler.',
  },
  {
    icon: ThumbsUp,
    title: 'Døgnåpen service',
    description: 'Akutt hjelp 24/7, året rundt. Vi rykker raskt ut når du trenger oss som mest.',
  },
];

export function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white relative overflow-hidden">
      {/* Subtle animated background */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl"
            animate={{
              y: [0, 60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hvorfor velge <span className="text-brand-blue">AG Varmeteknikk?</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light">
            Din pålitelige partner for trygg og effektiv drift av oljefyringsanlegg
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
              className="group bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 will-change-auto hover:will-change-transform hover:scale-[1.02]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-brand-blue group-hover:to-brand-blue-dark transition-all duration-300 shadow-lg shadow-brand-blue/5 will-change-auto group-hover:will-change-transform group-hover:scale-110">
                <reason.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-neutral-400 leading-relaxed font-light">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
