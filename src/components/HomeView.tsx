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
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden w-full bg-app-bg-main border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              {/* Tagline / Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs md:text-sm font-bold text-app-text-primary tracking-widest uppercase mb-4 flex items-center gap-2"
              >
                <Cpu size={16} className="text-app-accent-purple" />
                {heroData.subtitle}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] mb-6 uppercase"
              >
                {heroData.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-app-text-primary leading-tight mb-10 max-w-2xl font-bold"
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
                  className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-green text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-app-accent-lime transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {heroData.cta_primary.label}
                  <ArrowRight size={18} strokeWidth={3} />
                </button>

                {heroData.cta_secondary && (
                  <button
                    id="hero-secondary-cta"
                    onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                    className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter border-4 border-app-text-primary bg-transparent text-app-text-primary px-10 py-5 rounded-none hover:bg-app-accent-orange transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {heroData.cta_secondary.label}
                  </button>
                )}
              </motion.div>
            </div>

            {/* Hero Image with fading effect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative rounded-none overflow-hidden shadow-none border-4 border-app-text-primary">
                <img
                  src={config.assets_manifest.home_hero_image.path}
                  alt={config.assets_manifest.home_hero_image.alt}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gradient Fading Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg-main via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-app-bg-main/40 via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Intro Cards */}
      <section id="manifesto-intro" className="w-full bg-app-bg-main py-20 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
          
          {/* Card 1: Abbandonare il complicato */}
          <motion.div 
            id="manifesto-card-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-app-bg-main p-8 flex flex-col justify-between space-y-8 border-app-text-primary lg:border-r-4 border-b-4 lg:border-b-0"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-none bg-app-accent-purple text-white border-2 border-app-text-primary flex items-center justify-center">
                <ShieldAlert size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-2xl font-black text-app-text-primary tracking-tighter uppercase">Abbatto Barriere</h3>
              <p className="font-sans text-base text-app-text-primary font-bold leading-tight">
                Rendo accessibile ciò che fino ad oggi è stato reso volutamente ostile dai soliti tecnicismi speculativi, portando stabilità al tuo fatturato.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Umanesimo Digitale */}
          <motion.div 
            id="manifesto-card-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-app-bg-main p-8 flex flex-col justify-between space-y-8 border-app-text-primary md:border-r-4 border-b-4 md:border-b-0"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-none bg-app-accent-green text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <HeartHandshake size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-2xl font-black text-app-text-primary tracking-tighter uppercase">Umanesimo Reale</h3>
              <p className="font-sans text-base text-app-text-primary font-bold leading-tight">
                Le persone guidano il progresso, non gli automatismi. Costruisco infrastrutture per liberare il tuo tempo prezioso.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Rigore e Strategia */}
          <motion.div 
            id="manifesto-card-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-app-bg-main p-8 flex flex-col justify-between space-y-8 md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <Workflow size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-2xl font-black text-app-text-primary tracking-tighter uppercase">Rigore Visivo</h3>
              <p className="font-sans text-base text-app-text-primary font-bold leading-tight">
                Applico una rigorosa eleganza estetica. Ogni scelta segue un preciso scopo di conversione e professionalità.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Sezione Strategie Social & Lead Gen Preview */}
      <section id="social-preview-section" className="bg-app-bg-main border-b-4 border-app-text-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="font-mono text-xs font-bold text-app-text-primary tracking-widest uppercase">
                {socialData.subtitle}
              </span>
              <h2 className="font-sans text-4xl sm:text-6xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
                {socialData.title}
              </h2>
              <p className="font-sans text-lg text-app-text-primary font-bold leading-tight">
                {socialData.description}
              </p>
              
              <div className="pt-4">
                <button
                  id="home-social-cta"
                  onClick={() => onNavigate("/social-lead-generation")}
                  className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-purple text-white px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-app-text-primary hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  Vedi il Sistema
                  <ArrowRight size={18} strokeWidth={3} />
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
              {socialData.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-app-bg-main p-8 space-y-4 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0 last:border-r-0 last:border-b-0"
                >
                  <span className="font-mono text-4xl font-black text-app-accent-purple block">
                    {pillar.index}
                  </span>
                  <h4 className="font-sans font-black text-app-text-primary text-xl uppercase tracking-tighter">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic AI Process Optimization section */}
      <section id="ai-case-studies" className="bg-app-accent-purple text-white py-24 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-20 space-y-4"
          >
            <span className="font-mono text-xs font-black text-app-accent-lime tracking-widest uppercase block bg-app-text-primary px-3 py-1 w-fit">
              IA Applicata
            </span>
            <h2 className="font-sans text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              L'IA libera <br/> il tuo tempo
            </h2>
            <p className="font-sans text-xl text-white/90 font-bold leading-tight">
              L'IA non sostituisce il tuo lavoro, ma lo protegge eliminando compiti ripetitivi e risposte manuali lente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
            
            {/* Card 1: Assistente Instagram/WA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-8 space-y-6 border-app-text-primary md:border-r-4 border-b-4 md:border-b-0"
            >
              <div className="w-14 h-14 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <Smartphone size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans font-black text-2xl text-app-text-primary uppercase tracking-tighter">Lead automatici</h3>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Un utente commenta, il sistema invia un DM con un quiz informativo. Chi risponde è qualificato e pronto all'acquisto.
              </p>
              <div className="pt-2">
                <span className="font-mono text-xs font-black text-app-text-primary bg-app-accent-lime px-3 py-1 border-2 border-app-text-primary">
                  SAVE: 2.5h/DAY
                </span>
              </div>
            </motion.div>

            {/* Card 2: Scrittura Programmatica */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-8 space-y-6 border-app-text-primary md:border-r-4 border-b-4 md:border-b-0"
            >
              <div className="w-14 h-14 rounded-none bg-app-accent-lime text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <Zap size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans font-black text-2xl text-app-text-primary uppercase tracking-tighter">Piano Editoriale</h3>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                Addestriamo un GPT sul tuo stile. Genera idee mensili pronte da revisionare, azzerando il blocco creativo.
              </p>
              <div className="pt-2">
                <span className="font-mono text-xs font-black text-app-text-primary bg-app-accent-orange px-3 py-1 border-2 border-app-text-primary">
                  PROD: +900%
                </span>
              </div>
            </motion.div>

            {/* Card 3: Assistente Prenotazioni */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-app-bg-main p-8 space-y-6"
            >
              <div className="w-14 h-14 rounded-none bg-app-accent-green text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
                <Users2 size={28} strokeWidth={3} />
              </div>
              <h3 className="font-sans font-black text-2xl text-app-text-primary uppercase tracking-tighter">Appuntamenti</h3>
              <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                I clienti compilano un questionario interattivo. Il sistema consiglia lo slot perfetto sul calendario.
              </p>
              <div className="pt-2">
                <span className="font-mono text-xs font-black text-app-text-primary bg-app-accent-purple text-white px-3 py-1 border-2 border-app-text-primary">
                  ZERO VOID CALLS
                </span>
              </div>
            </motion.div>

          </div>

          <div className="mt-16 flex justify-center">
            <button
              id="cta-ai-cases-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-lime text-app-text-primary px-10 py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all cursor-pointer"
            >
              Richiedi la tua integrazione personalizzata
            </button>
          </div>

        </div>
      </section>

      {/* Services Breakdown Preview */}
      <section id="services-preview" className="w-full bg-app-bg-main py-24 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-20 space-y-4"
          >
            <span className="font-mono text-xs font-bold text-app-text-primary tracking-widest uppercase mb-1 block">
              I Pilastri Tecnologici
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
              Sviluppo Web <br/> Strategico
            </h2>
            <p className="font-sans text-lg text-app-text-primary font-bold leading-tight">
              Offro soluzioni su misura per garantirti massima autonomia o prestazioni purissime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-app-text-primary bg-app-text-primary">
          
          {/* Option 1: WordPress */}
          <motion.div 
            id="home-service-wordpress"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-app-bg-main p-10 space-y-8 flex flex-col justify-between border-app-text-primary lg:border-r-4 border-b-4 lg:border-b-0"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-black tracking-wider uppercase bg-app-accent-purple text-white px-3 py-1 border-2 border-app-text-primary">
                  {serviziData.option_wordpress.tag}
                </span>
                <Laptop className="text-app-accent-purple" size={32} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-3xl font-black text-app-text-primary tracking-tighter uppercase">
                {serviziData.option_wordpress.title}
              </h3>
              <p className="font-sans text-lg font-black text-app-accent-purple uppercase tracking-tighter">
                {serviziData.option_wordpress.subtitle}
              </p>
              <p className="font-sans text-base text-app-text-primary font-bold leading-tight">
                {serviziData.option_wordpress.description}
              </p>
              <ul className="space-y-3 pt-2">
                {serviziData.option_wordpress.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="font-sans text-sm text-app-text-primary font-bold flex items-center gap-3">
                    <span className="w-3 h-3 rounded-none bg-app-accent-purple border border-app-text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="home-wordpress-details"
                onClick={() => onNavigate("/servizi")}
                className="font-sans font-black text-sm text-app-text-primary hover:text-app-accent-purple uppercase tracking-tighter flex items-center gap-3 cursor-pointer group transition-all"
              >
                Vai ai dettagli
                <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Option 2: Custom Code */}
          <motion.div 
            id="home-service-custom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-app-bg-main p-10 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-black tracking-wider uppercase bg-app-accent-orange text-app-text-primary px-3 py-1 border-2 border-app-text-primary">
                  {serviziData.option_custom_code.tag}
                </span>
                <CodeXml className="text-app-accent-orange" size={32} strokeWidth={3} />
              </div>
              <h3 className="font-sans text-3xl font-black text-app-text-primary tracking-tighter uppercase">
                {serviziData.option_custom_code.title}
              </h3>
              <p className="font-sans text-lg font-black text-app-accent-orange uppercase tracking-tighter">
                {serviziData.option_custom_code.subtitle}
              </p>
              <p className="font-sans text-base text-app-text-primary font-bold leading-tight">
                {serviziData.option_custom_code.description}
              </p>
              <ul className="space-y-3 pt-2">
                {serviziData.option_custom_code.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="font-sans text-sm text-app-text-primary font-bold flex items-center gap-3">
                    <span className="w-3 h-3 rounded-none bg-app-accent-orange border border-app-text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                id="home-customcode-details"
                onClick={() => onNavigate("/servizi")}
                className="font-sans font-black text-sm text-app-text-primary hover:text-app-accent-orange uppercase tracking-tighter flex items-center gap-3 cursor-pointer group transition-all"
              >
                Vai ai dettagli
                <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          </div>
        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section id="banner-cta" className="w-full bg-app-bg-main py-24 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-app-accent-green border-4 border-app-text-primary rounded-none p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="font-sans text-4xl sm:text-6xl font-black tracking-tighter text-app-text-primary uppercase leading-[0.9]">
                Basta subire <br/> la tecnologia. <br/> Usala.
              </h3>
              <p className="font-sans text-lg sm:text-xl text-app-text-primary font-bold leading-tight">
                Abbatto le distanze tecniche e ti do piena autonomia d'impresa. Rendi semplice ciò che finora sembrava faticoso.
              </p>
              <div className="pt-6 flex justify-center">
                <button
                  id="banner-cta-btn"
                  onClick={() => onNavigate("/contatti")}
                  className="font-sans font-black text-sm uppercase tracking-tighter bg-app-text-primary text-app-accent-green hover:bg-white hover:text-app-text-primary px-12 py-6 rounded-none transition-all cursor-pointer border-2 border-app-text-primary"
                >
                  Inizia il Dialogo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
