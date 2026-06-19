# Guida alla Gestione Immagini - FacilissimoWeb

Per caricare e aggiornare le immagini sul tuo sito utilizzando GitHub, segui questi passaggi semplici:

### 1. Caricamento fisico dei file
Tutte le immagini devono essere caricate nella cartella:
`public/assets/images/`

*   **Formati consigliati:** `.jpg` per fotografie, `.png` per trasparenze, `.svg` per loghi o illustrazioni.
*   **Ottimizzazione:** Cerca di mantenere il peso delle immagini sotto i 300KB per garantire un caricamento istantaneo.

### 2. Collegamento nel sito (Configurazione)
Una volta caricata l'immagine su GitHub, devi "dire" al sito di usarla. Apri il file:
`src/site-config.json`

Trova la sezione `"assets_manifest"` e aggiorna il percorso (`path`) corrispondente al blocco che desideri modificare.

Esempio per cambiare l'immagine della Home:
```json
"home_hero_image": {
  "path": "/assets/images/nuova_immagine.jpg",
  "alt": "Descrizione per accessibilità"
}
```

### 3. Blocchi disponibili nel Manifest
Ecco i nomi dei blocchi che puoi aggiornare nel file di configurazione:

*   `logo`: Il logo principale nella Navbar.
*   `profile_photo`: La tua foto nella pagina Chi Sono.
*   `home_hero_image`: L'immagine principale della Home (attualmente `fac1.jpg`).
*   `chi_sono_hero_image`: Immagine testata Chi Sono.
*   `servizi_hero_image`: Immagine testata Servizi.
*   `social_hero_image`: Immagine testata Social & Lead Gen.

### Come funziona nel Codice (Per tua conoscenza)
Il sito è programmato per essere "Data-Driven". Questo significa che i componenti React leggono automaticamente le informazioni dal file JSON:
*   La funzione `config.assets_manifest.NOME_BLOCCO.path` recupera il percorso.
*   Il componente applica automaticamente lo stile **Brutalist** (bordi neri netti, filtro grayscale al passaggio del mouse e dissolvenze coordinate con il colore di sfondo `#B1BCB7`).

---
*Nota: Se aggiungi un nuovo blocco che non esiste nel manifest, ricordati di aggiornare anche l'interfaccia `AssetsManifest` in `src/types.ts` per mantenere la validità del codice.*
