import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { FAQ } from "../types";

export const GlowCircle = ({ color, size, top, left, delay }: { color: string, size: string, top: string, left: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    transition={{ duration: 2, delay }}
    className={`absolute rounded-full blur-[120px] animate-pulse-glow z-0 pointer-events-none`}
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top,
      left,
    }}
  />
);

export const renderSplitTitle = (title: string, primaryColor: string = "#FFFFFF", secondaryColor: string = "#9B5CFF") => {
  if (!title) return null;

  // Split by '|' to define color groups.
  // If no '|' is present, the whole title will be in the primary color.
  const parts = title.split("|");

  return parts.map((part, index) => {
    const color = index % 2 === 0 ? primaryColor : secondaryColor;

    // Split by '<br />' for manual line breaks
    const lines = part.split("<br />");

    return (
      <span key={index} style={{ color }}>
        {lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  });
};

interface CardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  faqs: FAQ[];
  onCtaClick: () => void;
}

export const CardPopup = ({ isOpen, onClose, title, faqs, onCtaClick }: CardPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-app-bg-main/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-app-bg-dark border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-app-bg-dark/80 backdrop-blur-md z-10">
              <h3 className="font-sans text-2xl font-black text-app-accent-slime uppercase tracking-tighter">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-app-accent-slime/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle size={14} className="text-app-accent-slime" />
                    </div>
                    <h4 className="font-sans font-bold text-white text-lg leading-tight">
                      {faq.question}
                    </h4>
                  </div>
                  <p className="font-sans text-white/70 text-sm leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer / CTA */}
            <div className="p-6 md:p-8 border-t border-white/10 bg-app-bg-dark/50">
              <button
                onClick={() => {
                  onCtaClick();
                  onClose();
                }}
                className="w-full font-sans font-black text-sm uppercase tracking-tighter bg-app-accent-slime text-app-bg-main px-8 py-5 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(171,247,16,0.4)] flex items-center justify-center gap-3 cursor-pointer"
              >
                Inizia la Profilazione
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
