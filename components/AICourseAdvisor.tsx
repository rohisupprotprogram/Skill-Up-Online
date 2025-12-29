
import React, { useState } from 'react';
import { getCourseAdvice } from '../services/geminiService';

export const AICourseAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const advice = await getCourseAdvice(query);
    setResponse(advice || '');
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-slate-200 flex flex-col max-h-[500px]">
          <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AI Skill Advisor
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto flex-1 bg-slate-50 min-h-[150px]">
            {response ? (
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-sm text-slate-700 leading-relaxed">
                {response}
              </div>
            ) : (
              <p className="text-sm text-slate-500 italic">How can I help you choose the best course for your career today?</p>
            )}
            {loading && (
              <div className="flex gap-2 mt-4">
                <div className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce delay-150"></div>
              </div>
            )}
          </div>
          <form onSubmit={handleAsk} className="p-4 border-t border-slate-200 bg-white">
            <div className="flex gap-2">
              <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Ask about our courses..." className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button disabled={loading} type="submit" className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all hover:bg-indigo-700 relative group">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Ask Course AI Advisor</span>
        </button>
      )}
    </div>
  );
};
