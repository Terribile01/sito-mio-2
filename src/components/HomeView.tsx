import { SiteConfig } from "../types";
import { ArrowRight, Workflow, ShieldAlert, Cpu, Laptop, Users2, CodeXml, HeartHandshake, Smartphone, Zap } from "lucide-react";
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
    <div id="home-view" className="space-y-0 pb-0">
      
      {/* Dynamic Hero Section */}
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden w-full bg-[#E2DDD3]">
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
      <section id="manifesto-intro" className="w-full bg-[#E2DDD3] py-16 border-t border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Abbandonare il complicato */}
          <motion.div 
            id="manifesto-card-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, borderColor: "rgba(117,109,82,0.4)" }}
            className="bg-[#E2DDD3] border border-[#454340]/15 p-8 rounded-lg flex flex-col justify-between space-y-8 shadow-[0_12px_24px_-8px_rgba(69,67,64,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(117,109,82,0.18)] transition-all duration-400"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#756D52]/10 text-[#756D52] flex items-center justify-center transition-colors hover:bg-[#756D52]/20">
                <ShieldAlert size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#454340] tracking-tight">Abbatto la Barriera Tecnica</h3>
              <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
                Mi rivolgo con massima trasparenza alla microimprenditoria locale e online. Rendo accessibile ciò che fino ad oggi è stato reso volutamente ostile o fumoso dai soliti tecnicismi speculativi, portando stabilità al tuo fatturato.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Umanesimo Digitale */}
          <motion.div 
            id="manifesto-card-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, borderColor: "rgba(117,109,82,0.4)" }}
            className="bg-[#E2DDD3] border border-[#454340]/15 p-8 rounded-lg flex flex-col justify-between space-y-8 shadow-[0_12px_24px_-8px_rgba(69,67,64,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(117,109,82,0.18)] transition-all duration-400"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#756D52]/10 text-[#756D52] flex items-center justify-center transition-colors hover:bg-[#756D52]/20">
                <HeartHandshake size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#454340] tracking-tight">Umanesimo Digitale Reale</h3>
              <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
                Le persone e le relazioni concrete guidano il progresso, non gli automatismi senz'anima. Costruisco infrastrutture per liberare il tuo tempo prezioso, permettendoti di focalizzarti sulla vera essenza del tuo mestiere.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Rigore e Strategia */}
          <motion.div 
            id="manifesto-card-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, borderColor: "rgba(117,109,82,0.4)" }}
            className="bg-[#E2DDD3] border border-[#454340]/15 p-8 rounded-lg flex flex-col justify-between space-y-8 shadow-[0_12px_24px_-8px_rgba(69,67,64,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(117,109,82,0.18)] transition-all duration-400 md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#756D52]/10 text-[#756D52] flex items-center justify-center transition-colors hover:bg-[#756D52]/20">
                <Workflow size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-[#454340] tracking-tight">Rigore Strutturale Visivo</h3>
              <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
                Grazie alla mia formazione specialistica in Comunicazione Visiva e Strategia Digitale, applico una rigorosa eleganza estetica. Ogni scelta cromatica, tipografica e di flusso segue un preciso scopo di conversione.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Sezione Strategie Social & Lead Gen Preview */}
      <section id="social-preview-section" className="bg-[#E2DDD3] border-y border-[#454340]/10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-6"
            >
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
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {socialData.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6, borderColor: "rgba(117,109,82,0.4)" }}
                  className="bg-[#E2DDD3] border border-[#454340]/20 p-6 rounded-md space-y-4 shadow-[0_8px_16px_-4px_rgba(69,67,64,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(117,109,82,0.15)] transition-all duration-350 cursor-default"
                >
                  <span className="font-mono text-2xl font-bold text-[#9C9478]/60 block">
                    {pillar.index}
                  </span>
                  <h4 className="font-sans font-bold text-[#454340] text-base">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-[#2D2B28]/90 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic AI Process Optimization section - Alternating to deep Charcoal theme to create an epic structural rhythm */}
      <section id="ai-case-studies" className="bg-[#2D2B28] text-[#E2DDD3] py-20 border-y border-[#454340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="font-mono text-xs font-bold text-[#A69978] tracking-widest uppercase block">
              IA Semplificata e Applicata
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#E2DDD3] tracking-tight">
              Esempi Reali: Come l'IA Velocizza e Libera il Tuo Tempo
            </h2>
            <p className="font-sans text-sm text-[#E2DDD3]/70 leading-relaxed">
              L'Intelligenza Artificiale non sostituisce l'artigianalità del tuo lavoro, ma la protegge eliminando compiti ripetitivi e risposte manuali lente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Assistente Instagram/WA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#2D2B28] border border-[#454340] hover:border-[#A69978]/40 p-8 rounded-lg space-y-4 transition-all duration-300 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Smartphone size={20} />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#E2DDD3]">Lead qualificati in automatico</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Quando un utente commenta un tuo post Instagram, il sistema invia istantaneamente un DM privato con un quiz informativo. Chi risponde viene qualificato come lead pronto a comprare.
              </p>
              <div className="pt-2">
                <span className="font-mono text-[10px] text-[#A69978] bg-[#A69978]/10 px-2.5 py-1 rounded">
                  Tempo risparmiato: 2.5 ore al giorno
                </span>
              </div>
            </motion.div>

            {/* Card 2: Scrittura Programmatica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-[#2D2B28] border border-[#454340] hover:border-[#A69978]/40 p-8 rounded-lg space-y-4 transition-all duration-300 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Zap size={20} />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#E2DDD3]">Piano Editoriale in 15 minuti</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Addestriamo un assistente GPT personalizzato sul tuo specifico modo di parlare e scrivere. Genera idee di post mensili pronti da revisionare, azzerando il blocco creativo.
              </p>
              <div className="pt-2">
                <span className="font-mono text-[10px] text-[#A69978] bg-[#A69978]/10 px-2.5 py-1 rounded">
                  Produttività: +900%
                </span>
              </div>
            </motion.div>

            {/* Card 3: Assistente Prenotazioni */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-[#2D2B28] border border-[#454340] hover:border-[#A69978]/40 p-8 rounded-lg space-y-4 transition-all duration-300 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Users2 size={20} />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#E2DDD3]">Pre-profilazione e Appuntamenti</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                I clienti compilano un questionario d'ingresso interattivo integrato sul tuo sito. Il sistema consiglia lo slot perfetto sul calendario senza scambiare 10 email avanti e indietro.
              </p>
              <div className="pt-2">
                <span className="font-mono text-[10px] text-[#A69978] bg-[#A69978]/10 px-2.5 py-1 rounded">
                  Zero telefonate a vuoto
                </span>
              </div>
            </motion.div>

          </div>

          {/* Interactive button inside dark block to show beautiful contrasting color action */}
          <div className="mt-12 flex justify-center">
            <button
              id="cta-ai-cases-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-bold text-xs uppercase tracking-wider bg-[#E2DDD3] text-[#2D2B28] hover:bg-[#A69978] hover:text-[#2D2B28] px-6 py-3.5 rounded transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              Richiedi la tua integrazione personalizzata
            </button>
          </div>

        </div>
      </section>

      {/* Services Breakdown Preview */}
      <section id="services-preview" className="w-full bg-[#E2DDD3] py-20 border-t border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          >
            <span className="font-mono text-xs font-semibold text-[#756D52] tracking-widest uppercase mb-1 block">
              I Miei Pilastri Tecnologici
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#454340]">
              Sviluppo Web Strategico Integrato
            </h2>
            <p className="font-sans text-sm text-[#2D2B28] leading-relaxed">
              Ogni microimpresa ha bisogni differenti. Offro soluzioni su misura divise su due grandi pilastri per garantirti massima autonomia o prestazioni purissime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Option 1: WordPress */}
          <motion.div 
            id="home-service-wordpress"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, borderColor: "rgba(117,109,82,0.4)" }}
            className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 space-y-6 flex flex-col justify-between shadow-[0_15px_30px_-5px_rgba(69,67,64,0.08)] hover:shadow-[0_24px_48px_-8px_rgba(117,109,82,0.18)] transition-all duration-400 relative overflow-hidden group"
          >
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
              <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
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
                className="font-sans font-bold text-xs text-[#756D52] hover:text-[#454340] uppercase tracking-wider flex items-center gap-2.5 cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                Scopri lo sviluppo WordPress
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Option 2: Custom Code */}
          <motion.div 
            id="home-service-custom"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, borderColor: "rgba(117,109,82,0.4)" }}
            className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 space-y-6 flex flex-col justify-between shadow-[0_15px_30px_-5px_rgba(69,67,64,0.08)] hover:shadow-[0_24px_48px_-8px_rgba(117,109,82,0.18)] transition-all duration-400 relative overflow-hidden group"
          >
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
              <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
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
                className="font-sans font-bold text-xs text-[#756D52] hover:text-[#454340] uppercase tracking-wider flex items-center gap-2.5 cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                Scopri lo sviluppo in Codice Puro
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          </div>
        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section id="banner-cta" className="w-full bg-[#E2DDD3] py-16 border-t border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
        </div>
      </section>

    </div>
  );
}
