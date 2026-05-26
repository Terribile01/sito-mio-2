import { SiteConfig } from "../types";
import { MessageSquareCode, ArrowUpRight, BarChart3, Users, Clock, ShieldCheck, Heart } from "lucide-react";
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
    <div id="social-lead-view" className="space-y-20 pb-16">
      
      {/* Social Hero Header */}
      <section id="social-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C9478]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase flex items-center gap-2"
            >
              <MessageSquareCode size={16} className="text-[#9C9478]" />
              {heroData.subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#454340] leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-[#2D2B28] leading-relaxed max-w-2xl"
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
                className="w-full sm:w-auto font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-8 py-4 rounded-md shadow-[0_10px_20px_-10px_rgba(117,109,82,0.3)] hover:bg-[#454340] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Vedi le Strategie
              </button>
              
              <button
                id="social-secondary-cta"
                onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                className="w-full sm:w-auto font-sans font-semibold text-sm uppercase tracking-wider border border-[#756D52] text-[#756D52] px-8 py-4 rounded-md hover:bg-[#756D52]/10 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {heroData.cta_secondary!.label}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus & Pillars Section */}
      <section id="strategie" className="max-w-7xl mx-auto px-6 lg:px-12 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold text-[#756D52] tracking-widest uppercase block">
            {socialSection.subtitle}
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#454340]">
            {socialSection.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#2D2B28]">
            {socialSection.description}
          </p>
        </div>

        {/* 3 Pillars styled beautifully */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialSection.pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="bg-[#E2DDD3] border border-[#454340]/15 p-8 rounded-lg space-y-6 flex flex-col justify-between hover:border-[#756D52]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl font-extrabold text-[#9C9478]/40 block">
                  {pillar.index}
                </span>
                <h3 className="font-sans text-xl font-bold text-[#454340]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core philosophy claim box */}
        <div className="bg-[#E2DDD3] border border-[#756D52]/30 rounded-lg p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <p className="font-sans text-sm font-semibold text-[#454340] max-w-xl">
              {socialSection.footer_claim}
            </p>
          </div>
          <button
            id="social-claim-cta"
            onClick={() => onNavigate(socialSection.cta.action_path)}
            className="w-full sm:w-auto shrink-0 font-sans font-semibold text-xs uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-6 py-3.5 rounded-md hover:bg-[#454340] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {socialSection.cta.label}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

      {/* Detail breakdown: Why this solves the issue */}
      <section className="bg-[#E2DDD3] border-y border-[#454340]/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#454340]">
              La Maggior Parte delle Campagne è "A Vuoto"
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#2D2B28]/95 leading-relaxed">
              Il mercato attuale spinge i piccoli imprenditori a investire budget pubblicitari in campagne caotiche senza una logica preesistente. Il risultato? Molti "like", svariati click, ma nessun form compilato o acquisto reale.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#2D2B28]/95 leading-relaxed">
              <strong>Il mio approccio è opposto:</strong> la campagna promozionale a pagamento deve essere concepito solo come la fase finale di consolidamento. Prima creiamo la macchina stabile che accoglie e dialoga autonomamente, poi premiamo l'acceleratore dei social.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#E2DDD3]/50 border border-[#454340]/10 p-5 rounded-md space-y-2">
              <Users className="text-[#756D52]" size={20} />
              <h4 className="font-sans font-bold text-sm text-[#454340]">Pubblico Filtrato</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed">
                Le persone curiose vengono indirizzate a un sistema guidato che seleziona solo i contatti davvero qualificati per te.
              </p>
            </div>

            <div className="bg-[#E2DDD3]/50 border border-[#454340]/10 p-5 rounded-md space-y-2">
              <ShieldCheck className="text-[#756D52]" size={20} />
              <h4 className="font-sans font-bold text-sm text-[#454340]">Pronto per l'Ufficio</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed">
                Riceverai richieste definite nel dettaglio, complete di obiettivi ed esigenze reali compilate dal cliente.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
