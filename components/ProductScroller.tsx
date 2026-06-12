import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { CheckCircle } from 'lucide-react';

interface ProductScrollerProps {
  lang: Language;
}

const ProductScroller: React.FC<ProductScrollerProps> = ({ lang }) => {
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

  const content = {
    sectionLabel: { ko: '독점 공식 유통사', en: 'Exclusive Official Distributors', zh: '独家官方经销商', kh: 'អ្នកចែកចាយផ្លូវការផ្តាច់មុខ' },
    title1: { ko: '글로벌 브랜드와의', en: 'Exclusive Partnerships', zh: '与全球品牌的', kh: 'ភាពជាដៃគូ' },
    title2: { ko: '독점 파트너십', en: 'with Global Brands.', zh: '独家合作伙伴。', kh: 'ផ្តាច់មុខ។' },
    exclusive: { ko: '독점 유통 계약', en: 'Exclusive Distribution', zh: '独家分销协议', kh: 'ចែកចាយផ្តាច់មុខ' },
  };

  const brands = [
    {
      name: 'Dong-A ST',
      nameKo: '동아 ST',
      country: '🇰🇷 Korea',
      logo: '/img/DONG-A-ST.svg',
      cardBg: '#1B4F6B',
      accentColor: '#38BDF8',
      products: [
        { name: 'Bacchus', img: '/img/bacchus.jpg' },
        { name: 'Olatte',  img: '/img/olatte.png'  },
      ],
      desc: {
        ko: '바카스, 오라떼 등 프리미엄 음료 브랜드 캄보디아 독점 공식 유통 파트너',
        en: 'Official exclusive distributor of Bacchus, Olatte and premium beverages in Cambodia',
        zh: '百加得、欧拿铁等优质饮料品牌柬埔寨独家官方经销商',
        kh: 'ដៃគូចែកចាយផ្លូវការផ្តាច់មុខ Bacchus, Olatte នៅកម្ពុជា',
      },
    },
    {
      name: 'Dong-A Otsuka',
      nameKo: '동아오츠카',
      country: '🇰🇷 Korea',
      logo: '/img/DONG-A.png',
      cardBg: '#1A3A5C',
      accentColor: '#60A5FA',
      products: [
        { name: 'Pocari Sweat', img: '/img/pocari.jpg' },
      ],
      desc: {
        ko: '포카리 스웨트 ION 음료 캄보디아 독점 공식 유통 파트너',
        en: 'Official exclusive distributor of Pocari Sweat ION beverage in Cambodia',
        zh: '宝矿力水特ION饮料柬埔寨独家官方经销商',
        kh: 'ដៃគូចែកចាយផ្លូវការផ្តាច់មុខ Pocari Sweat ION នៅកម្ពុជា',
      },
    },
    {
      name: 'Nongshim',
      nameKo: '농심',
      country: '🇰🇷 Korea',
      logo: '/img/NONGSHIM-LOGO.svg',
      cardBg: '#5C1A1A',
      accentColor: '#F87171',
      products: [
        { name: 'Shin Ramyun', img: '/img/shinramyun.png' },
      ],
      desc: {
        ko: '세계 1위 한국 라면 신라면 캄보디아 독점 공식 유통 파트너',
        en: "Official exclusive distributor of Shin Ramyun — world's #1 Korean noodle — in Cambodia",
        zh: '全球第一韩国拉面辛拉面柬埔寨独家官方经销商',
        kh: 'ដៃគូចែកចាយផ្លូវការផ្តាច់មុខ Shin Ramyun មីកូរ៉េ #1 នៅកម្ពុជា',
      },
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-cream overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />

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
        </div>

        {/* Brand Cards — horizontal snap on mobile */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {brands.map((brand, i) => (
            <div
              key={i}
              className={`snap-start flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto rounded-3xl overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ backgroundColor: brand.cardBg, transitionDelay: `${150 + i * 120}ms` }}
            >
              {/* Product image */}
              <div className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={brand.products[0].img}
                  alt={brand.products[0].name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
                />
                {/* Exclusive badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 text-white text-[10px] font-black tracking-widest uppercase"
                  style={{ backgroundColor: `${brand.accentColor}30` }}>
                  <CheckCircle className="w-3 h-3" style={{ color: brand.accentColor }} />
                  {content.exclusive[lang]}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                {/* Logo + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm p-2 flex items-center justify-center flex-shrink-0">
                    <img src={brand.logo} alt={brand.name} loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg leading-tight">{brand.name}</h4>
                    <p className="text-white/40 text-xs mt-0.5">{brand.nameKo} · {brand.country}</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4">{brand.desc[lang]}</p>

                {/* Product tags */}
                <div className="flex flex-wrap gap-2">
                  {brand.products.map(p => (
                    <span key={p.name} className="px-3 py-1.5 rounded-xl text-xs font-bold"
                      style={{ backgroundColor: `${brand.accentColor}20`, color: brand.accentColor, border: `1px solid ${brand.accentColor}40` }}>
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
    </section>
  );
};

export default ProductScroller;
