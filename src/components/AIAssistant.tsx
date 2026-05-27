import { useState } from "react";
import { Sparkles, Send, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { askGemini } from "../lib/gemini";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Ciao! Sono l'assistente IA di FacilissimoWeb. Come posso aiutarti oggi con il tuo progetto digitale?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await askGemini(userMessage);
    setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    setIsLoading(false);
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
                        : "bg-app-accent-khaki/20 text-app-text-30 rounded-bl-none border border-app-accent-khaki/10"
                    }`}
                  >
                    {msg.text}
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
                  className="flex-grow bg-app-bg-60 border border-app-accent-charcoal/20 rounded px-3 py-2 text-xs text-app-text-30 outline-none focus:border-app-accent-olive transition-colors"
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
