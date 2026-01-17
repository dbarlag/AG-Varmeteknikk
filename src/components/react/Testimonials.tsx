import { motion, useReducedMotion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kari Olsen',
    role: 'Huseier, Bærum',
    rating: 5,
    text: 'Oljebrenneren streiket midt på vinteren, og AG Varmeteknikk kom samme dag. Profesjonell og rask hjelp!',
  },
  {
    name: 'Per Hansen',
    role: 'Borettslag, Oslo',
    rating: 5,
    text: 'Vi har hatt serviceavtale i over 5 år. Alltid punktlige, grundige og ingen uventede driftsstopp.',
  },
  {
    name: 'Linda Bergström',
    role: 'Eiendomsforvalter',
    rating: 5,
    text: 'Hjalp oss med konvertering til HVO biodiesel. Prosessen gikk smertefritt med gode miljøgevinster.',
  },
  {
    name: 'Thomas Andreassen',
    role: 'Næringsbygg, Drammen',
    rating: 5,
    text: 'Profesjonell håndtering av tankbytte. Tok seg av alt fra søknader til ferdigstillelse. Topp service!',
  },
];

export function Testimonials() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hva våre kunder <span className="text-brand-blue">sier</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Over 500 fornøyde kunder i Oslo og Akershus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
              className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-neutral-200/60 p-8 hover:border-brand-blue/30 hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative overflow-hidden will-change-auto hover:will-change-transform hover:scale-[1.02]"
            >
              {/* Soft gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-brand-blue mb-4 opacity-20" aria-hidden="true" />
                <div className="flex gap-1 mb-4" role="img" aria-label={`Vurdering: ${testimonial.rating} av 5 stjerner`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed text-base font-light">{testimonial.text}</p>
                <div className="border-t border-neutral-200 pt-4">
                  <div className="font-bold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500 font-light">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-neutral-200/60 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 will-change-auto hover:will-change-transform hover:scale-[1.02]">
            <div className="text-5xl font-bold text-brand-blue mb-2 tracking-tight">15+</div>
            <div className="text-neutral-600 font-medium">År i bransjen</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-neutral-200/60 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 will-change-auto hover:will-change-transform hover:scale-[1.02]">
            <div className="text-5xl font-bold text-brand-blue mb-2 tracking-tight">500+</div>
            <div className="text-neutral-600 font-medium">Fornøyde kunder</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-neutral-200/60 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 will-change-auto hover:will-change-transform hover:scale-[1.02]">
            <div className="text-5xl font-bold text-brand-blue mb-2 tracking-tight">24/7</div>
            <div className="text-neutral-600 font-medium">Døgnåpen service</div>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-neutral-200/60 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 will-change-auto hover:will-change-transform hover:scale-[1.02]">
            <div className="text-5xl font-bold text-brand-blue mb-2 tracking-tight">{'< 2t'}</div>
            <div className="text-neutral-600 font-medium">Responstid akutt</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
