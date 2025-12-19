import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const CARDS = [
    {
      char: '福',
      label: 'Fu (Harmony)',
      id: 'fu',
      icon: Heart,
      bg: 'bg-amber-700', // Solid Amber
      titleColor: 'text-white',
      bodyColor: 'text-white font-medium leading-relaxed',
      footerColor: 'text-amber-200',
      bgCharColor: 'text-amber-100', // High visibility
      iconBoxClass: 'bg-white/20 text-white backdrop-blur-sm border border-white/20',
      border: 'border-amber-500',
      ko: "비즈니스의 근본은 기술이나 자본이 아닌 '사람의 마음'에 있습니다. 우리는 파트너사의 제품이 캄보디아 가정마다 행복(福)을 전달하는 메신저가 되기를 바랍니다.",
      en: "The foundation of business lies not in capital, but in the 'Hearts of People'. We want our partners' products to be messengers of happiness (Fu) for every Cambodian home."
    },
    {
      char: '祿',
      label: 'Lu (Status)',
      id: 'lu',
      icon: Award,
      bg: 'bg-white', // Pure White
      titleColor: 'text-stone-900',
      bodyColor: 'text-stone-600 font-medium leading-relaxed',
      footerColor: 'text-amber-700',
      bgCharColor: 'text-stone-600', // Dark Gray as requested
      iconBoxClass: 'bg-slate-50 shadow-lg text-amber-700 border border-slate-100',
      border: 'border-slate-200',
      ko: "번영(祿)은 치밀한 전략과 실행력의 정직한 보상입니다. 우리는 입점 브랜드가 단순한 상품을 넘어 시장의 '기준'이자 '명예(Status)'가 되도록 격상시킵니다.",
      en: "Prosperity (Lu) is the honest reward of strategy. We elevate your brand from a 'Product' to a 'Market Standard' and 'Status' in Cambodia."
    },
    {
      char: '壽',
      label: 'Shou (Longevity)',
      id: 'shou',
      icon: ShieldCheck,
      bg: 'bg-stone-950', // Deep Black
      titleColor: 'text-white',
      bodyColor: 'text-stone-300 font-medium leading-relaxed',
      footerColor: 'text-stone-500',
      bgCharColor: 'text-white', // White as requested
      iconBoxClass: 'bg-stone-900 text-teal-400 border border-stone-800',
      border: 'border-stone-800',
      ko: "영속성(壽)은 변하지 않는 정직함에서 탄생합니다. 귀사의 브랜드가 캄보디아에서 대를 이어 사랑받는 '롱런 레전드'가 되도록 신뢰의 동반자가 되겠습니다.",
      en: "Longevity (Shou) is born from unchanging honesty. We will be the partner of trust that ensures your brand becomes a 'Long-run Legend' for generations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FDFBF7] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] -ml-48 -mt-48 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-stone-100 rounded-full blur-[120px] -mr-48 -mb-48 opacity-40"></div>

      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img src="/img/fulushou.png" alt="Fulushou Background" className="w-full h-full object-contain scale-150 grayscale" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-stone-900 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-lg">
            CORPORATE CORE ESSENCE
          </div>
          <h2 className="text-amber-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Philosophy & DNA</h2>
          <h3 className="text-4xl lg:text-7xl font-black text-stone-900 font-serif italic mb-6 leading-tight tracking-tighter">
            {lang === Language.KO ? '번영을 향한 세 가지 지혜' : 'Three Wisdoms for Prosperity'}
          </h3>
          <p className="text-lg lg:text-xl text-stone-500 max-w-3xl mx-auto leading-relaxed font-light">
            {lang === Language.KO
              ? "우리의 이름 '복록수(福祿壽)'는 비즈니스가 도달해야 할 가장 숭고한 경지를 의미합니다."
              : "Our name 'Fu Lu Shou' signifies the most noble heights a business can reach."}
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {CARDS.map((item, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 border ${item.border} ${item.id === 'lu' || item.id === 'shou' ? 'shadow-2xl' : 'shadow-xl'}`}>

              {/* Card Background Logic */}
              <div className={`absolute inset-0 ${item.bg} transition-all duration-500`}></div>

              <div className="relative p-6 lg:p-10 h-full flex flex-col items-start">
                <div className="flex justify-between items-start w-full mb-8">
                  <span className={`text-5xl lg:text-6xl font-serif font-black ${item.bgCharColor}`}>
                    {item.char}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconBoxClass}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                <h4 className={`text-2xl lg:text-3xl font-black mb-4 tracking-tight ${item.titleColor}`}>
                  {item.label}
                </h4>

                <div className={`h-1 w-12 mb-6 rounded-full ${item.id === 'lu' ? 'bg-amber-500' : 'bg-white/40'}`}></div>

                <p className={`text-base lg:text-lg text-left ${item.bodyColor}`}>
                  {lang === Language.KO ? item.ko : item.en}
                </p>

                <div className={`mt-auto pt-8 w-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${item.footerColor}`}>
                  <Sparkles className="w-3 h-3" /> Core Value {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Philosophy;