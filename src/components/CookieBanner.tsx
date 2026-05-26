import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CookieBannerProps {
  onNavigate: (path: string) => void;
}

export default function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem("facilissimoweb_cookie_consent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("facilissimoweb_cookie_consent", "accettato");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("facilissimoweb_cookie_consent", "rifiutato");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="cookie-consent-bar"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-40 bg-[#E2DDD3] border border-[#756D52]/30 text-[#2D2B28] p-5 rounded-lg shadow-[0_10px_25px_rgba(45,43,40,0.15)] space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center shrink-0 mt-0.5">
              <Cookie size={16} />
            </div>
            <div className="space-y-1">
              <h5 className="font-sans font-bold text-[#454340] text-sm">Consenso Informato ed Etico</h5>
              <p className="font-sans text-xs text-[#2D2B28]/95 leading-relaxed">
                Uso solo cookie tecnici minimali ed anonimi per ottimizzare la stabilità del sito e raccogliere le tue risposte strategiche nel modulo di contatto, in piena sintonia con l'<strong>Umanesimo Digitale</strong>.
              </p>
            </div>
            <button
              id="cookie-dismiss-btn"
              onClick={handleDecline}
              className="text-[#2D2B28]/60 hover:text-[#2D2B28] shrink-0 p-1 focus:outline-none cursor-pointer"
              aria-label="Chiudi"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 pt-1">
            <button
              id="cookie-read-policy"
              onClick={() => {
                onNavigate("/cookie");
                setShow(false);
              }}
              className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#756D52] hover:text-[#454340] transition-colors cursor-pointer"
            >
              Leggi la Policy
            </button>
            <div className="flex gap-2">
              <button
                id="cookie-decline-btn"
                onClick={handleDecline}
                className="font-sans font-semibold text-[10px] uppercase tracking-wider border border-[#756D52] px-3 py-1.5 rounded text-[#756D52] hover:bg-[#756D52]/15 transition-colors cursor-pointer"
              >
                Rifiuta
              </button>
              <button
                id="cookie-accept-btn"
                onClick={handleAccept}
                className="font-sans font-semibold text-[10px] uppercase tracking-wider bg-[#756D52] px-4 py-1.5 rounded text-[#E2DDD3] hover:bg-[#454340] transition-colors cursor-pointer"
              >
                Accetta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
