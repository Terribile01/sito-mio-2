import { Shield } from "lucide-react";

export default function PrivacyView() {
  return (
    <div id="privacy-policy-view" className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-20">
      <div className="bg-[#E2DDD3] border border-[#454340]/15 rounded-lg p-8 md:p-12 space-y-8 text-[#2D2B28]">
        
        {/* Header */}
        <div className="border-b border-[#454340]/10 pb-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#756D52]/10 text-[#756D52] flex items-center justify-center">
            <Shield size={24} />
          </div>
          <h1 className="font-sans text-3xl font-bold text-[#454340]">Informativa sulla Privacy Policy</h1>
          <p className="font-mono text-xs text-[#756D52] uppercase tracking-wider">
            Ultimo aggiornamento: 26 Maggio 2026 | Ai sensi del Regolamento UE 2016/679 (GDPR)
          </p>
        </div>

        {/* Informative block */}
        <div className="space-y-6 font-sans text-sm leading-relaxed">
          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">1. Titolare del Trattamento</h3>
            <p>
              Il titolare del trattamento dei dati personali raccolti attraverso questo sito web è <strong>FacilissimoWeb di Maria Teresa</strong>, contattabile direttamente all'indirizzo email indicato o mediante il modulo di contatto fornito all'interno della pagina "Contatti".
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">2. Tipologia di Dati Raccolti</h3>
            <p>
              I dati forniti direttamente dall'utente comprendono: Nome, Nome dell'attività lavorativa, indicazione del Servizio di interesse, indirizzo Email, recapito Telefonico e l'eventuale messaggio esplicativo del bisogno digitale. Questi dati vengono inseriti spontaneamente dall'utente tramite la compilazione dei form.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">3. Finalità del Trattamento</h3>
            <p>
              I tuoi dati vengono raccolti ed elaborati al solo scopo di studiare la fattibilità del tuo progetto digitale, profilare la richiesta prima dell'avvio della consulenza e consentire un contatto diretto. I dati non verranno ceduti a soggetti terzi o utilizzati per campagne pubblicitarie di massa non desiderate.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">4. Conservazione dei Dati</h3>
            <p>
              I dati personali inseriti nei moduli verranno conservati per il tempo strettamente necessario a completare l'attività di profilazione e l'eventuale instaurazione del rapporto professionale di sviluppo web o automazione. Nel caso in cui non si giunga ad un accordo, i dati inseriti verranno eliminati.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-sans font-bold text-[#454340] text-lg">5. Diritti dell'Interessato</h3>
            <p>
              Ai sensi della normativa vigente, l'utente può esercitare in qualsiasi momento i propri diritti, inclusi: il diritto di accesso, rettifica, cancellazione (oblio), opposizione al trattamento, blocco ed estrazione in formato leggibile delle proprie informazioni compilate. Per esercitare tali diritti, puoi contattarmi inviando un messaggio.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
