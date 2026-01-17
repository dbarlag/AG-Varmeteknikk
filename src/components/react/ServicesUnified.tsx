import { motion } from 'motion/react';
import { useState } from 'react';
import { Flame, Wrench, Package, Droplet, Leaf, CheckCircle, Phone, Calendar, Shield } from 'lucide-react';

const serviceTabs = [
  { id: 'service', label: 'Service & Vedlikehold', icon: Wrench },
  { id: 'tank', label: 'Tanktjenester', icon: Droplet },
  { id: 'biofuel', label: 'Biobrensel', icon: Leaf },
];

const mainServices = [
  {
    icon: Flame,
    title: 'Årlig service',
    description: 'Forebyggende vedlikehold for optimal ytelse og sikkerhet. Inkluderer rengjøring, justering og testing.',
    features: ['Komplett inspeksjon', 'Rengjøring av brenner', 'Effektivitetstest', 'Sikkerhetssjekk']
  },
  {
    icon: Wrench,
    title: 'Reparasjoner',
    description: 'Rask og profesjonell reparasjon av alle typer oljefyringsanlegg. Døgnåpen service 24/7.',
    features: ['Akutt utrykning', 'Feilsøking', 'Komponentbytte', 'Garantert kvalitet']
  },
  {
    icon: Package,
    title: 'Oppgradering',
    description: 'Moderne løsninger for bedre ytelse, lavere forbruk og lengre levetid.',
    features: ['Energieffektivisering', 'Moderne styring', 'Støyreduksjon', 'Biobrenselklart']
  },
];

const tankServices = [
  {
    title: 'Tankkontroll & Inspeksjon',
    description: 'Grundig kontroll av tankens tilstand, materiale og plassering i henhold til gjeldende forskrifter.',
    icon: Shield,
  },
  {
    title: 'Tankrensing',
    description: 'Profesjonell tømming og rengjøring av slam og avleiringer for optimal drift.',
    icon: Droplet,
  },
  {
    title: 'Tankutskifting',
    description: 'Komplett utskifting fra demontering av gammel tank til installasjon av ny godkjent tank.',
    icon: Package,
  },
  {
    title: 'Sanering',
    description: 'Sikker fjerning eller sikring av nedgravde tanker som ikke lenger er i bruk.',
    icon: CheckCircle,
  },
];

const biofuelBenefits = [
  { label: 'Reduserer CO2-utslipp', value: 'opptil 90%' },
  { label: 'Bedre forbrenning', value: '100%' },
  { label: 'Kan blandes med mineralsk olje', value: 'Fleksibelt' },
  { label: 'Fornybar energi', value: 'Bærekraftig' },
];

export function ServicesUnified() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Våre <span className="text-blue-600">Tjenester</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Fra service og reparasjoner til tankbytte og miljøvennlig biobrensel – vi dekker alle dine behov
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white border border-zinc-200 text-zinc-700 hover:border-blue-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Service Content */}
        {activeTab === 'service' && (
          <motion.div
            key="service"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-zinc-200 p-8 hover:border-blue-600 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Quick Action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Trenger du akutt hjelp?</h3>
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                Vi er tilgjengelige døgnet rundt for akutte reparasjoner og utrykning.
                Ring oss nå for rask hjelp!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:40213090"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>40 21 30 90</span>
                </a>
                <a
                  href="/kontakt"
                  className="px-8 py-4 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2 text-lg font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Bestill Time</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Tank Services Content */}
        {activeTab === 'tank' && (
          <motion.div
            key="tank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Hvorfor er tanktjenester viktig?</h3>
              <p className="text-zinc-700 mb-4">
                Som eier er du ansvarlig for at oljetanken er i forsvarlig stand. En gammel eller
                defekt tank kan føre til:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Oljelekkasje og miljøskader</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Store oppryddingskostnader</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Brudd på forskrifter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Redusert boligverdi</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {tankServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-zinc-200 p-8 hover:border-blue-600 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-3xl p-12 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Trenger du hjelp med tanken?</h3>
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                Vi tilbyr gratis befaring og vurdering av din oljetank. Kontakt oss i dag!
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                <span>Bestill Befaring</span>
              </a>
            </motion.div>
          </motion.div>
        )}

        {/* Biofuel Content */}
        {activeTab === 'biofuel' && (
          <motion.div
            key="biofuel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Bytt til miljøvennlig <span className="text-green-600">biobrensel</span>
                </h2>
                <p className="text-lg text-zinc-700 mb-6">
                  Biobrensel er en bærekraftig og miljøvennlig løsning som kan brukes direkte i
                  eksisterende oljefyr. Du får samme varme, men med dramatisk reduserte utslipp.
                </p>
                <p className="text-zinc-600 mb-8">
                  HVO (Hydrogenated Vegetable Oil) er produsert av fornybare råstoffer og kan
                  redusere CO2-utslippene med opptil 90% sammenlignet med fossil fyringsolje.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {biofuelBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-4"
                    >
                      <div className="text-2xl font-bold text-green-600 mb-1">{benefit.value}</div>
                      <div className="text-sm text-zinc-700">{benefit.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-10 text-white"
              >
                <Leaf className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">Enkelt å bytte</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Kan brukes i eksisterende anlegg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Ingen behov for store investeringer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Bedre fyrkvalitet og lengre levetid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Støtter norske klimamål</span>
                  </li>
                </ul>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full hover:bg-green-50 transition-colors font-medium"
                >
                  <span>Få veiledning om biobrensel</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
