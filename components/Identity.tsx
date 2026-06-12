import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { useCountUp } from './PartnerLogos';

interface IdentityProps {
  lang: Language;
}

const Identity: React.FC<IdentityProps> = ({ lang }) => {
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

  const importCount = useCountUp(58,  2000, isVisible);
  const salesCount  = useCountUp(200, 2000, isVisible);

  const content = {
    sectionLabel: { ko: '회사 이름의 의미', en: 'The Meaning Behind Our Name', zh: '品牌名称的含义', kh: 'អត្ថន័យនៃឈ្មោះ' },
    title: { ko: '福 · 禄 · 壽', en: '福 · 禄 · 壽', zh: '福 · 禄 · 壽', kh: '福 · 禄 · 壽' },
    subtitle: {
      ko: '중국 3천년 지혜가 담긴 이름 — 행운, 번영, 장수의 삼위일체',
      en: '3,000 years of Chinese wisdom — the trinity of Fortune, Prosperity, and Longevity',
      zh: '承载三千年中华智慧 — 福禄寿三星高照',
      kh: 'ប្រាជ្ញារបស់ចិន ៣,០០០ ឆ្នាំ — ត្រីមួយនៃសំណាង ភាពរុងរឿង និងអាយុវែង',
    },
  };

  const characters = [
    {
      char: '福',
      romanized: 'Fu',
      meaning:  { ko: '복 · 행운',   en: 'Fortune · Blessing', zh: '福 · 吉祥',   kh: 'សំណាង · ពរ' },
      tagline:  { ko: '시장의 행운을 선물합니다', en: 'We gift the fortune of the market', zh: '赐予市场的幸运', kh: 'យើងប្រទានសំណាងទីផ្សារ' },
      desc: {
        ko: '파트너사의 브랜드가 캄보디아 소비자의 삶 속에 행복을 전달하는 메신저가 되도록 설계합니다.',
        en: 'We engineer your brand to become a messenger of happiness in Cambodian consumers\' lives.',
        zh: '我们将合作伙伴的品牌设计成向柬埔寨消费者传递幸福的使者。',
        kh: 'យើងរចនាម៉ាករបស់ដៃគូឱ្យក្លាយជាអ្នកនាំសំណាងនៅជីវិតអ្នកប្រើប្រាស់កម្ពុជា។',
      },
      color: 'text-gold',
      bg: 'bg-gold/5',
      border: 'border-gold/20',
      bar: 'from-gold to-gold/20',
    },
    {
      char: '禄',
      romanized: 'Lu',
      meaning:  { ko: '록 · 번영',   en: 'Prosperity · Status', zh: '禄 · 兴旺',   kh: 'ភាពរុងរឿង · ឋានៈ' },
      tagline:  { ko: '브랜드를 시장의 기준으로 격상', en: 'Elevating brands to market standards', zh: '将品牌提升为市场标准', kh: 'ដំឡើងម៉ាកទៅជាស្តង់ដារទីផ្សារ' },
      desc: {
        ko: '번영은 철저한 전략과 실행력의 정직한 보상입니다. 귀사의 브랜드를 캄보디아 시장의 절대적 기준으로 만들어드립니다.',
        en: 'Prosperity is the honest reward of strategy. We make your brand the absolute standard of Cambodia\'s market.',
        zh: '繁荣是精心战略和执行力的诚实回报。我们将您的品牌打造成柬埔寨市场的绝对标准。',
        kh: 'ភាពរុងរឿងគឺជារង្វាន់ស្មោះនៃយុទ្ធសាស្ត្រ។ យើងធ្វើឱ្យម៉ាករបស់អ្នកក្លាយជាស្តង់ដារដាច់ខាត។',
      },
      color: 'text-forest',
      bg: 'bg-forest/5',
      border: 'border-forest/20',
      bar: 'from-forest to-forest/20',
    },
    {
      char: '壽',
      romanized: 'Shou',
      meaning:  { ko: '수 · 장수',   en: 'Longevity · Legacy', zh: '寿 · 长久',   kh: 'អាយុវែង · បេតិកភណ្ឌ' },
      tagline:  { ko: '세대를 넘는 레전드 브랜드 구축', en: 'Building legendary brands across generations', zh: '打造跨越世代的传奇品牌', kh: 'បង្កើតម៉ាករឿងព្រេងឆ្លងជំនាន់' },
      desc: {
        ko: '영속성은 변하지 않는 신뢰에서 탄생합니다. 귀사의 브랜드가 캄보디아에서 대를 이어 사랑받는 국민 브랜드가 되도록 동반합니다.',
        en: 'Longevity is born from unwavering trust. We accompany your brand to become a national icon loved by generations.',
        zh: '长久源于不变的信任。我们陪伴您的品牌成为柬埔寨代代相传的国民品牌。',
        kh: 'អាយុវែងកើតចេញពីការទុកចិត្ត។ យើងដៃគូម៉ាករបស់អ្នកឱ្យក្លាយជាម៉ាកជាតិ។',
      },
      color: 'text-citrus',
      bg: 'bg-citrus/5',
      border: 'border-citrus/20',
      bar: 'from-citrus to-citrus/20',
    },
  ];

  const stats = [
    { value: '#1',        label: { ko: '시장 점유율',   en: 'Market Share',        zh: '市场份额', kh: 'ចំណែកទីផ្សារ' }, sub: { ko: '에너지 음료 부문', en: 'Energy Drink Segment', zh: '能量饮料领域', kh: 'ផ្នែកភេសជ្ជៈថាមពល' } },
    { value: `$${importCount}M+`, label: { ko: '연간 수입 실적', en: 'Annual Import Volume', zh: '年进口额',  kh: 'បរិមាណនាំចូល' }, sub: { ko: '(2024년 기준)', en: '(As of 2024)',         zh: '(2024年)',   kh: '(ឆ្នាំ 2024)' } },
    { value: `${salesCount}M`,   label: { ko: '연간 캔 판매량', en: 'Cans Sold Annually',  zh: '年销售量',  kh: 'កំប៉ុងប្រចាំឆ្នាំ' }, sub: { ko: '국민 1인당 연 12캔', en: '12 Cans / Capita',    zh: '人均年12罐', kh: 'កំប៉ុង 12/ក្នុងម្នាក់' } },
  ];

  const fade = (delay = 0) =>
    `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="identity" ref={sectionRef} className="py-20 md:py-28 lg:py-36 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-forest/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 md:mb-20 ${fade()}`}>
          <div className="flex flex-col items-center gap-3 mb-8">
            <img
              src="/img/fulushou-logo.svg"
              alt="Fu Lu Shou F&B Co., Ltd."
              className="h-20 md:h-24 w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="text-ink font-black tracking-widest text-xs md:text-sm font-display">FU LU SHOU F&amp;B CO., LTD.</p>
          </div>
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-black tracking-[0.3em] uppercase mb-6">
            {content.sectionLabel[lang]}
          </span>
          <h2 className="font-serif font-black text-ink tracking-widest mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            {content.title[lang]}
          </h2>
          <p className="text-ink/50 text-lg max-w-2xl mx-auto leading-relaxed">{content.subtitle[lang]}</p>
        </div>

        {/* Character cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-14">
          {characters.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border ${item.border} ${item.bg} overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl bento-card ${fade(200 + idx * 150)}`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${item.bar}`} />
              <div className="p-7 md:p-8 relative">
                <div className="flex items-end gap-3 mb-5">
                  <span className={`font-serif font-black text-7xl md:text-8xl leading-none ${item.color}`}>
                    {item.char}
                  </span>
                  <div className="mb-1">
                    <div className="text-xl md:text-2xl font-black text-ink leading-none">{item.romanized}</div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${item.color} mt-1`}>
                      {item.meaning[lang]}
                    </div>
                  </div>
                </div>

                <div className={`h-px w-full bg-gradient-to-r ${item.bar} opacity-30 mb-5`} />

                <p className={`text-sm font-bold ${item.color} mb-3 leading-snug`}>{item.tagline[lang]}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{item.desc[lang]}</p>

                {/* Watermark */}
                <div className={`absolute -bottom-4 -right-4 text-[10rem] font-black leading-none pointer-events-none select-none opacity-[0.04] font-serif ${item.color}`}>
                  {item.char}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className={`grid grid-cols-3 gap-3 md:gap-6 p-6 md:p-8 rounded-3xl bg-ink border border-ink/80 ${fade(500)}`}
          style={{ transitionDelay: '500ms' }}>
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-none mb-1">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs font-black text-gold uppercase tracking-wider mb-0.5">
                {s.label[lang]}
              </div>
              <div className="text-[9px] sm:text-[10px] text-white/30 font-medium">
                {s.sub[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
    </section>
  );
};

export default Identity;
