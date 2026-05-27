import React, { useState } from "react";
import { SiteConfig, ServiceType } from "../types";
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Smartphone, 
  HelpCircle,
  Clock,
  Sparkles,
  Layers,
  Zap,
  UserCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContattiProps {
  config: SiteConfig;
}

export default function ContattiView({ config }: ContattiProps) {
  const { components, service_options } = config;
  const heroData = components.hero.contatti_hero;

  // Form general states
  const [nome, setNome] = useState("");
  const [attivita, setAttivita] = useState("");
  const [contatto, setContatto] = useState("");
  const [servizio, setServizio] = useState<ServiceType>("wordpress");
  
  // Specific macro choice states
  const [selectedWpOption, setSelectedWpOption] = useState<string>(service_options.wordpress[0].id);
  const [selectedCustomOption, setSelectedCustomOption] = useState<string>(service_options.custom[0].id);
  const [selectedSocialOption, setSelectedSocialOption] = useState<string>(service_options.social[0].id);

  const [barriera, setBarriera] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const [formSent, setFormSent] = useState(false);
  const [generatedReport, setGeneratedReport] = useState("");

  const getServiceName = (id: ServiceType) => {
    switch (id) {
      case "wordpress": return "Sito Web in WordPress (Flessibile & Gestibile)";
      case "custom": return "Sito Web in Codice Puro (Prestazioni Purissime)";
      case "social": return "Automazioni Social & Lead Gen (Il sistema che vende)";
      default: return id;
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
    report += `🎯 *Soluzione di Competenza Richiesta:*\n`;
    report += `• *Categoria:* ${getServiceName(servizio)}\n\n`;

    if (servizio === "wordpress") {
      const wpItem = service_options.wordpress.find(o => o.id === selectedWpOption) || service_options.wordpress[0];
      report += `🔧 *Specifiche Macro-Area Scelta (WordPress):*\n`;
      report += `• *Scenario:* ${wpItem.name}\n`;
      report += `• *Focus Problema:* ${wpItem.focus}\n`;
      report += `• *Obiettivo Desiderato:* ${wpItem.objective}\n\n`;
    } else if (servizio === "custom") {
      const customItem = service_options.custom.find(o => o.id === selectedCustomOption) || service_options.custom[0];
      report += `💻 *Specifiche Custom Code Scelte:*\n`;
      report += `• *Obiettivo Generale:* Velocità estrema, scalabilità e design unico.\n`;
      report += `• *Configurazione Specifica:* ${customItem.title}\n`;
      report += `• *Dettaglio:* ${customItem.detail}\n\n`;
    } else if (servizio === "social") {
      const socialItem = service_options.social.find(o => o.id === selectedSocialOption) || service_options.social[0];
      report += `📱 *Specifiche Social & Lead Gen Scelte:*\n`;
      report += `• *Obiettivo Generale:* Trasformare i social da vetrina a ufficio vendite attivo.\n`;
      report += `• *Automazione Specifica:* ${socialItem.title}\n`;
      report += `• *Dettaglio dell'Integrazione:* ${socialItem.detail}\n\n`;
    }

    report += `🛑 *Ostacolo/Fatica Digitale Primaria:*\n`;
    report += `• "${barriera || "Nessun ostacolo dichiarato"}"\n\n`;

    if (messaggio.trim()) {
      report += `✉️ *Note Aggiuntive sul Business:*\n`;
      report += `• "${messaggio}"\n\n`;
    }

    report += `========================================\n`;
    report += `⚡ _Contatti Diretti Ricevente Maria Teresa_\n`;
    report += `• Mail: mariateresarogani@gmail.com\n`;
    report += `• WhatsApp: +39 379 1038253\n`;
    report += `========================================\n`;
    report += `⚡ _Generato da FacilissimoWeb.it - Umanesimo Digitale_`;
    return report;
  };

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !contatto) {
      alert("Per favore, inserisci almeno il tuo Nome e un recapito di contatto valido.");
      return;
    }
    const report = buildReport();
    setGeneratedReport(report);
    setFormSent(true);
  };

  // WhatsApp sender to Italian number 3791038253
  const sendWhatsApp = () => {
    const phone = "393791038253";
    const encodedText = encodeURIComponent(generatedReport);
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`, "_blank");
  };

  // Email sender to mariateresarogani@gmail.com
  const sendEmail = () => {
    const email = "mariateresarogani@gmail.com";
    const subject = encodeURIComponent(`Nuova Profilazione da ${nome} - ${attivita || "FacilissimoWeb"}`);
    const body = encodeURIComponent(generatedReport);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  const activeWpObject = service_options.wordpress.find(o => o.id === selectedWpOption) || service_options.wordpress[0];

  return (
    <div id="contatti-page-view" className="space-y-0 pb-0">
      
      {/* Dynamic Header Section with high contrast layout */}
      <section id="contatti-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-app-accent-khaki/40 to-app-bg-60 w-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-app-accent-olive/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs md:text-sm font-semibold text-app-accent-olive tracking-widest uppercase flex items-center gap-2">
              <MessageSquare size={16} className="text-app-accent-khaki" />
              {heroData.subtitle}
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-app-accent-charcoal leading-tight">
              Progetta il tuo <span className="text-app-accent-olive italic font-serif">Successo</span> senza Ansia Tecnica
            </h1>

            <p className="font-sans text-base md:text-lg text-app-text-30/95 leading-relaxed max-w-2xl">
              Niente risposte pre-confezionate o email spam automatiche. Usa il mio <strong className="text-app-accent-charcoal">Questionario Guidato</strong> per profilare il tuo settore. Le risposte arriveranno a <strong className="text-app-accent-olive">mariateresarogani@gmail.com</strong> o su WhatsApp al <strong className="text-app-accent-olive">379 1038253</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container - Interactive Section with alternate dark slate & warm wood tones */}
      <section id="contatti-form-container" className="w-full bg-app-bg-60 py-16 border-t border-app-accent-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Alternating Dark Slate Informative Box & IA Processes explanation */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Box 1: Alternate dark color background (Rich Charcoal) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-app-text-30 text-app-bg-60 p-8 rounded-lg shadow-[0_15px_30px_-5px_rgba(45,43,40,0.3)] space-y-6 border border-app-accent-charcoal"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-app-bg-60/10 flex items-center justify-center text-app-accent-khaki-2">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm tracking-wide text-app-bg-60">Tempo di Profilazione</h4>
                <p className="font-mono text-[10px] uppercase text-app-accent-khaki-2 tracking-widest">Meno di 3 minuti</p>
              </div>
            </div>
            
            <p className="font-sans text-xs text-app-bg-60/80 leading-relaxed font-normal">
              Il sistema intelligente adatta automaticamente le domande in base al settore di competenza proposto. Riceverai un report completo pronto all'invio.
            </p>

            <div className="pt-2 border-t border-app-accent-charcoal space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-app-bg-60/90">
                <span className="text-app-accent-khaki-2 font-bold">1.</span>
                <span>Dimmi chi sei e quale settore vuoi esplorare</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-app-bg-60/90">
                <span className="text-app-accent-khaki-2 font-bold">2.</span>
                <span>Seleziona lo scenario o obiettivo esatto</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-app-bg-60/90">
                <span className="text-app-accent-khaki-2 font-bold">3.</span>
                <span>Scegli se inviarlo su WhatsApp o tramite Email classica</span>
              </div>
            </div>
          </motion.div>

          {/* AI Proceses Info Pill: "Come l'IA Velocizza la tua Impresa" */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-app-accent-khaki/30 border border-app-accent-olive/20 p-8 rounded-lg shadow-[0_10px_20px_-8px_rgba(117,109,82,0.15)] space-y-5"
          >
            <span className="font-mono text-[9px] font-bold tracking-widest uppercase bg-app-accent-olive/15 text-app-accent-olive px-2 py-0.5 rounded-sm">
              Integrazione IA Attiva
            </span>
            <div className="flex items-center gap-2">
              <Sparkles className="text-app-accent-olive" size={18} />
              <h4 className="font-sans font-bold text-app-accent-charcoal text-sm">Automazione Semplificata</h4>
            </div>
            <p className="font-sans text-xs text-app-text-30/95 leading-relaxed">
              L'Intelligenza Artificiale accelera i flussi digitali senza sradicare l'artigianalità del brand. La integriamo per creare:
            </p>
            
            <div className="space-y-3 pt-2 text-xs text-app-text-30/90">
              <div className="p-2.5 bg-app-bg-60/60 rounded border border-app-accent-olive/10">
                <strong className="block text-app-accent-charcoal mb-0.5 font-sans">1. Chatbot di Pre-Qualifica</strong>
                I filtri automatici scremano i curiosi via DM Instagram per farti parlare solo con chi ha vero budget.
              </div>
              <div className="p-2.5 bg-app-bg-60/60 rounded border border-app-accent-olive/10">
                <strong className="block text-app-accent-charcoal mb-0.5 font-sans">2. Copia strategica immediato</strong>
                L'IA suggerisce testi, angoli di vendita e newsletter programmate pronte da rifinire ed inviare.
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right column: Dynamic Form / Report Review Display */}
        <div className="lg:col-span-8">
          
          <div className="bg-app-bg-60 border border-app-accent-charcoal/25 rounded-lg p-6 md:p-10 shadow-[0_15px_35px_-10px_rgba(69,67,64,0.1)] transition-all">
            
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
                  <div className="border-b border-app-accent-charcoal/10 pb-4">
                    <h3 className="font-sans text-xl font-bold text-app-accent-charcoal tracking-tight">Compila il tuo scenario</h3>
                    <p className="font-sans text-xs text-app-text-30/90 mt-1 leading-relaxed">
                      L'interfaccia adatta le domande in base alla soluzione scelta. Scopri le configurazioni ritagliate su misura per te.
                    </p>
                  </div>

                  {/* General Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-app-accent-charcoal" htmlFor="nome">
                        Il Tuo Nome *
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="es. Maria Teresa"
                        className="w-full bg-app-bg-60 focus:bg-app-bg-60/20 border border-app-accent-charcoal/30 focus:border-app-accent-olive rounded px-4 py-3 text-sm text-app-text-30 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-app-accent-charcoal" htmlFor="attivita">
                        Nome della tua Attività / Studio
                      </label>
                      <input
                        id="attivita"
                        type="text"
                        value={attivita}
                        onChange={(e) => setAttivita(e.target.value)}
                        placeholder="es. Atelier del Vetro, Agriturismo, Studio Medico"
                        className="w-full bg-app-bg-60 focus:bg-app-bg-60/20 border border-app-accent-charcoal/30 focus:border-app-accent-olive rounded px-4 py-3 text-sm text-app-text-30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service selector (Sectors) */}
                  <div className="space-y-3">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-accent-charcoal">
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
                            ? "bg-app-accent-olive text-app-bg-60 border-app-accent-olive shadow-md"
                            : "bg-app-bg-60 text-app-text-30 border-app-accent-charcoal/30 hover:bg-app-accent-khaki/40"
                        }`}
                      >
                        <Layers size={18} className={servizio === "wordpress" ? "text-app-bg-60" : "text-app-accent-olive"} />
                        <div>
                          <p className="font-sans font-bold text-xs font-mono">1. WordPress Site</p>
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
                            ? "bg-app-accent-olive text-app-bg-60 border-app-accent-olive shadow-md"
                            : "bg-app-bg-60 text-app-text-30 border-app-accent-charcoal/30 hover:bg-app-accent-khaki/40"
                        }`}
                      >
                        <Zap size={18} className={servizio === "custom" ? "text-app-bg-60" : "text-app-accent-olive"} />
                        <div>
                          <p className="font-sans font-bold text-xs font-mono">2. Custom Code</p>
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
                            ? "bg-app-accent-olive text-app-bg-60 border-app-accent-olive shadow-md"
                            : "bg-app-bg-60 text-app-text-30 border-app-accent-charcoal/30 hover:bg-app-accent-khaki/40"
                        }`}
                      >
                        <Smartphone size={18} className={servizio === "social" ? "text-app-bg-60" : "text-app-accent-olive"} />
                        <div>
                          <p className="font-sans font-bold text-xs font-mono">3. Social & Lead Gen</p>
                          <p className="text-[10px] opacity-80 font-serif italic mt-0.5">Automazioni che Vendono</p>
                        </div>
                      </button>

                    </div>
                  </div>

                  {/* SECTOR SPECIFIC SECTION (AnimatePresence for organic feel) - Color-harmony alternate box */}
                  <div className="bg-app-accent-khaki/30 p-6 rounded-md border border-app-accent-charcoal/20">
                    <AnimatePresence mode="wait">
                      
                      {/* WORDPRESS CONFIGURATION SCHEME */}
                      {servizio === "wordpress" && (
                        <motion.div
                          key="wp-fields"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <div className="flex items-center gap-2 border-b border-app-accent-charcoal/10 pb-2">
                            <Layers className="text-app-accent-olive" size={16} />
                            <span className="font-mono text-[10px] uppercase font-bold text-app-accent-charcoal tracking-wider">
                              Scenari di Ingresso WordPress (Macro-Aree)
                            </span>
                          </div>

                          <div className="space-y-4">
                            <label className="block text-xs font-bold text-app-accent-charcoal">
                              Quale scenario rispecchia al meglio la tua situazione attuale?
                            </label>
                            
                            <div className="grid grid-cols-1 gap-2.5">
                              {service_options.wordpress.map((opt) => (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => setSelectedWpOption(opt.id)}
                                  className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer text-xs ${
                                    selectedWpOption === opt.id
                                      ? "bg-app-text-30 text-app-bg-60 border-app-text-30 shadow-sm"
                                      : "bg-app-bg-60/70 text-app-text-30 border-app-accent-charcoal/25 hover:bg-app-bg-60"
                                  }`}
                                >
                                  <div className="flex items-center justify-between font-bold mb-1">
                                    <span>{opt.name}</span>
                                    {selectedWpOption === opt.id && <UserCheck size={14} className="text-app-accent-khaki-2" />}
                                  </div>
                                  <div className="opacity-80 text-[11px] leading-relaxed">
                                    <p><strong>Focus:</strong> {opt.focus}</p>
                                    <p><strong>Obiettivo:</strong> {opt.objective}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Dynamic visual badge for chosen option */}
                          <div className="bg-app-bg-60 border border-app-accent-olive/20 p-4 rounded text-xs space-y-1">
                            <p className="font-serif font-bold text-app-accent-olive italic">Sintesi Intervento Selezionato:</p>
                            <p className="text-app-text-30 leading-relaxed">
                              Liberazione o ottimizzazione basata sulla formula: <strong className="text-app-accent-charcoal">"{activeWpObject.objective}"</strong>
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* CUSTOM CODE CONFIGURATION SCHEME */}
                      {servizio === "custom" && (
                        <motion.div
                          key="custom-fields"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <div className="flex items-center gap-2 border-b border-app-accent-charcoal/10 pb-2">
                            <Zap className="text-app-accent-olive" size={16} />
                            <span className="font-mono text-[10px] uppercase font-bold text-app-accent-charcoal tracking-wider">
                              Codice Puro: Velocità, Scalabilità e Design Unico
                            </span>
                          </div>

                          <div className="space-y-4">
                            <label className="block text-xs font-bold text-app-accent-charcoal">
                              Seleziona la tua configurazione Custom-Engineering ad alte prestazioni:
                            </label>

                            <div className="grid grid-cols-1 gap-2">
                              {service_options.custom.map((opt) => (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => setSelectedCustomOption(opt.id)}
                                  className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer text-xs ${
                                    selectedCustomOption === opt.id
                                      ? "bg-app-text-30 text-app-bg-60 border-app-text-30 shadow-sm"
                                      : "bg-app-bg-60/70 text-app-text-30 border-app-accent-charcoal/25 hover:bg-app-bg-60"
                                  }`}
                                >
                                  <div className="flex items-center justify-between font-bold mb-0.5">
                                    <span>{opt.title}</span>
                                    {selectedCustomOption === opt.id && <UserCheck size={14} className="text-app-accent-khaki-2" />}
                                  </div>
                                  <p className="opacity-85 text-[11px] leading-relaxed">{opt.detail}</p>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="bg-app-bg-60 border border-app-accent-olive/20 p-4 rounded text-xs">
                            <p className="font-serif font-bold text-app-accent-olive italic mb-1">Filosofia Zero Manutenzione / Speed-First:</p>
                            <p className="text-app-text-30 leading-relaxed">
                              Sviluppo statico in codice moderno con caricamento istantaneo (sotto i 100ms) e barriere di sicurezza insuperabili.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* SOCIAL & LEAD GENERATION CONFIGURATION SCHEME */}
                      {servizio === "social" && (
                        <motion.div
                          key="social-fields"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <div className="flex items-center gap-2 border-b border-app-accent-charcoal/10 pb-2">
                            <Smartphone className="text-app-accent-olive" size={16} />
                            <span className="font-mono text-[10px] uppercase font-bold text-app-accent-charcoal tracking-wider">
                              Social Funnel: Trasforma i Social in Ufficio Vendite Attivo
                            </span>
                          </div>

                          <div className="space-y-4">
                            <label className="block text-xs font-bold text-app-accent-charcoal">
                              Scegli lo strumento o integrazione di Lead Generation da configurare:
                            </label>

                            <div className="grid grid-cols-1 gap-2">
                              {service_options.social.map((opt) => (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => setSelectedSocialOption(opt.id)}
                                  className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer text-xs ${
                                    selectedSocialOption === opt.id
                                      ? "bg-app-text-30 text-app-bg-60 border-app-text-30 shadow-sm"
                                      : "bg-app-bg-60/70 text-app-text-30 border-app-accent-charcoal/25 hover:bg-app-bg-60"
                                  }`}
                                >
                                  <div className="flex items-center justify-between font-bold mb-0.5">
                                    <span>{opt.title}</span>
                                    {selectedSocialOption === opt.id && <UserCheck size={14} className="text-app-accent-khaki-2" />}
                                  </div>
                                  <p className="opacity-85 text-[11px] leading-relaxed">{opt.detail}</p>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="bg-app-bg-60 border border-app-accent-olive/20 p-4 rounded text-xs">
                            <p className="font-serif font-bold text-app-accent-olive italic mb-1">Crescita Organica & Conversione Diretta:</p>
                            <p className="text-app-text-30 leading-relaxed">
                              Creiamo ponti tecnologici trasparenti che incanalano i bulbi oculari dei social network dritti sul tuo WhatsApp aziendale.
                            </p>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>

                  {/* General Contact Info */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-accent-charcoal" htmlFor="contatto">
                      Il tuo recapito diretto (E-mail o WhatsApp valido) *
                    </label>
                    <input
                      id="contatto"
                      type="text"
                      required
                      value={contatto}
                      onChange={(e) => setContatto(e.target.value)}
                      placeholder="es. nome@studio.it oppure cell. +39 333 4455667"
                      className="w-full bg-app-bg-60 focus:bg-app-bg-60/20 border border-app-accent-charcoal/30 focus:border-app-accent-olive rounded px-4 py-3 text-sm text-app-text-30 outline-none transition-colors"
                    />
                  </div>

                  {/* Ostacolo/Barriera */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-accent-charcoal flex items-center gap-1" htmlFor="barriera">
                      <span>Qual è oggi la tua fatica o barriera tecnologica principale?</span>
                      <HelpCircle size={14} className="text-app-accent-olive" />
                    </label>
                    <input
                      id="barriera"
                      type="text"
                      value={barriera}
                      onChange={(e) => setBarriera(e.target.value)}
                      placeholder="es. 'Mi sento bloccata dai template', 'Ho paura di costi mensili nascosti', o 'Niente contatti pronti'"
                      className="w-full bg-app-bg-60 focus:bg-app-bg-60/20 border border-app-accent-charcoal/30 focus:border-app-accent-olive rounded px-4 py-3 text-sm text-app-text-30 outline-none transition-colors"
                    />
                  </div>

                  {/* Note o Messaggio opzionale */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-accent-charcoal" htmlFor="messaggio">
                      Ulteriori note o dettagli sul tuo business (Opzionale)
                    </label>
                    <textarea
                      id="messaggio"
                      rows={3}
                      value={messaggio}
                      onChange={(e) => setMessaggio(e.target.value)}
                      placeholder="Scrivimi pure se hai altri dettagli o perplessità strutturali da valutare..."
                      className="w-full bg-app-bg-60 focus:bg-app-bg-60/20 border border-app-accent-charcoal/30 focus:border-app-accent-olive rounded px-4 py-3 text-sm text-app-text-30 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button to show Report Preview screen */}
                  <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-app-accent-charcoal/10">
                    <p className="font-mono text-[9px] text-app-text-30/60 leading-relaxed max-w-sm">
                      * Cliccando sul bottone genererai un report che potrai spedirmi con un clic sia alla mia mail (mariateresarogani@gmail.com) che direttamente al mio numero WhatsApp (379 1038253).
                    </p>
                    
                    <button
                      id="generate-report-btn"
                      type="submit"
                      className="w-full sm:w-auto font-sans font-semibold text-xs uppercase tracking-wider bg-app-accent-olive text-app-bg-60 px-8 py-4.5 rounded-md shadow-[0_12px_24px_-10px_rgba(117,109,82,0.45)] hover:bg-app-accent-charcoal hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
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
                    <div className="w-12 h-12 rounded-full bg-app-accent-olive/10 text-app-accent-olive flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 size={26} />
                    </div>
                    <h3 className="font-sans text-xl font-bold text-app-accent-charcoal tracking-tight">Report Generato con Successo!</h3>
                    <p className="font-sans text-xs text-app-text-30/95 max-w-md mx-auto leading-relaxed">
                      Scegli ora come preferisci farmi pervenire la richiesta. Entrambe le vie sono attive ed istantanee!
                    </p>
                  </div>

                  {/* Rich Monospaced Box presenting the formatted answer structure */}
                  <div className="bg-app-text-30 border border-app-accent-charcoal text-emerald-400 p-6 rounded-md shadow-inner overflow-x-auto font-mono text-xs whitespace-pre-wrap leading-loose max-h-80 custom-scrollbar">
                    {generatedReport}
                  </div>

                  {/* DOUBLE DELIVERY ACTIONS (Email to mariateresarogani@gmail.com, WhatsApp to 3791038253) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Method 1: SEND VIA WHATSAPP */}
                    <button
                      id="deliver-whatsapp-btn"
                      onClick={sendWhatsApp}
                      className="flex items-center justify-center gap-3 bg-[#0F9D58] hover:bg-[#0b7441] text-app-bg-60 py-4.5 px-6 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Smartphone size={18} />
                      Invia report su WhatsApp (379 1038253)
                    </button>

                    {/* Method 2: SEND VIA EMAIL */}
                    <button
                      id="deliver-email-btn"
                      onClick={sendEmail}
                      className="flex items-center justify-center gap-3 bg-app-accent-olive hover:bg-app-accent-charcoal text-app-bg-60 py-4.5 px-6 rounded-md font-sans font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Mail size={18} />
                      Invia a mariateresarogani@gmail.com
                    </button>

                  </div>

                  {/* Action row to revert / compile other data */}
                  <div className="pt-4 flex justify-center border-t border-app-accent-charcoal/10">
                    <button
                      id="modify-report-btn"
                      onClick={() => setFormSent(false)}
                      className="font-mono text-[10px] uppercase font-bold tracking-widest text-app-accent-olive hover:text-app-accent-charcoal flex items-center gap-2 cursor-pointer py-2"
                    >
                      ← Torna indietro e modifica i dati
                    </button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>

    </div>
  );
}
