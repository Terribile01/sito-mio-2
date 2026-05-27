import { SiteConfig } from "../types";
import { 
  MessageSquareCode, 
  ArrowUpRight, 
  BarChart3, 
  Users, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  Zap, 
  Mail, 
  Compass, 
  BookOpen 
} from "lucide-react";
import { motion } from "motion/react";

interface SocialLeadViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function SocialLeadView({ config, onNavigate }: SocialLeadViewProps) {
  const { components } = config;
  const heroData = components.hero.social_hero;
  const socialSection = components.sezione_strategie_social;

  return (
    <div id="social-lead-view" className="space-y-0 pb-0 w-full">
      
      {/* Social Hero Header - Standard Bone Warm Accent */}
      <section id="social-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-app-bg-60 w-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-app-accent-olive/8 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-app-accent-olive tracking-widest uppercase flex items-center gap-2"
            >
              <MessageSquareCode size={16} className="text-app-accent-khaki" />
              {heroData.subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-app-accent-charcoal leading-tight"
            >
              Costruisci un Canale <span className="italic font-serif text-app-accent-olive">Senza Fine</span> di Nuovi Clienti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base md:text-lg text-app-text-30 leading-relaxed max-w-2xl"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                id="social-primary-cta"
                onClick={() => {
                  const el = document.getElementById("strategie");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto font-sans font-semibold text-xs uppercase tracking-wider bg-app-accent-olive text-app-bg-60 px-8 py-4.5 rounded-md shadow-[0_12px_24px_-10px_rgba(117,109,82,0.45)] hover:bg-app-accent-charcoal hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Vedi le Strategie Attive
              </button>
              
              <button
                id="social-secondary-cta"
                onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                className="w-full sm:w-auto font-sans font-semibold text-xs uppercase tracking-wider border border-app-accent-olive text-app-accent-olive px-8 py-4.5 rounded-md hover:bg-app-accent-olive/10 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Contattami Ora
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus & Pillars Section - ALTERNATED BACKGROUND to deep clay mud tone so it looks layered and beautiful */}
      <section id="strategie" className="bg-app-accent-khaki/20 py-20 border-t border-app-accent-charcoal/10 scroll-mt-24 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          >
            <span className="font-mono text-xs font-semibold text-app-accent-olive tracking-widest uppercase block">
              {socialSection.subtitle}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-app-accent-charcoal tracking-tight">
              {socialSection.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-app-text-30/95 max-w-lg mx-auto leading-relaxed">
              {socialSection.description}
            </p>
          </motion.div>

          {/* 3 Pillars styled beautifully con ombre e movimento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {socialSection.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, borderColor: "rgba(117,109,82,0.5)" }}
                className="bg-app-bg-60 border border-app-accent-charcoal/20 p-8 rounded-lg space-y-6 flex flex-col justify-between shadow-[0_15px_30px_-5px_rgba(45,43,40,0.08)] hover:shadow-[0_24px_48px_-8px_rgba(117,109,82,0.2)] transition-all duration-400 cursor-default"
              >
                <div className="space-y-4">
                  <span className="font-mono text-4xl font-extrabold text-app-accent-khaki/50 block">
                    {pillar.index}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-app-accent-charcoal tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-app-text-30/90 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core philosophy claim box */}
          <div className="bg-app-bg-60 border border-app-accent-olive/40 rounded-lg p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-app-accent-olive/10 text-app-accent-olive flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <p className="font-sans text-sm font-semibold text-app-accent-charcoal max-w-xl">
                {socialSection.footer_claim}
              </p>
            </div>
            <button
              id="social-claim-cta"
              onClick={() => onNavigate(socialSection.cta.action_path)}
              className="w-full sm:w-auto shrink-0 font-sans font-semibold text-xs uppercase tracking-wider bg-app-accent-olive text-app-bg-60 px-6 py-4 rounded-md hover:bg-app-accent-charcoal transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {socialSection.cta.label}
              <ArrowUpRight size={14} />
            </button>
          </div>
          
        </div>
      </section>

      {/* AI IN THE LOOP SECTION - ALTERNATED TO DEEP DARK CHARCOAL for powerful layout depth and real examples */}
      <section id="social-ai-accelerators" className="bg-app-text-30 text-app-bg-60 py-20 border-y border-app-accent-charcoal w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-6"
            >
            <span className="font-mono text-xs font-bold text-app-accent-khaki-2 tracking-widest uppercase bg-app-accent-khaki-2/10 px-2.5 py-1 rounded inline-block">
              Interazioni Intelligenti Automate (IA Real-time)
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-app-bg-60 tracking-tight leading-tight">
                Come l'IA Velocizza e Automatizza la Lead Generation
              </h2>
              <p className="font-sans text-sm text-app-bg-60/70 leading-relaxed">
                Niente chatbot stupidi o risposte robotiche fredde. Configuro automazioni strategiche che uniscono la velocità di calcolo dell'Intelligenza Artificiale alla cura del lessico tipica dell'Umanesimo Digitale.
              </p>
              
              <div className="pt-2">
                <button
                  id="cta-social-accelerators"
                  onClick={() => onNavigate("/contatti")}
                  className="font-sans font-bold text-xs uppercase tracking-wider bg-app-bg-60 text-app-text-30 hover:bg-app-accent-khaki-2 hover:text-app-text-30 px-6 py-3.5 rounded transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                >
                  Configura il tuo Generatore Automatico
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card A: DM Auto qualifier */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-app-text-30 border border-app-accent-charcoal p-6 rounded-md space-y-4 shadow-md hover:border-app-accent-khaki-2/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-app-accent-khaki-2/10 text-app-accent-khaki-2 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <h4 className="font-sans font-bold text-app-bg-60 text-sm">DM Instagram Auto-Qualifier</h4>
                <p className="font-sans text-xs text-app-bg-60/80 leading-relaxed">
                  Quando un potenziale cliente scrive nei commenti "VOGLIO ACCEDERE", l'IA apre immediatamente la chat privata, offre del valore reale e acquisisce il contatto qualificato guidando la conversazione.
                </p>
              </motion.div>

              {/* Card B: WA FAQ Routing */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-app-text-30 border border-app-accent-charcoal p-6 rounded-md space-y-4 shadow-md hover:border-app-accent-khaki-2/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-app-accent-khaki-2/10 text-app-accent-khaki-2 flex items-center justify-center">
                  <Smartphone size={18} />
                </div>
                <h4 className="font-sans font-bold text-app-bg-60 text-sm">WhatsApp Dynamic Answer Router</h4>
                <p className="font-sans text-xs text-app-bg-60/80 leading-relaxed">
                  L'IA intercetta le domande frequenti sul tuo WhatsApp aziendale di notte o nel fine settimana. Il cliente riceve informazioni all'istante e fissa l'appuntamento da solo senza farti lavorare fuori orario.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* Detail breakdown: Why this solves the issue - Standard Bone Accent */}
      <section className="bg-app-bg-60 py-20 border-b border-app-accent-charcoal/10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-app-accent-charcoal tracking-tight">
              La Maggior Parte delle Campagne è "A Vuoto"
            </h3>
            <p className="font-sans text-sm sm:text-base text-app-text-30/95 leading-relaxed">
              Il mercato attuale spinge i piccoli imprenditori a investire budget pubblicitari in campagne caotiche senza una logica preesistente. Il risultato? Molti "like", svariati click, ma nessun form compilato o acquisto reale.
            </p>
            <p className="font-sans text-sm sm:text-base text-app-text-30/95 leading-relaxed">
              <strong>Il mio approccio è opposto:</strong> la campagna promozionale a pagamento deve essere concepito solo come la fase finale di consolidamento. Prima creiamo la macchina stabile che accoglie e dialoga autonomamente, poi premiamo l'acceleratore dei social.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-app-bg-60/50 border border-app-accent-charcoal/15 p-6 rounded-md space-y-3 shadow-sm">
              <Users className="text-app-accent-olive" size={22} />
              <h4 className="font-sans font-bold text-sm text-app-accent-charcoal">Pubblico Filtrato</h4>
              <p className="font-sans text-xs text-app-text-30/90 leading-relaxed">
                Le persone curiose vengono indirizzate a un sistema guidato che seleziona solo i contatti davvero qualificati per te.
              </p>
            </div>

            <div className="bg-app-bg-60/50 border border-app-accent-charcoal/15 p-6 rounded-md space-y-3 shadow-sm">
              <ShieldCheck className="text-app-accent-olive" size={22} />
              <h4 className="font-sans font-bold text-sm text-app-accent-charcoal">Pronto per l'Ufficio</h4>
              <p className="font-sans text-xs text-app-text-30/90 leading-relaxed">
                Riceverai richieste definite nel dettaglio, complete di obiettivi ed esigenze reali compilate dal cliente.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
