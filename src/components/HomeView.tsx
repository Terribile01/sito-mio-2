import { useState } from "react";
import { SiteConfig, ManifestoCard } from "../types";
import { ArrowRight, Workflow, ShieldAlert, Cpu, Laptop, Users2, CodeXml, HeartHandshake, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";
import { GlowCircle, renderSplitTitle, CardPopup } from "./ThemeElements";
import Hero3DBackground from "./Hero3DBackground";

interface HomeViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function HomeView({ config, onNavigate }: HomeViewProps) {
  const { components } = config;
  const heroData = components.hero.home_hero;
  const socialData = components.sezione_strategie_social;
  const serviziData = components.sezione_servizi_dettaglio;
  const manifestoCards = components.manifesto_cards;

  const [selectedCard, setSelectedCard] = useState<ManifestoCard | null>(null);

  const getIcon = (iconName: string, color: string = "currentColor") => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert size={28} color={color} />;
      case "HeartHandshake": return <HeartHandshake size={28} color={color} />;
      case "Workflow": return <Workflow size={28} color={color} />;
      default: return <Zap size={28} color={color} />;
    }
  };

  const handleCtaClick = () => {
    onNavigate("/contatti");
    setTimeout(() => {
      const element = document.getElementById("contatti-form-container");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div id="home-view" className="relative space-y-0 pb-0 bg-app-bg-main overflow-hidden">
      
      {/* Background Glows */}
      <GlowCircle color="#9B5CFF" size="400px" top="-100px" left="-100px" delay={0} />
      <GlowCircle color="#00F5FF" size="300px" top="20%" left="80%" delay={1} />
      <GlowCircle color="#AAFF00" size="250px" top="60%" left="-50px" delay={2} />

      {/* Hero Section */}
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden w-full z-10">
        {/* 3D Background Animation */}
        <Hero3DBackground />

        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs md:text-sm font-bold text-app-accent-secondary tracking-widest uppercase mb-4 flex items-center gap-2"
              >
                <Cpu size={16} />
                {heroData.subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight mb-6 uppercase break-words"
              >
                {renderSplitTitle(heroData.title, "#FFFFFF", "#9B5CFF")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl smart-text"
              >
                {heroData.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate(heroData.cta_primary.action_path)}
                  className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-primary text-app-bg-main px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,92,255,0.6)] cursor-pointer flex items-center justify-center gap-2"
                >
                  {heroData.cta_primary.label}
                  <ArrowRight size={18} />
                </button>

                {heroData.cta_secondary && (
                  <button
                    id="hero-secondary-cta"
                    onClick={() => onNavigate(heroData.cta_secondary!.action_path)}
                    className="w-full sm:w-auto font-sans font-black text-sm uppercase tracking-tighter border-2 border-white/20 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {heroData.cta_secondary.label}
                  </button>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={config.assets_manifest.home_hero_image.path}
                  alt={config.assets_manifest.home_hero_image.alt}
                  className="w-full h-auto object-cover img-neon-tint group-hover:filter-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg-main via-app-accent-primary/10 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-app-accent-secondary/10 to-transparent mix-blend-overlay" />
              </div>
              {/* Overlapping Circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-app-accent-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-app-accent-primary rounded-full blur-3xl opacity-40 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Intro Cards */}
      <section id="manifesto-intro" className="w-full py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {manifestoCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedCard(card)}
              className="glass-morphism p-8 rounded-3xl space-y-6 border-white/10 hover:border-app-accent-slime/40 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-app-accent-slime/20 text-app-accent-slime flex items-center justify-center shadow-[0_0_15px_rgba(171,247,16,0.3)] group-hover:scale-110 transition-transform">
                {getIcon(card.icon, "#ABF710")}
              </div>
              <h3 className="font-sans text-2xl font-black text-app-accent-slime tracking-tighter uppercase">
                {card.title}
              </h3>
              <p className="font-sans text-base text-white/70 leading-relaxed">
                {card.description}
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center gap-2 bg-app-accent-slime text-app-bg-main px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all group-hover:shadow-[0_0_20px_rgba(171,247,16,0.4)] group-hover:scale-105">
                  Scopri di più <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>

      {/* PNRR Section (bloccopnn1) */}
      <section id="pnrr-section" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch border-app-accent-secondary/20 neon-border-cyan"
          >
            <div className="p-10 md:p-16 space-y-8 flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-2">
                <img
                  src={config.assets_manifest.pnrr_badge.path}
                  alt={config.assets_manifest.pnrr_badge.alt}
                  className="h-12 w-auto object-contain logo-pnrr-filter"
                />
                <div className="h-10 w-[1px] bg-white/20" />
                <span className="font-mono text-[10px] md:text-xs font-black text-app-accent-secondary tracking-widest uppercase">
                  {components.bloccopnn1.subtitle}
                </span>
              </div>

              <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                {renderSplitTitle(components.bloccopnn1.title, "#FFFFFF", "#00F5FF")}
              </h2>

              <p className="font-sans text-lg text-white/70 leading-tight max-w-xl">
                {components.bloccopnn1.description}
              </p>

              <div className="flex items-center gap-4">
                 <span className="font-mono text-xs font-black text-app-tertiary uppercase tracking-wider">
                   {components.bloccopnn1.claim}
                 </span>
                 <div className="flex-grow h-[1px] bg-gradient-to-r from-app-tertiary/50 to-transparent" />
              </div>

              <button
                onClick={() => onNavigate(components.bloccopnn1.cta.action_path)}
                className="w-fit font-sans font-black text-sm uppercase tracking-tighter border-2 border-app-accent-secondary text-app-accent-secondary px-10 py-5 rounded-xl hover:bg-app-accent-secondary/10 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
              >
                {components.bloccopnn1.cta.label}
              </button>
            </div>

            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden group">
              <img
                src={config.assets_manifest.pnrr_hero.path}
                alt={config.assets_manifest.pnrr_hero.alt}
                className="absolute inset-0 w-full h-full object-cover img-neon-tint-cyan group-hover:filter-none transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-app-bg-main via-transparent to-transparent lg:block hidden opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-app-bg-main via-transparent to-transparent lg:hidden block opacity-60" />

              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-app-accent-secondary/5 mix-blend-overlay group-hover:bg-transparent transition-colors" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Preview Section */}
      <section id="social-preview-section" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="font-mono text-xs font-bold text-app-accent-secondary tracking-widest uppercase">
                {socialData.subtitle}
              </span>
              <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                {renderSplitTitle(socialData.title, "#FFFFFF", "#00F5FF")}
              </h2>
              <p className="font-sans text-lg text-white/70 leading-relaxed">
                {socialData.description}
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => onNavigate("/social-lead-generation")}
                  className="font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-secondary text-app-bg-main px-10 py-5 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] flex items-center gap-2 cursor-pointer"
                >
                  Vedi il Sistema
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialData.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-morphism p-6 rounded-2xl space-y-4"
                >
                  <span className="font-mono text-3xl font-black text-app-accent-secondary block">
                    {pillar.index}
                  </span>
                  <h4 className="font-sans font-black text-white text-lg uppercase tracking-tighter">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-sm text-white/60 leading-tight">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai-case-studies" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="glass-morphism p-12 md:p-16 rounded-[40px] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-app-accent-primary/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs font-black text-app-tertiary tracking-widest uppercase block mb-2">
                AI Applicata
              </span>
              <h2 className="font-sans text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                {renderSplitTitle("L'AI libera il tuo tempo", "#FFFFFF", "#AAFF00")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-app-accent-secondary shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                  <Smartphone size={28} />
                </div>
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tighter">Lead automatici</h3>
                <p className="font-sans text-sm text-white/60">
                  Un utente commenta, il sistema invia un DM con un quiz informativo.
                </p>
                <span className="inline-block font-mono text-[10px] font-black text-app-accent-secondary border border-app-accent-secondary/30 px-2 py-0.5 rounded">
                  SAVE: 2.5h/DAY
                </span>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-app-tertiary shadow-[0_0_15px_rgba(170,255,0,0.2)]">
                  <Zap size={28} />
                </div>
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tighter">Piano Editoriale</h3>
                <p className="font-sans text-sm text-white/60">
                  Genera idee mensili pronte da revisionare, azzerando il blocco creativo.
                </p>
                <span className="inline-block font-mono text-[10px] font-black text-app-tertiary border border-app-tertiary/30 px-2 py-0.5 rounded">
                  PROD: +900%
                </span>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-app-accent-primary shadow-[0_0_15px_rgba(155,92,255,0.2)]">
                  <Users2 size={28} />
                </div>
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tighter">Appuntamenti</h3>
                <p className="font-sans text-sm text-white/60">
                  I clienti compilano un questionario. Il sistema consiglia lo slot perfetto.
                </p>
                <span className="inline-block font-mono text-[10px] font-black text-app-accent-primary border border-app-accent-primary/30 px-2 py-0.5 rounded">
                  ZERO VOID CALLS
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section id="services-preview" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="max-w-3xl mb-16 space-y-4">
            <span className="font-mono text-xs font-bold text-app-accent-primary tracking-widest uppercase block">
              I Pilastri Tecnologici
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle(serviziData.option_wordpress.title + " & " + "Custom Code", "#FFFFFF", "#9B5CFF")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <motion.div className="glass-morphism p-10 rounded-[40px] space-y-8 flex flex-col justify-between group hover:border-app-accent-primary/30 transition-all">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] font-black tracking-wider uppercase bg-app-accent-primary/20 text-app-accent-primary px-3 py-1 rounded-full border border-app-accent-primary/30">
                    {serviziData.option_wordpress.tag}
                  </span>
                  <Laptop className="text-app-accent-primary group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="font-sans text-3xl font-black text-white tracking-tighter uppercase">
                  {serviziData.option_wordpress.title}
                </h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  {serviziData.option_wordpress.description}
                </p>
              </div>
              <button
                onClick={() => onNavigate("/servizi")}
                className="w-fit font-sans font-black text-xs text-app-accent-primary uppercase tracking-tighter flex items-center gap-2 hover:gap-4 transition-all"
              >
                Configura ora <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div className="glass-morphism p-10 rounded-[40px] space-y-8 flex flex-col justify-between group hover:border-app-tertiary/30 transition-all">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] font-black tracking-wider uppercase bg-app-tertiary/20 text-app-tertiary px-3 py-1 rounded-full border border-app-tertiary/30">
                    {serviziData.option_custom_code.tag}
                  </span>
                  <CodeXml className="text-app-tertiary group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="font-sans text-3xl font-black text-white tracking-tighter uppercase">
                  {serviziData.option_custom_code.title}
                </h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  {serviziData.option_custom_code.description}
                </p>
              </div>
              <button
                onClick={() => onNavigate("/servizi")}
                className="w-fit font-sans font-black text-xs text-app-tertiary uppercase tracking-tighter flex items-center gap-2 hover:gap-4 transition-all"
              >
                Esplora il codice <ArrowRight size={16} />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="banner-cta" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-app-accent-primary to-app-accent-secondary rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(155,92,255,0.3)]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h3 className="font-sans text-4xl sm:text-6xl font-black tracking-tighter text-app-bg-main uppercase leading-[0.9]">
                Basta subire <br/> la tecnologia. <br/> Usala.
              </h3>
              <div className="pt-6 flex justify-center">
                <button
                  onClick={() => onNavigate("/contatti")}
                  className="font-sans font-black text-sm uppercase tracking-tighter bg-app-bg-main text-white px-12 py-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  Inizia il Dialogo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <CardPopup
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.title || ""}
        faqs={selectedCard?.faqs || []}
        onCtaClick={handleCtaClick}
      />

    </div>
  );
}
