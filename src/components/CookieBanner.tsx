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
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-40 bg-app-bg-main border-4 border-app-text-primary text-app-text-primary p-6 rounded-none shadow-none space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center shrink-0">
              <Cookie size={20} strokeWidth={3} />
            </div>
            <div className="space-y-2">
              <h5 className="font-sans font-black text-app-text-primary text-lg uppercase tracking-tighter leading-none">Cookie Policy</h5>
              <p className="font-sans text-xs font-bold leading-tight uppercase">
                Uso solo cookie tecnici minimali ed anonimi per ottimizzare la stabilità del sito e raccogliere le tue risposte strategiche.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex gap-2">
              <button
                id="cookie-accept-btn"
                onClick={handleAccept}
                className="flex-1 font-sans font-black text-xs uppercase tracking-tighter bg-app-accent-green border-2 border-app-text-primary px-4 py-3 rounded-none text-app-text-primary hover:bg-white transition-all cursor-pointer"
              >
                Accetta Tutto
              </button>
              <button
                id="cookie-decline-btn"
                onClick={handleDecline}
                className="flex-1 font-sans font-black text-xs uppercase tracking-tighter bg-app-accent-purple border-2 border-app-text-primary px-4 py-3 rounded-none text-white hover:bg-white hover:text-app-text-primary transition-all cursor-pointer"
              >
                Rifiuta
              </button>
            </div>
            <button
              id="cookie-read-policy"
              onClick={() => {
                onNavigate("/cookie");
                setShow(false);
              }}
              className="font-sans text-[10px] font-black uppercase tracking-widest text-app-text-primary hover:text-app-accent-orange transition-colors cursor-pointer text-center underline"
            >
              Leggi la Policy Completa
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
