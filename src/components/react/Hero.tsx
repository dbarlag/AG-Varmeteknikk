import { ArrowRight, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          srcSet="
            https://images.unsplash.com/photo-1689793592282-015d9db77917?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBidXJuZXIlMjBoZWF0aW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2ODQ2NTA3OHww&ixlib=rb-4.1.0&q=80&w=640 640w,
            https://images.unsplash.com/photo-1689793592282-015d9db77917?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBidXJuZXIlMjBoZWF0aW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2ODQ2NTA3OHww&ixlib=rb-4.1.0&q=80&w=1024 1024w,
            https://images.unsplash.com/photo-1689793592282-015d9db77917?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBidXJuZXIlMjBoZWF0aW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2ODQ2NTA3OHww&ixlib=rb-4.1.0&q=80&w=1920 1920w
          "
          sizes="100vw"
          src="https://images.unsplash.com/photo-1689793592282-015d9db77917?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBidXJuZXIlMjBoZWF0aW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2ODQ2NTA3OHww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Oljefyringssystem - AG Varmeteknikk"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Softer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark/90 via-brand-navy/85 to-brand-blue-dark/80" />
      </div>

      {/* Soft animated orbs - only if motion is allowed */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-3xl"
            animate={{
              x: [0, 80, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-3xl"
            animate={{
              x: [0, -60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8 shadow-lg shadow-black/5">
              <span className="text-white text-sm tracking-wide font-medium">Over 15 års erfaring</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.1]"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            AG Varmeteknikk
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-10 leading-relaxed font-light"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Spesialister på service, vedlikehold og oppgradering av oljefyringsanlegg
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <a
              href="/kontakt"
              className="group px-8 py-4 bg-white text-brand-navy rounded-full hover:shadow-2xl hover:shadow-white/30 transition-shadow duration-300 flex items-center gap-2 font-semibold will-change-auto hover:will-change-transform hover:scale-[1.02]"
              aria-label="Bestill service hos AG Varmeteknikk"
            >
              <span>Bestill service</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </a>
            <a
              href="tel:40213090"
              className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border border-white/30 rounded-full hover:bg-white/20 transition-colors duration-300 font-semibold flex items-center gap-2 shadow-lg shadow-black/5"
              aria-label="Ring oss på 40 21 30 90"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>40 21 30 90</span>
            </a>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="border-l-2 border-white/30 pl-5">
              <div className="text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/70 font-light">År med erfaring</div>
            </div>
            <div className="border-l-2 border-white/30 pl-5">
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70 font-light">Døgnåpen service</div>
            </div>
            <div className="border-l-2 border-white/30 pl-5">
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/70 font-light">Sertifisert</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - more refined */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.4 },
            y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 backdrop-blur-sm bg-white/5">
            <motion.div
              className="w-1.5 h-3 bg-white/70 rounded-full mx-auto"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
