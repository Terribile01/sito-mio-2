import { Shield } from "lucide-react";

export default function PrivacyView() {
  return (
    <div id="privacy-policy-view" className="max-w-4xl mx-auto px-6 lg:px-12 pt-40 pb-24">
      <div className="bg-app-bg-main border-4 border-app-text-primary rounded-none p-8 md:p-16 space-y-12 text-app-text-primary">
        
        {/* Header */}
        <div className="border-b-4 border-app-text-primary pb-8 space-y-6">
          <div className="w-16 h-16 rounded-none bg-app-accent-purple text-white border-2 border-app-text-primary flex items-center justify-center">
            <Shield size={32} strokeWidth={3} />
          </div>
          <h1 className="font-sans text-3xl sm:text-6xl font-black text-app-text-primary tracking-tighter uppercase leading-[0.9]">Privacy <br/> Policy</h1>
          <p className="font-mono text-xs text-app-text-primary font-bold uppercase tracking-widest bg-app-accent-lime px-3 py-1 w-fit border-2 border-app-text-primary">
            Aggiornamento: 26 Maggio 2026
          </p>
        </div>

        {/* Informative block */}
        <div className="space-y-10 font-sans text-lg font-bold leading-tight uppercase">
          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">1. Titolare</h3>
            <p>
              Il titolare del trattamento dei dati personali raccolti attraverso questo sito web è <strong>FacilissimoWeb di Maria Teresa</strong>, contattabile direttamente all'indirizzo email indicato o mediante il modulo di contatto fornito all'interno della pagina "Contatti".
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">2. Dati Raccolti</h3>
            <p>
              I dati forniti direttamente dall'utente comprendono: Nome, Nome dell'attività lavorativa, indicazione del Servizio di interesse, indirizzo Email, recapito Telefonico e l'eventuale messaggio esplicativo del bisogno digitale. Questi dati vengono inseriti spontaneamente dall'utente tramite la compilazione dei form.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">3. Finalità</h3>
            <p>
              I tuoi dati vengono raccolti ed elaborati al solo scopo di studiare la fattibilità del tuo progetto digitale, profilare la richiesta prima dell'avvio della consulenza e consentire un contatto diretto. I dati non verranno ceduti a soggetti terzi o utilizzati per campagne pubblicitarie di massa non desiderate.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">4. Conservazione</h3>
            <p>
              I dati personali inseriti nei moduli verranno conservati per il tempo strettamente necessario a completare l'attività di profilazione e l'eventuale instaurazione del rapporto professionale di sviluppo web o automazione. Nel caso in cui non si giunga ad un accordo, i dati inseriti verranno eliminati.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans font-black text-app-text-primary text-2xl tracking-tighter border-b-2 border-app-text-primary/10 w-fit">5. Diritti</h3>
            <p>
              Ai sensi della normativa vigente, l'utente può esercitare in qualsiasi momento i propri diritti, inclusi: il diritto di accesso, rettifica, cancellazione (oblio), opposizione al trattamento, blocco ed estrazione in formato leggibile delle proprie informazioni compilate. Per esercitare tali diritti, puoi contattarmi inviando un messaggio.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
