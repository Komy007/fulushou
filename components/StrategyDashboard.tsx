import React, { useState } from 'react';
import { Language, StrategyType } from '../types';
import { Clock, Package, Megaphone, Truck, ArrowLeft, Zap } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell,
  PieChart, Pie
} from 'recharts';

interface StrategyDashboardProps {
  lang: Language;
}

const StrategyDashboard: React.FC<StrategyDashboardProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<StrategyType>('market');
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const DATA = {
    market: {
      title: {
        ko: "1. Market Insight: 시공간적 이식 (Time-Machine)",
        en: "1. Market Insight: Time-Machine Strategy",
        zh: "1. 市场洞察：时空移植战略",
        kh: "1. ការវិភាគទីផ្សារ៖ យុទ្ធសាស្ត្រម៉ាស៊ីនពេលវេលា"
      },
      desc: {
        ko: "캄보디아의 현재는 한국의 1970~80년대와 유사합니다. 연 7% 고성장, 건설 붐, 산업화 초기 단계는 '피로 회복' 수요를 폭발시켰습니다.",
        en: "Cambodia today mirrors Korea in the 70s/80s. 7% growth, construction boom, and industrialization exploded the demand for 'fatigue recovery'.",
        zh: "今天的柬埔寨与70/80年代的韩国相似。7%的增长、建筑热潮和工业化使'抗疲劳'需求爆炸式增长。",
        kh: "កម្ពុជាសព្វថ្ងៃមានលក្ខណៈស្រដៀងគ្នាកូរ៉េនៅឆ្នាំ 70/80។ កំណើន 7% គម្រោងសំណង់ និងឧស្សាហកម្មបានផ្ទុះនូវតម្រូវការ 'ស្ដារហាត់អារម្មណ៍'។"
      },
      chartData: [
        { name: 'Youth (<30)', value: 70 },
        { name: 'Over 30', value: 30 },
      ],
      colors: ['#D97706', '#44403C']
    },
    product: {
      title: {
        ko: "2. Product: 과감한 현지화 (Bottle to Can)",
        en: "2. Product: Radical Localization (Bottle to Can)",
        zh: "2. 产品：彻底本地化（瓶转罐）",
        kh: "2. ផលិតផល៖ មូលដ្ឋានីយកម្មហួសពេក (ដបទៅកំប៉ុង)"
      },
      desc: {
        ko: "한국의 상징인 '갈색 병'을 버리고 '캔'을 선택했습니다. 열악한 도로 사정으로 인한 파손을 막고, 냉장고가 없는 소매점의 아이스박스 보관 환경을 극복했습니다.",
        en: "We ditched the iconic 'Brown Bottle' for the 'Can'. This innovation prevented breakage on rough roads and solved the label-peeling issue in iceboxes.",
        zh: "我们放弃了标志性的'棕色瓶'，选择了'罐'。这项创新防止了在崎岖道路上的破损，解决了冰箱中标签剥落的问题。",
        kh: "យើងបានបោះបង់ 'ដបត្នោត' សម្រាប់ 'កំប៉ុង'។ ការបង្កើតថ្មីនេះបានបង្ការការបំបែកនៅលើផ្លូវមិនរាបរិន។"
      },
      chartData: [
        { name: 'Durability', value: 40 },
        { name: 'Brand Vis.', value: 35 },
        { name: 'Logistics', value: 25 },
      ],
      colors: ['#B45309', '#F59E0B', '#FCD34D']
    },
    promotion: {
      title: {
        ko: "3. Promotion: 미디어 블로킹 (Media Blocking)",
        en: "3. Promotion: Media Blocking",
        zh: "3. 促销：媒体封锁",
        kh: "3. ការផ្សែងផ្សាយ៖ Media Blocking"
      },
      desc: {
        ko: "한국의 1/10 수준인 저렴한 TV 광고비를 역이용하여, 프라임 타임 광고 슬롯을 연단위로 선점(Blocking)했습니다.",
        en: "Leveraging low TV ad costs (1/10 of Korea), we blocked prime-time slots year-round. This shut out competitors and cemented 'Energy Drink = Bacchus'.",
        zh: "利用低廉的电视广告费用（韩国的1/10），我们全年封锁了黄金时段。这封锁了竞争对手，并确立了'能量饮料=百事'。",
        kh: "ប្រើប្រាស់តម្លៃខ្សុសនៃការផ្សាយTV (1/10 នៃកូរ៉េ) យើងបានបិទទ្វារពេលវេលាកំពូលពេញឆ្នាំ។"
      },
      chartData: [
        { name: 'Bacchus', value: 90 },
        { name: 'Others', value: 10 },
      ],
      colors: ['#D97706', '#57534E']
    },
    place: {
      title: {
        ko: "4. Place: 유통 이원화 (Dual Track)",
        en: "4. Place: Dual Track Distribution",
        zh: "4. 渠道：双轨分销",
        kh: "4. ទីកន្លែង៖ ការចែកចាយគូសង្ខេគ"
      },
      desc: {
        ko: "수도권(프놌펜)은 직영으로 정밀 타격하고, 지방은 24개 총판을 통해 커버리지를 극대화했습니다.",
        en: "Direct Management in Phnom Penh for precision, and 24 Distributors for provincial coverage. This Dual Track system optimized logistics costs.",
        zh: "金边直接管理以确保精准，24个分销商覆盖各省。这种双轨系统优化了物流成本。",
        kh: "ការគ្រប់គ្រងផ្ទាល់នៅភ្នំពេញសម្រាប់ប្រាកដព្រៈចិត្ត និង 24 អ្នកចែកចាយសម្រាប់គ្រប់គ្រងខេត្ត។"
      },
      chartData: [
        { name: 'Phnom Penh', value: 95 },
        { name: 'Provinces', value: 88 },
      ],
      colors: ['#92400E', '#FBBF24']
    }
  };

  const currentData = DATA[activeTab];

  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*|<strong>|<\/strong>)/g);
    return parts.map((part, index) => {
      if (part === '**' || part === '<strong>' || part === '</strong>') return null;
      if (index > 0 && (parts[index - 1] === '**' || parts[index - 1] === '<strong>')) {
        return <strong key={index} className="text-white">{part}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const renderDetailContent = () => (
    <>
      <div className="mb-6 animate-fade-in-up">
        <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded mb-4 border border-amber-200">STRATEGIC ANALYSIS</span>
        <h3 className="text-2xl font-bold text-stone-900 mb-4">{currentData.title[lang]}</h3>
        <div className="text-stone-700 mb-6 leading-relaxed text-sm lg:text-base">
          {renderDescription(currentData.desc[lang])}
        </div>
      </div>

      <div className="w-full h-[320px] bg-stone-100 rounded-lg p-4 relative" style={{ minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={320}>
          {(activeTab === 'market' || activeTab === 'place') ? (
            <BarChart data={currentData.chartData} key={`bar-${activeTab}`}>
              <XAxis dataKey="name" stroke="#A8A29E" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#A8A29E" fontSize={12} tickLine={false} axisLine={false} />
              <RechartsTooltip
                contentStyle={{ backgroundColor: '#F5F5F4', borderColor: '#D6D3D1', color: '#1C1917' }}
                itemStyle={{ color: '#B45309' }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {currentData.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={currentData.colors[index % currentData.colors.length]} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart key={`pie-${activeTab}`}>
              <RechartsTooltip
                contentStyle={{ backgroundColor: '#F5F5F4', borderColor: '#D6D3D1', color: '#1C1917' }}
                itemStyle={{ color: '#B45309' }}
              />
              <Pie
                data={currentData.chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
              >
                {currentData.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={currentData.colors[index % currentData.colors.length]} />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </>
  );

  return (
    <section id="strategy" className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 scroll-reveal">
          <span className="text-amber-700 font-bold tracking-wider text-sm">CASE STUDY: BACCHUS</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-2 mb-6 text-stone-900">
            {lang === 'ko' ? '박카스 신화: 4P 믹스의 재구성' : lang === 'zh' ? '百事传奇：4P组合的重构' : lang === 'kh' ? 'រឿងព្រេង Bacchus: ការកសាង 4P ឡើងវិញ' : 'The Bacchus Legend: Reconstructing the 4P Mix'}
          </h2>
          <p className="text-stone-600 max-w-3xl text-lg">
            {lang === 'ko'
              ? "한국의 1970년대 성공 방정식을 캄보디아에 적용한 '시공간적 이식 전략'과 철저한 '하이퍼 로컬라이제이션'의 결합."
              : lang === 'zh'
                ? "将韩国70年代成功公式应用于柬埔寨的'时空移植战略'与彻底'超本地化'的完美结合。"
                : lang === 'kh'
                  ? "ការរួមបញ្ចូលគ្នាហួសពេកនៃ 'យុទ្ធសាស្ត្រម៉ាស៊ីនពេលវេលា' - ការអនុវត្តន៍រូបមន្តជោគជ័យកូរ៉េឆ្នាំ 70 - និង 'Hyper-Localization' ហ្មត់ចត់។"
                  : "A perfect fusion of 'Time-Machine Strategy'—applying Korea's 1970s success formula—and thorough 'Hyper-Localization'."}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 lg:p-10 border border-stone-200 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* List Column: Always visible */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              <button
                onClick={() => { setActiveTab('market'); if (window.innerWidth < 1024) setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group relative overflow-hidden ${activeTab === 'market' ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500' : 'border-stone-200 hover:bg-stone-50'}`}
              >
                {/* Persistent Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="relative z-10">
                  <div className={`font-bold transition ${activeTab === 'market' ? 'text-amber-600' : 'text-stone-700 group-hover:text-amber-600'}`}>1. Market Insight</div>
                  <div className="text-xs text-stone-500 mt-1 uppercase tracking-tighter">Time-Machine Strategy</div>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <Clock className={`w-6 h-6 ${activeTab === 'market' ? 'text-amber-600' : 'text-stone-400 group-hover:text-amber-600'}`} />
                  <div className="flex flex-col items-center border-l border-stone-200 pl-4">
                    <Zap className={`w-4 h-4 mb-0.5 animate-pulse ${activeTab === 'market' ? 'text-amber-600' : 'text-stone-400'}`} />
                    <span className="text-[8px] font-black text-amber-500/60 tracking-tight">ANALYSIS</span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setActiveTab('product'); if (window.innerWidth < 1024) setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group relative overflow-hidden ${activeTab === 'product' ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500' : 'border-stone-200 hover:bg-stone-50'}`}
              >
                {/* Persistent Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="relative z-10">
                  <div className={`font-bold transition ${activeTab === 'product' ? 'text-amber-600' : 'text-stone-700 group-hover:text-amber-600'}`}>2. Product</div>
                  <div className="text-xs text-stone-500 mt-1 uppercase tracking-tighter">Bottle to Can Conversion</div>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <Package className={`w-6 h-6 ${activeTab === 'product' ? 'text-amber-600' : 'text-stone-400 group-hover:text-amber-600'}`} />
                  <div className="flex flex-col items-center border-l border-stone-200 pl-4">
                    <Zap className={`w-4 h-4 mb-0.5 animate-pulse ${activeTab === 'product' ? 'text-amber-600' : 'text-stone-400'}`} />
                    <span className="text-[8px] font-black text-amber-500/60 tracking-tight">ANALYSIS</span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setActiveTab('promotion'); if (window.innerWidth < 1024) setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group relative overflow-hidden ${activeTab === 'promotion' ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500' : 'border-stone-200 hover:bg-stone-50'}`}
              >
                {/* Persistent Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="relative z-10">
                  <div className={`font-bold transition ${activeTab === 'promotion' ? 'text-amber-600' : 'text-stone-700 group-hover:text-amber-600'}`}>3. Promotion</div>
                  <div className="text-xs text-stone-500 mt-1 uppercase tracking-tighter">Media Blocking & Sports</div>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <Megaphone className={`w-6 h-6 ${activeTab === 'promotion' ? 'text-amber-600' : 'text-stone-400 group-hover:text-amber-600'}`} />
                  <div className="flex flex-col items-center border-l border-stone-200 pl-4">
                    <Zap className={`w-4 h-4 mb-0.5 animate-pulse ${activeTab === 'promotion' ? 'text-amber-600' : 'text-stone-400'}`} />
                    <span className="text-[8px] font-black text-amber-500/60 tracking-tight">ANALYSIS</span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setActiveTab('place'); if (window.innerWidth < 1024) setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group relative overflow-hidden ${activeTab === 'place' ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500' : 'border-stone-200 hover:bg-stone-50'}`}
              >
                {/* Persistent Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="relative z-10">
                  <div className={`font-bold transition ${activeTab === 'place' ? 'text-amber-600' : 'text-stone-700 group-hover:text-amber-600'}`}>4. Place</div>
                  <div className="text-xs text-stone-500 mt-1 uppercase tracking-tighter">Dual Track System</div>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <Truck className={`w-6 h-6 ${activeTab === 'place' ? 'text-amber-600' : 'text-stone-400 group-hover:text-amber-600'}`} />
                  <div className="flex flex-col items-center border-l border-stone-200 pl-4">
                    <Zap className={`w-4 h-4 mb-0.5 animate-pulse ${activeTab === 'place' ? 'text-amber-600' : 'text-stone-400'}`} />
                    <span className="text-[8px] font-black text-amber-500/60 tracking-tight">ANALYSIS</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Detail Content: Hidden on mobile */}
            <div className="hidden lg:flex w-full lg:w-2/3 bg-stone-50 rounded-xl p-6 border border-stone-200 relative flex-col">
              {renderDetailContent()}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE INLINE DETAIL */}
      {showMobileDetail && (
        <div className="lg:hidden mt-6 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xl">
            {renderDetailContent()}
            <button
              onClick={() => setShowMobileDetail(false)}
              className="w-full py-3 bg-stone-100 border border-stone-200 text-stone-700 rounded-xl mt-6 font-bold text-base hover:bg-stone-200 transition"
            >
              {lang === Language.KO ? '닫기' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StrategyDashboard;