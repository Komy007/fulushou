import React, { useState } from 'react';
import { Language } from '../types';
import { MapPin, Warehouse, Truck, Users, ArrowRight, Building2, Store, ChevronRight } from 'lucide-react';

interface DistributionNetworkProps {
  lang: Language;
}

const DistributionNetwork: React.FC<DistributionNetworkProps> = ({ lang }) => {
  const [activeFlow, setActiveFlow] = useState<number>(0);

  const content = {
    sectionLabel: { ko: '유통 네트워크', en: 'Distribution Network', zh: '分销网络', kh: 'បណ្តាញចែកចាយ' },
    title1: { ko: '캄보디아 전역을', en: 'Powerful Network', zh: '覆盖柬埔寨', kh: 'បណ្តាញ' },
    title2: { ko: '커버하는 강력한 네트워크.', en: 'Covering All Cambodia.', zh: '全境的网络。', kh: 'ដ៏រឹងមាំ។' },
    subtitle: {
      ko: '본사에서 전국 24개 총판, 145개 도매상을 통해 소비자에게 직접 전달',
      en: 'Direct delivery from HQ through 24 sub-distributors and 145 wholesalers to consumers',
      zh: '从总部通过24个分销商和145个批发商直接配送给消费者',
      kh: 'ការដឹកជញ្ជូនផ្ទាល់ពីការិយាល័យកណ្តាលតាមរយៈអ្នកចែកចាយ 24 និងអ្នកលក់ដុំ 145',
    },
    channelRatio: { ko: '유통 채널 비율', en: 'Distribution Channel Ratio', zh: '分销渠道比例', kh: 'សមាមាត្រឆានែល' },
    warehouses:   { ko: '물류 창고',     en: 'Warehouses',               zh: '物流仓库',   kh: 'ឃ្លាំង' },
    totalWh:      { ko: '총 창고 면적',   en: 'Total Warehouse Area',      zh: '总仓库面积', kh: 'ទំហំឃ្លាំងសរុប' },
    trucks:       { ko: '배송 트럭',      en: 'Trucks',                    zh: '送货车辆',   kh: 'រថយន្ត' },
    delivery:     { ko: '전국 배송',      en: 'Delivery',                  zh: '全国配送',   kh: 'ការដឹកជញ្ជូន' },
  };

  const flowSteps = [
    {
      icon: Building2,
      title:       { ko: '본사', en: 'Head Office', zh: '总部', kh: 'ការិយាល័យកណ្តាល' },
      subtitle:    { ko: '프놈펜', en: 'Phnom Penh', zh: '金边', kh: 'ភ្នំពេញ' },
      description: { ko: '중앙 물류 허브', en: 'Central Logistics Hub', zh: '中央物流中心', kh: 'មជ្ឈមណ្ឌលដឹកជញ្ជូន' },
    },
    {
      icon: MapPin,
      title:       { ko: '24개 총판', en: '24 Sub-Distributors', zh: '24个分销商', kh: 'អ្នកចែកចាយ 24' },
      subtitle:    { ko: '전국 24개 지방', en: '24 Provinces', zh: '24个省份', kh: 'ខេត្ត 24' },
      description: { ko: '지역별 물류 거점', en: 'Regional Logistics Points', zh: '区域物流据点', kh: 'ចំណុចដឹកជញ្ជូនតំបន់' },
    },
    {
      icon: Store,
      title:       { ko: '145+ 도매상', en: '145+ Wholesalers', zh: '145+批发商', kh: 'អ្នកលក់ដុំ 145+' },
      subtitle:    { ko: '도매 네트워크', en: 'Wholesale Network', zh: '批发网络', kh: 'បណ្តាញលក់ដុំ' },
      description: { ko: '지역 유통망', en: 'Local Distribution', zh: '本地分销', kh: 'ការចែកចាយមូលដ្ឋាន' },
    },
    {
      icon: Users,
      title:       { ko: '소매점', en: 'Retailers', zh: '零售商', kh: 'អ្នកលក់រាយ' },
      subtitle:    { ko: '전국 커버리지 95%+', en: '95%+ Coverage', zh: '95%+覆盖率', kh: 'គ្របដណ្តប់ 95%+' },
      description: { ko: '최종 소비자 접점', en: 'Consumer Touchpoint', zh: '消费者接触点', kh: 'ចំណុចទំនាក់ទំនងអ្នកប្រើប្រាស់' },
    },
  ];

  const distributionStats = [
    { label: { ko: '현대 유통', en: 'Modern Trade', zh: '现代贸易', kh: 'ពាណិជ្ជកម្មទំនើប' }, value: '5%' },
    { label: { ko: '일반 유통', en: 'General Trade', zh: '传统贸易', kh: 'ពាណិជ្ជកម្មទូទៅ' }, value: '95%' },
  ];

  const warehouses = [
    { name: 'Warehouse 1', location: 'Sen Sok',  size: '1,600㎡' },
    { name: 'Warehouse 2', location: 'Toul Kok', size: '500㎡'   },
    { name: 'Warehouse 3', location: 'Sen Sok',  size: '3,200㎡' },
  ];

  return (
    <section id="distribution" className="py-20 md:py-28 lg:py-36 bg-forest relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px] -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-20 scroll-reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <Truck className="w-3 h-3" />
            {content.sectionLabel[lang]}
          </span>
          <h2 className="font-display font-black tracking-tighter leading-[0.9] text-white mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}>
            <span className="block">{content.title1[lang]}</span>
            <span className="block text-white/60">{content.title2[lang]}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">{content.subtitle[lang]}</p>
        </div>

        {/* Flow Steps */}
        <div className="mb-12 md:mb-16">
          {/* Mobile vertical */}
          <div className="lg:hidden space-y-3">
            {flowSteps.map((step, i) => (
              <div key={i} className="relative">
                <button
                  onClick={() => setActiveFlow(i)}
                  className={`w-full p-4 rounded-2xl border transition-all text-left ${
                    activeFlow === i
                      ? 'bg-white/15 border-white/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                  style={{ minHeight: 44 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeFlow === i ? 'bg-citrus text-white' : 'bg-white/10 text-white/60'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-white text-base">{step.title[lang]}</div>
                      <div className="text-xs text-white/40 mt-0.5">{step.subtitle[lang]}</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-white/30 transition-transform ${activeFlow === i ? 'rotate-90' : ''}`} />
                  </div>
                  {activeFlow === i && (
                    <div className="mt-3 pt-3 border-t border-white/10 text-sm text-white/60">
                      {step.description[lang]}
                    </div>
                  )}
                </button>
                {i < flowSteps.length - 1 && (
                  <div className="absolute left-6 top-full h-3 w-px bg-white/20 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Desktop horizontal */}
          <div className="hidden lg:flex items-stretch justify-between gap-4">
            {flowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div
                  className={`flex-1 p-6 xl:p-8 rounded-3xl border transition-all hover:-translate-y-2 cursor-pointer ${
                    activeFlow === i ? 'bg-white/15 border-white/30' : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setActiveFlow(i)}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    activeFlow === i ? 'bg-citrus' : 'bg-white/10'
                  }`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{step.title[lang]}</h3>
                  <p className="text-sm text-white/40 mb-2">{step.subtitle[lang]}</p>
                  <p className="text-xs text-white/30">{step.description[lang]}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex items-center">
                    <ArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Stats & Warehouses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Channel ratio */}
          <div className="p-7 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="font-black text-white text-lg mb-6">{content.channelRatio[lang]}</h3>
            <div className="space-y-4">
              {distributionStats.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/50">{s.label[lang]}</span>
                    <span className="text-sm font-black text-white">{s.value}</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-citrus' : 'bg-white/40'}`}
                      style={{ width: s.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="font-display font-black text-3xl text-white">30+</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider mt-1">{content.trucks[lang]}</div>
              </div>
              <div className="text-center">
                <div className="font-display font-black text-3xl text-white">24h</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider mt-1">{content.delivery[lang]}</div>
              </div>
            </div>
          </div>

          {/* Warehouses */}
          <div className="p-7 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Warehouse className="w-5 h-5 text-white/50" />
              <h3 className="font-black text-white text-lg">{content.warehouses[lang]}</h3>
            </div>
            <div className="space-y-3 mb-5">
              {warehouses.map((wh, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div>
                    <div className="text-sm font-black text-white">{wh.name}</div>
                    <div className="text-xs text-white/30 mt-0.5">{wh.location}, Phnom Penh</div>
                  </div>
                  <div className="font-display font-black text-lg text-white/70">{wh.size}</div>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-2xl bg-citrus/20 border border-citrus/30 text-center">
              <div className="font-display font-black text-3xl text-white">5,300㎡+</div>
              <div className="text-xs text-white/50 mt-1">{content.totalWh[lang]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default DistributionNetwork;
