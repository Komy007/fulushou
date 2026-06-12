import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface PartnerLogosProps {
  lang: Language;
}

// Counter animation hook — exported for reuse
export const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) return;
    startTimeRef.current = null;
    const animate = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const progress = Math.min((ts - startTimeRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
};

const LOGOS = [
  { src: '/img/DONG-A-ST.svg',     alt: 'Dong-A ST',     label: 'Bacchus / Olatte' },
  { src: '/img/DONG-A.png',        alt: 'Dong-A Otsuka', label: 'Pocari Sweat'     },
  { src: '/img/NONGSHIM-LOGO.svg', alt: 'Nongshim',      label: 'Shin Ramyun'      },
  { src: '/img/fulushou-logo.svg', alt: 'Fu Lu Shou',    label: 'Fu Lu Shou F&B'   },
];

const PartnerLogos: React.FC<PartnerLogosProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const yearsCount     = useCountUp(15, 2000, isVisible);
  const companiesCount = useCountUp(3,  1500, isVisible);

  const content = {
    sectionLabel: { ko: '글로벌 파트너', en: 'Global Partners', zh: '全球合作伙伴', kh: 'ដៃគូសកល' },
    title1:   { ko: '함께 성장하는',  en: 'Partner Brands',  zh: '共同成长的', kh: 'ម៉ាកដៃគូ' },
    title2:   { ko: '파트너 브랜드.', en: 'Growing Together.', zh: '合作品牌。', kh: 'រីកចម្រើន។' },
    subtitle: {
      ko: '글로벌 브랜드와의 독점 유통 계약으로 캄보디아 시장을 선도합니다.',
      en: 'Leading the Cambodian market through exclusive distribution agreements with global brands.',
      zh: '通过与全球品牌的独家分销协议引领柬埔寨市场。',
      kh: 'នាំមុខទីផ្សារកម្ពុជាតាមរយៈកិច្ចព្រមព្រៀងចែកចាយផ្តាច់មុខ។',
    },
    yrsLabel:  { ko: '파트너십 연차', en: 'Years of Partnership', zh: '合作年限', kh: 'ឆ្នាំភាពជាដៃគូ' },
    coLabel:   { ko: '브랜드사',      en: 'Brand Companies',       zh: '品牌企业', kh: 'ក្រុមហ៊ុនម៉ាក' },
    prodLabel: { ko: '유통 상품',     en: 'Distributed Products',  zh: '分销产品', kh: 'ផលិតផលចែកចាយ' },
    exclusive: { ko: '독점 유통', en: 'Exclusive', zh: '独家', kh: 'ផ្តាច់មុខ' },
  };

  // Double logos for seamless marquee
  const row1 = [...LOGOS, ...LOGOS, ...LOGOS];
  const row2 = [...LOGOS, ...LOGOS, ...LOGOS].reverse();

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-mist overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 text-forest text-xs font-bold tracking-widest uppercase mb-6">
            {content.sectionLabel[lang]}
          </span>
          <h2 className="font-display font-black tracking-tighter text-ink leading-[0.9]"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}>
            <span className="block">{content.title1[lang]}</span>
            <span className="block text-forest">{content.title2[lang]}</span>
          </h2>
          <p className="mt-6 text-ink/60 text-lg max-w-2xl leading-relaxed">{content.subtitle[lang]}</p>
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap gap-8 md:gap-16 mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { val: `${yearsCount}+`, label: content.yrsLabel[lang]  },
            { val: companiesCount,    label: content.coLabel[lang]   },
            { val: '4',               label: content.prodLabel[lang] },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-black text-4xl md:text-5xl text-forest">{s.val}</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-bold mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 1 marquee — left */}
      <div className="marquee-container mb-4 overflow-hidden">
        <div className="marquee-track animate-marquee flex">
          {row1.map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-6 flex flex-col items-center gap-2 group cursor-default">
              <div className="w-32 h-16 rounded-2xl bg-white border border-mist flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-lg group-hover:border-forest/20 group-hover:-translate-y-1">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-bold text-ink/30 group-hover:text-forest transition-colors tracking-wider">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 marquee — right (reversed) */}
      <div className="marquee-container overflow-hidden">
        <div className="marquee-track animate-marquee-reverse flex">
          {row2.map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-6 flex flex-col items-center gap-2 group cursor-default">
              <div className="w-32 h-16 rounded-2xl bg-white border border-mist flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-lg group-hover:border-forest/20 group-hover:-translate-y-1">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-bold text-ink/30 group-hover:text-forest transition-colors tracking-wider">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent" />
    </section>
  );
};

export default PartnerLogos;
