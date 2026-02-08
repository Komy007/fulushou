import React from 'react';
import { Language } from '../types';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, scrollToSection }) => {
  return (
    <section id="home" className="relative bg-stone-950 min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Spline Container - Desktop Split, Mobile Fill */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent z-10 pointer-events-none hidden lg:block" />

        {/* Premium Spline Particles Integration */}
        <div className="w-full h-full lg:translate-x-1/4 scale-110">
          <iframe
            src='https://my.spline.design/particles-lQ5n5TkYLJU6Bar5npFFMXIP/'
            frameBorder='0'
            width='100%'
            height='100%'
            title="Ethereal Particles"
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="lg:w-3/5">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            {lang === Language.KO
              ? '캄보디아 시장의 마켓 아키텍트'
              : "Cambodia's Premier Market Architect"}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 animate-fade-in-up delay-100 leading-[0.9]">
            {lang === Language.KO ? (
              <>불가능을 가능으로,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 animate-gradient-x">신화를 현실로.</span></>
            ) : (
              <>Turning the<br />Impossible<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 animate-gradient-x">into Legend.</span></>
            )}
          </h1>

          <p className="mt-6 text-xl lg:text-2xl text-stone-400 max-w-2xl animate-fade-in-up delay-200 leading-relaxed font-light">
            {lang === Language.KO ? (
              <>
                Fu Lu Shou는 단순한 유통을 넘어, 현지화 전략과 강력한 네트워크로 귀사의 브랜드를 캄보디아의 <span className="text-white font-medium">'국민 브랜드'</span>로 설계합니다.
              </>
            ) : (
              <>
                Beyond simple logistics, we architect your brand into a <span className="text-white font-medium">'National Brand'</span> through hyper-localization strategies and an unrivaled network.
              </>
            )}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">

            <button
              onClick={() => scrollToSection('strategy')}
              className="px-10 py-5 rounded-full border border-stone-800 text-lg font-bold text-stone-300 hover:bg-stone-900 hover:text-white transition-all hover:border-stone-600"
            >
              {lang === Language.KO ? '성공 사례 분석' : 'View Case Study'}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
