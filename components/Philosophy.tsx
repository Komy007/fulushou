import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Heart, Award, Sparkles, Target, Users } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  return (
    <section id="about" className="py-32 bg-[#FDFBF7] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] -ml-48 -mt-48 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-stone-100 rounded-full blur-[120px] -mr-48 -mb-48 opacity-40"></div>
      
      {/* Semi-transparent background image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <img src="/img/fulushou.png" alt="Fulushou Background" className="w-full h-full object-contain scale-150" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-stone-900 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl">
            CORPORATE CORE ESSENCE
          </div>
          <h2 className="text-amber-700 font-black tracking-[0.2em] uppercase text-xs mb-4">Philosophy & DNA</h2>
          <h3 className="text-5xl lg:text-8xl font-black text-stone-900 font-serif italic mb-10 leading-tight tracking-tighter">
            {lang === Language.KO ? '번영을 향한 세 가지 지혜' : 'Three Wisdoms for Prosperity'}
          </h3>
          <p className="text-2xl text-stone-500 max-w-4xl mx-auto leading-relaxed font-light">
            {lang === Language.KO 
              ? "우리의 이름 '복록수(福祿壽)'는 비즈니스가 도달해야 할 가장 숭고한 경지를 의미합니다." 
              : "Our name 'Fu Lu Shou' signifies the most noble heights a business can reach."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Card Component Factory */}
          {[
            { 
              char: '福', 
              label: 'Fu (Harmony)', 
              icon: Heart, 
              color: 'amber-600', 
              border: 'border-amber-600',
              ko: "비즈니스의 근본은 기술이나 자본이 아닌 '사람의 마음'에 있습니다. 우리는 파트너사의 제품이 캄보디아 가정마다 행복(福)을 전달하는 메신저가 되기를 바랍니다.",
              en: "The foundation of business lies not in capital, but in the 'Hearts of People'. We want our partners' products to be messengers of happiness (Fu) for every Cambodian home."
            },
            { 
              char: '祿', 
              label: 'Lu (Status)', 
              icon: Award, 
              color: 'amber-700', 
              border: 'border-amber-700',
              ko: "번영(祿)은 치밀한 전략과 실행력의 정직한 보상입니다. 우리는 입점 브랜드가 단순한 상품을 넘어 시장의 '기준'이자 '명예(Status)'가 되도록 격상시킵니다.",
              en: "Prosperity (Lu) is the honest reward of strategy. We elevate your brand from a 'Product' to a 'Market Standard' and 'Status' in Cambodia."
            },
            { 
              char: '壽', 
              label: 'Shou (Longevity)', 
              icon: ShieldCheck, 
              color: 'stone-900', 
              border: 'border-stone-900',
              ko: "영속성(壽)은 변하지 않는 정직함에서 탄생합니다. 귀사의 브랜드가 캄보디아에서 대를 이어 사랑받는 '롱런 레전드'가 되도록 신뢰의 동반자가 되겠습니다.",
              en: "Longevity (Shou) is born from unchanging honesty. We will be the partner of trust that ensures your brand becomes a 'Long-run Legend' for generations."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className={`absolute inset-0 bg-${item.color} rounded-[3rem] transform rotate-1 group-hover:rotate-0 transition duration-700 opacity-5`}></div>
              <div className={`relative bg-white rounded-[3rem] p-12 border border-stone-100 shadow-xl hover:-translate-y-4 transition duration-700 h-full flex flex-col border-b-[10px] ${item.border}`}>
                <div className="w-24 h-24 bg-[#FDFBF7] rounded-3xl flex items-center justify-center text-5xl text-amber-700 font-serif mb-12 border border-stone-100 group-hover:bg-stone-900 group-hover:text-amber-400 transition-all duration-700 shadow-inner">
                  {item.char}
                </div>
                <h4 className="text-3xl font-black text-stone-900 mb-6 flex items-center gap-3 tracking-tighter">
                  {item.label} <item.icon className="w-6 h-6 text-amber-500 fill-amber-500/20" />
                </h4>
                <p className="text-stone-500 text-lg leading-relaxed flex-1 text-justify font-medium">
                  {lang === Language.KO ? item.ko : item.en}
                </p>
                <div className="mt-12 pt-8 border-t border-stone-50">
                   <div className="flex items-center gap-3 text-[10px] font-black text-stone-400 uppercase tracking-widest">
                     <Sparkles className="w-4 h-4 text-amber-500" /> Strategic Core Pillar
                   </div>
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