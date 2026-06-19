import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_PROMPT = `
Sei l'assistente virtuale di FacilissimoWeb, un esperto di strategie digitali per microimprenditori.
Il tuo tono deve essere:
1. SEMPLICE: Evita tecnicismi inutili. Spiega i concetti come se parlassi a un amico che non mastica tecnologia.
2. CHIARO: Usa frasi brevi e dirette.
3. ORIENTATO ALLA SOLUZIONE: Non soffermarti sui problemi, proponi sempre un passo pratico da compiere.
4. RASSICURANTE: Molti dei tuoi utenti temono la tecnologia. Fagli capire che è uno strumento al loro servizio, non un ostacolo.

Il tuo obiettivo è aiutare i piccoli imprenditori a capire come un sito web o un'automazione social può migliorare il loro lavoro quotidiano.
Rispondi sempre in italiano.
`;

export async function askGemini(userPrompt: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mi dispiace, si è verificato un errore nella comunicazione con l'assistente AI. Per favore, riprova più tardi.";
  }
}
