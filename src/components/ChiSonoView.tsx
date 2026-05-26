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
    <div id="chisono-view" className="space-y-20 pb-16">
      
      {/* Hero Header */}
      <section id="chisono-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C9478]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase flex items-center gap-2"
            >
              <GraduationCap size={16} className="text-[#9C9478]" />
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
              Unisco il rigore accademico del design tradizionale alle performance atomiche dei sistemi digitali personalizzati. Zero compromessi sulla stabilità e sull'estetica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story (Il Rigore Accademico) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Story details */}
        <div className="lg:col-span-7 space-y-6 text-[#2D2B28]">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#454340] tracking-tight">
            La mia storia accademica e la mia passione informatica
          </h2>
          <p className="font-sans text-base leading-relaxed">
            Sono diplomata in <strong>grafica pubblicitaria</strong> e laureata in <strong>Comunicazione Visiva Multimediale</strong>. Il mio percorso professionale nasce sotto il segno della precisione tipografica, della teoria del colore, e del rigore compositivo tipico del design accademico italiano.
          </p>
          <p className="font-sans text-base leading-relaxed">
            Tuttavia, fin dai primi progetti, ho capito che una magnifica veste estetica è inconcludente senza una tecnologia performante che la sostenga. Questo mi ha spinto a immergermi con dedizione nello sviluppo software e nell’amministrazione di sistemi integrati.
          </p>
          <p className="font-sans text-base leading-relaxed">
            Oggi trasformo questa sinergia in strumenti concreti ed eleganti, lavorando con un unico dogma: <strong>ogni scelta visiva, funzionale o tecnologica deve essere supportata da una solida motivazione strategica</strong>. Non creo decorazioni, realizzo motori di conversione.
          </p>

          {/* Core Values pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <motion.div 
              id="chisono-pillar-compositivo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(117,109,82,0.3)" }}
              className="bg-[#E2DDD3]/50 border border-[#454340]/15 p-5 rounded-md space-y-2 shadow-[0_8px_16px_-4px_rgba(69,67,64,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(117,109,82,0.12)] transition-all duration-300"
            >
              <h4 className="font-sans font-bold text-[#454340] flex items-center gap-2">
                <Compass className="text-[#756D52]" size={18} />
                Il Rigore Compositivo
              </h4>
              <p className="font-sans text-xs text-[#2D2B28]/95 leading-relaxed">
                Il design non è decorazione fine a se stessa. È usabilità, psicologia percettiva applicata e architettura millimetrica delle informazioni.
              </p>
            </motion.div>
            
            <motion.div 
              id="chisono-pillar-semplificazione"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -6, borderColor: "rgba(117,109,82,0.3)" }}
              className="bg-[#E2DDD3]/50 border border-[#454340]/15 p-5 rounded-md space-y-2 shadow-[0_8px_16px_-4px_rgba(69,67,64,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(117,109,82,0.12)] transition-all duration-300"
            >
              <h4 className="font-sans font-bold text-[#454340] flex items-center gap-2">
                <Lightbulb className="text-[#756D52]" size={18} />
                Semplificazione Operativa
              </h4>
              <p className="font-sans text-xs text-[#2D2B28]/95 leading-relaxed">
                Rendo immediato, cristallino e perfettamente controllabile ciò che fino a ieri ti è sembrato ostile o inutilmente costoso da gestire.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Block & Accented Card */}
        <motion.div 
          id="chisono-philosophy-column"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="bg-[#E2DDD3] border border-[#756D52]/40 p-8 rounded-lg shadow-[0_15px_35px_-5px_rgba(117,109,82,0.12)] space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_24px_48px_-8px_rgba(117,109,82,0.18)]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#756D52]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3">
              <Heart className="text-[#756D52] fill-[#756D52]/25" size={24} />
              <h3 className="font-sans text-xl font-bold text-[#454340] tracking-tight">
                L’Umanesimo Digitale
              </h3>
            </div>
            
            <p className="font-sans text-sm text-[#2D2B28]/95 leading-relaxed">
              La tecnologia e l'Intelligenza Artificiale non devono intimidire le nostre attività commerciali locali. Devono invece sostenerci, offrendo schemi ordinati per vincere la complessità ordinaria quotidiana.
            </p>
            
            <p className="font-sans text-xs text-[#756D52] font-semibold leading-relaxed italic border-l-2 border-[#756D52] pl-3">
              "Umanesimo digitale significa rimettere le persone concrete al centro dei flussi di lavoro. La tecnologia è un servitore formidabile, non uno spauracchio."
            </p>

            <button
              id="chisono-conversational-cta"
              onClick={() => onNavigate("/contatti")}
              className="w-full mt-4 font-sans font-semibold text-xs tracking-wider uppercase bg-[#756D52] text-[#E2DDD3] py-3.5 rounded-md hover:bg-[#454340] text-center transition-all shadow-[0_10px_20px_-10px_rgba(117,109,82,0.4)] hover:shadow-none cursor-pointer block"
            >
              Inizia il Dialogo con Maria Teresa
            </button>
          </div>
        </motion.div>

      </section>

      {/* Target Audience Section */}
      <section className="bg-[#E2DDD3] border-y border-[#454340]/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs font-semibold text-[#756D52] tracking-widest uppercase">
              Il Mio Target Primario
            </span>
            <h2 className="font-sans text-3xl font-bold text-[#454340] tracking-tight">
              Mi rivolgo alla Microimprenditoria locale e online
            </h2>
            <p className="font-sans text-base text-[#2D2B28] leading-relaxed">
              Lavoro al fianco di artigiani, professionisti e piccole realtà locali digitalmente digiune o intimorite dai costi esorbitanti dell'informatica. Abbatto i muri del gergo specialistico per darti soluzioni trasparenti, concrete e soprattutto ad alto rendimento economico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <span className="font-sans font-extrabold text-[#756D52] text-3xl">Artigianato</span>
                <p className="font-sans text-xs text-[#2D2B28]/80 leading-relaxed">Siti vetrina e automazioni di cataloghi semplici.</p>
              </div>
              <div className="space-y-2">
                <span className="font-sans font-extrabold text-[#756D52] text-3xl">Consulenza</span>
                <p className="font-sans text-xs text-[#2D2B28]/80 leading-relaxed">Sistemi automatici per profilare i clienti e prenotare appuntamenti.</p>
              </div>
              <div className="space-y-2">
                <span className="font-sans font-extrabold text-[#756D52] text-3xl">Pillola Digitale</span>
                <p className="font-sans text-xs text-[#2D2B28]/80 leading-relaxed">Soluzioni in cloud native ed asincrone di facilissima gestione.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
