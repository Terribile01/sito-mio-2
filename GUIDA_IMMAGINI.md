# Guida alla Gestione Immagini - FacilissimoWeb (Neon Dark Mode)

Per caricare e aggiornare le immagini sul tuo sito utilizzando GitHub, segui questi passaggi semplici:

### 1. Caricamento fisico dei file
Tutte le immagini devono essere caricate nella cartella:
`public/assets/images/`

*   **Formati consigliati:** `.jpg` per fotografie, `.png` per trasparenze (come il logo PNRR), `.svg` per icone.
*   **Ottimizzazione:** Cerca di mantenere il peso delle immagini sotto i 300KB per garantire un caricamento istantaneo e fluido.

### 2. Collegamento nel sito (Configurazione)
Una volta caricata l'immagine su GitHub, devi "dire" al sito di usarla. Apri il file:
`src/site-config.json`

Trova la sezione `"assets_manifest"` e aggiorna il percorso (`path`) corrispondente al blocco che desideri modificare.

Esempio per cambiare l'immagine della sezione PNRR:
```json
"pnrr_hero": {
  "path": "/assets/images/nuova_foto_tecnologia.jpg",
  "alt": "Innovazione Digitale PNRR"
}
```

### 3. Blocchi disponibili nel Manifest
Ecco i nomi dei blocchi principali che puoi aggiornare:

*   `logo`: Il logo principale nella Navbar.
*   `home_hero_image`: L'immagine principale della Home (con effetto neon).
*   `pnrr_badge`: Il logo istituzionale PNRR (nella nuova sezione).
*   `pnrr_hero`: L'immagine a destra nel blocco PNRR.
*   `profile_photo`: La tua foto nella pagina Chi Sono.

### Come funziona nel Codice (Logica Tecnica)
Il sito utilizza un'architettura **Data-Driven**. I componenti leggono il file JSON e applicano dinamicamente gli stili del tema Neon:
*   **Percorsi:** Gestiti tramite `config.assets_manifest.NOME_BLOCCO.path`.
*   **Effetti Visivi:** Le immagini applicano automaticamente le classi CSS definite in `src/index.css` come:
    *   `.img-neon-tint-cyan`: Per dare quel tono "elettrico" alle foto.
    *   `.logo-pnrr-filter`: Per rendere i loghi bianchi e luminosi su sfondo scuro.
*   **UX:** Il layout è ottimizzato con *glassmorphism* e gradienti per assicurare che il testo sia sempre leggibile sopra le immagini.

---
*Nota: Se aggiungi un nuovo asset, assicurati di aggiungerlo anche in `src/types.ts` per evitare errori di compilazione TypeScript.*
