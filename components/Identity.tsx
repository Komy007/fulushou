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
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const importCount = useCountUp(58, 2000, isVisible);
  const salesCount = useCountUp(200, 2000, isVisible);

  const content = {
    sectionLabel: {
      ko: '회사 이름의 의미',
      en: 'The Meaning Behind Our Name',
      zh: '品牌名称的含义',
      kh: 'អត្ថន័យនៃឈ្មោះ'
    },
    title: {
      ko: '福 · 禄 · 壽',
      en: '福 · 禄 · 壽',
      zh: '福 · 禄 · 壽',
      kh: '福 · 禄 · 壽'
    },
    subtitle: {
      ko: '중국 3천년 지혜가 담긴 이름 — 행운, 번영, 장수의 삼위일체',
      en: '3,000 years of Chinese wisdom — the trinity of Fortune, Prosperity, and Longevity',
      zh: '承载三千年中华智慧 — 福禄寿三星高照',
      kh: 'ប្រាជ្ញារបស់ចិន ៣,០០០ ឆ្នាំ — ត្រីមួយនៃសំណាង ភាពរុងរឿង និងអាយុវែង'
    }
  };

  const characters = [
    {
      char: '福',
      romanized: 'Fu',
      color: 'from-amber-400 to-yellow-300',
      glowColor: 'shadow-amber-500/30',
      borderColor: 'border-amber-500/30',
      accentBg: 'bg-amber-500/10',
      accentText: 'text-amber-400',
      meaning: {
        ko: '복 · 행운',
        en: 'Fortune · Blessing',
        zh: '福 · 吉祥',
        kh: 'សំណាង · ពរ'
      },
      tagline: {
        ko: '시장의 행운을 선물합니다',
        en: 'We gift the fortune of the market',
        zh: '赐予市场的幸运',
        kh: 'យើងប្រទានសំណាងទីផ្សារ'
      },
      desc: {
        ko: '파트너사의 브랜드가 캄보디아 소비자의 삶 속에 행복을 전달하는 메신저가 되도록 설계합니다. 행운은 준비된 자에게 찾아옵니다.',
        en: "We engineer your brand to become a messenger of happiness in Cambodian consumers' lives. Fortune favors the prepared.",
        zh: '我们将合作伙伴的品牌设计成向柬埔寨消费者传递幸福的使者。幸运垂青有备之人。',
        kh: 'យើងរចនាម៉ាករបស់ដៃគូឱ្យក្លាយជាអ្នកនាំសំណាងនៅជីវិតអ្នកប្រើប្រាស់កម្ពុជា។'
      }
    },
    {
      char: '禄',
      romanized: 'Lu',
      color: 'from-yellow-300 to-amber-400',
      glowColor: 'shadow-yellow-500/30',
      borderColor: 'border-yellow-500/30',
      accentBg: 'bg-yellow-500/10',
      accentText: 'text-yellow-400',
      meaning: {
        ko: '록 · 번영',
        en: 'Prosperity · Status',
        zh: '禄 · 兴旺',
        kh: 'ភាពរុងរឿង · ឋានៈ'
      },
      tagline: {
        ko: '브랜드를 시장의 기준으로 격상',
        en: 'Elevating brands to market standards',
        zh: '将品牌提升为市场标准',
        kh: 'ដំឡើងម៉ាកទៅជាស្តង់ដារទីផ្សារ'
      },
      desc: {
        ko: '번영은 철저한 전략과 실행력의 정직한 보상입니다. 귀사의 브랜드를 캄보디아 시장의 절대적 기준으로 만들어드립니다.',
        en: "Prosperity is the honest reward of meticulous strategy and execution. We make your brand the absolute standard of Cambodia's market.",
        zh: '繁荣是精心战略和执行力的诚实回报。我们将您的品牌打造成柬埔寨市场的绝对标准。',
        kh: 'ភាពរុងរឿងគឺជារង្វាន់ស្មោះនៃយុទ្ធសាស្ត្រហ្មត់ចត់។ យើងធ្វើឱ្យម៉ាករបស់អ្នកក្លាយជាស្តង់ដារដាច់ខាតនៃទីផ្សារ។'
      }
    },
    {
      char: '壽',
      romanized: 'Shou',
      color: 'from-amber-500 to-orange-400',
      glowColor: 'shadow-orange-500/30',
      borderColor: 'border-orange-500/30',
      accentBg: 'bg-orange-500/10',
      accentText: 'text-orange-400',
      meaning: {
        ko: '수 · 장수',
        en: 'Longevity · Legacy',
        zh: '寿 · 长久',
        kh: 'អាយុវែង · បេតិកភណ្ឌ'
      },
      tagline: {
        ko: '세대를 넘는 레전드 브랜드 구축',
        en: 'Building legendary brands across generations',
        zh: '打造跨越世代的传奇品牌',
        kh: 'បង្កើតម៉ាករឿងព្រេងឆ្លងជំនាន់'
      },
      desc: {
        ko: '영속성은 변하지 않는 신뢰에서 탄생합니다. 귀사의 브랜드가 캄보디아에서 대를 이어 사랑받는 국민 브랜드가 되도록 동반합니다.',
        en: 'Longevity is born from unwavering trust. We accompany your brand to become a national icon loved by generations in Cambodia.',
        zh: '长久源于不变的信任。我们陪伴您的品牌成为柬埔寨代代相传的国民品牌。',
        kh: 'អាយុវែងកើតចេញពីការទុកចិត្តដ៏ស្ថិតស្ថេរ។ យើងដៃគូម៉ាករបស់អ្នកឱ្យក្លាយជាម៉ាកជាតិដែលស្រឡាញ់ជំនាន់-> ជំនាន់នៅកម្ពុជា។'
      }
    }
  ];

  const stats = [
    {
      value: '#1',
      label: { ko: '시장 점유율', en: 'Market Share', zh: '市场份额', kh: 'ចំណែកទីផ្សារ' },
      sub: { ko: '에너지 음료 부문', en: 'Energy Drink Segment', zh: '能量饮料领域', kh: 'ផ្នែកភេសជ្ជៈថាមពល' }
    },
    {
      value: '$58M+',
      label: { ko: '연간 수입 실적', en: 'Annual Import Volume', zh: '年进口额', kh: 'បរិមាណនាំចូល' },
      sub: { ko: '(2024년 기준)', en: '(As of 2024)', zh: '(2024年)', kh: '(ឆ្នាំ 2024)' }
    },
    {
      value: '200M',
      label: { ko: '연간 캔 판매량', en: 'Cans Sold Annually', zh: '年销售量', kh: 'កំប៉ុងដែលលក់ប្រចាំឆ្នាំ' },
      sub: { ko: '국민 1인당 연 12캔', en: '12 Cans / Capita / Year', zh: '人均年消费12罐', kh: 'កំប៉ុង 12/ក្នុងមនុស្ស/ឆ្នាំ' }
    }
  ];

  return (
    <section id="identity" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 md:w-80 h-64 md:h-80 bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-yellow-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center gap-2 mb-6 md:mb-8">
            <img
              src="/img/fulushou-logo.svg"
              alt="Fu Lu Shou F&B Co., Ltd."
              className="h-20 md:h-24 w-auto drop-shadow-[0_0_25px_rgba(57,133,198,0.35)]"
              loading="lazy"
              decoding="async"
            />
            <p className="text-white font-black tracking-widest text-xs md:text-sm">FU LU SHOU F&amp;B CO., LTD.</p>
          </div>
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-[0.3em] uppercase mb-6">
            {content.sectionLabel[lang]}
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-widest" style={{ fontFamily: 'serif' }}>
            {content.title[lang]}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle[lang]}
          </p>
        </div>

        {/* 3 Character Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {characters.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl md:rounded-3xl border ${item.borderColor} bg-stone-900/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:${item.glowColor} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${item.color}`} />

              <div className="p-6 md:p-7 lg:p-8">
                {/* Character + Romanized */}
                <div className="flex items-end gap-3 mb-4">
                  <span
                    className={`text-7xl md:text-8xl font-black leading-none bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
                    style={{ fontFamily: 'serif' }}
                  >
                    {item.char}
                  </span>
                  <div className="mb-2">
                    <div className="text-xl md:text-2xl font-black text-white leading-none">{item.romanized}</div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${item.accentText} mt-1`}>
                      {item.meaning[lang]}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px w-full bg-gradient-to-r ${item.color} opacity-30 mb-4`} />

                {/* Tagline */}
                <p className={`text-sm md:text-base font-bold ${item.accentText} mb-3 leading-snug`}>
                  {item.tagline[lang]}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-stone-400 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>

              {/* Background character watermark */}
              <div
                className="absolute -bottom-4 -right-4 text-[10rem] md:text-[12rem] font-black leading-none pointer-events-none select-none opacity-[0.04]"
                style={{ fontFamily: 'serif', color: '#fff' }}
              >
                {item.char}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-3 gap-3 md:gap-6 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-stone-900/40 border border-stone-800 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 leading-none">
                {idx === 0 ? '#1' : idx === 1 ? `$${importCount}M+` : `${salesCount}M`}
              </div>
              <div className="text-[10px] sm:text-xs font-black text-amber-400 uppercase tracking-wider mb-1">
                {stat.label[lang]}
              </div>
              <div className="text-[9px] sm:text-[10px] text-stone-500 font-medium leading-tight">
                {stat.sub[lang]}
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </section>
  );
};

export default Identity;
