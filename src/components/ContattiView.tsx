import React, { useState } from "react";
import { SiteConfig } from "../types";
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  Smartphone, 
  HelpCircle,
  Clock,
  Sparkles,
  Layers,
  Zap,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContattiProps {
  config: SiteConfig;
}

type ServiceType = "wordpress" | "custom" | "social" | "consulting";

export default function ContattiView({ config }: ContattiProps) {
  const { components } = config;
  const heroData = components.hero.contatti_hero;

  // Form state
  const [nome, setNome] = useState("");
  const [attivita, setAttivita] = useState("");
  const [contatto, setContatto] = useState("");
  const [servizio, setServizio] = useState<ServiceType>("wordpress");
  
  // Sector-specific states
  const [wpHosting, setWpHosting] = useState("Da valutare insieme");
  const [wpAutonomia, setWpAutonomia] = useState("Voglio essere formato (Tutoraggio)");
  
  const [customPerformance, setCustomPerformance] = useState("Sicurezza e caricamento istantaneo");
  const [customIntegrations, setCustomIntegrations] = useState("Sì, mi interessa un Assistente IA integrato");

  const [socialCanali, setSocialCanali] = useState("Instagram e Facebook");
  const [socialBudgetAds, setSocialBudgetAds] = useState("No, voglio solo crescita organica e automazioni");
  const [socialTargetContatti, setSocialTargetContatti] = useState("Da 15 a 50 contatti qualificati al mese");

  const [barriera, setBarriera] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const [formSent, setFormSent] = useState(false);
  const [generatedReport, setGeneratedReport] = useState("");

  const getServiceName = (id: ServiceType) => {
    switch (id) {
      case "wordpress": return "Sito Web in WordPress (Flessibile & Gestibile)";
      case "custom": return "Sito Web in Codice Puro (Prestazioni Purissime)";
      case "social": return "Automazioni Social & Lead Gen (Il sistema che vende)";
      default: return "Consulenza / Strategia ad personam";
    }
  };

  // Build a beautiful structured markdown/text report dynamically
  const buildReport = () => {
    let report = `📋 *REPORT PROFILAZIONE CLIENTE - FACILISSIMOWEB*\n`;
    report += `========================================\n\n`;
    report += `👤 *Dati Anagrafici:*\n`;
    report += `• *Nome:* ${nome || "Non specificato"}\n`;
    report += `• *Attività:* ${attivita || "Non specificata"}\n`;
    report += `• *Recapito:* ${contatto || "Non specificato"}\n\n`;
    report += `🎯 *Servizio Scelto:*\n`;
    report += `• *Tipologia:* ${getServiceName(servizio)}\n\n`;

    if (servizio === "wordpress") {
      report += `🔧 *Specifiche WordPress:*\n`;
      report += `• *Hosting & Dominio:* ${wpHosting}\n`;
      report += `• *Gestione autonoma:* ${wpAutonomia}\n\n`;
    } else if (servizio === "custom") {
      report += `💻 *Specifiche Codice Puro:*\n`;
      report += `• *Priorità Tecnica:* ${customPerformance}\n`;
      report += `• *Integrazione Database/IA:* ${customIntegrations}\n\n`;
    } else if (servizio === "social") {
      report += `📱 *Specifiche Social & Lead Gen:*\n`;
      report += `• *Canali Richiesti:* ${socialCanali}\n`;
      report += `• *Budget Ads Corrente:* ${socialBudgetAds}\n`;
      report += `• *Target Leads:* ${socialTargetContatti}\n\n`;
    }

    report += `🛑 *Barriera/Ostacolo Primario:*\n`;
    report += `• "${barriera || "Nessun ostacolo dichiarato"}"\n\n`;

    if (messaggio.trim()) {
      report += `✉️ *Messaggio Aggiuntivo:*\n`;
      report += `• "${messaggio}"\n\n`;
    }

    report += `========================================\n`;
    report += `⚡ _Generato da FacilissimoWeb.it - Umanesimo Digitale_`;
    return report;
  };

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !contatto) {
      alert("Per favore, inserisci almeno il tuo Nome e un capiente recapito per essere ricontattato.");
      return;
    }
    const report = buildReport();
    setGeneratedReport(report);
    setFormSent(true);
  };

  // WhatsApp sender
  const sendWhatsApp = () => {
    const phone = "393791038253";
    const encodedText = encodeURIComponent(generatedReport);
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`, "_blank");
  };

  // Email sender using mailto linking
  const sendEmail = () => {
    const email = "mariateresarogani@gmail.com";
    const subject = encodeURIComponent(`Nuova Profilazione da ${nome} - ${attivita || "FacilissimoWeb"}`);
    const body = encodeURIComponent(generatedReport);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div id="contatti-page-view" className="space-y-16 pb-24">
      
      {/* Dynamic Header Section with high contrast layout */}
      <section id="contatti-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#D2C9B9]/40 to-[#E2DDD3]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#756D52]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase flex items-center gap-2">
              <MessageSquare size={16} className="text-[#9C9478]" />
              {heroData.subtitle}
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#454340] leading-tight">
              Progetta il tuo <span className="text-[#756D52] italic font-serif">Successo</span> senza Ansia Tecnica
            </h1>

            <p className="font-sans text-base md:text-lg text-[#2D2B28]/95 leading-relaxed max-w-2xl">
              Niente risposte pre-confezionate o email spam automatiche. Usa il mio <strong className="text-[#454340]">Questionario Intelligente</strong> per descrivere il tuo scenario. Potrai inviarmi le risposte via Email o direttamente su WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container - Interactive Section with alternate dark slate & warm wood tones */}
      <section id="modulo-contatti" className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Alternating Dark Slate Informative Box & IA Processes explanation */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Box 1: Alternate dark color background (Rich Charcoal) */}
          <div className="bg-[#2D2B28] text-[#E2DDD3] p-8 rounded-lg shadow-[0_15px_30px_-5px_rgba(45,43,40,0.3)] space-y-6 border border-[#454340]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E2DDD3]/10 flex items-center justify-center text-[#A69978]">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm tracking-wide text-[#E2DDD3]">Tempo di Profilazione</h4>
                <p className="font-mono text-[10px] uppercase text-[#A69978] tracking-widest">Meno di 3 minuti</p>
              </div>
            </div>
            
            <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
              Il sistema adatta le domande in base alla tua preferenza. Analizzerò le risposte di persona e ti ricontatterò entro 24 ore offrendoti già una prima traccia d'azione chiara.
            </p>

            <div className="pt-2 border-t border-[#454340] space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-[#E2DDD3]/90">
                <span className="text-[#A69978] font-bold">1.</span>
                <span>Compili le domande essenziali</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#E2DDD3]/90">
                <span className="text-[#A69978] font-bold">2.</span>
                <span>Generi il codice report riassuntivo</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#E2DDD3]/90">
                <span className="text-[#A69978] font-bold">3.</span>
                <span>Scegli di spedirlo via WhatsApp o Email</span>
              </div>
            </div>
          </div>

          {/* AI Proceses Info Pill: "Come l'IA Velocizza la tua Impresa" */}
          <div className="bg-[#D2C9B9] border border-[#756D52]/20 p-8 rounded-lg shadow-[0_10px_20px_-8px_rgba(117,109,82,0.15)] space-y-5">
            <span className="font-mono text-[9px] font-bold tracking-widest uppercase bg-[#756D52]/15 text-[#756D52] px-2 py-0.5 rounded-sm">
              Focus IA Semplificata
            </span>
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#756D52]" size={18} />
              <h4 className="font-sans font-bold text-[#454340] text-sm">Automazione ad Alto Valore</h4>
            </div>
            <p className="font-sans text-xs text-[#2D2B28]/95 leading-relaxed">
              L'Intelligenza Artificiale non serve a complicare il tuo business. Nelle mie soluzioni la uso per:
            </p>
            
            <div className="space-y-3 pt-2 text-xs text-[#2D2B28]/90">
              <div className="p-2.5 bg-[#E2DDD3]/60 rounded border border-[#756D52]/10">
                <strong className="block text-[#454340] mb-0.5 font-sans">1. Auto-risposte Istantanee</strong>
                Configuro assistenti che rispondono immediatamente ai DM su Instagram indirizzando i clienti alla tua agenda.
              </div>
              <div className="p-2.5 bg-[#E2DDD3]/60 rounded border border-[#756D52]/10">
                <strong className="block text-[#454340] mb-0.5 font-sans">2. Scrittura Programmatica</strong>
                Ottimizziamo la stesura di post, promozioni e cataloghi riducendo l'ansia da foglio bianco del 90%.
              </div>
            </div>
          </div>

        </div>

        {/* Right column: Dynamic Form / Report Review Display */}
        <div className="lg:col-span-8">
          
          <div className="bg-[#E2DDD3] border border-[#454340]/25 rounded-lg p-6 md:p-10 shadow-[0_15px_35px_-10px_rgba(69,67,64,0.1)] transition-all">
            
            <AnimatePresence mode="wait">
              
              {!formSent ? (
                
                // Active Form State
                <motion.form
                  key="form-entry"
                  onSubmit={handleGenerateReport}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="border-b border-[#454340]/10 pb-4">
                    <h3 className="font-sans text-xl font-bold text-[#454340] tracking-tight">Compila il tuo scenario</h3>
                    <p className="font-sans text-xs text-[#2D2B28]/90 mt-1 leading-relaxed">
                      Scegli il settore d'interesse e guarda come le domande si adattano alle reali esigenze della tua micro-impresa.
                    </p>
                  </div>

                  {/* General Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#454340]" htmlFor="nome">
                        Il Tuo Nome *
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="es. Maria Teresa"
                        className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#454340]" htmlFor="attivita">
                        Nome della tua Attività / Studio
                      </label>
                      <input
                        id="attivita"
                        type="text"
                        value={attivita}
                        onChange={(e) => setAttivita(e.target.value)}
                        placeholder="es. Atelier del Vetro, Agriturismo, Studio Medico"
                        className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service selector (Sectors) */}
                  <div className="space-y-3">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#454340]">
                      Quale Soluzione vuoi approfondire?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      
                      {/* WordPress option */}
                      <button
                        id="sector-tab-wordpress"
                        type="button"
                        onClick={() => setServizio("wordpress")}
                        className={`text-left p-4 rounded-md border transition-all flex flex-col justify-between h-28 cursor-pointer ${
                          servizio === "wordpress"
                            ? "bg-[#756D52] text-[#E2DDD3] border-[#756D52] shadow-md"
                            : "bg-[#E2DDD3] text-[#2D2B28] border-[#454340]/30 hover:bg-[#D2C9B9]/40"
                        }`}
                      >
                        <Layers size={18} className={servizio === "wordpress" ? "text-[#E2DDD3]" : "text-[#756D52]"} />
                        <div>
                          <p className="font-sans font-bold text-xs">WordPress Site</p>
                          <p className="text-[10px] opacity-80 font-serif italic mt-0.5">Flessibile & Gestibile</p>
                        </div>
                      </button>

                      {/* Custom Code option */}
                      <button
                        id="sector-tab-custom"
                        type="button"
                        onClick={() => setServizio("custom")}
                        className={`text-left p-4 rounded-md border transition-all flex flex-col justify-between h-28 cursor-pointer ${
                          servizio === "custom"
                            ? "bg-[#756D52] text-[#E2DDD3] border-[#756D52] shadow-md"
                            : "bg-[#E2DDD3] text-[#2D2B28] border-[#454340]/30 hover:bg-[#D2C9B9]/40"
                        }`}
                      >
                        <Zap size={18} className={servizio === "custom" ? "text-[#E2DDD3]" : "text-[#756D52]"} />
                        <div>
                          <p className="font-sans font-bold text-xs">Custom Code</p>
                          <p className="text-[10px] opacity-80 font-serif italic mt-0.5">Prestazioni Purissime</p>
                        </div>
                      </button>

                      {/* Social & Lead Gen option */}
                      <button
                        id="sector-tab-social"
                        type="button"
                        onClick={() => setServizio("social")}
                        className={`text-left p-4 rounded-md border transition-all flex flex-col justify-between h-28 cursor-pointer ${
                          servizio === "social"
                            ? "bg-[#756D52] text-[#E2DDD3] border-[#756D52] shadow-md"
                            : "bg-[#E2DDD3] text-[#2D2B28] border-[#454340]/30 hover:bg-[#D2C9B9]/40"
                        }`}
                      >
                        <Smartphone size={18} className={servizio === "social" ? "text-[#E2DDD3]" : "text-[#756D52]"} />
                        <div>
                          <p className="font-sans font-bold text-xs">Social & Lead Gen</p>
                          <p className="text-[10px] opacity-80 font-serif italic mt-0.5">Automazioni che Vendono</p>
                        </div>
                      </button>

                    </div>
                  </div>

                  {/* SECTOR SPECIFIC SECTION (AnimatePresence for organic feel) */}
                  <div className="bg-[#D2C9B9]/40 p-5 rounded-md border border-[#454340]/10">
                    <AnimatePresence mode="wait">
                      
                      {servizio === "wordpress" && (
                        <motion.div
                          key="wp-fields"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <span className="font-mono text-[9px] tracking-wider text-[#756D52] uppercase font-bold block">
                            Opzioni Configurazione WordPress
                          </span>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Hai già un Hosting o Dominio?</label>
                              <select
                                value={wpHosting}
                                onChange={(e) => setWpHosting(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="No, ho bisogno che mi aiuti a sceglierlo">No, ho bisogno che mi aiuti a sceglierlo</option>
                                <option value="Sì, ho già registrato dominio e spazio">Sì, ho già registrato dominio e spazio</option>
                                <option value="Da valutare insieme">Da valutare insieme</option>
                              </select>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Gestirai tu i Contenuti?</label>
                              <select
                                value={wpAutonomia}
                                onChange={(e) => setWpAutonomia(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="Voglio essere formato (Tutoraggio)">Sì, desidero un tutoraggio per essere 100% autonomo</option>
                                <option value="Preferisco che te ne occupi tu nel tempo">No, preferisco delegare la gestione periodica</option>
                                <option value="Solo piccole modifiche">Gestirò in autonomia solo piccoli aggiornamenti di testo</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {servizio === "custom" && (
                        <motion.div
                          key="custom-fields"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <span className="font-mono text-[9px] tracking-wider text-[#756D52] uppercase font-bold block">
                            Opzioni Prestazionali Codice Puro (Generativo)
                          </span>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Qual è l'obiettivo tecnico principale?</label>
                              <select
                                value={customPerformance}
                                onChange={(e) => setCustomPerformance(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="Sicurezza e caricamento istantaneo">Velocità estrema (caricamento istantaneo) e massima sicurezza</option>
                                <option value="Posizionamento SEO imbattibile">SEO impeccabile su Google e mobile-friendly al 100%</option>
                                <option value="Infrastruttura personalizzabile">Interfaccia interattiva unica non replicabile con WordPress</option>
                              </select>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Integrazione software o Intelligenza Artificiale?</label>
                              <select
                                value={customIntegrations}
                                onChange={(e) => setCustomIntegrations(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="Sì, mi interessa un Assistente IA integrato">Sì, voglio un assistente IA o automazioni server</option>
                                <option value="No, mi basta un sito vetrina rapidissimo">No, mi basta un sito vetrina ad altissimo impatto statico</option>
                                <option value="Devo collegare un gestionale esterno">Devo collegare un mio software gestionale/database</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {servizio === "social" && (
                        <motion.div
                          key="social-fields"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <span className="font-mono text-[9px] tracking-wider text-[#756D52] uppercase font-bold block">
                            Configurazione Automazioni Social & Lead Generation
                          </span>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Piattaforme di interesse?</label>
                              <select
                                value={socialCanali}
                                onChange={(e) => setSocialCanali(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="Instagram e Facebook">Instagram e Facebook (Consigliato)</option>
                                <option value="LinkedIn Professionale">LinkedIn (B2B / Professionisti)</option>
                                <option value="Voglio partire da zero su tutti i canali">Nessuno, voglio costruire da zero</option>
                              </select>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Fai già campagne sponsorizzate?</label>
                              <select
                                value={socialBudgetAds}
                                onChange={(e) => setSocialBudgetAds(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="No, voglio solo crescita organica e automazioni">No, preferisco flussi organici e risposte automatiche</option>
                                <option value="Sì, ma costano molto e convertono poco">Sì, faccio già Ads ma con scarsi risultati</option>
                                <option value="Voglio integrare campagne mirate col sistema">Voglio pianificare campagne mirate da zero</option>
                              </select>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#454340]">Obiettivo contatti qualificati al mese?</label>
                              <select
                                value={socialTargetContatti}
                                onChange={(e) => setSocialTargetContatti(e.target.value)}
                                className="w-full bg-[#E2DDD3] border border-[#454340]/30 rounded px-3 py-2 text-xs text-[#2D2B28] outline-none cursor-pointer"
                              >
                                <option value="Fino a 15 contatti stabili al mese">Fino a 15 contatti stabili</option>
                                <option value="Da 15 a 50 contatti qualificati al mese">Da 15 a 50 contatti mirati</option>
                                <option value="Oltre 50 leads mensili ad alto valore">Oltre 50 contatti ad alto ritmo</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>

                  {/* General Contact Info */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#454340]" htmlFor="contatto">
                      Il tuo recapito di contatto (Email o Telefono) *
                    </label>
                    <input
                      id="contatto"
                      type="text"
                      required
                      value={contatto}
                      onChange={(e) => setContatto(e.target.value)}
                      placeholder="es. nome@attività.it oppure cell. 333 4455667"
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                    />
                  </div>

                  {/* Ostacolo/Barriera */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#454340] flex items-center gap-1" htmlFor="barriera">
                      <span>Qual è oggi la tua fatica o barriera tecnologica principale?</span>
                      <HelpCircle size={14} className="text-[#756D52]" />
                    </label>
                    <input
                      id="barriera"
                      type="text"
                      value={barriera}
                      onChange={(e) => setBarriera(e.target.value)}
                      placeholder="es. 'Ho paura dei costi nascosti', 'Non so come aggiornare il sito', 'Non so fare lead generation'"
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                    />
                  </div>

                  {/* Note o Messaggio opzionale */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#454340]" htmlFor="messaggio">
                      Ulteriori note sul tuo business (Opzionale)
                    </label>
                    <textarea
                      id="messaggio"
                      rows={3}
                      value={messaggio}
                      onChange={(e) => setMessaggio(e.target.value)}
                      placeholder="Raccontami pure dell'obiettivo che desideri raggiungere a breve termine..."
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button to show Report Preview screen */}
                  <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-[9px] text-[#2D2B28]/60 leading-relaxed max-w-sm">
                      * Inserisci i dati. Al completamento vedrai il report pronto e potrai decidere se spedirlo su WhatsApp o Email personale.
                    </p>
                    
                    <button
                      id="generate-report-btn"
                      type="submit"
                      className="w-full sm:w-auto font-sans font-semibold text-xs uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-8 py-4 rounded-md shadow-[0_12px_24px_-10px_rgba(117,109,82,0.45)] hover:bg-[#454340] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      Genera Report Profilazione
                      <Send size={14} />
                    </button>
                  </div>

                </motion.form>
                
              ) : (
                
                // Show Dynamic Review Screen (The generated Report card ready for delivery)
                <motion.div
                  key="form-report"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="text-center py-4 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 size={26} />
                    </div>
                    <h3 className="font-sans text-xl font-bold text-[#454340]">Report Generato con Successo!</h3>
                    <p className="font-sans text-xs text-[#2D2B28]/90 max-w-md mx-auto leading-relaxed">
                      Scegli ora una delle due vie per far recapitare il tuo report a Maria Teresa.
                    </p>
                  </div>

                  {/* Rich Monospaced Box presenting the formatted answer structure */}
                  <div className="bg-[#2D2B28] border border-[#454340] text-emerald-400 p-6 rounded-md shadow-inner overflow-x-auto font-mono text-xs whitespace-pre-wrap leading-loose max-h-80 custom-scrollbar">
                    {generatedReport}
                  </div>

                  {/* DOUBLE DELIVERY ACTIONS (Email to mariateresarogani@gmail.com, WhatsApp to 3791038253) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Method 1: SEND VIA WHATSAPP */}
                    <button
                      id="deliver-whatsapp-btn"
                      onClick={sendWhatsApp}
                      className="flex items-center justify-center gap-3 bg-[#0F9D58] hover:bg-[#0b7441] text-[#E2DDD3] py-4 px-6 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Smartphone size={18} />
                      Invia via WhatsApp (379 1038253)
                    </button>

                    {/* Method 2: SEND VIA EMAIL */}
                    <button
                      id="deliver-email-btn"
                      onClick={sendEmail}
                      className="flex items-center justify-center gap-3 bg-[#756D52] hover:bg-[#454340] text-[#E2DDD3] py-4 px-6 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Mail size={18} />
                      Invia via Email a Maria Teresa
                    </button>

                  </div>

                  {/* Action row to revert / compile other data */}
                  <div className="pt-4 flex justify-center border-t border-[#454340]/10">
                    <button
                      id="modify-report-btn"
                      onClick={() => setFormSent(false)}
                      className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#756D52] hover:text-[#454340] flex items-center gap-2 cursor-pointer py-2"
                    >
                      ← Torna indietro e modifica i dati
                    </button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
