import { SiteConfig } from "../types";
import { Laptop, Code, CheckCircle, ArrowRight, ShieldCheck, Zap, RotateCcw, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

interface ServiziViewProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function ServiziView({ config, onNavigate }: ServiziViewProps) {
  const { components } = config;
  const heroData = components.hero.servizi_hero;
  const detailData = components.sezione_servizi_dettaglio;

  return (
    <div id="servizi-view" className="space-y-20 pb-16">
      
      {/* Services Hero Header */}
      <section id="servizi-hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C9478]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm font-semibold text-[#756D52] tracking-widest uppercase flex items-center gap-2"
            >
              <Zap size={16} className="text-[#9C9478]" />
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
          </div>
        </div>
      </section>

      {/* Choice details Section web */}
      <section id="scelte-web" className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Choice 1: WordPress */}
          <div className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 md:p-10 space-y-8 flex flex-col justify-between shadow-sm relative group hover:border-[#756D52]/40 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider uppercase bg-[#756D52]/15 text-[#756D52] font-semibold px-3 py-1 rounded">
                  {detailData.option_wordpress.tag}
                </span>
                <Laptop className="text-[#756D52]" size={36} />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#454340]">
                  {detailData.option_wordpress.title}
                </h3>
                <p className="font-sans text-sm font-semibold text-[#756D52] italic">
                  {detailData.option_wordpress.subtitle}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#2D2B28]/95 leading-relaxed">
                {detailData.option_wordpress.description}
              </p>

              <div className="border-t border-[#454340]/10 pt-6 space-y-3">
                <h4 className="font-sans font-bold text-xs uppercase text-[#454340] tracking-widest mb-4">
                  Cosa Include:
                </h4>
                {detailData.option_wordpress.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-[#756D52] shrink-0 mt-0.5" size={16} />
                    <span className="font-sans text-sm text-[#2D2B28]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#454340]/5">
              <button
                id="select-wp-btn"
                onClick={() => onNavigate("/contatti")}
                className="w-full font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] py-4 rounded-md hover:bg-[#454340] text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Inizia con WordPress
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Choice 2: Custom Code */}
          <div className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 md:p-10 space-y-8 flex flex-col justify-between shadow-sm relative group hover:border-[#756D52]/40 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider uppercase bg-[#9C9478]/15 text-[#756D52] font-semibold px-3 py-1 rounded">
                  {detailData.option_custom_code.tag}
                </span>
                <Code className="text-[#756D52]" size={36} />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#454340]">
                  {detailData.option_custom_code.title}
                </h3>
                <p className="font-sans text-sm font-semibold text-[#756D52] italic">
                  {detailData.option_custom_code.subtitle}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#2D2B28]/95 leading-relaxed">
                {detailData.option_custom_code.description}
              </p>

              <div className="border-t border-[#454340]/10 pt-6 space-y-3">
                <h4 className="font-sans font-bold text-xs uppercase text-[#454340] tracking-widest mb-4">
                  Cosa Include:
                </h4>
                {detailData.option_custom_code.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-[#9C9478] shrink-0 mt-0.5" size={16} />
                    <span className="font-sans text-sm text-[#2D2B28]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#454340]/5">
              <button
                id="select-customcode-btn"
                onClick={() => onNavigate("/contatti")}
                className="w-full font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] py-4 rounded-md hover:bg-[#454340] text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Inizia con Codice Puro
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Trust factors or Process */}
      <section className="bg-[#E2DDD3] border-y border-[#454340]/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-sans text-2xl font-bold text-[#454340]">La Garanzia del Mio Approccio</h3>
            <p className="font-sans text-sm text-[#2D2B28] mt-2">Zero sorprese, massima trasparenza.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Compliance Totale</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Tutti i siti web includono policy legali native (Privacy e Cookie) graficamente allineate, senza widget che rompono il design.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <Zap size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Prestazioni Elevate</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Design super-leggerto. I punteggi di caricamento velocizzano il posizionamento SEO sui motori di ricerca.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <RotateCcw size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Aggiornamenti Semplici</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Database dei testi centralizzato. Se vuoi modificare un testo principale, lo facciamo in un solo punto aggiornato ovunque.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
