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
  Sparkles,
  Target
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ServiziViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

interface WordPressOption {
  id: string;
  name: string;
  focus: string;
  objective: string;
}

const wordpressOptions: WordPressOption[] = [
  {
    id: "ostaggio",
    name: '"Il mio sito è in ostaggio" (Supporto Recupero/Migrazione)',
    focus: 'Ho un programmatore/agenzia che non risponde o non mi dà accesso.',
    objective: 'Recupero dominio/hosting e liberazione dai vincoli tecnologici.'
  },
  {
    id: "peso",
    name: '"Ho già un sito WordPress, ma è un peso" (Ottimizzazione/Gestione)',
    focus: 'Sito lento, plugin che si rompono, paura di aggiornare.',
    objective: 'Rendere WordPress un "motore di lavoro autonomo" e non un debito tecnico.'
  },
  {
    id: "migrazione",
    name: '"Il mio sito è su Wix/Squarespace e non cresco" (Migrazione Strategica)',
    focus: 'Mi sento limitata dai template, i costi crescono, il sito non vende.',
    objective: 'Passaggio a un ecosistema professionale dove il sito diventa "macchina di acquisizione".'
  },
  {
    id: "landing",
    name: '"Voglio una Landing Page che converta davvero" (Landing Strategica)',
    focus: 'Ho bisogno di un ponte tra il traffico social e la vendita.',
    objective: 'Creare un\'automazione che filtri i contatti e generi richieste profilate.'
  },
  {
    id: "zero",
    name: '"Zero sito, da dare inizio?" (Nuovo Progetto)',
    focus: 'Ho paura di costi nascosti o di non saper gestire la tecnologia.',
    objective: 'Un progetto partendo da zero, con la tua guida "da partner strategico".'
  },
  {
    id: "buco_acqua",
    name: '"Social & Lead Generation: le mie campagne sono un buco nell\'acqua" (Acquisizione Attiva)',
    focus: 'Ricevo solo "like", ma non contatti pronti alla vendita.',
    objective: 'Trasformare i canali social in estensioni del mio ufficio.'
  },
  {
    id: "prestazioni_estreme",
    name: '"Voglio prestazioni estreme e un design unico" (Custom Code/Siti Generativi)',
    focus: 'Voglio distinguermi dalla massa con performance senza compromessi.',
    objective: 'Sviluppo in codice puro su misura per chi cerca scalabilità.'
  }
];

interface CustomCodeOption {
  id: string;
  title: string;
  detail: string;
}

const customCodeOptions: CustomCodeOption[] = [
  {
    id: "speed_first",
    title: 'Sito "Speed-First"',
    detail: 'Massima velocità per il posizionamento SEO, essenziale per chi ha molta concorrenza.'
  },
  {
    id: "webapp_interna",
    title: 'Web App Interna',
    detail: 'Strumento specifico per gestire flussi di lavoro o calcoli personalizzati.'
  },
  {
    id: "tailor_made",
    title: 'Design "Tailor-Made"',
    detail: 'Interfaccia unica, distante dai template standard, per chi punta sul brand.'
  },
  {
    id: "pagina_lancio",
    title: 'Pagina di Lancio Prodotto',
    detail: 'Perfetta per eventi o lanci temporanei che richiedono impatto immediato.'
  },
  {
    id: "multilingua",
    title: 'Sito Multi-Lingua Performante',
    detail: 'Architettura pulita per gestire più lingue senza rallentamenti.'
  },
  {
    id: "dashboard_dati",
    title: 'Dashboard Dati',
    detail: 'Visualizzazione in tempo reale di statistiche o grafici per i clienti.'
  },
  {
    id: "zero_manutenzione",
    title: 'Sito "Zero-Manutenzione"',
    detail: 'Struttura statica che non necessita di aggiornamenti di sicurezza o plugin.'
  }
];

interface SocialOption {
  id: string;
  title: string;
  detail: string;
}

const socialOptions: SocialOption[] = [
  {
    id: "funnel",
    title: 'Funnel di Acquisizione',
    detail: 'Sistema che trasforma follower in contatti email/WhatsApp pronti alla vendita.'
  },
  {
    id: "chatbot",
    title: 'Chatbot Qualificatore',
    detail: 'Risposte automatiche che filtrano le richieste e fissano appuntamenti.'
  },
  {
    id: "newsletter",
    title: 'Newsletter Automatica',
    detail: 'Sequenza di email che nutre il cliente fino all\'acquisto.'
  },
  {
    id: "recensioni",
    title: 'Sistema Recensioni',
    detail: 'Automazione per raccogliere e pubblicare recensioni positive post-servizio.'
  },
  {
    id: "social_to_service",
    title: 'Campagna "Social-to-Service"',
    detail: 'Integrazione diretta tra un post Instagram e la prenotazione di un servizio.'
  },
  {
    id: "lead_magnet",
    title: 'Lead Magnet Delivery',
    detail: 'Distribuzione automatizzata di guide o materiali gratuiti in cambio del contatto.'
  },
  {
    id: "monitoraggio",
    title: 'Monitoraggio Conversioni',
    detail: 'Sistema per capire esattamente quale post o campagna porta soldi reali in cassa.'
  }
];

