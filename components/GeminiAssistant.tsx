
import React, { useState, useRef, useEffect } from 'react';
import { getTechnicalConsultation } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Shaquib Shaikh Technical. How can I assist with your facade engineering requirements today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading || error) return;

    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setIsLoading(true);

    const response = await getTechnicalConsultation(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'Error in communication.' }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-0 right-0 z-[100] transition-all duration-500 md:bottom-8 md:right-8 ${isOpen ? 'w-full h-full md:w-[450px] md:h-[600px]' : 'w-auto h-auto'}`}>
      {isOpen ? (
        <div className="w-full h-full glass-panel shadow-2xl flex flex-col md:rounded-2xl overflow-hidden border-t md:border border-blue-500/30">
          <div className="p-5 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-blue-500/5 backdrop-blur-md">
            <div>
              <h4 className="font-syncopate text-[10px] md:text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">SHAQUIB AI</h4>
              <p className="text-[9px] md:text-[10px] text-blue-500 font-bold uppercase">Technical Consultant</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-500 dark:text-zinc-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar bg-slate-50/50 dark:bg-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-xs md:text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-lg' 
                  : 'bg-white dark:bg-zinc-800/50 text-slate-700 dark:text-zinc-300 rounded-2xl rounded-tl-none border border-slate-200 dark:border-zinc-700 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800/50 p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-zinc-700 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-5 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-black">
            <div className="relative flex gap-3">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Technical inquiry..."
                className={`flex-1 bg-slate-100 dark:bg-zinc-900 border outline-none rounded-full py-4 px-6 text-sm text-slate-900 dark:text-white transition-all ${
                  error ? 'border-red-500' : 'border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-black'
                }`}
              />
              <button 
                type="submit" 
                disabled={isLoading || !query.trim()}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                  !query.trim() ? 'bg-slate-200 dark:bg-zinc-800 text-slate-400 dark:text-zinc-600' : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l7-7-7-7M5 12h14" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="m-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group z-[101]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
