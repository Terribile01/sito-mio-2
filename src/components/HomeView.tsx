import { SiteConfig } from "../types";
import { ArrowRight, Workflow, ShieldAlert, Cpu, Laptop, Users2, CodeXml, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function HomeView({ config, onNavigate }: HomeViewProps) {
  const { components } = config;
  const heroData = components.hero.home_hero;
  const socialData = components.sezione_strategie_social;
  const serviziData = components.sezione_servizi_dettaglio;

  return (
    <div id="home-view" className="space-y-24 pb-16">
      
      {/* Dynamic Hero Section */}
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle radial backdrop accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C9478]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <Cpu size={16} className="text-[#9C9478]" />
              {heroData.subtitle}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#454340] leading-[1.1] mb-6"
            >
              {heroData.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-[#2D2B28] leading-relaxed mb-10 max-w-2xl"
            >
              {heroData.description}
            </motion.p>

            {/* CTA list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate(heroData.cta_primary.action_path)}
                className="w-full sm:w-auto font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-8 py-4 rounded-md shadow-[0_10px_20px_-10px_rgba(117,109,82,0.3)] hover:bg-[#454340] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {heroData.cta_primary.label}
                <ArrowRight size={16} />
              </button>
              
              {heroData.cta_secondary && (
                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                  className="w-full sm:w-auto font-sans font-semibold text-sm uppercase tracking-wider border border-[#756D52] text-[#756D52] px-8 py-4 rounded-md hover:bg-[#756D52]/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {heroData.cta_secondary.label}
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Intro Cards (Bento style) */}
      <section id="manifesto-intro" className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Abbandonare il complicato */}
          <div className="bg-[#E2DDD3] border border-[#454340]/10 p-8 rounded-lg flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#756D52]/10 text-[#756D52] flex items-center justify-center">
                <ShieldAlert size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#454340]">Abbattere la Barriera Tecnica</h3>
              <p className="font-sans text-sm text-[#2D2B28] leading-relaxed">
                Mi rivolgo alla microimprenditoria locale e online, spesso digiuna d'informatica. Il mio obiettivo principale è semplificare e rendere democratico ciò che fino ad ora sembrava ostile, inaccessibile o costoso.
              </p>
            </div>
          </div>

          {/* Card 2: Umanesimo Digitale */}
          <div className="bg-[#E2DDD3] border border-[#454340]/10 p-8 rounded-lg flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#756D52]/10 text-[#756D52] flex items-center justify-center">
                <HeartHandshake size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#454340]">L'Umanesimo Digitale</h3>
              <p className="font-sans text-sm text-[#2D2B28] leading-relaxed">
                Le persone devono essere al centro del progresso tecnologico. La tecnologia e l'IA non devono schiacciare il tuo business, ma liberare il tuo tempo affinché tu possa dedicarti unicamente a ciò che ami del tuo lavoro.
              </p>
            </div>
          </div>

          {/* Card 3: Rigore e Strategia */}
          <div className="bg-[#E2DDD3] border border-[#454340]/10 p-8 rounded-lg flex flex-col justify-between space-y-8 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#756D52]/10 text-[#756D52] flex items-center justify-center">
                <Workflow size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#454340]">Il Rigore Visivo</h3>
              <p className="font-sans text-sm text-[#2D2B28] leading-relaxed">
                Laureata in Comunicazione Visiva, unisco il rigore estetico del design tradizionale alle performance dei sistemi digitali moderni. Ogni pixel e logica risponde a una solida strategia di business.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sezione Strategie Social & Lead Gen Preview */}
      <section id="social-preview-section" className="bg-[#E2DDD3] border-y border-[#454340]/10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs font-semibold text-[#756D52] tracking-widest uppercase">
                {socialData.subtitle}
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#454340] leading-tight">
                {socialData.title}
              </h2>
              <p className="font-sans text-base text-[#2D2B28] leading-relaxed">
                {socialData.description}
              </p>
              
              <div className="pt-4">
                <button
                  id="home-social-cta"
                  onClick={() => onNavigate("/social-lead-generation")}
                  className="font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] px-6 py-3.5 rounded-md shadow-[0_10px_20px_-10px_rgba(117,109,82,0.3)] hover:bg-[#454340] transition-all flex items-center gap-2 cursor-pointer"
                >
                  Vedi il Sistema
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {socialData.pillars.map((pillar) => (
                <div key={pillar.index} className="bg-[#E2DDD3] border border-[#454340]/20 p-6 rounded-md space-y-4">
                  <span className="font-mono text-2xl font-bold text-[#9C9478]/50 block">
                    {pillar.index}
                  </span>
                  <h4 className="font-sans font-bold text-[#454340] text-base">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Breakdown Preview */}
      <section id="services-preview" className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold text-[#756D52] tracking-widest uppercase mb-1 block">
            I Miei Pilastri Tecnologici
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#454340]">
            Sviluppo Web Strategico Integrato
          </h2>
          <p className="font-sans text-sm text-[#2D2B28] leading-relaxed">
            Ogni microimpresa ha bisogni differenti. Offro soluzioni su misura divise su due grandi pilastri per garantirti massima autonomia o prestazioni purissime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Option 1: WordPress */}
          <div className="bg-[#E2DDD3] border border-[#454340]/10 rounded-lg p-8 space-y-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-[#756D52]/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-wider uppercase bg-[#756D52]/10 text-[#756D52] px-2.5 py-1 rounded">
                  {serviziData.option_wordpress.tag}
                </span>
                <Laptop className="text-[#9C9478]" size={24} />
              </div>
              <h3 className="font-sans text-2xl font-bold text-[#454340]">
                {serviziData.option_wordpress.title}
              </h3>
              <p className="font-sans text-sm font-semibold text-[#756D52]">
                {serviziData.option_wordpress.subtitle}
              </p>
              <p className="font-sans text-sm text-[#2D2B28]/90 leading-relaxed">
                {serviziData.option_wordpress.description}
              </p>
              <ul className="space-y-2 pt-2">
                {serviziData.option_wordpress.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="font-sans text-xs text-[#2D2B28] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#756D52]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="home-wordpress-details"
                onClick={() => onNavigate("/servizi")}
                className="font-sans font-bold text-xs text-[#756D52] hover:text-[#454340] uppercase tracking-wider flex items-center gap-2.5 cursor-pointer"
              >
                Scopri lo sviluppo WordPress
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Option 2: Custom Code */}
          <div className="bg-[#E2DDD3] border border-[#454340]/10 rounded-lg p-8 space-y-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-[#756D52]/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-wider uppercase bg-[#9C9478]/10 text-[#756D52] px-2.5 py-1 rounded">
                  {serviziData.option_custom_code.tag}
                </span>
                <CodeXml className="text-[#9C9478]" size={24} />
              </div>
              <h3 className="font-sans text-2xl font-bold text-[#454340]">
                {serviziData.option_custom_code.title}
              </h3>
              <p className="font-sans text-sm font-semibold text-[#756D52]">
                {serviziData.option_custom_code.subtitle}
              </p>
              <p className="font-sans text-sm text-[#2D2B28]/90 leading-relaxed">
                {serviziData.option_custom_code.description}
              </p>
              <ul className="space-y-2 pt-2">
                {serviziData.option_custom_code.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="font-sans text-xs text-[#2D2B28] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C9478]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="home-customcode-details"
                onClick={() => onNavigate("/servizi")}
                className="font-sans font-bold text-xs text-[#756D52] hover:text-[#454340] uppercase tracking-wider flex items-center gap-2.5 cursor-pointer"
              >
                Scopri lo sviluppo in Codice Puro
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section id="banner-cta" className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        <div className="bg-[#756D52] text-[#E2DDD3] rounded-lg p-8 md:p-12 text-center space-y-6 shadow-[0_10px_30px_rgba(117,109,82,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-transparent to-[#454340]/20 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight">
              Basta subire la tecnologia. Usala a tuo favore.
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#E2DDD3]/90 leading-relaxed">
              Il mio obiettivo è abbattere le distanze tecniche e darti piena autonomia d'impresa lavorativa. Rendi semplice ciò che finora sembrava faticoso ed elevato.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                id="banner-cta-btn"
                onClick={() => onNavigate("/contatti")}
                className="font-sans font-semibold text-sm uppercase tracking-wider bg-[#E2DDD3] text-[#756D52] hover:bg-[#E2DDD3]/90 px-8 py-4 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Inizia il Dialogo con Maria Teresa
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
