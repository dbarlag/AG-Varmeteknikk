import { motion } from 'motion/react';
import { Award, Users, Clock, Target, Shield, Heart, TrendingUp, Wrench } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Kvalitet først',
    description: 'Vi setter alltid kvalitet og sikkerhet først i alle våre tjenester'
  },
  {
    icon: Heart,
    title: 'Kundefokus',
    description: 'Dine behov og tilfredshet er vår høyeste prioritet'
  },
  {
    icon: TrendingUp,
    title: 'Kontinuerlig utvikling',
    description: 'Vi holder oss oppdatert på ny teknologi og beste praksis'
  },
  {
    icon: Wrench,
    title: 'Faglig ekspertise',
    description: 'Dyktige fagfolk med lang erfaring og riktig sertifisering'
  }
];

export function About() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6">
              <span className="text-blue-600 text-sm tracking-wider uppercase font-medium">Om oss</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
              Din pålitelige partner for varmeanlegg
            </h2>

            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                AG Varmeteknikk er en ledende leverandør av service, vedlikehold og oppgradering av oljefyringsanlegg i Oslo og Akershus. Siden 2008 har vi hjulpet hundrevis av private husstander, borettslag og bedrifter med å sikre trygg og effektiv drift av deres varmeanlegg.
              </p>
              <p>
                Vår virksomhet er bygget på et solid fundament av faglig kompetanse, pålitelighet og kundeservice. Alle våre teknikere har fagbrev og nødvendige sertifiseringer, og vi holder oss løpende oppdatert på nye forskrifter og teknologisk utvikling.
              </p>
              <p>
                Med døgnåpen akutthjelp 24/7 er vi alltid tilgjengelige når du trenger oss mest. Vi forstår hvor kritisk det er å ha et fungerende varmeanlegg, spesielt i de kaldeste periodene. Derfor garanterer vi rask respons og effektiv problemløsning.
              </p>
              <p className="font-medium text-black">
                Vårt mål er å være din foretrukne partner for alt som har med oljefyringsanlegg å gjøre - fra forebyggende vedlikehold til akutte reparasjoner og miljøvennlige oppgraderinger.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
              >
                <Award className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">År med erfaring</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-zinc-900 rounded-2xl p-8 text-white mt-8"
              >
                <Users className="w-12 h-12 mb-4 text-blue-400" />
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-zinc-400">Fornøyde kunder</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-zinc-900 rounded-2xl p-8 text-white"
              >
                <Clock className="w-12 h-12 mb-4 text-blue-400" />
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-zinc-400">Akuttservice</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white mt-8"
              >
                <Target className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-emerald-100">Sertifisert</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">Våre verdier</h3>
          <p className="text-xl text-zinc-600 text-center mb-16 max-w-3xl mx-auto">
            Dette er verdiene som styrer alt vi gjør og måten vi jobber på
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6 text-center hover:border-blue-600 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl text-black mb-3">{value.title}</h4>
                <p className="text-zinc-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 md:p-16 text-white text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Vårt team</h3>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Vi er et dedikert team av erfarne fagfolk som brenner for å levere førsteklasses service. Med kombinasjonen av teknisk ekspertise, praktisk erfaring og ekte omsorg for kundene våre, er vi klare til å hjelpe deg.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-zinc-800 rounded-full px-6 py-3">
              <span className="text-blue-400 font-bold">8</span> Sertifiserte teknikere
            </div>
            <div className="bg-zinc-800 rounded-full px-6 py-3">
              <span className="text-blue-400 font-bold">3</span> Kundeservice ansatte
            </div>
            <div className="bg-zinc-800 rounded-full px-6 py-3">
              <span className="text-blue-400 font-bold">100%</span> Dedikert til din tilfredshet
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
