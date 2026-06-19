import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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

  // Fast Form States
  const [fastNome, setFastNome] = useState("");
  const [fastEmail, setFastEmail] = useState("");
  const [fastTel, setFastTel] = useState("");
  const [fastMessaggio, setFastMessaggio] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSendingFast, setIsSendingFast] = useState(false);
  const [fastSendSuccess, setFastSendSuccess] = useState<boolean | null>(null);

  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);
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

  // EmailJS integration
  const sendEmail = async () => {
    setIsSending(true);
    setSendSuccess(null);

    const templateParams = {
      name: nome || contatto,
      email: contatto, // Assumendo che 'contatto' contenga l'email
      message: generatedReport,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_e6y0dfs",
        "template_yjw349w",
        templateParams,
        "gVH02EFjxhWU26obx"
      );
      setSendSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  const handleFastSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert("Per favore, accetta la Privacy e Cookie Policy.");
      return;
    }

    setIsSendingFast(true);
    setFastSendSuccess(null);

    const templateParams = {
      name: fastNome,
      email: fastEmail,
      message: `Tipo di richiesta: Messaggio da Form Veloce\n\nTelefono: ${fastTel || "Non fornito"}\n\nMessaggio:\n${fastMessaggio}`,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_e6y0dfs",
        "template_yjw349w",
        templateParams,
        "gVH02EFjxhWU26obx"
      );
      setFastSendSuccess(true);
      // Reset form
      setFastNome("");
      setFastEmail("");
      setFastTel("");
      setFastMessaggio("");
      setPrivacyAccepted(false);
    } catch (error) {
      console.error("EmailJS Fast Form Error:", error);
      setFastSendSuccess(false);
    } finally {
      setIsSendingFast(false);
    }
  };

  const activeWpObject = service_options.wordpress.find(o => o.id === selectedWpOption) || service_options.wordpress[0];

  const onNavigate = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div id="contatti-page-view" className="space-y-0 pb-0">
      
      {/* Header Section */}
      <section id="contatti-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-app-bg-main w-full border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs md:text-sm font-bold text-app-text-primary tracking-widest uppercase flex items-center gap-2">
              <MessageSquare size={16} className="text-app-accent-purple" />
              {heroData.subtitle}
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] uppercase">
              Progetta il tuo <span className="text-app-accent-purple">Successo</span> <br/> senza ansia
            </h1>

            <p className="font-sans text-lg md:text-xl text-app-text-primary leading-tight max-w-2xl font-bold">
              Niente risposte pre-confezionate. Usa il mio <strong className="text-app-accent-orange uppercase tracking-tighter">Questionario</strong> per profilare il tuo settore.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Contact Section */}
      <section id="contatto-veloce" className="w-full bg-app-bg-main pt-20 pb-12 border-b-4 border-app-text-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-app-accent-green border-4 border-app-text-primary rounded-none p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase font-black text-app-text-primary tracking-widest bg-white px-3 py-1 border-2 border-app-text-primary">
                  Risposta 24h
                </span>
                <h2 className="font-sans text-4xl md:text-5xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
                  Contatto <br/> <span className="text-white">Veloce</span>
                </h2>
                <p className="font-sans text-lg text-app-text-primary font-bold leading-tight">
                  Hai una domanda rapida? Compila questo form semplificato e ti risponderò al più presto.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="tel:+393791038253"
                    className="flex items-center gap-3 bg-app-text-primary text-white px-8 py-4 rounded-none font-sans font-black text-sm uppercase tracking-tighter hover:bg-white hover:text-app-text-primary transition-all border-2 border-app-text-primary"
                  >
                    <Smartphone size={20} strokeWidth={3} />
                    379 1038253
                  </a>
                </div>
              </div>

              <form onSubmit={handleFastSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="NOME"
                    required
                    value={fastNome}
                    onChange={(e) => setFastNome(e.target.value)}
                    className="w-full bg-white border-4 border-app-text-primary rounded-none px-4 py-4 text-sm font-bold outline-none placeholder:text-app-text-primary/50"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={fastEmail}
                    onChange={(e) => setFastEmail(e.target.value)}
                    className="w-full bg-white border-4 border-app-text-primary rounded-none px-4 py-4 text-sm font-bold outline-none placeholder:text-app-text-primary/50"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="TELEFONO (OPZIONALE)"
                  value={fastTel}
                  onChange={(e) => setFastTel(e.target.value)}
                  className="w-full bg-white border-4 border-app-text-primary rounded-none px-4 py-4 text-sm font-bold outline-none placeholder:text-app-text-primary/50"
                />
                <textarea
                  placeholder="MESSAGGIO"
                  required
                  rows={4}
                  value={fastMessaggio}
                  onChange={(e) => setFastMessaggio(e.target.value)}
                  className="w-full bg-white border-4 border-app-text-primary rounded-none px-4 py-4 text-sm font-bold outline-none resize-none placeholder:text-app-text-primary/50"
                />

                <div className="flex items-start gap-3 bg-white/50 p-3 border-2 border-app-text-primary">
                  <input
                    id="privacy-fast"
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 accent-app-text-primary h-5 w-5 border-2 border-app-text-primary"
                  />
                  <label htmlFor="privacy-fast" className="text-[11px] text-app-text-primary font-bold leading-tight uppercase">
                    Accetto la <button type="button" onClick={() => onNavigate("/privacy")} className="underline">privacy policy</button>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSendingFast}
                  className="w-full bg-app-text-primary text-white py-5 rounded-none font-sans font-black uppercase tracking-tighter text-sm hover:bg-white hover:text-app-text-primary transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-app-text-primary"
                >
                  {isSendingFast ? (
                    <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      INVIA ORA
                      <Send size={18} strokeWidth={3} />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {fastSendSuccess === true && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-app-text-primary bg-white border-2 border-app-text-primary p-2 text-xs font-black text-center mt-2 uppercase">
                      Inviato con successo!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section id="contatti-form-container" className="w-full bg-app-bg-main pb-24 pt-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <div className="lg:col-span-4 space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-app-text-primary text-white p-8 rounded-none border-4 border-app-text-primary space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-none bg-app-accent-lime flex items-center justify-center text-app-text-primary border-2 border-app-text-primary">
                <Clock size={24} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-sans font-black text-xl tracking-tighter uppercase leading-none">Profilazione</h4>
                <p className="font-mono text-xs uppercase text-app-accent-lime font-bold">3 MINUTI</p>
              </div>
            </div>
            
            <p className="font-sans text-sm text-white font-bold leading-tight uppercase">
              Il sistema adatta le domande al tuo settore. Riceverai un report completo pronto all'invio.
            </p>

            <div className="pt-4 border-t-2 border-white/20 space-y-4">
              <div className="flex items-start gap-3 text-sm font-bold uppercase">
                <span className="text-app-accent-lime">01.</span>
                <span>Chi sei e settore</span>
              </div>
              <div className="flex items-start gap-3 text-sm font-bold uppercase">
                <span className="text-app-accent-lime">02.</span>
                <span>Scenario e obiettivi</span>
              </div>
              <div className="flex items-start gap-3 text-sm font-bold uppercase">
                <span className="text-app-accent-lime">03.</span>
                <span>Invia report</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-app-accent-purple text-white border-4 border-app-text-primary p-8 rounded-none space-y-6"
          >
            <span className="font-mono text-xs font-black tracking-widest uppercase bg-app-text-primary px-3 py-1">
              IA ATTIVA
            </span>
            <div className="flex items-center gap-3">
              <Sparkles className="text-app-accent-lime" size={24} strokeWidth={3} />
              <h4 className="font-sans font-black text-xl uppercase tracking-tighter">Automazione</h4>
            </div>
            <p className="font-sans text-sm font-bold leading-tight">
              L'IA accelera i flussi digitali senza sradicare l'artigianalità. La integriamo per creare:
            </p>
            
            <div className="space-y-4 pt-2 text-sm font-bold uppercase">
              <div className="p-4 bg-app-text-primary border-2 border-app-accent-lime">
                <strong className="block text-app-accent-lime mb-1">01. PRE-QUALIFICA</strong>
                Scremiamo i curiosi per farti parlare solo con chi ha budget.
              </div>
              <div className="p-4 bg-app-text-primary border-2 border-app-accent-orange">
                <strong className="block text-app-accent-orange mb-1">02. COPYWRITING</strong>
                Suggerisce testi e newsletter pronte da rifinire.
              </div>
            </div>
          </motion.div>

        </div>

        <div className="lg:col-span-8">
          
          <div className="bg-app-bg-main border-4 border-app-text-primary rounded-none p-8 md:p-12 shadow-none">
            
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
                    className={`text-left p-4 rounded-none border-2 transition-all flex flex-col justify-between h-28 cursor-pointer ${
                          servizio === "wordpress"
                        ? "bg-app-btn-primary-bg text-app-btn-primary-text border-app-btn-primary-bg shadow-none"
                        : "bg-app-bg-main text-app-text-primary border-app-bg-dark/30 hover:bg-app-accent-secondary/40"
                        }`}
                      >
                    <Layers size={18} className={servizio === "wordpress" ? "text-app-btn-primary-text" : "text-app-text-secondary"} />
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
                    className={`text-left p-4 rounded-none border-2 transition-all flex flex-col justify-between h-28 cursor-pointer ${
                          servizio === "custom"
                        ? "bg-app-btn-primary-bg text-app-btn-primary-text border-app-btn-primary-bg shadow-none"
                        : "bg-app-bg-main text-app-text-primary border-app-bg-dark/30 hover:bg-app-accent-secondary/40"
                        }`}
                      >
                    <Zap size={18} className={servizio === "custom" ? "text-app-btn-primary-text" : "text-app-text-secondary"} />
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
                    className={`text-left p-4 rounded-none border-2 transition-all flex flex-col justify-between h-28 cursor-pointer ${
                          servizio === "social"
                        ? "bg-app-btn-primary-bg text-app-btn-primary-text border-app-btn-primary-bg shadow-none"
                        : "bg-app-bg-main text-app-text-primary border-app-bg-dark/30 hover:bg-app-accent-secondary/40"
                        }`}
                      >
                    <Smartphone size={18} className={servizio === "social" ? "text-app-btn-primary-text" : "text-app-text-secondary"} />
                        <div>
                          <p className="font-sans font-bold text-xs font-mono">3. Social & Lead Gen</p>
                          <p className="text-[10px] opacity-80 font-serif italic mt-0.5">Automazioni che Vendono</p>
                        </div>
                      </button>

                    </div>
                  </div>

                  {/* SECTOR SPECIFIC SECTION (AnimatePresence for organic feel) - Color-harmony alternate box */}
                  <div className="bg-app-accent-purple/10 p-6 rounded-none border-2 border-app-text-primary">
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
                                  className={`w-full text-left p-3.5 rounded-none border-2 transition-all cursor-pointer text-xs font-bold uppercase ${
                                    selectedWpOption === opt.id
                                      ? "bg-app-text-primary text-white border-app-text-primary shadow-none"
                                      : "bg-white text-app-text-primary border-app-text-primary/20 hover:bg-app-accent-lime/20"
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
                                  className={`w-full text-left p-3.5 rounded-none border-2 transition-all cursor-pointer text-xs font-bold uppercase ${
                                    selectedCustomOption === opt.id
                                      ? "bg-app-text-primary text-white border-app-text-primary shadow-none"
                                      : "bg-white text-app-text-primary border-app-text-primary/20 hover:bg-app-accent-lime/20"
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
                                  className={`w-full text-left p-3.5 rounded-none border-2 transition-all cursor-pointer text-xs font-bold uppercase ${
                                    selectedSocialOption === opt.id
                                      ? "bg-app-text-primary text-white border-app-text-primary shadow-none"
                                      : "bg-white text-app-text-primary border-app-text-primary/20 hover:bg-app-accent-lime/20"
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

                  {/* Submit Button */}
                  <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-8 border-t-4 border-app-text-primary">
                    <p className="font-mono text-[10px] text-app-text-primary font-bold uppercase leading-tight max-w-sm">
                      * Genererai un report da spedire via mail o WhatsApp direttamente a Maria Teresa.
                    </p>
                    
                    <button
                      id="generate-report-btn"
                      type="submit"
                      className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-orange text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      GENERA REPORT
                      <Send size={18} strokeWidth={3} />
                    </button>
                  </div>

                </motion.form>
                
              ) : (
                
                // Show Dynamic Review Screen
                <motion.div
                  key="form-report"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="text-center py-4 space-y-4">
                    <div className="w-16 h-16 rounded-none bg-app-accent-green text-app-text-primary border-4 border-app-text-primary flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} strokeWidth={3} />
                    </div>
                    <h3 className="font-sans text-3xl font-black text-app-text-primary uppercase tracking-tighter">Report Pronto!</h3>
                    <p className="font-sans text-lg text-app-text-primary font-bold uppercase leading-tight max-w-md mx-auto">
                      Scegli come inviare la richiesta. Entrambe le vie sono attive.
                    </p>
                  </div>

                  <div className="bg-app-text-primary border-4 border-app-text-primary text-app-accent-lime p-8 rounded-none font-mono text-sm whitespace-pre-wrap leading-tight max-h-80 overflow-y-auto border-2">
                    {generatedReport}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <button
                      id="deliver-whatsapp-btn"
                      onClick={sendWhatsApp}
                      className="flex items-center justify-center gap-3 bg-[#0F9D58] hover:bg-white hover:text-[#0F9D58] text-white py-5 px-8 rounded-none font-sans font-black text-sm uppercase tracking-tighter transition-all border-4 border-app-text-primary cursor-pointer"
                    >
                      <Smartphone size={20} strokeWidth={3} />
                      VIA WHATSAPP
                    </button>

                    <button
                      id="deliver-email-btn"
                      onClick={sendEmail}
                      disabled={isSending || sendSuccess === true}
                      className={`flex items-center justify-center gap-3 py-5 px-8 rounded-none font-sans font-black text-sm uppercase tracking-tighter transition-all border-4 border-app-text-primary cursor-pointer ${
                        sendSuccess === true
                          ? "bg-app-accent-green text-app-text-primary cursor-default"
                          : "bg-app-accent-purple text-white hover:bg-white hover:text-app-accent-purple"
                      } ${isSending ? "opacity-70" : ""}`}
                    >
                      {isSending ? (
                        <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      ) : sendSuccess === true ? (
                        <CheckCircle2 size={20} strokeWidth={3} />
                      ) : (
                        <Mail size={20} strokeWidth={3} />
                      )}
                    {sendSuccess === true ? "INVIATO!" : isSending ? "INVIO..." : "VIA EMAIL"}
                    </button>

                  </div>

                  <div className="pt-8 flex justify-center border-t-4 border-app-text-primary">
                    <button
                      id="modify-report-btn"
                      onClick={() => setFormSent(false)}
                      className="font-mono text-xs uppercase font-black tracking-widest text-app-text-primary hover:text-app-accent-orange flex items-center gap-2 cursor-pointer py-2 transition-colors"
                    >
                      ← MODIFICA DATI
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
