import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when card is near center
      threshold: 0.6
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const cardId = entry.target.getAttribute('data-card-id');
        if (entry.isIntersecting) {
          setActiveCard(cardId);
        } else if (!entry.isIntersecting && activeCard === cardId) {
          // Robust shrink check: if it's leaving, set null
          setActiveCard(null);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('[data-card-id]');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const CARDS = [
    {
      char: '福',
      label: 'Fu (Harmony)',
      id: 'fu',
      icon: Heart,
      bg: 'bg-red-950/20',
      img: '/img/philosophy/fu_v5.png',
      border: 'border-red-500/20',
      accent: 'text-red-500',
      footerColor: 'text-red-400',
      ko: "비즈니스의 근본은 기술이나 자본이 아닌 '사람의 마음'에 있습니다. 우리는 파트너사의 제품이 캄보디아 가정마다 행복(福)을 전달하는 메신저가 되기를 바랍니다.",
      en: "The foundation of business lies not in capital, but in the 'Hearts of People'. We want our partners' products to be messengers of happiness (Fu) for every Cambodian home."
    },
    {
      char: '祿',
      label: 'Lu (Status)',
      id: 'lu',
      icon: Award,
      bg: 'bg-indigo-950/20',
      img: '/img/philosophy/lu_v5.png',
      border: 'border-indigo-500/20',
      accent: 'text-indigo-500',
      footerColor: 'text-indigo-400',
      ko: "번영(祿)은 치밀한 전략과 실행력의 정직한 보상입니다. 우리는 입점 브랜드가 단순한 상품을 넘어 시장의 '기준'이자 '명예(Status)'가 되도록 격상시킵니다.",
      en: "Prosperity (Lu) is the honest reward of strategy. We elevate your brand from a 'Product' to a 'Market Standard' and 'Status' in Cambodia."
    },
    {
      char: '壽',
      label: 'Shou (Longevity)',
      id: 'shou',
      icon: ShieldCheck,
      bg: 'bg-emerald-950/20',
      img: '/img/philosophy/shou_v5.png',
      border: 'border-emerald-500/20',
      accent: 'text-emerald-500',
      footerColor: 'text-emerald-400',
      ko: "영속성(壽)은 변하지 않는 정직함에서 탄생합니다. 귀사의 브랜드가 캄보디아에서 대를 이어 사랑받는 '롱런 레전드'가 되도록 신뢰의 동반자가 되겠습니다.",
      en: "Longevity (Shou) is born from unchanging honesty. We will be the partner of trust that ensures your brand becomes a 'Long-run Legend' for generations."
    }
  ];

  return (
    <section id="about" className="py-32 bg-stone-950 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-lg">
            CORPORATE CORE ESSENCE
          </div>
          <h2 className="text-amber-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Philosophy & DNA</h2>
          <h3 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
            {lang === Language.KO ? '번영을 향한 세 가지 지혜' : 'Three Wisdoms for Prosperity'}
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed font-light">
            {lang === Language.KO
              ? "우리의 이름 '복록수(福祿壽)'는 비즈니스가 도달해야 할 가장 숭고한 경지를 의미합니다."
              : "Our name 'Fu Lu Shou' signifies the most noble heights a business can reach."}
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
          {CARDS.map((item, idx) => (
            <div
              key={idx}
              data-card-id={item.id}
              onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
              className={`relative group overflow-hidden rounded-[4rem] transition-all duration-700 hover:-translate-y-4 border ${item.border} bg-stone-900 shadow-2xl flex flex-col min-h-[580px] cursor-pointer`}
            >

              {/* Deity Image - Floating Background (Auto-pops on scroll or click) */}
              <div
                className={`absolute -bottom-10 -right-10 w-80 h-80 lg:w-[32rem] lg:h-[32rem] transition-all duration-1000 ease-out pointer-events-none mix-blend-screen
                  ${activeCard === item.id
                    ? 'z-40 scale-125 -translate-x-4 -translate-y-8 opacity-100 brightness-150 filter drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]'
                    : 'z-0 opacity-80 group-hover:opacity-100 scale-100'
                  }`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card Color Tint Overlay - Subtle */}
              <div className={`absolute inset-0 ${item.bg} opacity-10 pointer-events-none z-1`}></div>

              <div className="relative p-10 lg:p-14 h-full flex flex-col items-start z-10 w-full">
                <div className="flex justify-between items-start w-full mb-12">
                  <span className="text-8xl font-serif font-black text-amber-500/25 group-hover:text-amber-400/70 transition-all duration-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    {item.char}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={`w-8 h-8 ${item.accent}`} />
                  </div>
                </div>

                <h4 className="text-4xl font-black mb-6 tracking-tight text-white group-hover:text-amber-400 transition-colors drop-shadow-md">
                  {item.label}
                </h4>

                <div className="h-1.5 w-20 mb-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-500/10"></div>

                <p className="text-xl text-left text-white font-bold leading-[1.6] mb-10 drop-shadow-2xl max-w-[95%]">
                  {lang === Language.KO ? item.ko : item.en}
                </p>

                <div className={`mt-auto pt-6 w-full flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] ${item.footerColor}`}>
                  <div className="w-8 h-px bg-current opacity-30" />
                  <Sparkles className="w-4 h-4" /> Core Value {idx + 1}
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