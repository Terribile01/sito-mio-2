import { SiteConfig } from "../types";
import { 
  Code, 
  Smartphone,
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  RotateCcw, 
  BookOpen,
  Layout,
  Database,
  Layers
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCircle, renderSplitTitle } from "./ThemeElements";

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
    <div id="servizi-view" className="relative space-y-0 pb-0 bg-app-bg-main overflow-hidden">
      
      {/* Background Glows */}
      <GlowCircle color="#9B5CFF" size="400px" top="-100px" left="-100px" delay={0} />
      <GlowCircle color="#AAFF00" size="300px" top="40%" left="80%" delay={1} />

      {/* Services Hero Header */}
      <section id="servizi-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left for other pages (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={config.assets_manifest.servizi_hero_image.path}
                  alt={config.assets_manifest.servizi_hero_image.alt}
                  className="w-full h-auto object-cover img-neon-tint group-hover:filter-none transition-all duration-700"
                />
                {/* Gradient Fading Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg-main via-app-accent-primary/10 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-app-accent-secondary/10 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>

            <div className="max-w-2xl space-y-6 order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs md:text-sm font-bold text-app-accent-secondary tracking-widest uppercase flex items-center gap-2"
              >
                <Zap size={16} />
                {heroData.subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-tight uppercase break-words"
              >
                {renderSplitTitle(heroData.title)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-app-text-primary font-bold leading-relaxed max-w-2xl smart-text"
              >
                {heroData.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SELECTION SWITCHER */}
      <section id="scelte-web" className="py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <span className="font-mono text-xs font-bold text-app-accent-secondary tracking-widest uppercase block mb-4">
              Sistemi d'Intervento
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle("Specifiche Dettaglio")}
            </h2>
          </motion.div>

          {/* Elegant system tab buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            
            {/* WordPress Tab */}
            <button
              id="tab-btn-wp"
              onClick={() => setActiveTab("wordpress")}
              className={`flex flex-col p-8 text-left cursor-pointer transition-all rounded-3xl border ${
                activeTab === "wordpress"
                  ? "bg-app-accent-primary border-app-accent-primary text-app-bg-main shadow-[0_0_20px_rgba(155,92,255,0.4)]"
                  : "glass-morphism border-white/10 text-white/70 hover:border-app-accent-primary/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers size={24} className={activeTab === "wordpress" ? "text-app-bg-main" : "text-app-accent-primary"} />
                <span className="font-mono text-[10px] font-black tracking-widest uppercase opacity-70">1. WordPress</span>
              </div>
              <p className="font-sans text-xl font-black uppercase tracking-tighter">Flessibile</p>
            </button>

            {/* Custom Code Tab */}
            <button
              id="tab-btn-custom"
              onClick={() => setActiveTab("custom")}
              className={`flex flex-col p-8 text-left cursor-pointer transition-all rounded-3xl border ${
                activeTab === "custom"
                  ? "bg-app-tertiary border-app-tertiary text-app-bg-main shadow-[0_0_20px_rgba(170,255,0,0.4)]"
                  : "glass-morphism border-white/10 text-white/70 hover:border-app-tertiary/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code size={24} className={activeTab === "custom" ? "text-app-bg-main" : "text-app-tertiary"} />
                <span className="font-mono text-[10px] font-black tracking-widest uppercase opacity-70">2. Custom Code</span>
              </div>
              <p className="font-sans text-xl font-black uppercase tracking-tighter">Prestazioni</p>
            </button>

            {/* Social & Lead Gen Tab */}
            <button
              id="tab-btn-social"
              onClick={() => setActiveTab("social")}
              className={`flex flex-col p-8 text-left cursor-pointer transition-all rounded-3xl border ${
                activeTab === "social"
                  ? "bg-app-accent-secondary border-app-accent-secondary text-app-bg-main shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                  : "glass-morphism border-white/10 text-white/70 hover:border-app-accent-secondary/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Smartphone size={24} className={activeTab === "social" ? "text-app-bg-main" : "text-app-accent-secondary"} />
                <span className="font-mono text-[10px] font-black tracking-widest uppercase opacity-70">3. Lead Gen</span>
              </div>
              <p className="font-sans text-xl font-black uppercase tracking-tighter">Automazioni</p>
            </button>

          </div>

          {/* ACTIVE CONTENT SHEET */}
          <div className="mx-auto max-w-5xl glass-morphism rounded-[40px] p-8 md:p-12">
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
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="font-sans text-3xl font-black text-white uppercase tracking-tighter">
                      {renderSplitTitle("WordPress Flessibile")}
                    </h3>
                    <p className="font-sans text-lg text-white/70 mt-2 leading-tight">
                      Identifichiamo l'esatto collo di bottiglia del tuo sito. Trasformiamo WordPress in un motore autonomo privo di debiti tecnici.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service_options.wordpress.map((opt) => (
                      <div 
                        key={opt.id} 
                        className="p-6 md:p-8 glass-morphism rounded-3xl space-y-4"
                      >
                        <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter flex items-start gap-3">
                          <CheckCircle size={20} className="text-app-accent-primary shrink-0 mt-1" />
                          <span className="break-words min-w-0">{opt.name}</span>
                        </h4>
                        <div className="space-y-2 text-sm text-white/60 leading-tight">
                          <p>⚠️ <strong>Focus:</strong> {opt.focus}</p>
                          <p>🎯 <strong>Obiettivo:</strong> {opt.objective}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-primary text-app-bg-main px-10 py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(155,92,255,0.4)] cursor-pointer"
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
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="font-sans text-3xl font-black text-white uppercase tracking-tighter">
                      {renderSplitTitle("Custom Code Engine", "#FFFFFF", "#AAFF00")}
                    </h3>
                    <p className="font-sans text-lg text-white/70 mt-2 leading-tight">
                      Privilegia la velocità estrema, la sicurezza blindata e un design unico non vincolato da template.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service_options.custom.map((opt) => (
                      <div 
                        key={opt.id} 
                        className="p-6 md:p-8 glass-morphism rounded-3xl space-y-4"
                      >
                        <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter flex items-start gap-3 mb-1">
                          <Zap size={20} className="text-app-tertiary shrink-0 mt-1" />
                          <span className="break-words min-w-0">{opt.title}</span>
                        </h4>
                        <p className="text-sm text-white/60 leading-tight">{opt.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-black text-sm uppercase tracking-tighter bg-app-tertiary text-app-bg-main px-10 py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(170,255,0,0.4)] cursor-pointer"
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
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="font-sans text-3xl font-black text-white uppercase tracking-tighter">
                      {renderSplitTitle("Social Lead Gen", "#FFFFFF", "#00F5FF")}
                    </h3>
                    <p className="font-sans text-lg text-white/70 mt-2 leading-tight">
                      Spiana la strada che porta il cliente social direttamente sulla tua chat o mail, tagliando via i curiosi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service_options.social.map((opt) => (
                      <div 
                        key={opt.id} 
                        className="p-6 md:p-8 glass-morphism rounded-3xl space-y-4"
                      >
                        <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter flex items-start gap-3 mb-1">
                          <CheckCircle size={20} className="text-app-accent-secondary shrink-0 mt-1" />
                          <span className="break-words min-w-0">{opt.title}</span>
                        </h4>
                        <p className="text-sm text-white/60 leading-tight">{opt.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-secondary text-app-bg-main px-10 py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] cursor-pointer"
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
      <section className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-20 space-y-4"
          >
            <span className="font-mono text-xs font-black text-app-tertiary tracking-widest uppercase block mb-2">
              AI Sinergia
            </span>
            <h2 className="font-sans text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              {renderSplitTitle("AI Potenzia ogni Progetto", "#FFFFFF", "#AAFF00")}
            </h2>
            <p className="font-sans text-xl text-white/80 leading-tight">
              Ottimizziamo tempi di sviluppo, copy strategici e interconnessioni, garantendoti risultati professionali in metà tempo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Copywriting accelerato */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 space-y-6 rounded-[40px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-app-tertiary/20 text-app-tertiary flex items-center justify-center">
                <BookOpen size={28} />
              </div>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter break-words">Copywriting</h3>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Generiamo testi impeccabili orientati alla conversione, guidati dal mio stampo di Comunicazione Visiva.
              </p>
            </motion.div>

            {/* Card 2: Layout & Asset Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-morphism p-8 space-y-6 rounded-[40px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-app-accent-secondary/20 text-app-accent-secondary flex items-center justify-center">
                <Layout size={28} />
              </div>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter break-words">Asset Grafici</h3>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Utilizziamo generatori di immagini stabili per progettare icone e sfondi custom che rispecchiano i tuoi valori.
              </p>
            </motion.div>

            {/* Card 3: SEO Semantica Automatica */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-morphism p-8 space-y-6 rounded-[40px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-app-accent-primary/20 text-app-accent-primary flex items-center justify-center">
                <Database size={28} />
              </div>
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter break-words">SEO Semantica</h3>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Gli algoritmi di AI strutturano tag ordinati e schemi di dati semantici perfetti per l'indicizzazione Google.
              </p>
            </motion.div>

          </div>

          <div className="mt-16 flex justify-center">
            <button
              id="cta-servizi-ai-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-black text-sm uppercase tracking-tighter bg-app-tertiary text-app-bg-main px-10 py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(170,255,0,0.4)] cursor-pointer"
            >
              Analizza la tua idea
            </button>
          </div>

        </div>
      </section>

      {/* Trust factors or Process */}
      <section className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-xl mx-auto mb-20"
          >
            <h3 className="font-sans text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle("Garanzia Approccio")}
            </h3>
            <p className="font-sans text-lg text-white/50 mt-4 uppercase">Zero sorprese, massima trasparenza.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-morphism p-10 text-center space-y-4 rounded-[40px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-app-accent-primary/20 text-app-accent-primary flex items-center justify-center mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter break-words">Compliance</h4>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Include policy legali native graficamente allineate, senza widget esterni invasivi.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-morphism p-10 text-center space-y-4 rounded-[40px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-app-tertiary/20 text-app-tertiary flex items-center justify-center mx-auto">
                <Zap size={32} />
              </div>
              <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter break-words">Prestazioni</h4>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Design super-leggero. I punteggi di caricamento velocizzano il posizionamento SEO.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-morphism p-10 text-center space-y-4 rounded-[40px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-app-accent-secondary/20 text-app-accent-secondary flex items-center justify-center mx-auto">
                <RotateCcw size={32} />
              </div>
              <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter break-words">Aggiornamenti</h4>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Database testi organizzato. Modifichi un testo principale in un solo punto, ovunque.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
