import { Phone, Mail, Send, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-navy-dark text-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-orange/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Kontakt oss
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Vi kommer på befaring og gir deg et konkret forslag til driftssikker løsning for ditt anlegg
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            <motion.a
              href="tel:40213090"
              onMouseEnter={() => setHoveredContact(0)}
              onMouseLeave={() => setHoveredContact(null)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="block bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:border-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white text-brand-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Ring oss direkte</div>
                  <div className="text-3xl font-bold text-white mb-2">40 21 30 90</div>
                  <div className="text-sm text-white/70">Tilgjengelig 24/7 for akutte hendelser</div>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:post@agvarmeteknikk.no"
              onMouseEnter={() => setHoveredContact(1)}
              onMouseLeave={() => setHoveredContact(null)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="block bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:border-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Send oss e-post</div>
                  <div className="text-xl font-medium text-white mb-2">post@agvarmeteknikk.no</div>
                  <div className="text-sm text-white/70">Vi svarer innen 24 timer</div>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-white" />
                <h3 className="font-bold text-lg">Åpningstider kontor</h3>
              </div>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Mandag - Fredag</span>
                  <span className="font-medium text-white">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Akuttservice</span>
                  <span className="font-medium text-white">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-neutral-900">Be om befaring</h3>

            <form className="space-y-5" aria-label="Kontaktskjema">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-2">Navn</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-neutral-900 placeholder-neutral-400"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-2">Telefon</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-neutral-900 placeholder-neutral-400"
                  placeholder="+47"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-2">E-post</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-neutral-900 placeholder-neutral-400"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-neutral-700 mb-2">Hva trenger du hjelp til?</label>
                <select id="contact-service" name="service" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-neutral-900">
                  <option>Velg tjeneste</option>
                  <option>Service og vedlikehold</option>
                  <option>Tankbytte eller sanering</option>
                  <option>Konvertering til biofyringsolje</option>
                  <option>Akutt reparasjon</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-2">Melding</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-neutral-900 placeholder-neutral-400 resize-none"
                  placeholder="Fortell oss om ditt behov..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                aria-label="Send kontaktforespørsel"
                className="w-full px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-xl hover:shadow-2xl hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <span>Send forespørsel</span>
                <Send className="w-5 h-5" aria-hidden="true" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
