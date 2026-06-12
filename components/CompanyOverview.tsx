import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { Users, Warehouse, Truck, MapPin, Target, TrendingUp } from 'lucide-react';
import { useCountUp } from './PartnerLogos';

interface CompanyOverviewProps {
  lang: Language;
}

const CompanyOverview: React.FC<CompanyOverviewProps> = ({ lang }) => {
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

  const employeeCount    = useCountUp(150,  2000, isVisible);
  const warehouseCount   = useCountUp(5300, 2000, isVisible);
  const distributorCount = useCountUp(24,   1500, isVisible);
  const truckCount       = useCountUp(30,   1500, isVisible);

  const content = {
    sectionLabel: { ko: '회사 개요', en: 'Company Overview', zh: '公司概况', kh: 'ទិដ្ឋភាពទូទៅ' },
    title1:       { ko: '캄보디아 F&B', en: 'Cambodia F&B', zh: '柬埔寨F&B', kh: 'F&B កម្ពុជា' },
    title2:       { ko: '유통의 리더', en: 'Distribution', zh: '分销领导者', kh: 'ចែកចាយ' },
    title3:       { ko: '',            en: 'Leader.',      zh: '。',         kh: 'Leader.' },
    subtitle: {
      ko: '15년 이상의 성공적인 경험으로 캄보디아 전역에 고품질 제품을 공급합니다.',
      en: 'With over 15 years of success, we supply high-quality products across Cambodia.',
      zh: '凭借15年以上经验，我们为柬埔寨全境供应高质量产品。',
      kh: 'ជាមួយបទពិសោធន៍ 15+ ឆ្នាំ យើងផ្គត់ផ្គង់ផលិតផលគុណភាពខ្ពស់ទូទាំងប្រទេស។',
    },
    vision:     { ko: '비전', en: 'Vision', zh: '愿景', kh: 'ចក្ខុវិស័យ' },
    visionText: {
      ko: '캄보디아의 선도적인 무역 회사가 되어, 고품질 제품과 건강 혜택 제품을 제공합니다.',
      en: 'To be a leading trading company in Cambodia, providing high-quality and health-benefit products.',
      zh: '成为柬埔寨领先的贸易公司，提供高质量和健康益处的产品。',
      kh: 'ដើម្បីក្លាយជាក្រុមហ៊ុនពាណិជ្ជកម្មឈានមុខគេនៅកម្ពុជា។',
    },
    mission:     { ko: '미션', en: 'Mission', zh: '使命', kh: 'បេសកកម្ម' },
    missionText: {
      ko: '우리는 수요를 따르지 않고, 수요를 창출합니다. 혁신적인 제품을 시장에 도입하고 소비자를 교육합니다.',
      en: 'We do not simply follow demand, but Create Demand. We bring innovative products to market and educate consumers.',
      zh: '我们不仅跟随需求，而是创造需求。我们将创新产品引入市场并教育消费者。',
      kh: 'យើងមិនគ្រាន់តែធ្វើតាមតម្រូវការ ប៉ុន្តែយើងបង្កើតតម្រូវការ។',
    },
    ceo:    { ko: 'CEO / 대표이사', en: 'President / CEO', zh: '总裁/CEO', kh: 'ប្រធាន/CEO' },
    ceoMsg: {
      ko: '현지화 전략과 강력한 네트워크로 귀사 브랜드를 캄보디아 국민 브랜드로 만들어 드립니다.',
      en: 'We architect your brand into a national icon through hyper-localization and our powerful network.',
      zh: '通过超本地化策略和强大网络，将您的品牌打造成柬埔寨国民品牌。',
      kh: 'យើងនឹងក្លាយជាដៃគូ បង្កើតម៉ាករបស់អ្នកតាមរយៈយុទ្ធសាស្ត្រមូលដ្ឋាន និងបណ្តាញរឹងមាំ។',
    },
    viewCeo: { ko: 'CEO 인사말', en: 'CEO Message', zh: 'CEO致辞', kh: 'សារ CEO' },
  };

  const fade = (delay = 0) =>
    `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="company" ref={sectionRef} className="py-20 md:py-28 lg:py-36 bg-mist relative overflow-hidden">
      {/* Subtle decor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-forest/5 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className={`mb-14 md:mb-20 ${fade()}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 text-forest text-xs font-bold tracking-widest uppercase mb-6">
            {content.sectionLabel[lang]}
          </span>
          <h2 className="font-display font-black tracking-tighter leading-[0.9] text-ink"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            <span className="block">{content.title1[lang]}</span>
            <span className="block text-forest">{content.title2[lang]}</span>
            {content.title3[lang] && <span className="block text-citrus">{content.title3[lang]}</span>}
          </h2>
          <p className="mt-6 text-ink/60 text-lg max-w-2xl leading-relaxed">{content.subtitle[lang]}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">

          {/* Large stat — employees */}
          <div className={`col-span-2 md:col-span-2 lg:col-span-2 rounded-3xl bg-forest text-white p-7 bento-card ${fade(100)}`}
            style={{ transitionDelay: '100ms' }}>
            <Users className="w-8 h-8 text-white/60 mb-4" />
            <div className="font-display font-black text-5xl md:text-6xl leading-none text-white mb-2">
              {employeeCount}+
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-white/70">
              {lang === 'ko' ? '임직원' : lang === 'zh' ? '员工' : lang === 'kh' ? 'បុគ្គលិក' : 'Employees'}
            </div>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              {lang === 'ko' ? '전국 유통망을 완벽하게 책임집니다.' : lang === 'zh' ? '完美守护全国分销网络。' : lang === 'kh' ? 'ការពារបណ្តាញចែកចាយជាតិ។' : 'Guarding our nationwide distribution network.'}
            </p>
          </div>

          {/* Warehouse */}
          <div className={`col-span-2 md:col-span-2 lg:col-span-2 rounded-3xl bg-white border border-mist p-7 bento-card ${fade(150)}`}
            style={{ transitionDelay: '150ms' }}>
            <Warehouse className="w-8 h-8 text-forest/50 mb-4" />
            <div className="font-display font-black text-4xl md:text-5xl text-ink leading-none mb-1">
              {warehouseCount.toLocaleString()}㎡
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-ink/40">
              {lang === 'ko' ? '창고 면적' : lang === 'zh' ? '仓库面积' : lang === 'kh' ? 'ឃ្លាំង' : 'Warehouse'}
            </div>
            <p className="text-ink/50 text-sm mt-3 leading-relaxed">
              {lang === 'ko' ? '확장 가능한 부지의 물류 센터' : lang === 'zh' ? '可扩展土地上的物流中心' : lang === 'kh' ? 'មជ្ឈមណ្ឌលដឹកជញ្ជូន' : 'Logistics center on expandable land'}
            </p>
          </div>

          {/* CEO card */}
          <div className={`col-span-2 md:col-span-4 lg:col-span-2 rounded-3xl bg-ink text-white p-7 bento-card ${fade(200)}`}
            style={{ transitionDelay: '200ms' }}>
            <div className="text-[10px] font-black uppercase tracking-widest text-citrus mb-2">{content.ceo[lang]}</div>
            <div className="font-display font-black text-2xl md:text-3xl text-white mb-3 leading-tight">Mr. Sok Samnang</div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">{content.ceoMsg[lang]}</p>
            <button
              onClick={() => { const el = document.getElementById('ceo'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-citrus text-xs font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
              style={{ minHeight: 44 }}
            >
              {content.viewCeo[lang]} →
            </button>
          </div>

          {/* Sub-distributors */}
          <div className={`col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-citrus text-white p-7 bento-card ${fade(250)}`}
            style={{ transitionDelay: '250ms' }}>
            <MapPin className="w-8 h-8 text-white/60 mb-4" />
            <div className="font-display font-black text-5xl md:text-6xl leading-none mb-2">{distributorCount}</div>
            <div className="text-xs font-black uppercase tracking-widest text-white/70">
              {lang === 'ko' ? '전국 총판' : lang === 'zh' ? '分销商' : lang === 'kh' ? 'អ្នកចែកចាយ' : 'Sub-Distributors'}
            </div>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              {lang === 'ko' ? '전국 24개 지역 네트워크' : lang === 'zh' ? '全国24个地区网络' : lang === 'kh' ? 'បណ្តាញ 24 តំបន់' : '24 regions nationwide'}
            </p>
          </div>

          {/* Trucks */}
          <div className={`col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-white border border-mist p-7 bento-card ${fade(300)}`}
            style={{ transitionDelay: '300ms' }}>
            <Truck className="w-8 h-8 text-citrus/60 mb-4" />
            <div className="font-display font-black text-4xl md:text-5xl text-ink leading-none mb-1">{truckCount}+</div>
            <div className="text-xs font-black uppercase tracking-widest text-ink/40">
              {lang === 'ko' ? '배송 트럭' : lang === 'zh' ? '送货车辆' : lang === 'kh' ? 'រថយន្ត' : 'Delivery Trucks'}
            </div>
            <p className="text-ink/50 text-sm mt-3 leading-relaxed">
              {lang === 'ko' ? '자체 차량 + 외주 시스템' : lang === 'zh' ? '自营+外包系统' : lang === 'kh' ? 'យានយន្ត + ប្រព័ន្ធក្រៅ' : 'Own fleet + outsourced'}
            </p>
          </div>

          {/* Vision */}
          <div className={`col-span-2 md:col-span-2 lg:col-span-3 rounded-3xl bg-white border border-mist p-7 bento-card ${fade(350)}`}
            style={{ transitionDelay: '350ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-forest/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-black text-ink text-lg">{content.vision[lang]}</h3>
            </div>
            <p className="text-ink/60 leading-relaxed text-sm md:text-base">{content.visionText[lang]}</p>
          </div>

          {/* Mission */}
          <div className={`col-span-2 md:col-span-2 lg:col-span-3 rounded-3xl bg-forest/5 border border-forest/15 p-7 bento-card ${fade(400)}`}
            style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-forest/15 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-black text-ink text-lg">{content.mission[lang]}</h3>
            </div>
            <p className="text-ink/60 leading-relaxed text-sm md:text-base">{content.missionText[lang]}</p>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent" />
    </section>
  );
};

export default CompanyOverview;
