import { SiteConfig } from "../types";
import { GraduationCap, Sparkles, Compass, Lightbulb, HelpCircle, Heart } from "lucide-react";
import { motion } from "motion/react";

interface ChiSonoProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function ChiSonoView({ config, onNavigate }: ChiSonoProps) {
  const { components } = config;
  const heroData = components.hero.chi_sono_hero;

  return (
    <div id="chisono-view" className="space-y-0 pb-0">
      
      {/* Hero Header */}
      <section id="chisono-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden w-full bg-app-bg-main border-b-4 border-app-text-primary">
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
                  src={config.assets_manifest.chi_sono_hero_image.path}
                  alt={config.assets_manifest.chi_sono_hero_image.alt}
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
                <GraduationCap size={16} className="text-app-accent-purple" />
                {heroData.subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] uppercase"
              >
                {heroData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-app-text-primary leading-tight font-bold max-w-2xl"
              >
                Unisco il rigore accademico del design tradizionale alle performance atomiche dei sistemi digitali personalizzati. Zero compromessi sulla stabilità e sull'estetica.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section id="chisono-story" className="w-full bg-app-bg-main py-24 border-b-4 border-app-text-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Story details */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-app-text-primary"
          >
            <h2 className="font-sans text-4xl sm:text-5xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
              Storia Accademica <br/> Passione Informatica
            </h2>
            <div className="space-y-6 font-bold text-lg leading-tight">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-4 border-app-text-primary bg-app-text-primary mt-12">
              <motion.div 
                id="chisono-pillar-compositivo"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-app-accent-orange p-8 space-y-4 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0"
              >
                <h4 className="font-sans font-black text-app-text-primary text-xl uppercase tracking-tighter flex items-center gap-3">
                  <Compass className="text-app-text-primary" size={24} strokeWidth={3} />
                  Rigore Compositivo
                </h4>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
                  Il design non è decorazione. È usabilità, psicologia percettiva applicata e architettura millimetrica delle informazioni.
                </p>
              </motion.div>
              
              <motion.div 
                id="chisono-pillar-semplificazione"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-app-accent-green p-8 space-y-4"
              >
                <h4 className="font-sans font-black text-app-text-primary text-xl uppercase tracking-tighter flex items-center gap-3">
                  <Lightbulb className="text-app-text-primary" size={24} strokeWidth={3} />
                  Semplificazione
                </h4>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">
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
            <div className="bg-app-accent-purple text-white border-4 border-app-text-primary p-10 rounded-none space-y-8 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <Heart className="text-app-accent-lime fill-app-accent-lime" size={32} />
                <h3 className="font-sans text-3xl font-black text-white tracking-tighter uppercase leading-none">
                  Umanesimo Digitale
                </h3>
              </div>
              
              <p className="font-sans text-lg text-white font-bold leading-tight">
                La tecnologia e l'IA non devono intimidire. Devono invece sostenerci, offrendo schemi ordinati per vincere la complessità quotidiana.
              </p>
              
              <p className="font-sans text-base text-app-accent-lime font-black leading-tight italic border-l-4 border-app-accent-lime pl-4">
                "Umanesimo digitale significa rimettere le persone al centro. La tecnologia è un servitore formidabile."
              </p>

              <button
                id="chisono-conversational-cta"
                onClick={() => onNavigate("/contatti")}
                className="w-full mt-6 font-sans font-black text-sm tracking-tighter uppercase bg-app-accent-lime text-app-text-primary py-5 rounded-none border-4 border-app-text-primary hover:bg-white transition-all cursor-pointer block text-center"
              >
                Inizia il Dialogo
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Target Audience Section */}
      <section id="chisono-target" className="w-full bg-app-bg-main border-b-4 border-app-text-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <span className="font-mono text-xs font-bold text-app-text-primary tracking-widest uppercase bg-app-accent-orange px-3 py-1 border-2 border-app-text-primary">
              Target
            </span>
            <h2 className="font-sans text-4xl sm:text-6xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
              Microimprenditoria <br/> Locale e Online
            </h2>
            <p className="font-sans text-lg md:text-xl text-app-text-primary font-bold leading-tight max-w-3xl">
              Lavoro al fianco di artigiani e professionisti intimoriti dall'informatica. Abbatto i muri del gergo specialistico per darti soluzioni trasparenti, concrete e ad alto rendimento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary mt-12">
              <div className="bg-app-bg-main p-8 space-y-3 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0">
                <span className="font-sans font-black text-app-accent-purple text-3xl uppercase tracking-tighter">Artigianato</span>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">Siti vetrina e automazioni di cataloghi semplici.</p>
              </div>
              <div className="bg-app-bg-main p-8 space-y-3 border-app-text-primary sm:border-r-4 border-b-4 sm:border-b-0">
                <span className="font-sans font-black text-app-accent-green text-3xl uppercase tracking-tighter">Consulenza</span>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">Sistemi automatici per profilare i clienti e prenotare.</p>
              </div>
              <div className="bg-app-bg-main p-8 space-y-3">
                <span className="font-sans font-black text-app-accent-orange text-3xl uppercase tracking-tighter">Pillola Cloud</span>
                <p className="font-sans text-sm text-app-text-primary font-bold leading-tight">Soluzioni in cloud native ed asincrone di facilissima gestione.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
