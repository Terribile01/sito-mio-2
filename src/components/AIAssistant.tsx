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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 bg-app-bg-60 border border-app-accent-charcoal/20 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-app-accent-olive p-4 text-app-bg-60 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-sans font-bold text-sm">Assistente IA Strategico</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-app-bg-60/10 p-1 rounded transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-app-bg-60/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-app-accent-olive text-app-bg-60 rounded-br-none"
                        : msg.role === "system"
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-app-accent-khaki/20 text-app-text-30 rounded-bl-none border border-app-accent-khaki/10"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {msg.role === "system" && <AlertCircle size={14} className="shrink-0 mt-0.5" />}
                      <span>{msg.text}</span>
                    </div>

                    {msg.role === "system" && isOffline && (
                      <button
                        onClick={sendOfflineEmail}
                        className="mt-3 w-full bg-amber-600 text-white py-2 rounded font-bold flex items-center justify-center gap-2 hover:bg-amber-700 transition-colors"
                      >
                        <Mail size={14} />
                        Invia via Email
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-app-accent-khaki/20 p-3 rounded-lg rounded-bl-none border border-app-accent-khaki/10">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-app-accent-olive rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-app-accent-olive rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-app-accent-olive rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-app-accent-charcoal/10 bg-app-bg-60">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Chiedimi della strategia web..."
                  disabled={isLoading}
                  className="flex-grow bg-app-bg-60 border border-app-accent-charcoal/20 rounded px-3 py-2 text-xs text-app-text-30 outline-none focus:border-app-accent-olive transition-colors disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-app-accent-olive text-app-bg-60 p-2 rounded hover:bg-app-accent-charcoal disabled:opacity-50 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-app-accent-olive text-app-bg-60 p-4 rounded-full shadow-lg hover:bg-app-accent-charcoal transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />}
      </button>
    </div>
  );
}