export default function ServiziView({ config, onNavigate }: ServiziViewProps) {
  const { components } = config;
  const heroData = components.hero.servizi_hero;
  
  // Tab state: "wordpress" | "custom" | "social"
  const [activeTab, setActiveTab] = useState<"wordpress" | "custom" | "social">("wordpress");

  return (
    <div id="servizi-view" className="space-y-0 pb-0">
      
      {/* Services Hero Header */}
      <section id="servizi-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#E2DDD3]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9C9478]/8 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase flex items-center gap-2"
            >
              <Zap size={16} className="text-[#9C9478]" />
              {heroData.subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#454340] leading-tight"
            >
              Infrastrutture Web che Lavorano al Tuo Posto
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-[#2D2B28] leading-relaxed max-w-2xl"
            >
              {heroData.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SELECTION SWITCHER - Deeply customized (#D2C9B9 / #E2DDD3 alternating tones) */}
      <section id="scelte-web" className="bg-[#D2C9B9] py-16 border-t border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold text-[#756D52] tracking-wider uppercase block">
              I Tre Sistemi d'Intervento
            </span>
            <h2 className="font-sans text-3xl font-bold text-[#454340] mt-1.5 tracking-tight">
              Esplora le Specifiche nel Dettaglio
            </h2>
            <p className="font-sans text-xs text-[#2D2B28]/90 mt-2">
              Seleziona la tecnologia o l'automazione per approfondire i nostri percorsi d'ingegnerizzazione digitale.
            </p>
          </div>

          {/* Elegant system tab buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-12">
            
            {/* WordPress Tab */}
            <button
              id="tab-btn-wp"
              onClick={() => setActiveTab("wordpress")}
              className={`flex flex-col p-5 rounded-lg border text-left cursor-pointer transition-all ${
                activeTab === "wordpress"
                  ? "bg-[#2D2B28] text-[#E2DDD3] border-[#2D2B28] shadow-md"
                  : "bg-[#E2DDD3]/80 text-[#2D2B28] border-[#454340]/20 hover:bg-[#E2DDD3]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Layers size={18} className={activeTab === "wordpress" ? "text-[#A69978]" : "text-[#756D52]"} />
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
                  ? "bg-[#2D2B28] text-[#E2DDD3] border-[#2D2B28] shadow-md"
                  : "bg-[#E2DDD3]/80 text-[#2D2B28] border-[#454340]/20 hover:bg-[#E2DDD3]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Code size={18} className={activeTab === "custom" ? "text-[#A69978]" : "text-[#756D52]"} />
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
                  ? "bg-[#2D2B28] text-[#E2DDD3] border-[#2D2B28] shadow-md"
                  : "bg-[#E2DDD3]/80 text-[#2D2B28] border-[#454340]/20 hover:bg-[#E2DDD3]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Smartphone size={18} className={activeTab === "social" ? "text-[#A69978]" : "text-[#756D52]"} />
                <span className="font-mono text-xs font-bold tracking-wider uppercase">3. Social & Lead Gen</span>
              </div>
              <p className="font-sans text-sm font-bold">Automazioni che Vendono</p>
              <p className="text-[10px] opacity-80 mt-1 font-serif italic">Transformare i social in uffici attivi</p>
            </button>

          </div>

          {/* ACTIVE CONTENT SHEET - Beautiful stagger animate */}
          <div className="mx-auto max-w-5xl bg-[#E2DDD3] border border-[#454340]/20 rounded-xl p-6 md:p-8 shadow-[0_15px_30px_rgba(45,43,40,0.06)]">
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
                  <div className="border-b border-[#454340]/15 pb-4">
                    <span className="font-mono text-[10px] font-bold text-[#756D52] tracking-widest uppercase">Macro-Aree di Problema & Soluzione</span>
                    <h3 className="font-sans text-2xl font-bold text-[#454340]">Configurazione Flessiva WordPress</h3>
                    <p className="font-sans text-xs text-[#2D2B28]/90 mt-1">
                      Identifichiamo l'esatto collo di bottiglia del tuo sito web. L'approccio trasforma WordPress in un motore autonomo privo di debiti tecnici irrisolvibili.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Strategic Illustration */}
                    <div className="lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg border border-[#454340]/15 bg-[#D2C9B9]/35 p-2 shadow-sm">
                        <img
                          src="/src/assets/images/wordpress_service_1779810552051.png"
                          alt="Sviluppo ed Ingegnerizzazione WordPress"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover rounded shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                        />
                        <div className="p-3">
                          <span className="font-mono text-[9px] font-bold text-[#756D52] uppercase tracking-wider">Ingegnerizzazione WordPress</span>
                          <p className="font-sans text-[11px] text-[#2D2B28] mt-1 leading-relaxed">Trasformazione del sito in una macchina di acquisizione automatica, performante e autogestibile.</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Scenarios Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wordpressOptions.map((opt) => (
                        <div 
                          key={opt.id} 
                          className="p-5 rounded-lg border border-[#454340]/15 bg-[#D2C9B9]/50 space-y-3 hover:bg-[#D2C9B9] transition-all"
                        >
                          <h4 className="font-sans font-bold text-sm text-[#454340] flex items-center gap-2">
                            <CheckCircle size={15} className="text-[#756D52] shrink-0" />
                            {opt.name}
                          </h4>
                          <div className="space-y-1 text-xs text-[#2D2B28]/95 leading-relaxed">
                            <p>⚠️ <strong>Focus:</strong> {opt.focus}</p>
                            <p>🎯 <strong>Obiettivo:</strong> {opt.objective}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#454340]/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-bold text-xs uppercase tracking-wider bg-[#756D52] hover:bg-[#2D2B28] text-[#E2DDD3] px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow"
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
                  <div className="border-b border-[#454340]/15 pb-4">
                    <span className="font-mono text-[10px] font-bold text-[#756D52] tracking-widest uppercase">Prestazioni Purissime al 100%</span>
                    <h3 className="font-sans text-2xl font-bold text-[#454340]">Sviluppo in Codice Puro Custom-Engineered</h3>
                    <p className="font-sans text-xs text-[#2D2B28]/90 mt-1">
                      Privilegia la velocità estrema, la sicurezza blindata dei file statici e un design unico non vincolato da template precostruiti.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Strategic Illustration */}
                    <div className="lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg border border-[#454340]/15 bg-[#D2C9B9]/35 p-2 shadow-sm">
                        <img
                          src="/src/assets/images/custom_code_service_1779810574002.png"
                          alt="Prestazioni di Sviluppo Codice Puro"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover rounded shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                        />
                        <div className="p-3">
                          <span className="font-mono text-[9px] font-bold text-[#756D52] uppercase tracking-wider">Codice Puro Custom</span>
                          <p className="font-sans text-[11px] text-[#2D2B28] mt-1 leading-relaxed">Pagine ultraleggere caricate ad istanti, massima sicurezza e posizionamento SEO elevato senza restrizioni.</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Features Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {customCodeOptions.map((opt) => (
                        <div 
                          key={opt.id} 
                          className="p-5 rounded-lg border border-[#454340]/15 bg-[#D2C9B9]/50 space-y-2 hover:bg-[#D2C9B9] transition-all flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="font-sans font-bold text-sm text-[#454340] flex items-center gap-2 mb-1">
                              <Zap size={15} className="text-[#756D52] shrink-0" />
                              {opt.title}
                            </h4>
                            <p className="text-xs text-[#2D2B28]/95 leading-relaxed">{opt.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 px-4 bg-[#D2C9B9]/30 rounded p-4 text-xs text-[#2D2B28]/90 text-center max-w-2xl mx-auto italic">
                    "Ideale per chi subisce una forte concorrenza territoriale su Google e desidera caricamenti istantanei per massimizzare la SEO organica."
                  </div>

                  <div className="pt-6 border-t border-[#454340]/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-bold text-xs uppercase tracking-wider bg-[#756D52] hover:bg-[#2D2B28] text-[#E2DDD3] px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow"
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
                  <div className="border-b border-[#454340]/15 pb-4">
                    <span className="font-mono text-[10px] font-bold text-[#756D52] tracking-widest uppercase">Automazioni che Convertono i Lead</span>
                    <h3 className="font-sans text-2xl font-bold text-[#454340]">Sistemi ed Integrazioni Social & Lead Gen</h3>
                    <p className="font-sans text-xs text-[#2D2B28]/90 mt-1">
                      Spiana la strada che porta il potenziale cliente del tuo profilo social direttamente sulla chat WhatsApp o casella mail, tagliando via i curiosi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Strategic Illustration */}
                    <div className="lg:col-span-4">
                      <div className="relative overflow-hidden rounded-lg border border-[#454340]/15 bg-[#D2C9B9]/35 p-2 shadow-sm">
                        <img
                          src="/src/assets/images/social_lead_service_1779810591671.png"
                          alt="Automazione Conversione Lead Gen"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover rounded shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                        />
                        <div className="p-3">
                          <span className="font-mono text-[9px] font-bold text-[#756D52] uppercase tracking-wider">Automazione Funnel</span>
                          <p className="font-sans text-[11px] text-[#2D2B28] mt-1 leading-relaxed">Collega instagram, facebook o tik tok direttamente a WhatsApp con filtri per scartare i perditempo.</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Features Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {socialOptions.map((opt) => (
                        <div 
                          key={opt.id} 
                          className="p-5 rounded-lg border border-[#454340]/15 bg-[#D2C9B9]/50 space-y-2 hover:bg-[#D2C9B9] transition-all flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="font-sans font-bold text-sm text-[#454340] flex items-center gap-2 mb-1">
                              <CheckCircle size={15} className="text-[#756D52] shrink-0" />
                              {opt.title}
                            </h4>
                            <p className="text-xs text-[#2D2B28]/95 leading-relaxed">{opt.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#454340]/10 text-center">
                    <button
                      onClick={() => onNavigate("/contatti")}
                      className="font-sans font-bold text-xs uppercase tracking-wider bg-[#756D52] hover:bg-[#2D2B28] text-[#E2DDD3] px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow"
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
      <section className="bg-[#2D2B28] text-[#E2DDD3] py-20 border-y border-[#454340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold text-[#A69978] tracking-widest uppercase block">
              Ingegnerizzazione del Lavoro
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#E2DDD3] tracking-tight">
              Sinergia Generativa: Come l'IA Potenzia ogni Progetto Web
            </h2>
            <p className="font-sans text-sm text-[#E2DDD3]/70 leading-relaxed">
              Grazie agli strumenti di IA ottimizziamo tempi di sviluppo, scrittura di copy strategici e interconnessioni di dati, garantendoti risultati professionali in metà tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Copywriting accelerato */}
            <div className="bg-[#2D2B28] border border-[#454340] p-8 rounded-lg space-y-4 shadow-sm hover:border-[#A69978]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <BookOpen size={18} />
              </div>
              <h3 className="font-sans font-bold text-[#E2DDD3] text-lg">Copywriting e Testi Persuasivi</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Niente paura di spendere settimane ad aspettare i testi. Tramite modelli linguistici avanzati guidati dal mio stampo di Comunicazione Visiva, generiamo testi impeccabili orientati alla conversione del tuo potenziale cliente.
              </p>
            </div>

            {/* Card 2: Layout & Asset Mockups */}
            <div className="bg-[#2D2B28] border border-[#454340] p-8 rounded-lg space-y-4 shadow-sm hover:border-[#A69978]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Layout size={18} />
              </div>
              <h3 className="font-sans font-bold text-[#E2DDD3] text-lg">Asset Grafici Generati Ad-Hoc</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Niente fotografie stock finte o spersonalizzate. Utilizziamo potenti generatori di immagini stabili per progettare icone vettoriali, sfondi custom coordinati e copertine professionali che rispecchiano i tuoi reali valori di brand locale.
              </p>
            </div>

            {/* Card 3: SEO Semantica Automatica */}
            <div className="bg-[#2D2B28] border border-[#454340] p-8 rounded-lg space-y-4 shadow-sm hover:border-[#A69978]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Database size={18} />
              </div>
              <h3 className="font-sans font-bold text-[#E2DDD3] text-lg">Strutturazione e SEO Semantica</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Tutte le pagine web vengono indicizzate scansionando le intenzioni di ricerca reali dei tuoi clienti su Google. Gli algoritmi di IA strutturano tag ordinati, titoli ad alta pertinenza d'acquisto e schemi di dati semantici perfetti.
              </p>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <button
              id="cta-servizi-ai-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-bold text-xs uppercase tracking-wider bg-[#E2DDD3] text-[#2D2B28] hover:bg-[#A69978] hover:text-[#2D2B28] px-6 py-3.5 rounded transition-all duration-300 cursor-pointer shadow-md"
            >
              Analizza la tua idea di business gratis
            </button>
          </div>

        </div>
      </section>

      {/* Trust factors or Process - Standard Bone Accent */}
      <section className="bg-[#E2DDD3] py-20 border-b border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#454340] tracking-tight">
              La Garanzia del Mio Approccio
            </h3>
            <p className="font-sans text-sm text-[#2D2B28]/90 mt-2">Zero sorprese, massima trasparenza.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Compliance Totale</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Tutti i siti web includono policy legali native (Privacy e Cookie) graficamente allineate, senza widget esterni invasivi che rompono il design.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <Zap size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Prestazioni Elevate</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Design super-leggero. I punteggi di caricamento velocizzano il posizionamento SEO sui motori di ricerca.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <RotateCcw size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Aggiornamenti Semplici</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Database dei testi organizzato. Se vuoi modificare un testo principale, lo facciamo in un solo punto, aggiornato all'istante ovunque.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
