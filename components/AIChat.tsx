
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Olá! Sou o assistente do Luiz. Em que posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const aiResponse = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-80 h-96 flex flex-col shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-zinc-800 p-4 flex justify-between items-center">
            <span className="font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Suporte Luiz Amorim
            </span>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-zinc-100 text-black rounded-tr-none' : 'bg-zinc-800 text-white rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-xl rounded-tl-none text-xs animate-pulse">Luiz está digitando...</div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-zinc-800 flex gap-2">
            <input 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Sua dúvida..."
              className="flex-1 bg-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-whatsapp text-white"
            />
            <button 
              onClick={handleSend}
              className="bg-whatsapp text-black p-2 rounded-lg hover:opacity-90"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2 group border border-zinc-700"
        >
          <span className="hidden group-hover:block text-sm font-medium transition-all">Dúvidas?</span>
          <i className="fa-solid fa-robot text-xl"></i>
        </button>
      )}
    </div>
  );
};

export default AIChat;
