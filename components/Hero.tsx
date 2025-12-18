import React from 'react';
import { Language } from '../types';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, scrollToSection }) => {
  return (
    <section id="home" className="relative bg-stone-900 py-32 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-900/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left w-full">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-sm font-medium mb-6 animate-fade-in-up">
            {lang === Language.KO
              ? '캄보디아 시장의 마켓 아키텍트'
              : "Cambodia's Premier Market Architect"}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up delay-100">
            {lang === Language.KO ? (
              <>불가능을 가능으로,<br />신화를 현실로.</>
            ) : (
              <>Turning the Impossible<br />into Legend.</>
            )}
          </h1>

          <p className="mt-4 text-xl text-stone-300 max-w-2xl animate-fade-in-up delay-200 leading-relaxed">
            {lang === Language.KO ? (
              <>
                Fu Lu Shou는 캄보디아 유통 시장의 판도를 바꾼 <strong>'게임 체인저'</strong>입니다.
                단순한 유통을 넘어, 현지화 전략과 강력한 네트워크로 귀사의 브랜드를 캄보디아의 '국민 브랜드'로 설계합니다.
              </>
            ) : (
              <>
                Fu Lu Shou is the <strong>Game Changer</strong> of Cambodia's distribution market.
                Beyond simple logistics, we architect your brand into a 'National Brand' through hyper-localization strategies and an unrivaled network.
              </>
            )}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('ai-lab')}
              className="px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 transition shadow-lg shadow-amber-900/50 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {lang === Language.KO ? 'AI 전략 시뮬레이션 ✨' : 'AI Strategy Sim ✨'}
            </button>
            <button
              onClick={() => scrollToSection('strategy')}
              className="px-8 py-4 border border-stone-600 text-lg font-bold rounded-lg text-stone-300 hover:bg-stone-800 hover:text-white transition"
            >
              {lang === Language.KO ? '성공 사례 분석' : 'View Case Study'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
