import { useState, useEffect } from "react";
import { Sparkles, Send, X, MessageCircle, Mail, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { askGemini } from "../lib/gemini";
import emailjs from "@emailjs/browser";

interface Message {
  role: "user" | "ai" | "system";
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem("chat_messages");
    return saved ? JSON.parse(saved) : [
      { role: "ai", text: "Ciao! Sono l'assistente IA di FacilissimoWeb. Come posso aiutarti oggi con il tuo progetto digitale?" }
    ];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [lastUserMessage, setLastUserMessage] = useState("");

  // Persist messages to session storage
  useEffect(() => {
    sessionStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setLastUserMessage(userMessage);
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);
    setIsOffline(false);

    try {
      const aiResponse = await askGemini(userMessage);

      // Basic check for error message from our lib
      if (aiResponse.includes("errore nella comunicazione") || aiResponse.includes("riprova più tardi")) {
        throw new Error("Gemini API Failure");
      }

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Chat Failure:", error);
      setIsOffline(true);
      setMessages((prev) => [...prev, {
        role: "system",
        text: "L'assistente IA è momentaneamente offline per limiti di traffico. Posso inviare il tuo messaggio direttamente alla mail di Maria Teresa se desideri!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendOfflineEmail = async () => {
    setIsLoading(true);
    const templateParams = {
      name: "Utente Chat (Offline)",
      email: "chat-fallback@facilissimoweb.it",
      message: `MESSAGGIO DA CHAT OFFLINE:\n\n${lastUserMessage}`,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_e6y0dfs",
        "template_yjw349w",
        templateParams,
        "gVH02EFjxhWU26obx"
      );
      setMessages((prev) => [...prev, { role: "ai", text: "Ottimo! Ho inviato il tuo messaggio via email a Maria Teresa. Ti risponderà il prima possibile." }]);
      setIsOffline(false);
    } catch (err) {
      console.error("Fallback Email Error:", err);
      setMessages((prev) => [...prev, { role: "system", text: "Purtroppo anche l'invio email ha fallito. Per favore scrivi a mariateresarogani@gmail.com" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 w-80 sm:w-96 bg-app-bg-main border-4 border-app-text-primary rounded-none shadow-none overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-app-accent-purple p-4 text-white border-b-4 border-app-text-primary flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} strokeWidth={3} />
                <span className="font-sans font-black text-xs uppercase tracking-tighter">IA Strategico</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white hover:text-app-accent-purple p-1 transition-colors cursor-pointer">
                <X size={20} strokeWidth={3} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-white/30">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-none text-xs font-bold border-2 border-app-text-primary leading-tight uppercase ${
                      msg.role === "user"
                        ? "bg-app-accent-lime text-app-text-primary"
                        : msg.role === "system"
                        ? "bg-app-accent-orange text-app-text-primary"
                        : "bg-white text-app-text-primary"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {msg.role === "system" && <AlertCircle size={14} strokeWidth={3} className="shrink-0 mt-0.5" />}
                      <span>{msg.text}</span>
                    </div>

                    {msg.role === "system" && isOffline && (
                      <button
                        onClick={sendOfflineEmail}
                        className="mt-3 w-full bg-app-text-primary text-white py-2 rounded-none font-black text-[10px] uppercase flex items-center justify-center gap-2 hover:bg-white hover:text-app-text-primary transition-all border-2 border-app-text-primary cursor-pointer"
                      >
                        <Mail size={14} strokeWidth={3} />
                        Invia Email
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-none border-2 border-app-text-primary">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-app-text-primary rounded-none animate-bounce" />
                      <div className="w-2 h-2 bg-app-text-primary rounded-none animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-app-text-primary rounded-none animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t-4 border-app-text-primary bg-app-bg-main">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="CHIEDI..."
                  disabled={isLoading}
                  className="flex-grow bg-white border-2 border-app-text-primary rounded-none px-3 py-2 text-xs font-bold text-app-text-primary outline-none focus:bg-app-accent-lime/20 transition-colors disabled:opacity-50 uppercase"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-app-accent-green text-app-text-primary p-2 rounded-none border-2 border-app-text-primary hover:bg-white disabled:opacity-50 transition-colors cursor-pointer"
                >
                  <Send size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-app-accent-purple text-white p-4 rounded-none border-4 border-app-text-primary shadow-none hover:bg-app-accent-lime hover:text-app-text-primary transition-all duration-200 flex items-center justify-center group cursor-pointer"
      >
        {isOpen ? <X size={28} strokeWidth={3} /> : <MessageCircle size={28} strokeWidth={3} />}
      </button>
    </div>
  );
}
