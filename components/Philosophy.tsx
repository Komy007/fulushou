import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const sectionObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) sectionObs.observe(sectionRef.current);
    return () => sectionObs.disconnect();
  }, []);

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1,
    };
    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const cardId = entry.target.getAttribute('data-card-id');
        if (entry.isIntersecting) {
          setActiveCard(cardId);
          const t = setTimeout(() => setActiveCard(prev => prev === cardId ? null : prev), 1800);
          return () => clearTimeout(t);
        } else if (!entry.isIntersecting && activeCard === cardId) {
          setActiveCard(null);
        }
      });
    };
    const observer = new IntersectionObserver(cb, observerOptions);
    if (containerRef.current) {
      containerRef.current.querySelectorAll('[data-card-id]').forEach(c => observer.observe(c));
    }
    return () => observer.disconnect();
  }, []);

  const CARDS = [
    {
      char: '福',
      label: { ko: 'Fu (조화)', en: 'Fu (Harmony)', zh: '福（和谐）', kh: 'Fu (សុភមង្គល)' },
      id: 'fu',
      icon: Heart,
      img: '/img/philosophy/fu_v5.png',
      desc: {
        ko: "비즈니스의 근본은 기술이나 자본이 아닌 '사람의 마음'에 있습니다. 우리는 파트너사의 제품이 캄보디아 가정마다 행복(福)을 전달하는 메신저가 되기를 바랍니다.",
        en: "The foundation of business lies not in capital, but in the 'Hearts of People'. We want our partners' products to be messengers of happiness for every Cambodian home.",
        zh: "商业的根本不在于资本，而在于'人心'。我们希望合作伙伴的产品成为为每个柬埔寨家庭传递幸福的使者。",
        kh: "គ្រឹះនៃអាជីវកម្មមិនស្ថិតនៅលើដើមទុនទេ ប៉ុន្តែនៅលើ 'បេះដូងមនុស្ស'។",
      },
    },
    {
      char: '祿',
      label: { ko: 'Lu (번영)', en: 'Lu (Prosperity)', zh: '禄（地位）', kh: 'Lu (ឋានៈ)' },
      id: 'lu',
      icon: Award,
      img: '/img/philosophy/lu_v5.png',
      desc: {
        ko: "번영(祿)은 치밀한 전략과 실행력의 정직한 보상입니다. 우리는 입점 브랜드가 단순한 상품을 넘어 시장의 '기준'이자 '명예'가 되도록 격상시킵니다.",
        en: "Prosperity (Lu) is the honest reward of strategy. We elevate your brand from a 'Product' to a 'Market Standard' in Cambodia.",
        zh: "繁荣（禄）是战略的诚实回报。我们将您的品牌从'产品'提升为柬埔寨的'市场标准'。",
        kh: "សុភមង្គល (Lu) គឺជារង្វាន់ស្មោះត្រង់នៃយុទ្ធសាស្ត្រ។",
      },
    },
    {
      char: '壽',
      label: { ko: 'Shou (장수)', en: 'Shou (Longevity)', zh: '寿（长寿）', kh: 'Shou (អាយុវែង)' },
      id: 'shou',
      icon: ShieldCheck,
      img: '/img/philosophy/shou_v5.png',
      desc: {
        ko: "영속성(壽)은 변하지 않는 정직함에서 탄생합니다. 귀사의 브랜드가 캄보디아에서 대를 이어 사랑받는 '롱런 레전드'가 되도록 신뢰의 동반자가 되겠습니다.",
        en: "Longevity (Shou) is born from unchanging honesty. We will be the partner of trust that ensures your brand becomes a 'Long-run Legend' for generations.",
        zh: "长寿（寿）源于不变的诚实。我们将成为信任的伙伴，确保您的品牌成为代代相传的'长青传奇'。",
        kh: "អាយុវែង (Shou) កើតចេញពីភាពស្មោះត្រង់មិនប្រែប្រួល។",
      },
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 lg:py-36 bg-ink overflow-hidden relative">
      {/* Gold shimmer accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[140px] translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-black tracking-[0.3em] uppercase mb-6">
            CORPORATE CORE ESSENCE
          </div>
          <h2 className="font-display font-black tracking-tighter leading-none text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            {lang === Language.KO ? '번영을 향한' : lang === Language.ZH ? '迈向繁荣的' : lang === Language.KH ? 'ប្រាជ្ញាបីប្រការ' : 'Three Wisdoms'}<br />
            <span className="text-gold">
              {lang === Language.KO ? '세 가지 지혜' : lang === Language.ZH ? '三大智慧' : lang === Language.KH ? '' : 'for Prosperity.'}
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            {lang === Language.KO
              ? "우리의 이름 '복록수(福祿壽)'는 비즈니스가 도달해야 할 가장 숭고한 경지를 의미합니다."
              : lang === Language.ZH
              ? "我们的名字'福禄寿'象征着商业所能达到的最崇高境界。"
              : lang === Language.KH
              ? "ឈ្មោះ 'Fu Lu Shou' តំណាងឱ្យកម្រិតខ្ពស់បំផុតដែលអាជីវកម្មអាចឈានដល់។"
              : "Our name 'Fu Lu Shou' signifies the most noble heights a business can reach."}
          </p>
        </div>

        {/* Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map((item, idx) => (
            <div
              key={idx}
              data-card-id={item.id}
              onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
              className={`relative group overflow-hidden rounded-3xl transition-all duration-700 border border-gold/10 hover:border-gold/30 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col min-h-[400px] md:min-h-[500px] cursor-pointer hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              {/* Gold top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

              {/* Deity image */}
              <div className={`absolute -bottom-6 -right-6 w-52 h-52 md:w-64 md:h-64 transition-all duration-1000 pointer-events-none mix-blend-screen
                ${activeCard === item.id
                  ? 'scale-125 -translate-x-4 -translate-y-8 opacity-100 brightness-125'
                  : 'opacity-50 group-hover:opacity-75 scale-100'}`}
              >
                <img src={item.img} alt={String(item.label[lang])} loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>

              <div className="relative p-8 md:p-10 h-full flex flex-col z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl md:text-7xl font-black font-serif text-gold/20 group-hover:text-gold/50 transition-all duration-500">
                    {item.char}
                  </span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>

                <h4 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.label[lang]}
                </h4>

                <div className="h-0.5 w-16 mb-6 rounded-full bg-gradient-to-r from-gold to-gold/20" />

                <p className="text-white/50 group-hover:text-white/70 text-base leading-relaxed transition-colors duration-300 flex-1">
                  {item.desc[lang]}
                </p>

                <div className="mt-auto pt-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gold/50">
                  <div className="w-8 h-px bg-gold/30" />
                  <Sparkles className="w-3 h-3" />
                  Core Value {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default Philosophy;
