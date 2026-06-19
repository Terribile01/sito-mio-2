import { SiteConfig } from "../types";
import { GraduationCap, Compass, Lightbulb, Heart } from "lucide-react";
import { motion } from "motion/react";
import { GlowCircle, renderSplitTitle } from "./ThemeElements";

interface ChiSonoProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function ChiSonoView({ config, onNavigate }: ChiSonoProps) {
  const { components } = config;
  const heroData = components.hero.chi_sono_hero;

  return (
    <div id="chisono-view" className="relative space-y-0 pb-0 bg-app-bg-main overflow-hidden">
      
      {/* Background Glows */}
      <GlowCircle color="#9B5CFF" size="400px" top="-100px" left="-100px" delay={0} />
      <GlowCircle color="#00F5FF" size="300px" top="20%" left="80%" delay={1} />

      {/* Hero Header */}
      <section id="chisono-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden w-full z-10">
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
                  src={config.assets_manifest.chi_sono_hero_image.path}
                  alt={config.assets_manifest.chi_sono_hero_image.alt}
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
                <GraduationCap size={16} />
                {heroData.subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase break-words"
              >
                {renderSplitTitle(heroData.title)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-app-text-primary leading-relaxed font-bold max-w-2xl smart-text"
              >
                Unisco il rigore accademico del design tradizionale alle performance atomiche dei sistemi digitali personalizzati. Zero compromessi sulla stabilità e sull'estetica.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section id="chisono-story" className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Story details */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-white/80"
          >
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle("Storia Accademica Passione Informatica")}
            </h2>
            <div className="space-y-6 text-lg leading-tight">
              <p>
                Sono diplomata in <strong>grafica pubblicitaria</strong> e laureata in <strong>Comunicazione Visiva Multimediale</strong>. Il mio percorso nasce sotto il segno della precisione tipografica e del rigore compositivo.
              </p>
              <p>
                Ho capito subito che una magnifica veste estetica è inconcludente senza una tecnologia performante. Questo mi ha spinto a immergermi nello sviluppo software.
              </p>
              <p>
                Lavoro con un unico dogma: <strong>ogni scelta deve avere una solida motivazione strategica</strong>. Non creo decorazioni, realizzo motori di conversione.
              </p>
            </div>

            {/* Core Values pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <motion.div 
                id="chisono-pillar-compositivo"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-morphism p-8 space-y-4 rounded-3xl"
              >
                <h4 className="font-sans font-black text-white text-xl uppercase tracking-tighter flex items-center gap-3">
                  <Compass className="text-app-accent-secondary" size={24} />
                  Rigore Compositivo
                </h4>
                <p className="font-sans text-sm text-white/60 leading-tight">
                  Il design non è decorazione. È usabilità, psicologia percettiva applicata e architettura millimetrica delle informazioni.
                </p>
              </motion.div>
              
              <motion.div 
                id="chisono-pillar-semplificazione"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-morphism p-8 space-y-4 rounded-3xl"
              >
                <h4 className="font-sans font-black text-white text-xl uppercase tracking-tighter flex items-center gap-3">
                  <Lightbulb className="text-app-tertiary" size={24} />
                  Semplificazione
                </h4>
                <p className="font-sans text-sm text-white/60 leading-tight">
                  Rendo immediato, cristallino e perfettamente controllabile ciò che fino a ieri ti è sembrato ostile o inutilmente costoso.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Philosophy Block & Accented Card */}
          <motion.div 
            id="chisono-philosophy-column"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="glass-morphism p-10 rounded-[40px] space-y-8 relative overflow-hidden border-app-accent-primary/20">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-app-accent-primary/20 rounded-full blur-3xl" />

              <div className="flex items-center gap-4 relative z-10">
                <Heart className="text-app-accent-primary fill-app-accent-primary" size={32} />
                <h3 className="font-sans text-3xl font-black text-white tracking-tighter uppercase leading-none">
                  Umanesimo Digitale
                </h3>
              </div>
              
              <p className="font-sans text-lg text-white/80 leading-tight relative z-10">
                La tecnologia e l'AI non devono intimidire. Devono invece sostenerci, offrendo schemi ordinati per vincere la complessità quotidiana.
              </p>
              
              <p className="font-sans text-base text-app-tertiary font-black leading-tight italic border-l-4 border-app-tertiary pl-4 relative z-10">
                "Umanesimo digitale significa rimettere le persone al centro. La tecnologia è un servitore formidabile."
              </p>

              <button
                id="chisono-conversational-cta"
                onClick={() => onNavigate("/contatti")}
                className="w-full mt-6 relative z-10 font-sans font-black text-sm tracking-tighter uppercase bg-app-accent-primary text-app-bg-main py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(155,92,255,0.4)] cursor-pointer block text-center"
              >
                Inizia il Dialogo
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Target Audience Section */}
      <section id="chisono-target" className="w-full py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <span className="font-mono text-xs font-bold text-app-tertiary tracking-widest uppercase block mb-2">
              Target
            </span>
            <h2 className="font-sans text-3xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {renderSplitTitle("Microimprenditoria Locale e Online")}
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/70 leading-tight max-w-3xl">
              Lavoro al fianco di artigiani e professionisti intimoriti dall'informatica. Abbatto i muri del gergo specialistico per darti soluzioni trasparenti, concrete e ad alto rendimento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="glass-morphism p-8 space-y-3 rounded-3xl">
                <span className="font-sans font-black text-app-accent-primary text-3xl uppercase tracking-tighter">Artigianato</span>
                <p className="font-sans text-sm text-white/60 leading-tight">Siti vetrina e automazioni di cataloghi semplici.</p>
              </div>
              <div className="glass-morphism p-8 space-y-3 rounded-3xl">
                <span className="font-sans font-black text-app-tertiary text-3xl uppercase tracking-tighter">Consulenza</span>
                <p className="font-sans text-sm text-white/60 leading-tight">Sistemi automatici per profilare i clienti e prenotare.</p>
              </div>
              <div className="glass-morphism p-8 space-y-3 rounded-3xl">
                <span className="font-sans font-black text-app-accent-secondary text-3xl uppercase tracking-tighter">Pillola Cloud</span>
                <p className="font-sans text-sm text-white/60 leading-tight">Soluzioni in cloud native ed asincrone di facilissima gestione.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
