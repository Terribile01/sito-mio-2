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
      
      {/* Social Hero Header */}
      <section id="social-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-app-bg-main w-full border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left for other pages (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative rounded-none overflow-hidden shadow-none border-4 border-app-text-primary">
                <img
                  src={config.assets_manifest.social_hero_image.path}
                  alt={config.assets_manifest.social_hero_image.alt}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gradient Fading Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg-main via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-l from-app-bg-main/40 via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>

            <div className="max-w-3xl space-y-6 order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs md:text-sm font-bold text-app-text-primary tracking-widest uppercase flex items-center gap-2"
              >
                <MessageSquareCode size={16} className="text-app-accent-purple" />
                {heroData.subtitle}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] uppercase"
              >
                Canale <span className="text-app-accent-purple">Senza Fine</span> <br/> Clienti
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-base md:text-xl text-app-text-primary leading-tight font-bold max-w-2xl"
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
                  className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-green text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-app-accent-lime transition-all duration-200 cursor-pointer"
                >
                  Vedi Strategie
                </button>

                <button
                  id="social-secondary-cta"
                  onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                  className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter border-4 border-app-text-primary bg-transparent text-app-text-primary px-10 py-5 rounded-none hover:bg-app-accent-orange transition-all duration-200 cursor-pointer"
                >
                  Contattami
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Pillars Section */}
      <section id="strategie" className="bg-app-bg-main py-20 border-b-4 border-app-text-primary scroll-mt-24 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-16 space-y-4"
          >
            <span className="font-mono text-xs font-bold text-app-text-primary tracking-widest uppercase block">
              {socialSection.subtitle}
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
              {socialSection.title}
            </h2>
            <p className="font-sans text-lg sm:text-xl text-app-text-primary font-bold leading-tight">
              {socialSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-app-text-primary">
            {socialSection.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 space-y-6 flex flex-col justify-between border-app-text-primary ${idx < 2 ? 'md:border-r-4 border-b-4 md:border-b-0' : 'border-b-4 md:border-b-0'} last:border-b-0`}
              >
                <div className="space-y-4">
                  <span className="font-mono text-5xl font-black text-app-accent-purple block">
                    {pillar.index}
                  </span>
                  <h3 className="font-sans text-2xl font-black text-app-text-primary tracking-tighter uppercase">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core philosophy claim box */}
          <div className="bg-app-accent-lime border-4 border-app-text-primary rounded-none mt-16 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-none border-2 border-app-text-primary bg-app-text-primary text-app-accent-lime flex items-center justify-center shrink-0">
                <Clock size={24} strokeWidth={3} />
              </div>
              <p className="font-sans text-lg font-black text-app-text-primary uppercase tracking-tighter leading-none">
                {socialSection.footer_claim}
              </p>
            </div>
            <button
              id="social-claim-cta"
              onClick={() => onNavigate(socialSection.cta.action_path)}
              className="w-full sm:w-auto shrink-0 font-sans font-black text-sm uppercase tracking-tighter bg-app-text-primary text-app-accent-lime px-8 py-5 rounded-none hover:bg-app-accent-purple hover:text-white transition-all cursor-pointer border-2 border-app-text-primary"
            >
              {socialSection.cta.label}
            </button>
          </div>
          
        </div>
      </section>

      {/* AI IN THE LOOP SECTION */}
      <section id="social-ai-accelerators" className="bg-app-accent-purple text-white py-24 border-b-4 border-app-text-primary w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="font-mono text-xs font-black text-app-accent-lime tracking-widest uppercase bg-app-text-primary px-3 py-1 inline-block">
                IA Real-time
              </span>
              <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                IA <br/> Automazione <br/> Lead Gen
              </h2>
              <p className="font-sans text-lg text-white font-bold leading-tight">
                Niente chatbot stupidi. Configuro automazioni strategiche che uniscono la velocità dell'IA alla cura del lessico tipica dell'Umanesimo Digitale.
              </p>
              
              <div className="pt-2">
                <button
                  id="cta-social-accelerators"
                  onClick={() => onNavigate("/contatti")}
                  className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-lime text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all cursor-pointer"
                >
                  Configura Ora
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0 border-4 border-app-text-primary bg-app-text-primary">
              
              {/* Card A: DM Auto qualifier */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-app-bg-main p-8 space-y-4 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0"
              >
                <div className="w-12 h-12 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                  <Sparkles size={24} strokeWidth={3} />
                </div>
                <h4 className="font-sans font-black text-app-text-primary text-xl uppercase tracking-tighter">DM Auto-Qualifier</h4>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                  Quando un potenziale cliente scrive "VOGLIO ACCEDERE", l'IA apre la chat, offre valore e acquisisce il contatto qualificato.
                </p>
              </motion.div>

              {/* Card B: WA FAQ Routing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-app-bg-main p-8 space-y-4"
              >
                <div className="w-12 h-12 rounded-none bg-app-accent-green text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                  <Smartphone size={24} strokeWidth={3} />
                </div>
                <h4 className="font-sans font-black text-app-text-primary text-xl uppercase tracking-tighter">WA Answer Router</h4>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                  L'IA intercetta le domande frequenti su WhatsApp 24/7. Il cliente riceve info all'istante e fissa l'appuntamento da solo.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* Detail breakdown */}
      <section className="bg-app-bg-main py-24 border-b-4 border-app-text-primary w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="font-sans text-4xl sm:text-5xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
              Campagne <br/> "A Vuoto"
            </h3>
            <p className="font-sans text-lg text-app-text-primary font-bold leading-tight">
              Molti investono budget in campagne caotiche. Risultato? Molti "like", ma nessun form compilato o acquisto reale.
            </p>
            <p className="font-sans text-lg text-app-text-primary font-bold leading-tight">
              <strong>Il mio approccio:</strong> prima creiamo la macchina stabile che accoglie e dialoga autonomamente, poi premiamo l'acceleratore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-4 border-app-text-primary">
            <div className="bg-app-accent-orange p-8 space-y-3 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0">
              <Users className="text-app-text-primary" size={32} strokeWidth={3} />
              <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter">Pubblico Filtrato</h4>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Le persone curiose vengono indirizzate a un sistema guidato che seleziona solo i contatti davvero qualificati.
              </p>
            </div>

            <div className="bg-app-accent-green p-8 space-y-3">
              <ShieldCheck className="text-app-text-primary" size={32} strokeWidth={3} />
              <h4 className="font-sans font-black text-xl text-app-text-primary uppercase tracking-tighter">Pronto per l'Ufficio</h4>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Riceverai richieste definite nel dettaglio, complete di obiettivi ed esigenze reali.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
