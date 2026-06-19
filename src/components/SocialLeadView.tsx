import { SiteConfig } from "../types";
import { 
  MessageSquareCode, 
  Users, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  Zap, 
} from "lucide-react";
import { motion } from "motion/react";
import { GlowCircle, renderSplitTitle } from "./ThemeElements";

interface SocialLeadViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function SocialLeadView({ config, onNavigate }: SocialLeadViewProps) {
  const { components } = config;
  const heroData = components.hero.social_hero;
  const socialSection = components.sezione_strategie_social;

  return (
    <div id="social-lead-view" className="relative space-y-0 pb-0 bg-app-bg-main overflow-hidden">
      
      {/* Background Glows */}
      <GlowCircle color="#9B5CFF" size="400px" top="-100px" left="-100px" delay={0} />
      <GlowCircle color="#00F5FF" size="300px" top="30%" left="80%" delay={1} />

      {/* Social Hero Header */}
      <section id="social-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
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
                  src={config.assets_manifest.social_hero_image.path}
                  alt={config.assets_manifest.social_hero_image.alt}
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
                <MessageSquareCode size={16} />
                {heroData.subtitle}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase break-words"
              >
                {renderSplitTitle("Canale Senza Fine Clienti")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-base md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl smart-text"
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
                  className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter bg-app-tertiary text-app-bg-main px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(170,255,0,0.4)] cursor-pointer"
                >
                  Vedi Strategie
                </button>

                <button
                  id="social-secondary-cta"
                  onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                  className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter border-2 border-white/20 text-white px-10 py-5 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  Contattami
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Pillars Section */}
      <section id="strategie" className="py-20 z-10 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-16 space-y-4"
          >
            <span className="font-mono text-xs font-bold text-app-accent-secondary tracking-widest uppercase block">
              {socialSection.subtitle}
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle(socialSection.title)}
            </h2>
            <p className="font-sans text-lg sm:text-xl text-white/70 leading-tight">
              {socialSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialSection.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-morphism p-8 rounded-3xl space-y-6"
              >
                <div className="space-y-4">
                  <span className="font-mono text-4xl font-black text-app-accent-secondary block">
                    {pillar.index}
                  </span>
                  <h3 className="font-sans text-2xl font-black text-white tracking-tighter uppercase">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-white/60 leading-tight">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core philosophy claim box */}
          <div className="glass-morphism rounded-[40px] mt-16 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-app-tertiary/20 shadow-[0_0_30px_rgba(170,255,0,0.1)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-app-tertiary/20 text-app-tertiary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(170,255,0,0.2)]">
                <Clock size={24} />
              </div>
              <p className="font-sans text-lg font-black text-white uppercase tracking-tighter leading-none">
                {socialSection.footer_claim}
              </p>
            </div>
            <button
              id="social-claim-cta"
              onClick={() => onNavigate(socialSection.cta.action_path)}
              className="w-full sm:w-auto shrink-0 font-sans font-black text-sm uppercase tracking-tighter bg-app-tertiary text-app-bg-main px-8 py-5 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(170,255,0,0.4)] cursor-pointer"
            >
              {socialSection.cta.label}
            </button>
          </div>
          
        </div>
      </section>

      {/* AI IN THE LOOP SECTION */}
      <section id="social-ai-accelerators" className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="font-mono text-xs font-black text-app-tertiary tracking-widest uppercase block mb-2">
                AI Real-time
              </span>
              <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                {renderSplitTitle("AI Automazione Lead Gen", "#FFFFFF", "#AAFF00")}
              </h2>
              <p className="font-sans text-lg text-white/70 leading-tight">
                Niente chatbot stupidi. Configuro automazioni strategiche che uniscono la velocità dell'AI alla cura del lessico tipica dell'Umanesimo Digitale.
              </p>
              
              <div className="pt-2">
                <button
                  id="cta-social-accelerators"
                  onClick={() => onNavigate("/contatti")}
                  className="font-sans font-black text-sm uppercase tracking-tighter bg-app-tertiary text-app-bg-main px-10 py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(170,255,0,0.4)] cursor-pointer"
                >
                  Configura Ora
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card A: DM Auto qualifier */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-morphism p-8 space-y-4 rounded-[40px] border-app-accent-primary/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-app-accent-primary/20 text-app-accent-primary flex items-center justify-center shadow-[0_0_15px_rgba(155,92,255,0.2)]">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-sans font-black text-white text-xl uppercase tracking-tighter">DM Auto-Qualifier</h4>
                <p className="font-sans text-sm text-white/60 leading-tight">
                  Quando un potenziale cliente scrive "VOGLIO ACCEDERE", l'AI apre la chat, offre valore e acquisisce il contatto qualificato.
                </p>
              </motion.div>

              {/* Card B: WA FAQ Routing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-morphism p-8 space-y-4 rounded-[40px] border-app-accent-secondary/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-app-accent-secondary/20 text-app-accent-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                  <Smartphone size={24} />
                </div>
                <h4 className="font-sans font-black text-white text-xl uppercase tracking-tighter">WA Answer Router</h4>
                <p className="font-sans text-sm text-white/60 leading-tight">
                  L'AI intercetta le domande frequenti su WhatsApp 24/7. Il cliente riceve info all'istante e fissa l'appuntamento da solo.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* Detail breakdown */}
      <section className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-sans text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle("Campagne A Vuoto", "#FFFFFF", "#9B5CFF")}
            </h2>
            <p className="font-sans text-lg text-white/70 leading-tight">
              Molti investono budget in campagne caotiche. Risultato? Molti "like", ma nessun form compilato o acquisto reale.
            </p>
            <p className="font-sans text-lg text-white/80 font-bold leading-tight">
              <strong>Il mio approccio:</strong> prima creiamo la macchina stabile che accoglie e dialoga autonomamente, poi premiamo l'acceleratore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-morphism p-8 space-y-4 rounded-3xl border-app-accent-primary/20">
              <Users className="text-app-accent-primary" size={32} />
              <h4 className="font-sans font-black text-white text-xl uppercase tracking-tighter">Pubblico Filtrato</h4>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Le persone curiose vengono indirizzate a un sistema guidato che seleziona solo i contatti davvero qualificati.
              </p>
            </div>

            <div className="glass-morphism p-8 space-y-4 rounded-3xl border-app-tertiary/20">
              <ShieldCheck className="text-app-tertiary" size={32} />
              <h4 className="font-sans font-black text-white text-xl uppercase tracking-tighter">Pronto per l'Ufficio</h4>
              <p className="font-sans text-sm text-white/60 leading-tight">
                Riceverai richieste definite nel dettaglio, complete di obiettivi ed esigenze reali.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
