
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

  useEffect(() => {
    if (query.length > 500) {
      setError("Maximum query length reached (500 chars)");
    } else {
      setError(null);
    }
  }, [query]);

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
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="w-[350px] md:w-[450px] h-[600px] glass-panel shadow-2xl flex flex-col border border-blue-500/30">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-blue-500/10">
            <div>
              <h4 className="font-syncopate text-xs font-bold text-white uppercase tracking-widest">SHAQUIB AI</h4>
              <p className="text-[10px] text-blue-400">Engineering Consultant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-l-lg rounded-tr-lg' : 'bg-zinc-800/50 text-zinc-300 rounded-r-lg rounded-tl-lg border border-zinc-700'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about U-values, wind loads..."
                className={`w-full bg-zinc-900 border outline-none rounded-sm py-3 px-4 text-sm text-white pr-12 transition-all ${
                  error ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-blue-500'
                }`}
              />
              <button 
                type="submit" 
                disabled={!!error || !query.trim()}
                className={`absolute right-2 top-2 p-1.5 transition-colors ${
                  error || !query.trim() ? 'text-zinc-700' : 'text-blue-500 hover:text-blue-400'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {error && <p className="text-[9px] text-red-500 mt-2 uppercase tracking-tighter">{error}</p>}
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center text-white hover:scale-110 transition-transform group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
