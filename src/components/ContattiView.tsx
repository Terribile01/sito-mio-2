import React, { useState } from "react";
import { SiteConfig } from "../types";
import { Send, CheckCircle2, AlertCircle, RefreshCw, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContattiProps {
  config: SiteConfig;
}

type FormStatus = "ready" | "sending" | "success" | "error";

export default function ContattiView({ config }: ContattiProps) {
  const { components } = config;
  const heroData = components.hero.contatti_hero;

  // Form Fields State
  const [formData, setFormData] = useState({
    nome: "",
    attivita: "",
    servizio: "WordPress (Open Source)",
    barriera: "",
    canale: "",
    contatto: "",
    messaggio: ""
  });

  const [status, setStatus] = useState<FormStatus>("ready");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.contatto) {
      setStatus("error");
      setStatusMsg("Per favore, inserisci almeno il tuo Nome e un recapito di Contatto.");
      return;
    }

    setStatus("sending");

    try {
      // Simulate asynchronous API endpoint call to a mock endpoint (or webhook) as per architecture specifications
      // This has to be ready to change to a real webhook endpoint/external Google Sheet
      const apiEndpoint = "https://httpbin.org/post"; 
      
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setStatusMsg("La tua richiesta è stata profilata con successo! Ti risponderò personalmente entro 24 ore lavorative.");
      } else {
        throw new Error("Errore del server durante l'invio");
      }
    } catch (error) {
      console.error("Form submit error", error);
      setStatus("error");
      setStatusMsg("Si è verificato un errore di rete durante l'invio della richiesta. Riprova più tardi.");
    }
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      attivita: "",
      servizio: "WordPress (Open Source)",
      barriera: "",
      canale: "",
      contatto: "",
      messaggio: ""
    });
    setStatus("ready");
    setStatusMsg("");
  };

  return (
    <div id="contatti-page-view" className="space-y-16 pb-20">
      
      {/* Contatti Hero Header */}
      <section id="contatti-hero" className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C9478]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase flex items-center gap-2"
            >
              <MessageSquare size={16} className="text-[#9C9478]" />
              {heroData.subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#454340] leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base text-[#2D2B28] leading-relaxed max-w-2xl"
            >
              {heroData.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Questionnaire Section */}
      <section id="modulo-contatti" className="max-w-4xl mx-auto px-6 lg:px-12 scroll-mt-24">
        
        <div className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-6 md:p-10 shadow-[0_10px_30px_rgba(117,109,82,0.05)]">
          <AnimatePresence mode="wait">
            
            {/* Status Check UI: SUCCESS */}
            {status === "success" && (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006e40] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-2xl font-bold text-[#454340]">Grazie! Richiesta Ricevuta</h3>
                  <p className="font-sans text-sm text-[#2D2B28] max-w-md mx-auto leading-relaxed">
                    {statusMsg}
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    id="form-reset-success-btn"
                    onClick={handleReset}
                    className="font-sans font-semibold text-xs uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-6 py-3 rounded-md hover:bg-[#454340] transition-colors cursor-pointer"
                  >
                    Profila un'altra richiesta
                  </button>
                </div>
              </motion.div>
            )}

            {/* Status Check UI: ERROR */}
            {status === "error" && (
              <motion.div
                key="error-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
                  <AlertCircle size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-2xl font-bold text-[#454340]">Qualcosa è andato storto</h3>
                  <p className="font-sans text-sm text-rose-700 max-w-sm mx-auto leading-relaxed">
                    {statusMsg}
                  </p>
                </div>
                <div className="pt-4 flex justify-center gap-4">
                  <button
                    id="form-back-error-btn"
                    onClick={() => setStatus("ready")}
                    className="font-sans font-semibold text-xs uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-6 py-3 rounded-md hover:bg-[#454340] transition-colors cursor-pointer"
                  >
                    Torna al Modulo
                  </button>
                </div>
              </motion.div>
            )}

            {/* Status Check UI: SENDING */}
            {status === "sending" && (
              <motion.div
                key="sending-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 space-y-6"
              >
                <RefreshCw size={44} className="animate-spin text-[#756D52] mx-auto" />
                <div className="space-y-2">
                  <h4 className="font-sans text-xl font-bold text-[#454340]">Elaborazione e Invio delle risposte...</h4>
                  <p className="font-sans text-xs text-[#2D2B28] font-mono uppercase tracking-wider">
                    Connessione sicura al sistema di ricezione in corso
                  </p>
                </div>
              </motion.div>
            )}

            {/* Status Check UI: READY / FORM */}
            {status === "ready" && (
              <motion.form
                key="active-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                
                {/* Visual Intro Claim */}
                <div className="border-b border-[#454340]/10 pb-6">
                  <h3 className="font-sans text-lg font-bold text-[#454340]">Il Questionario Intelligente</h3>
                  <p className="font-sans text-xs text-[#2D2B28]/85 mt-1 leading-relaxed">
                    Le risposte che fornirai mi permetteranno di studiare la tua situazione tecnica prima ancora del nostro primo appuntamento. Pochi minuti per risparmiare giorni di pianificazione.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#454340]" htmlFor="input-nome">
                      Il Tuo Nome *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="es. Maria Teresa"
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                    />
                  </div>

                  {/* Nome Attività */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#454340]" htmlFor="input-attivita">
                      Nome della tua Attività / Studio
                    </label>
                    <input
                      id="input-attivita"
                      type="text"
                      name="attivita"
                      value={formData.attivita}
                      onChange={handleChange}
                      placeholder="es. Atelier del Vetro, Studio Medico Rossi"
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Servizio Interessato */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#454340]" htmlFor="input-servizio">
                      Quale Soluzione ti incuriosisce?
                    </label>
                    <select
                      id="input-servizio"
                      name="servizio"
                      value={formData.servizio}
                      onChange={handleChange}
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors cursor-pointer"
                    >
                      <option value="WordPress (Open Source)">Sito Web in WordPress (Flessibile & Gestibile)</option>
                      <option value="Codice Puro su Misura">Sito Web Generativo (Prestazioni pure ad alta velocità)</option>
                      <option value="Social & Lead Gen">Automazioni Social & Lead Generation (Il sistema che vende)</option>
                      <option value="Non saprei, ho bisogno di una consulenza">Vorrei decidere insieme dopo l'analisi</option>
                    </select>
                  </div>

                  {/* Recapito contatto */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#454340]" htmlFor="input-contatto">
                      Recapito di Contatto (Email o Telefono) *
                    </label>
                    <input
                      id="input-contatto"
                      type="text"
                      name="contatto"
                      required
                      value={formData.contatto}
                      onChange={handleChange}
                      placeholder="es. nome@azienda.it oppure 333 1234567"
                      className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Qual è la barriera tecnologica da abbattere */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#454340]" htmlFor="input-barriera">
                    Qual è la barriera tecnologica o la fatica che vorresti superare oggi?
                  </label>
                  <input
                    id="input-barriera"
                    type="text"
                    name="barriera"
                    value={formData.barriera}
                    onChange={handleChange}
                    placeholder="es. 'Ho paura dei costi dei plugin', 'Non capisco l'informatica', 'Spendo troppi soldi in pubblicità senza lead'"
                    className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors"
                  />
                </div>

                {/* Ulteriori dettagli */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#454340]" htmlFor="input-messaggio">
                    Ulteriori dettagli sul tuo progetto (Opzionale)
                  </label>
                  <textarea
                    id="input-messaggio"
                    name="messaggio"
                    rows={4}
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Raccontami pure a parole semplici cosa ti aspetti e quali sono i tuoi tempi di attuazione."
                    className="w-full bg-[#E2DDD3] focus:bg-[#E2DDD3]/20 border border-[#454340]/30 focus:border-[#756D52] rounded px-4 py-3 text-sm text-[#2D2B28] outline-none transition-colors resize-none"
                  />
                </div>

                {/* Actions list */}
                <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="font-mono text-[10px] text-[#2D2B28]/60 leading-relaxed max-w-sm">
                    Inviando questo modulo acconsenti al trattamento dei dati personali secondo la Privacy Policy esposta in fondo a questa pagina.
                  </p>
                  
                  <button
                    id="submit-form-btn"
                    type="submit"
                    className="w-full sm:w-auto font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-8 py-4 rounded-md shadow-[0_10px_20px_-10px_rgba(117,109,82,0.3)] hover:bg-[#454340] transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    Inizia il Dialogo
                    <Send size={15} />
                  </button>
                </div>

              </motion.form>
            )}

          </AnimatePresence>
        </div>

      </section>

    </div>
  );
}
