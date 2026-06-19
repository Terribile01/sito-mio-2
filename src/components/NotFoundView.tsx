import { Compass, MoveLeft } from "lucide-react";

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export default function NotFoundView({ onNavigate }: NotFoundProps) {
  return (
    <div id="notfound-page-view" className="max-w-xl mx-auto px-6 pt-40 pb-28 text-center space-y-8">
      
      {/* Icon */}
      <div className="w-24 h-24 rounded-none border-4 border-app-text-primary text-app-text-primary flex items-center justify-center mx-auto bg-app-accent-orange shadow-none animate-pulse">
        <Compass size={48} strokeWidth={3} />
      </div>

      {/* Copy elements */}
      <div className="space-y-6">
        <h1 className="font-sans text-5xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">
          Pagina <br/> Non Trovata
        </h1>
        <p className="font-sans text-lg text-app-text-primary font-bold uppercase leading-tight max-w-sm mx-auto">
          Ti sei perso nel labirinto digitale. Torniamo al sicuro.
        </p>
      </div>

      {/* Ghost Button CTA */}
      <div className="pt-8">
        <button
          id="back-home-404-btn"
          onClick={() => onNavigate("/")}
          className="inline-flex items-center gap-3 font-sans font-black text-sm tracking-tighter uppercase border-4 border-app-text-primary text-app-text-primary bg-app-accent-lime px-10 py-5 rounded-none transition-all cursor-pointer hover:bg-white"
        >
          <MoveLeft size={20} strokeWidth={3} />
          Torna alla Home
        </button>
      </div>

    </div>
  );
}
