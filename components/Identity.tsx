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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const importCount = useCountUp(58, 2000, isVisible);
  const salesCount = useCountUp(200, 2000, isVisible);
  const content = {
    sectionLabel: {
      ko: '아이덴티티',
      en: 'Identity',
      zh: '企业标识',
      kh: 'អត្តសញ្ញាណ'
    },
    title: {
      ko: '왜',
      en: 'Why',
      zh: '为什么选择',
      kh: 'ហេតុអ្វី'
    },
    brandName: 'Fu Lu Shou',
    titleEnd: {
      ko: '인가?',
      en: '?',
      zh: '？',
      kh: '?'
    },
    description: {
      ko: "우리는 한국의 고도 성장기 성공 방정식을 캄보디아에 이식하는 '시공간적 이식 전략(Time-Machine Strategy)'의 전문가입니다. 데이터를 넘어, 현장의 흙먼지 속에서 찾아낸 실전 인사이트로 시장을 압도합니다.",
      en: "We are experts in the 'Time-Machine Strategy', transplanting proven growth formulas into modern Cambodia. We dominate with real-world insights born from the field, not just data sheets.",
      zh: "我们是'时间机器战略'的专家，将经过验证的增长公式移植到现代柬埔寨。我们凭借来自实地的洞察力主导市场，而不仅仅是数据。",
      kh: "យើងជាអ្នកជំនាញក្នុង 'យុទ្ធសាស្ត្រម៉ាស៊ីនពេលវេលា' ដោយផ្ទេរម៉ូដែលកំណើនដែលបានបញ្ជាក់ទៅកម្ពុជាទំនើប។"
    }
  };

  const stats = [
    {
      value: '#1',
      label: { ko: '시장 점유율 (에너지 음료)', en: 'Market Share (Energy Drink)', zh: '市场份额（能量饮料）', kh: 'ចំណែកទីផ្សារ' },
      description: { ko: 'Red Bull & Carabao를 제치고 캄보디아 1위', en: 'Beating Red Bull & Carabao in Cambodia', zh: '超越Red Bull和Carabao', kh: 'ឈ្នះ Red Bull & Carabao' }
    },
    {
      value: '$58M+',
      label: { ko: '연간 수입 실적 (2024)', en: 'Annual Import Volume (2024)', zh: '年进口额（2024）', kh: 'បរិមាណនាំចូល (2024)' },
      description: { ko: '약 836억원 규모의 성장', en: 'Approx. 83.6 Billion KRW of massive growth', zh: '约836亿韩元的巨大增长', kh: 'កំណើនប្រមាណ 83.6 ពាន់លានវ៉ុន' }
    },
    {
      value: '200M',
      suffix: { ko: '캔', en: 'Cans', zh: '罐', kh: 'កំប៉ុង' },
      label: { ko: '연간 판매량', en: 'Annual Sales Volume', zh: '年销量', kh: 'បរិមាណលក់ប្រចាំឆ្នាំ' },
      description: { ko: '국민 1인당 연 12캔, 캄보디아 일상을 지배', en: '12 Cans per Capita/Year. Dominating daily life', zh: '人均年消费12罐，主导日常生活', kh: 'កំប៉ុង 12 ក្នុងមនុស្សម្នាក់/ឆ្នាំ' }
    }
  ];

  return (
    <section id="identity" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-stone-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-amber-500/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-amber-500 font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
              {content.sectionLabel[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              {content.title[lang]}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                {content.brandName}
              </span>{' '}
              {content.titleEnd[lang]}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-stone-400 leading-relaxed font-light">
              {content.description[lang]}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-5 md:p-8 rounded-2xl md:rounded-[2rem] bg-stone-900/40 border border-stone-800 backdrop-blur-sm group hover:border-amber-500/30 transition-all duration-700 ${index === 2 ? 'sm:col-span-2' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="flex items-end gap-2 md:gap-3 mb-2">
                  <span className="text-3xl md:text-4xl font-black text-white group-hover:text-amber-500 transition-colors">
                    {index === 0 ? '#1' : index === 1 ? `$${importCount}M+` : `${salesCount}M`}
                  </span>
                  {stat.suffix && (
                    <span className="text-lg md:text-xl font-bold text-stone-600 mb-1">
                      {stat.suffix[lang]}
                    </span>
                  )}
                </div>
                <div className="text-[9px] md:text-[10px] font-black text-stone-500 uppercase tracking-widest mb-3 md:mb-4">
                  {stat.label[lang]}
                </div>
                <p className="text-xs md:text-sm text-stone-400 leading-snug">
                  {stat.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
