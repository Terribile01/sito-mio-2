import { Compass, MoveLeft } from "lucide-react";

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export default function NotFoundView({ onNavigate }: NotFoundProps) {
  return (
    <div id="notfound-page-view" className="max-w-xl mx-auto px-6 pt-40 pb-28 text-center space-y-8">
      
      {/* Icon */}
      <div className="w-20 h-20 rounded-full border-2 border-[#756D52] text-[#756D52] flex items-center justify-center mx-auto bg-[#E2DDD3] shadow-sm animate-pulse">
        <Compass size={40} className="stroke-[1.5]" />
      </div>

      {/* Copy elements */}
      <div className="space-y-3">
        <h1 className="font-sans text-4xl font-extrabold text-[#454340] tracking-tight">
          Sito in Costruzione o Pagina Non Trovata
        </h1>
        <p className="font-sans text-sm text-[#2D2B28]/90 leading-relaxed max-w-sm mx-auto">
          Sembra che tu ti sia perso nel labirinto digitale. Non preoccuparti, torniamo al sicuro.
        </p>
      </div>

      {/* Ghost Button CTA */}
      <div className="pt-4">
        <button
          id="back-home-404-btn"
          onClick={() => onNavigate("/")}
          className="inline-flex items-center gap-2.5 font-sans font-semibold text-xs tracking-wider uppercase border border-[#756D52] text-[#756D52] bg-transparent hover:bg-[#756D52]/10 px-6 py-3.5 rounded-md transition-all cursor-pointer"
        >
          <MoveLeft size={16} />
          Torna alla Home
        </button>
      </div>

    </div>
  );
}
