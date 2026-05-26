import { Cookie } from "lucide-react";

export default function CookieView() {
  return (
    <div id="cookie-policy-view" className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-20">
      <div className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 md:p-12 space-y-8 text-[#2D2B28]">
        
        {/* Header */}
        <div className="border-b border-[#454340]/10 pb-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center">
            <Cookie size={24} />
          </div>
          <h1 className="font-sans text-3xl font-bold text-[#454340]">Informativa sulla Cookie Policy</h1>
          <p className="font-mono text-xs text-[#756D52] uppercase tracking-wider">
            Ultimo aggiornamento: 26 Maggio 2026 | Rispetto della privacy e Consenso Consapevole
          </p>
        </div>

        {/* Informative block */}
        <div className="space-y-6 font-sans text-sm leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">1. Filosofia Minimale dei Tracciatori</h3>
            <p>
              In ottemperanza ai principi dell’<strong>Umanesimo Digitale</strong>, questo sito web adotta una politica di massima trasparenza ed astensione totale dall’uso di tracciatori invasivi esterne, banner molesti, o cookie di profilazione di terze parti destinati alla rivendita pubblicitaria.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">2. Cosa sono i Cookie</h3>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano all'interfaccia o browser del dispositivo dell'utente. Vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva o per abilitare funzioni basiche come la persistenza della navigazione selettiva o preferenze.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">3. Tipologie di Cookie Utilizzati</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cookie Tecnici di Sessione:</strong> Strumenti essenziali per far funzionare correttamente la transizione delle pagine nel modulo asincrono, abilitare l'interazione mobile e salvare la preferenza del tuo scorrimento. Senza di essi l'applet non potrebbe caricarsi adeguatamente.
              </li>
              <li>
                <strong>Cookie Analitici Anonimizzati (Se abilitati):</strong> Strumenti per misurare la quantità di visite senza risalire mai all'identità specifica, utili unicamente ad ottimizzare la velocità di caricamento delle pagine.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">4. Gestione e Disabilitazione dei Cookie</h3>
            <p>
              L'utente può in qualsiasi momento bloccare o rimuovere i cookie agendo direttamente sulle impostazioni preferenziali del proprio browser. L'esclusione totale dei cookie tecnici potrebbe tuttavia compromettere la compilazione ottimale del questionario intelligente nella sezione "Contatti".
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
