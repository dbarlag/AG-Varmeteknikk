import { motion, useReducedMotion } from 'motion/react';
import { Wrench, Droplet, Leaf, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Service & vedlikehold',
    description: 'Profesjonell service og vedlikehold av oljefyringsanlegg for optimal drift og lavere energikostnader',
    color: 'from-brand-blue to-brand-blue-dark',
    size: 'large',
    link: '/tjenester',
  },
  {
    icon: Droplet,
    title: 'Tankbytte & sanering',
    description: 'Trygg håndtering av oljetanker med fokus på miljø og sikkerhet',
    color: 'from-neutral-800 to-neutral-900',
    size: 'medium',
    link: '/tjenester',
  },
  {
    icon: Leaf,
    title: 'Biofyringsolje',
    description: 'Konvertering til miljøvennlig HVO og FAME biofyringsolje',
    color: 'from-success to-success-dark',
    size: 'medium',
    link: '/tjenester',
  },
  {
    icon: Shield,
    title: 'Forskriftskontroll',
    description: 'Påkrevd kontroll og dokumentasjon for forsikring og myndighetskrav',
    color: 'from-accent-orange to-accent-orange-dark',
    size: 'small',
    link: '/tjenester',
  },
  {
    icon: Clock,
    title: '24/7 Akuttservice',
    description: 'Døgnvakt for akutte hendelser og driftsstans',
    color: 'from-brand-navy to-brand-navy-dark',
    size: 'small',
    link: '/kontakt',
  },
];

export function BentoServices() {
  const prefersReducedMotion = useReducedMotion();

  // Extract icon components
  const TankIcon = services[1].icon;
  const CheckIcon = services[3].icon;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Våre <span className="text-brand-blue">tjenester</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Helhetlige løsninger for oljefyringsanlegg – fra service til miljøvennlig oppgradering
          </p>
        </motion.div>

        {/* Bento Grid - Clean Dark Style */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {/* Large card - Service */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="md:col-span-2 md:row-span-2"
          >
            <a
              href={services[0].link}
              className="group relative h-full rounded-[32px] overflow-hidden flex flex-col justify-between min-h-[500px] bg-black border border-white/10 hover:border-white/20 transition-all duration-300 p-8"
              aria-label={`Les mer om ${services[0].title}`}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Profesjonell <span className="italic font-light">service</span><br />
                  & vedlikehold
                </h3>

                <p className="text-base text-neutral-400 leading-relaxed font-light max-w-md">
                  {services[0].description}
                </p>
              </div>

              {/* Visual element - Tool icons grid */}
              <div className="relative z-10 mt-auto">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center border border-brand-blue/20">
                        <Wrench className="w-6 h-6 text-brand-blue" />
                      </div>
                      <span className="text-xs text-neutral-500">Service</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center border border-brand-blue/20">
                        <Shield className="w-6 h-6 text-brand-blue" />
                      </div>
                      <span className="text-xs text-neutral-500">Sikkerhet</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center border border-brand-blue/20">
                        <Clock className="w-6 h-6 text-brand-blue" />
                      </div>
                      <span className="text-xs text-neutral-500">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Medium card - Tankbytte */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.05, duration: 0.4, ease: 'easeOut' }}
            className="md:col-span-2 md:row-span-1"
          >
            <a
              href={services[1].link}
              className="group relative h-full rounded-[32px] overflow-hidden flex items-start justify-between min-h-[240px] bg-black border border-white/10 hover:border-white/20 transition-all duration-300 p-6"
              aria-label={`Les mer om ${services[1].title}`}
            >
              {/* Left content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Tankbytte <span className="italic font-light">&</span><br />
                  <span className="italic font-light">sanering</span>
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                  {services[1].description}
                </p>
              </div>

              {/* Right visual - Tank icon */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-32 h-32 bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center">
                  <TankIcon className="w-16 h-16 text-neutral-400" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Medium card - Biofyringsolje */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
            className="md:col-span-2 md:row-span-1"
          >
            <a
              href={services[2].link}
              className="group relative h-full rounded-[32px] overflow-hidden flex flex-col justify-between min-h-[240px] bg-black border border-white/10 hover:border-success/20 transition-all duration-300 p-6"
              aria-label={`Les mer om ${services[2].title}`}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  <span className="italic font-light">Bio</span>fyringsolje
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {services[2].description}
                </p>
              </div>

              {/* Visual - Progress bar style */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500">CO₂ reduksjon</span>
                  <span className="text-success">-90%</span>
                </div>
                <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-success to-success-dark rounded-full"></div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Small card - Forskriftskontroll */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
            className="md:col-span-2 md:row-span-1"
          >
            <a
              href={services[3].link}
              className="group relative h-full rounded-[32px] overflow-hidden flex flex-col justify-between min-h-[180px] bg-black border border-white/10 hover:border-accent-orange/20 transition-all duration-300 p-6"
              aria-label={`Les mer om ${services[3].title}`}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  Forskriftskontroll
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Påkrevd kontroll og dokumentasjon
                </p>
              </div>

              {/* Visual - Checkmarks */}
              <div className="relative z-10 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/50 border border-white/10 rounded-lg">
                  <CheckIcon className="w-3.5 h-3.5 text-accent-orange" />
                  <span className="text-xs text-neutral-400">Sertifisert</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/50 border border-white/10 rounded-lg">
                  <CheckIcon className="w-3.5 h-3.5 text-accent-orange" />
                  <span className="text-xs text-neutral-400">Godkjent</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Small card - Akuttservice */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
            className="md:col-span-2 md:row-span-1"
          >
            <a
              href={services[4].link}
              className="group relative h-full rounded-[32px] overflow-hidden flex flex-col justify-between min-h-[180px] bg-black border border-white/10 hover:border-brand-blue/20 transition-all duration-300 p-6"
              aria-label={`Les mer om ${services[4].title}`}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  <span className="italic font-light text-brand-blue">24/7</span> Akuttservice
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Døgnvakt ved akutte hendelser
                </p>
              </div>

              {/* Visual - Emergency badge */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-lg">
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
                  <span className="text-xs text-brand-blue font-medium">Tilgjengelig nå</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
