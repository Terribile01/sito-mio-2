import { SiteConfig } from "../types";
import { 
  Laptop, 
  Code, 
  Smartphone,
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  RotateCcw, 
  BookOpen,
  Layout,
  Database,
  Layers,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ServiziViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function ServiziView({ config, onNavigate }: ServiziViewProps) {
  const { components, service_options } = config;
  const heroData = components.hero.servizi_hero;
  
  // Tab state: "wordpress" | "custom" | "social"
  const [activeTab, setActiveTab] = useState<"wordpress" | "custom" | "social">("wordpress");

  return (
    <div id="servizi-view" className="space-y-0 pb-0">
      
      {/* Services Hero Header */}
      <section id="servizi-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-app-bg-main border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left for other pages (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative rounded-none overflow-hidden shadow-none border-4 border-app-text-primary">
                <img
                  src={config.assets_manifest.servizi_hero_image.path}
                  alt={config.assets_manifest.servizi_hero_image.alt}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gradient Fading Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg-main via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-l from-app-bg-main/40 via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>

            <div className="max-w-3xl space-y-6 order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs md:text-sm font-bold text-app-text-primary tracking-widest uppercase flex items-center gap-2"
              >
                <Zap size={16} className="text-app-accent-purple" />
                {heroData.subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] uppercase"
              >
                Infrastrutture Web <br/> Automatiche
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-app-text-primary font-bold leading-tight max-w-2xl"
              >
                {heroData.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SELECTION SWITCHER */}
      <section id="scelte-web" className="bg-app-bg-main py-20 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <span className="font-mono text-xs font-bold text-app-text-primary tracking-widest uppercase block bg-app-accent-orange px-3 py-1 w-fit border-2 border-app-text-primary">
              Sistemi d'Intervento
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-app-text-primary mt-6 tracking-tighter uppercase leading-[0.9]">
              Specifiche <br/> Dettaglio
            </h2>
          </motion.div>

          {/* Elegant system tab buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary mb-16">
            
            {/* WordPress Tab */}
            <button
              id="tab-btn-wp"
              onClick={() => setActiveTab("wordpress")}
              className={`flex flex-col p-8 text-left cursor-pointer transition-all border-app-text-primary md:border-r-4 border-b-4 md:border-b-0 ${
                activeTab === "wordpress"
                  ? "bg-app-accent-purple text-white"
                  : "bg-app-bg-main text-app-text-primary hover:bg-app-accent-purple/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers size={24} strokeWidth={3} className={activeTab === "wordpress" ? "text-app-accent-lime" : "text-app-accent-purple"} />
                <span className="font-mono text-xs font-black tracking-widest uppercase">1. WordPress</span>
              </div>
              <p className="font-sans text-xl font-black uppercase tracking-tighter">Flessibile</p>
            </button>

            {/* Custom Code Tab */}
            <button
              id="tab-btn-custom"
              onClick={() => setActiveTab("custom")}
              className={`flex flex-col p-8 text-left cursor-pointer transition-all border-app-text-primary md:border-r-4 border-b-4 md:border-b-0 ${
                activeTab === "custom"
                  ? "bg-app-accent-green text-app-text-primary"
                  : "bg-app-bg-main text-app-text-primary hover:bg-app-accent-green/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code size={24} strokeWidth={3} className={activeTab === "custom" ? "text-app-text-primary" : "text-app-accent-green"} />
                <span className="font-mono text-xs font-black tracking-widest uppercase">2. Custom Code</span>
              </div>
              <p className="font-sans text-xl font-black uppercase tracking-tighter">Prestazioni</p>
            </button>

            {/* Social & Lead Gen Tab */}
            <button
              id="tab-btn-social"
              onClick={() => setActiveTab("social")}
              className={`flex flex-col p-8 text-left cursor-pointer transition-all ${
                activeTab === "social"
                  ? "bg-app-accent-orange text-app-text-primary"
                  : "bg-app-bg-main text-app-text-primary hover:bg-app-accent-orange/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Smartphone size={24} strokeWidth={3} className={activeTab === "social" ? "text-app-text-primary" : "text-app-accent-orange"} />
                <span className="font-mono text-xs font-black tracking-widest uppercase">3. Lead Gen</span>
              </div>
              <p className="font-sans text-xl font-black uppercase tracking-tighter">Automazioni</p>
            </button>

          </div>

          {/* ACTIVE CONTENT SHEET */}
          <div className="mx-auto max-w-5xl bg-app-bg-main border-4 border-app-text-primary rounded-none p-8 md:p-12">
            <AnimatePresence mode="wait">
              
              {/* WORDPRESS DEEPENING SHEET */}
              {activeTab === "wordpress" && (
                <motion.div
                  key="wp-pane"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="border-b-4 border-app-text-primary pb-6">
                    <h3 className="font-sans text-3xl font-black text-app-text-primary uppercase tracking-tighter">WordPress Flessibile</h3>
                    <p className="font-sans text-lg text-app-text-primary font-bold mt-2 leading-tight">
                      Identifichiamo l'esatto collo di bottiglia del tuo sito. Trasformiamo WordPress in un motore autonomo privo di debiti tecnici.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-app-text-primary bg-app-text-primary">
                    {service_options.wordpress.map((opt, idx) => (
                      <div 
                        key={opt.id} 
                        className={`p-8 bg-app-bg-main space-y-4 border-app-text-primary ${idx % 2 === 0 ? 'md:border-r-4' : ''} ${idx < service_options.wordpress.length - 2 ? 'border-b-4' : 'md:border-b-0 border-b-4 last:border-b-0'}`}
                      >
                        <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter flex items-center gap-3">
                          <CheckCircle size={20} strokeWidth={3} className="text-app-accent-purple shrink-0" />
                          {opt.name}
                        </h4>
                        <div className="space-y-2 text-sm text-app-text-primary font-bold leading-tight">
                          <p>⚠️ <strong>Focus:</strong> {opt.focus}</p>
                          <p>🎯 <strong>Obiettivo:</strong> {opt.objective}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t-4 border-app-text-primary text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-purple text-white px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-app-text-primary transition-all cursor-pointer"
                    >
                      Trova il tuo scenario
                    </button>
                  </div>
                </motion.div>
              )}

              {/* CUSTOM CODE DEEPENING SHEET */}
              {activeTab === "custom" && (
                <motion.div
                  key="custom-pane"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="border-b-4 border-app-text-primary pb-6">
                    <h3 className="font-sans text-3xl font-black text-app-text-primary uppercase tracking-tighter">Custom Code Engine</h3>
                    <p className="font-sans text-lg text-app-text-primary font-bold mt-2 leading-tight">
                      Privilegia la velocità estrema, la sicurezza blindata e un design unico non vincolato da template.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
                    {service_options.custom.map((opt, idx) => (
                      <div 
                        key={opt.id} 
                        className={`p-8 bg-app-bg-main space-y-4 border-app-text-primary ${idx % 3 !== 2 ? 'lg:border-r-4' : ''} ${idx < service_options.custom.length - (service_options.custom.length % 3 || 3) ? 'border-b-4' : ''} border-b-4 lg:border-b-0 last:border-b-0`}
                      >
                        <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter flex items-center gap-3 mb-1">
                          <Zap size={20} strokeWidth={3} className="text-app-accent-green shrink-0" />
                          {opt.title}
                        </h4>
                        <p className="text-sm text-app-text-primary font-bold leading-tight">{opt.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t-4 border-app-text-primary text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-green text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all cursor-pointer"
                    >
                      Inizia Progetto Custom
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SOCIAL & LEAD GENERATION DEEPENING SHEET */}
              {activeTab === "social" && (
                <motion.div
                  key="social-pane"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="border-b-4 border-app-text-primary pb-6">
                    <h3 className="font-sans text-3xl font-black text-app-text-primary uppercase tracking-tighter">Social Lead Gen</h3>
                    <p className="font-sans text-lg text-app-text-primary font-bold mt-2 leading-tight">
                      Spiana la strada che porta il cliente social direttamente sulla tua chat o mail, tagliando via i curiosi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
                    {service_options.social.map((opt, idx) => (
                      <div 
                        key={opt.id} 
                        className={`p-8 bg-app-bg-main space-y-4 border-app-text-primary ${idx % 3 !== 2 ? 'lg:border-r-4' : ''} border-b-4 lg:border-b-0 last:border-b-0`}
                      >
                        <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter flex items-center gap-3 mb-1">
                          <CheckCircle size={20} strokeWidth={3} className="text-app-accent-orange shrink-0" />
                          {opt.title}
                        </h4>
                        <p className="text-sm text-app-text-primary font-bold leading-tight">{opt.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t-4 border-app-text-primary text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-orange text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all cursor-pointer"
                    >
                      Configura Funnel
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* AI INTEGRATIONS VALUE SHEETS */}
      <section className="bg-app-accent-purple text-white py-24 border-b-4 border-app-text-primary w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-20 space-y-4"
          >
            <span className="font-mono text-xs font-black text-app-accent-lime tracking-widest uppercase block bg-app-text-primary px-3 py-1 w-fit">
              IA Sinergia
            </span>
            <h2 className="font-sans text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              IA Potenzia <br/> ogni Progetto
            </h2>
            <p className="font-sans text-xl text-white font-bold leading-tight">
              Ottimizziamo tempi di sviluppo, copy strategici e interconnessioni, garantendoti risultati professionali in metà tempo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
            
            {/* Card 1: Copywriting accelerato */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-8 space-y-6 border-app-text-primary md:border-r-4 border-b-4 md:border-b-0"
            >
              <div className="w-14 h-14 rounded-none bg-app-accent-lime text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <BookOpen size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans font-black text-2xl text-app-text-primary uppercase tracking-tighter">Copywriting</h3>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Generiamo testi impeccabili orientati alla conversione, guidati dal mio stampo di Comunicazione Visiva.
              </p>
            </motion.div>

            {/* Card 2: Layout & Asset Mockups */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-8 space-y-6 border-app-text-primary md:border-r-4 border-b-4 md:border-b-0"
            >
              <div className="w-14 h-14 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <Layout size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans font-black text-2xl text-app-text-primary uppercase tracking-tighter">Asset Grafici</h3>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Utilizziamo generatori di immagini stabili per progettare icone e sfondi custom che rispecchiano i tuoi valori.
              </p>
            </motion.div>

            {/* Card 3: SEO Semantica Automatica */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-8 space-y-6"
            >
              <div className="w-14 h-14 rounded-none bg-app-accent-green text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <Database size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans font-black text-2xl text-app-text-primary uppercase tracking-tighter">SEO Semantica</h3>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Gli algoritmi di IA strutturano tag ordinati e schemi di dati semantici perfetti per l'indicizzazione Google.
              </p>
            </motion.div>

          </div>

          <div className="mt-16 flex justify-center">
            <button
              id="cta-servizi-ai-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-lime text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all cursor-pointer"
            >
              Analizza la tua idea
            </button>
          </div>

        </div>
      </section>

      {/* Trust factors or Process */}
      <section className="bg-app-bg-main py-24 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-xl mx-auto mb-20"
          >
            <h3 className="font-sans text-4xl sm:text-5xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
              Garanzia <br/> Approccio
            </h3>
            <p className="font-sans text-lg text-app-text-primary font-bold mt-4 uppercase">Zero sorprese, massima trasparenza.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-10 text-center space-y-4 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0"
            >
              <div className="w-16 h-16 rounded-none bg-app-accent-purple text-white border-2 border-app-text-primary flex items-center justify-center mx-auto">
                <ShieldCheck size={32} strokeWidth={3} />
              </div>
              <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter">Compliance</h4>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Include policy legali native graficamente allineate, senza widget esterni invasivi.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-10 text-center space-y-4 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0"
            >
              <div className="w-16 h-16 rounded-none bg-app-accent-green text-app-text-primary border-2 border-app-text-primary flex items-center justify-center mx-auto">
                <Zap size={32} strokeWidth={3} />
              </div>
              <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter">Prestazioni</h4>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Design super-leggero. I punteggi di caricamento velocizzano il posizionamento SEO.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-10 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center mx-auto">
                <RotateCcw size={32} strokeWidth={3} />
              </div>
              <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter">Aggiornamenti</h4>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Database testi organizzato. Modifichi un testo principale in un solo punto, ovunque.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
