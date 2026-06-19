import { Cookie } from "lucide-react";

export default function CookieView() {
  return (
    <div id="cookie-policy-view" className="max-w-4xl mx-auto px-6 lg:px-12 pt-40 pb-24">
      <div className="bg-app-bg-main border-4 border-app-text-primary rounded-none p-8 md:p-16 space-y-12 text-app-text-primary">
        
        {/* Header */}
        <div className="border-b-4 border-app-text-primary pb-8 space-y-6">
          <div className="w-16 h-16 rounded-none bg-app-accent-orange text-app-text-primary border-2 border-app-text-primary flex items-center justify-center">
            <Cookie size={32} strokeWidth={3} />
          </div>
          <h1 className="font-sans text-4xl sm:text-6xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">Cookie <br/> Policy</h1>
          <p className="font-mono text-xs text-app-text-primary font-bold uppercase tracking-widest bg-app-accent-lime px-3 py-1 w-fit border-2 border-app-text-primary">
            Aggiornamento: 26 Maggio 2026
          </p>
        </div>

        {/* Informative block */}
        <div className="space-y-10 font-sans text-lg font-bold leading-tight uppercase">
          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">1. Filosofia</h3>
            <p>
              In ottemperanza ai principi dell’<strong>Umanesimo Digitale</strong>, questo sito web adotta una politica di massima trasparenza ed astensione totale dall’uso di tracciatori invasivi esterne, banner molesti, o cookie di profilazione di terze parti destinati alla rivendita pubblicitaria.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">2. Definizione</h3>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano all'interfaccia o browser del dispositivo dell'utente. Vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva o per abilitare funzioni basiche come la persistenza della navigazione selettiva o preferenze.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">3. Tipologie</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cookie Tecnici di Sessione:</strong> Strumenti essenziali per far funzionare correttamente la transizione delle pagine nel modulo asincrono, abilitare l'interazione mobile e salvare la preferenza del tuo scorrimento. Senza di essi l'applet non potrebbe caricarsi adeguatamente.
              </li>
              <li>
                <strong>Cookie Analitici Anonimizzati (Se abilitati):</strong> Strumenti per misurare la quantità di visite senza risalire mai all'identità specifica, utili unicamente ad ottimizzare la velocità di caricamento delle pagine.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">4. Gestione</h3>
            <p>
              L'utente può in qualsiasi momento bloccare o rimuovere i cookie agendo direttamente sulle impostazioni preferenziali del proprio browser. L'esclusione totale dei cookie tecnici potrebbe tuttavia compromettere la compilazione ottimale del questionario intelligente nella sezione "Contatti".
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
