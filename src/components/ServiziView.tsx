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
      <section id="servizi-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-app-bg-60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-app-accent-khaki/8 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-app-accent-olive tracking-widest uppercase flex items-center gap-2"
            >
              <Zap size={16} className="text-app-accent-khaki" />
              {heroData.subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-app-accent-charcoal leading-tight"
            >
              Infrastrutture Web che Lavorano al Tuo Posto
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-app-text-30 leading-relaxed max-w-2xl"
            >
              {heroData.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SELECTION SWITCHER - Deeply customized (#D2C9B9 / #E2DDD3 alternating tones) */}
      <section id="scelte-web" className="bg-app-accent-khaki/20 py-16 border-t border-app-accent-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="font-mono text-xs font-bold text-app-accent-olive tracking-wider uppercase block">
              I Tre Sistemi d'Intervento
            </span>
            <h2 className="font-sans text-3xl font-bold text-app-accent-charcoal mt-1.5 tracking-tight">
              Esplora le Specifiche nel Dettaglio
            </h2>
            <p className="font-sans text-xs text-app-text-30/90 mt-2">
              Seleziona la tecnologia o l'automazione per approfondire i nostri percorsi d'ingegnerizzazione digitale.
            </p>
          </motion.div>

          {/* Elegant system tab buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-12">
            
            {/* WordPress Tab */}
            <button
              id="tab-btn-wp"
              onClick={() => setActiveTab("wordpress")}
              className={`flex flex-col p-5 rounded-lg border text-left cursor-pointer transition-all ${
                activeTab === "wordpress"
                  ? "bg-app-text-30 text-app-bg-60 border-app-text-30 shadow-md"
                  : "bg-app-bg-60/80 text-app-text-30 border-app-accent-charcoal/20 hover:bg-app-bg-60"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Layers size={18} className={activeTab === "wordpress" ? "text-app-accent-khaki-2" : "text-app-accent-olive"} />
                <span className="font-mono text-xs font-bold tracking-wider uppercase">1. WordPress Site</span>
              </div>
              <p className="font-sans text-sm font-bold">Flessibile & Gestibile</p>
              <p className="text-[10px] opacity-80 mt-1 font-serif italic">Scenari d'ingresso ed ottimizzazione</p>
            </button>

            {/* Custom Code Tab */}
            <button
              id="tab-btn-custom"
              onClick={() => setActiveTab("custom")}
              className={`flex flex-col p-5 rounded-lg border text-left cursor-pointer transition-all ${
                activeTab === "custom"
                  ? "bg-app-text-30 text-app-bg-60 border-app-text-30 shadow-md"
                  : "bg-app-bg-60/80 text-app-text-30 border-app-accent-charcoal/20 hover:bg-app-bg-60"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Code size={18} className={activeTab === "custom" ? "text-app-accent-khaki-2" : "text-app-accent-olive"} />
                <span className="font-mono text-xs font-bold tracking-wider uppercase">2. Custom Code</span>
              </div>
              <p className="font-sans text-sm font-bold">Prestazioni Purissime</p>
              <p className="text-[10px] opacity-80 mt-1 font-serif italic">Velocità estrema e design unico</p>
            </button>

            {/* Social & Lead Gen Tab */}
            <button
              id="tab-btn-social"
              onClick={() => setActiveTab("social")}
              className={`flex flex-col p-5 rounded-lg border text-left cursor-pointer transition-all ${
                activeTab === "social"
                  ? "bg-app-text-30 text-app-bg-60 border-app-text-30 shadow-md"
                  : "bg-app-bg-60/80 text-app-text-30 border-app-accent-charcoal/20 hover:bg-app-bg-60"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Smartphone size={18} className={activeTab === "social" ? "text-app-accent-khaki-2" : "text-app-accent-olive"} />
                <span className="font-mono text-xs font-bold tracking-wider uppercase">3. Social & Lead Gen</span>
              </div>
              <p className="font-sans text-sm font-bold">Automazioni che Vendono</p>
              <p className="text-[10px] opacity-80 mt-1 font-serif italic">Transformare i social in uffici attivi</p>
            </button>

          </div>

          {/* ACTIVE CONTENT SHEET - Beautiful stagger animate */}
          <div className="mx-auto max-w-5xl bg-app-bg-60 border border-app-accent-charcoal/20 rounded-xl p-6 md:p-8 shadow-[0_15px_30px_rgba(45,43,40,0.06)]">
            <AnimatePresence mode="wait">
              
              {/* WORDPRESS DEEPENING SHEET */}
              {activeTab === "wordpress" && (
                <motion.div
                  key="wp-pane"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-app-accent-charcoal/15 pb-4">
                    <span className="font-mono text-[10px] font-bold text-app-accent-olive tracking-widest uppercase">Macro-Aree di Problema & Soluzione</span>
                    <h3 className="font-sans text-2xl font-bold text-app-accent-charcoal">Configurazione Flessiva WordPress</h3>
                    <p className="font-sans text-xs text-app-text-30/90 mt-1">
                      Identifichiamo l'esatto collo di bottiglia del tuo sito web. L'approccio trasforma WordPress in un motore autonomo privo di debiti tecnici irrisolvibili.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service_options.wordpress.map((opt) => (
                      <div 
                        key={opt.id} 
                        className="p-5 rounded-lg border border-app-accent-charcoal/15 bg-app-accent-khaki/10 space-y-3 hover:bg-app-accent-khaki/20 transition-all"
                      >
                        <h4 className="font-sans font-bold text-sm text-app-accent-charcoal flex items-center gap-2">
                          <CheckCircle size={15} className="text-app-accent-olive shrink-0" />
                          {opt.name}
                        </h4>
                        <div className="space-y-1 text-xs text-app-text-30/95 leading-relaxed">
                          <p>⚠️ <strong>Focus:</strong> {opt.focus}</p>
                          <p>🎯 <strong>Obiettivo:</strong> {opt.objective}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-app-accent-charcoal/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-bold text-xs uppercase tracking-wider bg-app-accent-olive hover:bg-app-text-30 text-app-bg-60 px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow"
                    >
                      Trova il tuo scenario nel questionario
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* CUSTOM CODE DEEPENING SHEET */}
              {activeTab === "custom" && (
                <motion.div
                  key="custom-pane"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-app-accent-charcoal/15 pb-4">
                    <span className="font-mono text-[10px] font-bold text-app-accent-olive tracking-widest uppercase">Prestazioni Purissime al 100%</span>
                    <h3 className="font-sans text-2xl font-bold text-app-accent-charcoal">Sviluppo in Codice Puro Custom-Engineered</h3>
                    <p className="font-sans text-xs text-app-text-30/90 mt-1">
                      Privilegia la velocità estrema, la sicurezza blindata dei file statici e un design unico non vincolato da template precostruiti.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service_options.custom.map((opt) => (
                      <div 
                        key={opt.id} 
                        className="p-5 rounded-lg border border-app-accent-charcoal/15 bg-app-accent-khaki/10 space-y-2 hover:bg-app-accent-khaki/20 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <h4 className="font-sans font-bold text-sm text-app-accent-charcoal flex items-center gap-2 mb-1">
                            <Zap size={15} className="text-app-accent-olive shrink-0" />
                            {opt.title}
                          </h4>
                          <p className="text-xs text-app-text-30/95 leading-relaxed">{opt.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 px-4 bg-app-accent-khaki/10 rounded p-4 text-xs text-app-text-30/90 text-center max-w-2xl mx-auto italic">
                    "Ideale per chi subisce una forte concorrenza territoriale su Google e desidera caricamenti istantanei per massimizzare la SEO organica."
                  </div>

                  <div className="pt-6 border-t border-app-accent-charcoal/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-bold text-xs uppercase tracking-wider bg-app-accent-olive hover:bg-app-text-30 text-app-bg-60 px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow"
                    >
                      Inizia Progetto in Codice Puro
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SOCIAL & LEAD GENERATION DEEPENING SHEET */}
              {activeTab === "social" && (
                <motion.div
                  key="social-pane"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-app-accent-charcoal/15 pb-4">
                    <span className="font-mono text-[10px] font-bold text-app-accent-olive tracking-widest uppercase">Automazioni che Convertono i Lead</span>
                    <h3 className="font-sans text-2xl font-bold text-app-accent-charcoal">Sistemi ed Integrazioni Social & Lead Gen</h3>
                    <p className="font-sans text-xs text-app-text-30/90 mt-1">
                      Spiana la strada che porta il potenziale cliente del tuo profilo social direttamente sulla chat WhatsApp o casella mail, tagliando via i curiosi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service_options.social.map((opt) => (
                      <div 
                        key={opt.id} 
                        className="p-5 rounded-lg border border-app-accent-charcoal/15 bg-app-accent-khaki/10 space-y-2 hover:bg-app-accent-khaki/20 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <h4 className="font-sans font-bold text-sm text-app-accent-charcoal flex items-center gap-2 mb-1">
                            <CheckCircle size={15} className="text-app-accent-olive shrink-0" />
                            {opt.title}
                          </h4>
                          <p className="text-xs text-app-text-30/95 leading-relaxed">{opt.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-app-accent-charcoal/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-bold text-xs uppercase tracking-wider bg-app-accent-olive hover:bg-app-text-30 text-app-bg-60 px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow"
                    >
                      Configura il tuo Funnel di Vendita
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* AI INTEGRATIONS VALUE SHEETS (How AI accelerates development and optimization) */}
      <section className="bg-app-text-30 text-app-bg-60 py-20 border-y border-app-accent-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="font-mono text-xs font-bold text-app-accent-khaki-2 tracking-widest uppercase block">
              Ingegnerizzazione del Lavoro
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-app-bg-60 tracking-tight">
              Sinergia Generativa: Come l'IA Potenzia ogni Progetto Web
            </h2>
            <p className="font-sans text-sm text-app-bg-60/70 leading-relaxed">
              Grazie agli strumenti di IA ottimizziamo tempi di sviluppo, scrittura di copy strategici e interconnessioni di dati, garantendoti risultati professionali in metà tempo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Copywriting accelerato */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-app-text-30 border border-app-accent-charcoal p-8 rounded-lg space-y-4 shadow-sm hover:border-app-accent-khaki-2/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-app-accent-khaki-2/10 text-app-accent-khaki-2 flex items-center justify-center">
                <BookOpen size={18} />
              </div>
              <h3 className="font-sans font-bold text-app-bg-60 text-lg">Copywriting e Testi Persuasivi</h3>
              <p className="font-sans text-xs text-app-bg-60/80 leading-relaxed">
                Niente paura di spendere settimane ad aspettare i testi. Tramite modelli linguistici avanzati guidati dal mio stampo di Comunicazione Visiva, generiamo testi impeccabili orientati alla conversione del tuo potenziale cliente.
              </p>
            </motion.div>

            {/* Card 2: Layout & Asset Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-app-text-30 border border-app-accent-charcoal p-8 rounded-lg space-y-4 shadow-sm hover:border-app-accent-khaki-2/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-app-accent-khaki-2/10 text-app-accent-khaki-2 flex items-center justify-center">
                <Layout size={18} />
              </div>
              <h3 className="font-sans font-bold text-app-bg-60 text-lg">Asset Grafici Generati Ad-Hoc</h3>
              <p className="font-sans text-xs text-app-bg-60/80 leading-relaxed">
                Niente fotografie stock finte o spersonalizzate. Utilizziamo potenti generatori di immagini stabili per progettare icone vettoriali, sfondi custom coordinati e copertine professionali che rispecchiano i tuoi reali valori di brand locale.
              </p>
            </motion.div>

            {/* Card 3: SEO Semantica Automatica */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-app-text-30 border border-app-accent-charcoal p-8 rounded-lg space-y-4 shadow-sm hover:border-app-accent-khaki-2/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-app-accent-khaki-2/10 text-app-accent-khaki-2 flex items-center justify-center">
                <Database size={18} />
              </div>
              <h3 className="font-sans font-bold text-app-bg-60 text-lg">Strutturazione e SEO Semantica</h3>
              <p className="font-sans text-xs text-app-bg-60/80 leading-relaxed">
                Tutte le pagine web vengono indicizzate scansionando le intenzioni di ricerca reali dei tuoi clienti su Google. Gli algoritmi di IA strutturano tag ordinati, titoli ad alta pertinenza d'acquisto e schemi di dati semantici perfetti.
              </p>
            </motion.div>

          </div>

          <div className="mt-12 flex justify-center">
            <button
              id="cta-servizi-ai-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-bold text-xs uppercase tracking-wider bg-app-bg-60 text-app-text-30 hover:bg-app-accent-khaki-2 hover:text-app-text-30 px-6 py-3.5 rounded transition-all duration-300 cursor-pointer shadow-md"
            >
              Analizza la tua idea di business gratis
            </button>
          </div>

        </div>
      </section>

      {/* Trust factors or Process - Standard Bone Accent */}
      <section className="bg-app-bg-60 py-20 border-b border-app-accent-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-app-accent-charcoal tracking-tight">
              La Garanzia del Mio Approccio
            </h3>
            <p className="font-sans text-sm text-app-text-30/90 mt-2">Zero sorprese, massima trasparenza.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-app-accent-olive/10 text-app-accent-olive flex items-center justify-center mx-auto">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-sans font-bold text-app-accent-charcoal">Compliance Totale</h4>
              <p className="font-sans text-xs text-app-text-30/85 leading-relaxed max-w-xs mx-auto">
                Tutti i siti web includono policy legali native (Privacy e Cookie) graficamente allineate, senza widget esterni invasivi che rompono il design.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-app-accent-olive/10 text-app-accent-olive flex items-center justify-center mx-auto">
                <Zap size={24} />
              </div>
              <h4 className="font-sans font-bold text-app-accent-charcoal">Prestazioni Elevate</h4>
              <p className="font-sans text-xs text-app-text-30/85 leading-relaxed max-w-xs mx-auto">
                Design super-leggero. I punteggi di caricamento velocizzano il posizionamento SEO sui motori di ricerca.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-app-accent-olive/10 text-app-accent-olive flex items-center justify-center mx-auto">
                <RotateCcw size={24} />
              </div>
              <h4 className="font-sans font-bold text-app-accent-charcoal">Aggiornamenti Semplici</h4>
              <p className="font-sans text-xs text-app-text-30/85 leading-relaxed max-w-xs mx-auto">
                Database dei testi organizzato. Se vuoi modificare un testo principale, lo facciamo in un solo punto, aggiornato all'istante ovunque.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
