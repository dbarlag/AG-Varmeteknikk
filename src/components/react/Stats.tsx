import { motion, useReducedMotion } from 'motion/react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '15+',
    label: 'År med erfaring',
    description: 'Siden 2009',
  },
  {
    icon: Users,
    value: '2500+',
    label: 'Fornøyde kunder',
    description: 'På Østlandet',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Sertifiserte teknikere',
    description: 'Godkjent kompetanse',
  },
  {
    icon: TrendingUp,
    value: '24/7',
    label: 'Døgnvakt tilgjengelig',
    description: 'Ved akutte hendelser',
  },
];

export function Stats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Din partner for <span className="text-brand-blue">trygg varme</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Vi leverer profesjonell service og vedlikehold av oljefyringsanlegg med fokus på sikkerhet, effektivitet og miljø
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-neutral-200/60 hover:border-brand-blue/30 hover:bg-white shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 will-change-auto hover:will-change-transform hover:scale-[1.02]"
            >
              {/* Soft gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-brand-blue group-hover:to-brand-blue-dark transition-all duration-300 shadow-sm will-change-auto group-hover:will-change-transform group-hover:scale-110">
                  <stat.icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>

                <div className="text-5xl font-bold text-neutral-900 mb-3 tracking-tight">
                  {stat.value}
                </div>

                <div className="text-lg font-semibold text-neutral-800 mb-2">
                  {stat.label}
                </div>

                <div className="text-sm text-neutral-500 font-light">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
