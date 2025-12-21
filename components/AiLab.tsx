import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { generateStrategyInsight, getChatResponse, resetChatSession } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Send, Zap, MessageCircle, ArrowRight, Loader2 } from 'lucide-react';

interface AiLabProps {
  lang: Language;
}

const AiLab: React.FC<AiLabProps> = ({ lang }) => {
  // Strategy Sim State
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('Beverage');
  const [customCategory, setCustomCategory] = useState('');
  const [strategyResult, setStrategyResult] = useState<string | null>(null);
  const [isSimLoading, setIsSimLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Chat State
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: lang === Language.KO
        ? "안녕하세요! Fu Lu Shou의 AI 파트너입니다. 캄보디아 시장 진출이나 저희의 유통망에 대해 궁금한 점이 있으신가요?"
        : "Hello! I am Fu Lu Shou's AI Partner. Do you have any questions about entering the Cambodian market or our distribution network?"
    }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);


  // Reset chat on language change
  useEffect(() => {
    resetChatSession();
    setChatHistory([{
      id: `init-${lang}`,
      role: 'model',
      text: lang === Language.KO
        ? "안녕하세요! Fu Lu Shou의 AI 파트너입니다. 캄보디아 시장 진출이나 저희의 유통망에 대해 궁금한 점이 있으신가요?"
        : "Hello! I am Fu Lu Shou's AI Partner. Do you have any questions about entering the Cambodian market or our distribution network?"
    }]);
  }, [lang]);

  // Scroll to bottom of chat
  useEffect(() => {
    // Only scroll if we have more than the initial message to prevent page jumping on load
    if (chatHistory.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [chatHistory, isChatLoading]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleGenerateStrategy = async () => {
    if (!product) return;
    setIsSimLoading(true);
    setStrategyResult(null);

    const finalCategory = category === 'Other' ? customCategory : category;

    const result = await generateStrategyInsight(product, finalCategory, lang);
    setStrategyResult(result);
    setIsSimLoading(false);
    setIsModalOpen(true);
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: chatInput };
    setChatHistory(prev => [...prev, userMsg]);
    setChatInput('');
    setIsChatLoading(true);

    const historyContext = chatHistory.map(msg => `${msg.role === 'user' ? 'User' : 'Mr. Bae'}: ${msg.text}`).join('\n');
    const responseText = await getChatResponse(userMsg.text, historyContext, lang);
    const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };

    setChatHistory(prev => [...prev, aiMsg]);
    setIsChatLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <section id="ai-lab" className="py-24 bg-stone-50 relative">
      {/* Background Decoration Wrapper - Clips ONLY the bg elements, not the content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles size={400} className="text-amber-500" />
        </div>
      </div>

      {/* Result Modal - Global Overlay */}
      {isModalOpen && strategyResult && (
        <div className="fixed inset-0 z-50">
          {/* Desktop Overlay Background (Hidden on Mobile) */}
          <div className="hidden lg:block absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>

          {/* 
             MOBILE: fixed inset-0 overflow-y-auto bg-white z-50 (Behaves like a new page)
             DESKTOP: fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none
          */}
          <div className="fixed inset-0 z-50 lg:flex lg:items-center lg:justify-center overflow-y-auto lg:overflow-visible bg-white lg:bg-transparent">

            {/* Card Container - Mobile: min-h-full, Desktop: Card */}
            <div className="min-h-full lg:min-h-0 w-full lg:w-auto lg:max-w-4xl lg:h-auto lg:max-h-[90vh] bg-white lg:rounded-[2rem] shadow-none lg:shadow-2xl flex flex-col relative pointer-events-auto">

              {/* Header - Sticky on Mobile */}
              <div className="sticky top-0 left-0 right-0 z-10 p-4 lg:p-6 bg-white/95 backdrop-blur border-b border-stone-100 flex justify-between items-center shadow-sm lg:shadow-none lg:bg-stone-900 lg:text-white lg:rounded-t-[2rem]">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-amber-500 lg:text-amber-400 w-5 h-5 lg:w-6 lg:h-6" />
                  <h3 className="font-bold text-lg lg:text-xl text-stone-900 lg:text-white">
                    {lang === Language.KO ? '전략 시뮬레이션 결과' : 'Strategy Simulation Result'}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-stone-100 hover:bg-stone-200 lg:bg-stone-800 lg:hover:bg-stone-700 rounded-full transition-colors"
                >
                  {/* Close Icon (X) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stone-500 lg:text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Content - Flows naturally on mobile, scrolls internally on desktop */}
              <div className="flex-1 p-6 lg:p-10 lg:overflow-y-auto bg-stone-50/50 lg:bg-stone-50 w-full">
                <div className="prose prose-amber prose-sm lg:prose-base max-w-none w-full break-words prose-headings:break-words prose-p:break-words prose-li:break-words">
                  <ReactMarkdown components={{
                    p: ({ node, ...props }) => <p className="break-words whitespace-pre-wrap" {...props} />,
                    li: ({ node, ...props }) => <li className="break-words" {...props} />
                  }}>{strategyResult}</ReactMarkdown>
                </div>
              </div>

              {/* Mobile Bottom Spacer/Button */}
              <div className="p-4 bg-white border-t border-stone-200 lg:hidden sticky bottom-0 z-10 safe-area-bottom">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 bg-stone-900 text-white font-bold rounded-xl shadow-lg"
                >
                  {lang === Language.KO ? '닫기' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-4 shadow-sm border border-amber-200">
            <Zap className="w-3.1 h-3 mr-1.5 fill-amber-500" /> POWERED BY Mr.BAE
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-stone-900 mb-6 font-serif italic">
            {lang === Language.KO ? 'AI Business Insight Lab' : 'AI Business Insight Lab'}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {lang === Language.KO
              ? "Fu Lu Shou의 15년 데이터와 성공 DNA를 학습한 최첨단 AI가 귀사의 캄보디아 진출 전략을 설계해드립니다. 실시간 비즈니스 파트너와 대화해보세요."
              : "Experience AI trained with Fu Lu Shou's 15-year success DNA. Let our advanced model design your Cambodia strategy and answer your business queries."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feature 1: Strategy Simulator */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-200 block lg:flex lg:flex-col h-auto lg:h-[700px] lg:overflow-hidden relative">
            <div className="p-6 lg:p-8 bg-stone-900 text-white flex justify-between items-center border-b border-amber-500/30">
              <div>
                <h3 className="font-bold text-xl flex items-center gap-2">
                  <ArrowRight className="text-amber-400 w-5 h-5" />
                  {lang === Language.KO ? '하이퍼-로컬라이제이션 시뮬레이터' : 'Hyper-Localization Sim'}
                </h3>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest font-bold">Strategic Forecasting</p>
              </div>
            </div>
            <div className="p-5 lg:p-8 bg-stone-50/50 block lg:flex-1 lg:overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-stone-700 mb-2 uppercase tracking-tight">Product Name (제품명)</label>
                  <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full p-4 border-2 border-stone-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-stone-900"
                    placeholder="e.g., Red Ginseng, Spicy Ramen, Luxury Cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-stone-700 mb-2 uppercase tracking-tight">Category (카테고리)</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-4 border-2 border-stone-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-stone-900 appearance-none bg-white mb-3"
                  >
                    <option value="Beverage">Beverage (음료/박카스/오라떼)</option>
                    <option value="Food">Food (식품/신라면)</option>
                    <option value="Cosmetics">Cosmetics (화장품)</option>
                    <option value="Household">Household (생활용품)</option>
                    <option value="Other">Other (직접 입력)</option>
                  </select>

                  {category === 'Other' && (
                    <input
                      type="text"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      className="w-full p-4 border-2 border-stone-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-stone-900 animate-fade-in-down"
                      placeholder={lang === Language.KO ? "카테고리를 입력하세요 (예: 유기농 비누)" : "Enter Category (e.g., Organic Soap)"}
                    />
                  )}
                </div>
                <button
                  onClick={handleGenerateStrategy}
                  disabled={isSimLoading || !product}
                  className="w-full py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 disabled:from-stone-400 disabled:to-stone-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-amber-900/20 transition-all flex items-center justify-center group"
                >
                  {isSimLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6 mr-2 group-hover:scale-125 transition-transform" />
                      {lang === Language.KO ? '성공 전략 생성하기 ✨' : 'Generate Success Strategy ✨'}
                    </>
                  )}
                </button>
              </div>

              {/* In-Line Loading indicator ONLY (Result is in Modal) */}
              {isSimLoading && (
                <div className="mt-8 flex flex-col items-center justify-center p-12 text-stone-400 border border-stone-200 rounded-2xl bg-white/50">
                  <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-600 rounded-full animate-spin mb-4"></div>
                  <p className="font-bold text-sm text-center">
                    AI Mr. Bae is analyzing market data...<br />
                    <span className="text-xs font-normal opacity-70">Creating Hyper-Localization Strategy</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Feature 2: AI Consultant Chat */}
          <div className="bg-stone-900 rounded-[2.5rem] shadow-2xl border border-stone-800 overflow-hidden flex flex-col h-[600px] lg:h-[700px]">
            <div className="p-8 bg-amber-700 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-amber-200" />
                  {lang === Language.KO ? 'AI 비즈니스 파트너 24/7' : 'AI Business Partner 24/7'}
                </h3>
                <p className="text-xs text-amber-200 uppercase tracking-widest font-bold mt-1">Real-time Consultant</p>
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-8 overflow-y-auto bg-stone-900/50 flex flex-col space-y-6">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[88%] p-5 rounded-2xl leading-relaxed text-[15px] shadow-lg ${msg.role === 'user'
                    ? 'bg-amber-600 text-white font-bold ml-auto rounded-tr-none border border-amber-500/50'
                    : 'bg-stone-800 text-stone-100 font-medium mr-auto rounded-tl-none border border-stone-700 prose prose-invert prose-sm max-w-none'
                    }`}
                >
                  {msg.role === 'model' ? (
                    <ReactMarkdown components={{
                      strong: ({ node, ...props }) => <span className="font-bold text-amber-400 underline decoration-amber-500/30" {...props} />
                    }}>{msg.text}</ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </div>
              ))}
              {isChatLoading && (
                <div className="bg-stone-800 border border-stone-700 mr-auto rounded-2xl rounded-tl-none p-5 flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-300"></div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area - DARK THEME WITH WHITE TEXT */}
            {/* Input Area - DARK THEME WITH WHITE TEXT */}
            <div className="p-4 lg:p-6 bg-stone-800 border-t border-stone-700">
              <div className="flex flex-col lg:flex-row gap-3 relative">
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="flex-1 p-4 bg-stone-900 border-2 border-stone-700 rounded-2xl focus:ring-4 focus:ring-amber-600/30 focus:border-amber-600 transition-all font-bold text-white placeholder-stone-500 text-lg shadow-inner resize-none"
                  placeholder={lang === Language.KO ? "질문을 입력하세요..." : "Ask your question..."}
                  disabled={isChatLoading}
                  rows={3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isChatLoading || !chatInput.trim()}
                  className="w-full lg:w-auto px-8 py-4 lg:py-2 bg-amber-600 text-white rounded-2xl hover:bg-amber-500 transition-all shadow-xl shadow-amber-900/40 disabled:opacity-30 disabled:grayscale flex items-center justify-center"
                >
                  <span className="lg:hidden mr-2 font-bold uppercase">{lang === Language.KO ? '전송' : 'Send'}</span>
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[10px] text-stone-500 mt-3 text-center uppercase tracking-widest font-bold">Encrypted AI Communication Channel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiLab;