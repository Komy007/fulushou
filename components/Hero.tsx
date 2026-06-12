import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

const BRAND_LOGOS = [
  { src: '/img/DONG-A-ST.svg',       alt: 'Dong-A ST',       bg: 'bg-white' },
  { src: '/img/DONG-A.png',          alt: 'Dong-A Otsuka',   bg: 'bg-white' },
  { src: '/img/NONGSHIM-LOGO.svg',   alt: 'Nongshim',        bg: 'bg-white' },
  { src: '/img/fulushou-logo.svg',   alt: 'Fu Lu Shou',      bg: 'bg-white' },
];

const Hero: React.FC<HeroProps> = ({ lang, scrollToSection }) => {
  const [counted, setCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setCounted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(15, 1800, counted);
  const distributors = useCountUp(24, 1600, counted);
  const cans = useCountUp(200, 2000, counted);

  const t = {
    badge: {
      ko: '캄보디아 F&B 유통의 절대 강자',
      en: "Cambodia's #1 F&B Distributor",
      zh: '柬埔寨F&B分销领导者',
      kh: 'អ្នកចែកចាយ F&B លេខ ១ កម្ពុជា',
    },
    line1: {
      ko: 'Cambodia\'s',
      en: 'Cambodia\'s',
      zh: '柬埔寨',
      kh: 'ឈ្នះ',
    },
    line2: {
      ko: '#1 F&B',
      en: '#1 F&B',
      zh: '#1 F&B',
      kh: '#1 F&B',
    },
    line3: {
      ko: 'Distribution.',
      en: 'Distribution.',
      zh: 'Distribution.',
      kh: 'Distribution.',
    },
    desc: {
      ko: '15년 이상의 성공 노하우로 귀사 브랜드를 캄보디아의 국민 브랜드로 만들어 드립니다.',
      en: 'With 15+ years of proven success, we architect your brand into a national icon in Cambodia.',
      zh: '凭借15年以上的成功经验，我们将您的品牌打造成柬埔寨国民品牌。',
      kh: 'ជាមួយបទពិសោធន៍ 15+ ឆ្នាំ យើងនឹងក្លាយជាដៃគូបង្កើតម៉ាករបស់អ្នកនៅកម្ពុជា។',
    },
    cta1: {
      ko: '파트너십 문의',
      en: 'Partnership Inquiry',
      zh: '咨询合作',
      kh: 'ការសាកសួរភាពជាដៃគូ',
    },
    cta2: {
      ko: '회사 소개 보기',
      en: 'Learn More',
      zh: '了解更多',
      kh: 'ស្វែងយល់បន្ថែម',
    },
    stat1Label: { ko: '년 이상', en: '+ Years', zh: '年以上', kh: '+ ឆ្នាំ' },
    stat1Sub:   { ko: '성공적인 현지화', en: 'Hyper-Localization', zh: '超本地化', kh: 'ការបំប្លែងមូលដ្ឋាន' },
    stat2Label: { ko: '개 총판', en: 'Sub-Distributors', zh: '个分销商', kh: 'អ្នកចែកចាយ' },
    stat2Sub:   { ko: '전국 네트워크', en: 'Nationwide Network', zh: '全国网络', kh: 'បណ្តាញជាតិ' },
    stat3Label: { ko: 'M 캔 판매', en: 'M Cans/Year', zh: 'M罐/年', kh: 'M កំប៉ុង/ឆ្នាំ' },
    stat3Sub:   { ko: '연간 판매량', en: 'Annual Volume', zh: '年销售量', kh: 'បរិមាណប្រចាំឆ្នាំ' },
    scroll: { ko: '스크롤', en: 'Scroll', zh: '滚动', kh: 'រំកិល' },
    partner: {
      ko: '독점 유통 파트너',
      en: 'Exclusive Distribution Partners',
      zh: '独家分销合作伙伴',
      kh: 'ដៃគូចែកចាយផ្តាច់មុខ',
    },
  };

  const logos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section id="home" className="relative bg-cream min-h-screen flex flex-col overflow-hidden pt-20 md:pt-24">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-mist opacity-60 blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-forest/5 blur-[100px] -translate-x-1/3" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left — editorial typography */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 text-forest text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-citrus animate-pulse" />
                {t.badge[lang]}
              </div>

              {/* Giant headline */}
              <h1
                className="font-display font-black tracking-tighter leading-[0.9] mb-8 animate-fade-in-up"
                style={{ animationDelay: '100ms', animationFillMode: 'both' }}
              >
                <span className="block text-ink whitespace-nowrap" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{t.line1[lang]}</span>
                <span className="block text-citrus whitespace-nowrap" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{t.line2[lang]}</span>
                <span className="block text-forest whitespace-nowrap" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{t.line3[lang]}</span>
              </h1>

              <p
                className="text-ink/60 text-lg md:text-xl max-w-lg leading-relaxed mb-10 animate-fade-in-up"
                style={{ animationDelay: '200ms', animationFillMode: 'both' }}
              >
                {t.desc[lang]}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4 animate-fade-in-up"
                style={{ animationDelay: '300ms', animationFillMode: 'both' }}
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-citrus text-white font-bold text-sm tracking-wide hover:bg-citrus/90 transition-all shadow-lg shadow-citrus/30 hover:shadow-citrus/50 hover:-translate-y-0.5"
                >
                  {t.cta1[lang]}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection('company')}
                  className="flex items-center gap-2 px-7 py-4 rounded-2xl border-2 border-forest text-forest font-bold text-sm tracking-wide hover:bg-forest hover:text-white transition-all"
                >
                  {t.cta2[lang]}
                </button>
              </div>
            </div>

            {/* Right — logo + stats bento */}
            <div className="flex flex-col gap-5 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
              {/* Logo card */}
              <div className="rounded-3xl bg-white shadow-xl shadow-ink/5 p-8 flex items-center justify-center border border-mist">
                <img
                  src="/img/fulushou-logo.svg"
                  alt="Fu Lu Shou F&B Co., Ltd."
                  className="h-36 md:h-44 w-auto"
                />
              </div>

              {/* Stats row */}
              <div ref={statsRef} className="grid grid-cols-3 gap-3">
                {[
                  { num: years,        suffix: '+',  label: t.stat1Label[lang], sub: t.stat1Sub[lang],   color: 'text-forest' },
                  { num: distributors, suffix: '',   label: t.stat2Label[lang], sub: t.stat2Sub[lang],   color: 'text-citrus' },
                  { num: cans,         suffix: 'M',  label: t.stat3Label[lang], sub: t.stat3Sub[lang],   color: 'text-gold'   },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl bg-white shadow-md shadow-ink/5 border border-mist p-4 text-center bento-card">
                    <div className={`font-display font-black text-3xl md:text-4xl leading-none ${s.color}`}>
                      {s.num}{s.suffix}
                    </div>
                    <div className="text-[10px] font-bold text-ink/50 uppercase tracking-wider mt-1.5 leading-tight">
                      {s.label}
                    </div>
                    <div className="text-[9px] text-ink/40 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-b border-mist bg-white/60 backdrop-blur-sm py-5 overflow-hidden marquee-container">
        <div className="text-[10px] font-black text-ink/30 uppercase tracking-widest text-center mb-3">
          {t.partner[lang]}
        </div>
        <div className="marquee-track animate-marquee">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity cursor-pointer" onClick={() => scrollToSection('company')}>
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink">
          {t.scroll[lang]}
        </span>
        <ArrowDown className="w-4 h-4 text-ink animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
