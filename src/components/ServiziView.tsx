import { SiteConfig } from "../types";
import { 
  Laptop, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  RotateCcw, 
  HelpCircle,
  Sparkles,
  BookOpen,
  Layout,
  Database
} from "lucide-react";
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
    <div id="servizi-view" className="space-y-0 pb-0">
      
      {/* Services Hero Header */}
      <section id="servizi-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#E2DDD3]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9C9478]/8 rounded-full blur-[130px] pointer-events-none" />
        
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
              Infrastrutture Web che Lavorano al Tuo Posto
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

      {/* Choice details Section web - DEEPER BACKGROUND (#D2C9B9) for layered color variation and contrast */}
      <section id="scelte-web" className="bg-[#D2C9B9] py-20 border-t border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-[#756D52] tracking-wider uppercase">
              La Scelta della Piattaforma
            </span>
            <h2 className="font-sans text-3xl font-bold text-[#454340] mt-1 tracking-tight">
              Seleziona la tua Filosofia di Sviluppo
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Choice 1: WordPress */}
            <motion.div 
              id="choice-card-wordpress"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 md:p-10 space-y-8 flex flex-col justify-between shadow-[0_15px_30px_rgba(45,43,40,0.08)] hover:shadow-[0_24px_48px_rgba(117,109,82,0.18)] transition-all duration-400 relative group"
            >
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
                  className="w-full font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] py-4 rounded-md hover:bg-[#454340] text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  Inizia con WordPress
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Choice 2: Custom Code */}
            <motion.div 
              id="choice-card-custom"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 md:p-10 space-y-8 flex flex-col justify-between shadow-[0_15px_30px_rgba(45,43,40,0.08)] hover:shadow-[0_24px_48px_rgba(117,109,82,0.18)] transition-all duration-400 relative group"
            >
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
                  className="w-full font-sans font-semibold text-sm uppercase tracking-wider bg-[#756D52] text-[#E2DDD3] py-4 rounded-md hover:bg-[#454340] text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  Inizia con Codice Puro
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AI INTEGRATIONS VALUE SHEETS (How AI accelerates development and optimization) */}
      <section className="bg-[#2D2B28] text-[#E2DDD3] py-20 border-y border-[#454340]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold text-[#A69978] tracking-widest uppercase block">
              Ingegnerizzazione del Lavoro
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#E2DDD3] tracking-tight">
              Sinergia Generativa: Come l'IA Potenzia ogni Progetto Web
            </h2>
            <p className="font-sans text-sm text-[#E2DDD3]/70 leading-relaxed">
              Grazie agli strumenti di IA ottimizziamo tempi di sviluppo, scrittura di copy strategici e interconnessioni di dati, garantendoti risultati professionali in metà tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Copywriting accelerato */}
            <div className="bg-[#2D2B28] border border-[#454340] p-8 rounded-lg space-y-4 shadow-sm hover:border-[#A69978]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <BookOpen size={18} />
              </div>
              <h3 className="font-sans font-bold text-[#E2DDD3] text-lg">Copywriting e Testi Persuasivi</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Niente paura di spendere settimane ad aspettare i testi. Tramite modelli linguistici avanzati guidati dal mio stampo di Comunicazione Visiva, generiamo testi impeccabili orientati alla conversione del tuo potenziale cliente.
              </p>
            </div>

            {/* Card 2: Layout & Asset Mockups */}
            <div className="bg-[#2D2B28] border border-[#454340] p-8 rounded-lg space-y-4 shadow-sm hover:border-[#A69978]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Layout size={18} />
              </div>
              <h3 className="font-sans font-bold text-[#E2DDD3] text-lg">Asset Grafici Generati Ad-Hoc</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Niente fotografie stock finte o spersonalizzate. Utilizziamo potenti generatori di immagini stabili per progettare icone vettoriali, sfondi custom coordinati e copertine professionali che rispecchiano i tuoi reali valori di brand locale.
              </p>
            </div>

            {/* Card 3: SEO Semantica Automatica */}
            <div className="bg-[#2D2B28] border border-[#454340] p-8 rounded-lg space-y-4 shadow-sm hover:border-[#A69978]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#A69978]/10 text-[#A69978] flex items-center justify-center">
                <Database size={18} />
              </div>
              <h3 className="font-sans font-bold text-[#E2DDD3] text-lg">Strutturazione e SEO Semantica</h3>
              <p className="font-sans text-xs text-[#E2DDD3]/80 leading-relaxed">
                Tutte le pagine web vengono indicizzate scansionando le intenzioni di ricerca reali dei tuoi clienti su Google. Gli algoritmi di IA strutturano tag ordinati, titoli ad alta pertinenza d'acquisto e schemi di dati semantici perfetti.
              </p>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <button
              id="cta-servizi-ai-learn"
              onClick={() => onNavigate("/contatti")}
              className="font-sans font-bold text-xs uppercase tracking-wider bg-[#E2DDD3] text-[#2D2B28] hover:bg-[#A69978] hover:text-[#2D2B28] px-6 py-3.5 rounded transition-all duration-300 cursor-pointer shadow-md"
            >
              Analizza la tua idea di business gratis
            </button>
          </div>

        </div>
      </section>

      {/* Trust factors or Process - Standard Bone Accent */}
      <section className="bg-[#E2DDD3] py-20 border-b border-[#454340]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#454340] tracking-tight">
              La Garanzia del Mio Approccio
            </h3>
            <p className="font-sans text-sm text-[#2D2B28]/90 mt-2">Zero sorprese, massima trasparenza.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Compliance Totale</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Tutti i siti web includono policy legali native (Privacy e Cookie) graficamente allineate, senza widget esterni invasivi che rompono il design.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <Zap size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Prestazioni Elevate</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Design super-leggero. I punteggi di caricamento velocizzano il posizionamento SEO sui motori di ricerca.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center mx-auto">
                <RotateCcw size={24} />
              </div>
              <h4 className="font-sans font-bold text-[#454340]">Aggiornamenti Semplici</h4>
              <p className="font-sans text-xs text-[#2D2B28]/85 leading-relaxed max-w-xs mx-auto">
                Database dei testi organizzato. Se vuoi modificare un testo principale, lo facciamo in un solo punto, aggiornato all'istante ovunque.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
