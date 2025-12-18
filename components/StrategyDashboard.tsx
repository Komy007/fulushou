import React, { useState } from 'react';
import { Language, StrategyType } from '../types';
import { Clock, Package, Megaphone, Truck, ArrowLeft } from 'lucide-react';
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
      title: { ko: "1. Market Insight: 시공간적 이식 (Time-Machine)", en: "1. Market Insight: Time-Machine Strategy" },
      desc: {
        ko: "캄보디아의 현재는 한국의 1970~80년대와 유사합니다. 연 7% 고성장, 건설 붐, 산업화 초기 단계는 '피로 회복' 수요를 폭발시켰습니다. **인구의 70%가 30대 이하**인 젊은 층을 타겟으로 한국의 성공 방정식을 이식했습니다.",
        en: "Cambodia today mirrors Korea in the 70s/80s. 7% growth, construction boom, and industrialization exploded the demand for 'fatigue recovery'. Targeting the **70% youth population**, we transplanted Korea's success formula."
      },
      chartData: [
        { name: 'Youth (<30)', value: 70 },
        { name: 'Over 30', value: 30 },
      ],
      colors: ['#D97706', '#44403C']
    },
    product: {
      title: { ko: "2. Product: 과감한 현지화 (Bottle to Can)", en: "2. Product: Radical Localization (Bottle to Can)" },
      desc: {
        ko: "한국의 상징인 '갈색 병'을 버리고 **'캔'**을 선택했습니다. 열악한 도로 사정으로 인한 파손을 막고, 냉장고가 없는 소매점의 아이스박스 보관 환경(물에 젖는 종이 라벨 문제)을 극복하기 위한 혁신이었습니다.",
        en: "We ditched the iconic 'Brown Bottle' for the **'Can'**. This innovation prevented breakage on rough roads and solved the label-peeling issue in iceboxes used by local shops without fridges."
      },
      chartData: [
        { name: 'Durability', value: 40 },
        { name: 'Brand Vis.', value: 35 },
        { name: 'Logistics', value: 25 },
      ],
      colors: ['#B45309', '#F59E0B', '#FCD34D']
    },
    promotion: {
      title: { ko: "3. Promotion: 미디어 블로킹 (Media Blocking)", en: "3. Promotion: Media Blocking" },
      desc: {
        ko: "한국의 1/10 수준인 저렴한 TV 광고비를 역이용하여, 프라임 타임 광고 슬롯을 연단위로 선점(Blocking)했습니다. 경쟁사의 노출 기회를 원천 봉쇄하여 **'에너지 드링크 = 박카스'**라는 공식을 각인시켰습니다.",
        en: "Leveraging low TV ad costs (1/10 of Korea), we blocked prime-time slots year-round. This **'Media Blocking'** shut out competitors and cemented the formula: **'Energy Drink = Bacchus'**."
      },
      chartData: [
        { name: 'Bacchus', value: 90 },
        { name: 'Others', value: 10 },
      ],
      colors: ['#D97706', '#57534E']
    },
    place: {
      title: { ko: "4. Place: 유통 이원화 (Dual Track)", en: "4. Place: Dual Track Distribution" },
      desc: {
        ko: "<strong>수도권(프놈펜)은 직영</strong>으로 정밀 타격하고, <strong>지방은 24개 총판</strong>을 통해 커버리지를 극대화했습니다. 이는 물류비 절감과 외상 리스크를 동시에 해결한 한국형 유통의 현지화 모델입니다.",
        en: "<strong>Direct Management</strong> in Phnom Penh for precision, and <strong>24 Distributors</strong> for provincial coverage. This Dual Track system optimized logistics costs and minimized credit risks."
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
        <span className="inline-block px-3 py-1 bg-amber-900/50 text-amber-500 text-xs font-bold rounded mb-4 border border-amber-700/50">STRATEGIC ANALYSIS</span>
        <h3 className="text-2xl font-bold text-white mb-4">{currentData.title[lang]}</h3>
        <div className="text-stone-300 mb-6 leading-relaxed text-sm lg:text-base">
          {renderDescription(currentData.desc[lang])}
        </div>
      </div>

      <div className="w-full h-[320px] bg-stone-800 rounded-lg p-4 relative" style={{ minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={320}>
          {(activeTab === 'market' || activeTab === 'place') ? (
            <BarChart data={currentData.chartData} key={`bar-${activeTab}`}>
              <XAxis dataKey="name" stroke="#A8A29E" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#A8A29E" fontSize={12} tickLine={false} axisLine={false} />
              <RechartsTooltip
                contentStyle={{ backgroundColor: '#292524', borderColor: '#44403C', color: '#fff' }}
                itemStyle={{ color: '#FCD34D' }}
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
                contentStyle={{ backgroundColor: '#292524', borderColor: '#44403C', color: '#fff' }}
                itemStyle={{ color: '#FCD34D' }}
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
    <section id="strategy" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-amber-500 font-bold tracking-wider text-sm">CASE STUDY: BACCHUS</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-2 mb-6">
            {lang === Language.KO ? '박카스 신화: 4P 믹스의 재구성' : 'The Bacchus Legend: Reconstructing the 4P Mix'}
          </h2>
          <p className="text-stone-400 max-w-3xl text-lg">
            {lang === Language.KO
              ? "한국의 1970년대 성공 방정식을 캄보디아에 적용한 '시공간적 이식 전략'과 철저한 '하이퍼 로컬라이제이션'의 결합."
              : "A perfect fusion of 'Time-Machine Strategy'—applying Korea's 1970s success formula—and thorough 'Hyper-Localization'."}
          </p>
        </div>

        <div className="bg-stone-800 rounded-2xl p-6 lg:p-10 border border-stone-700 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* List Column: Always visible */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              <button
                onClick={() => { setActiveTab('market'); setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group ${activeTab === 'market' ? 'bg-stone-700 border-amber-600 ring-1 ring-amber-600' : 'border-stone-600 hover:bg-stone-700'}`}
              >
                <div>
                  <div className={`font-bold transition ${activeTab === 'market' ? 'text-amber-400' : 'text-stone-300 group-hover:text-amber-400'}`}>1. Market Insight</div>
                  <div className="text-xs text-stone-500 mt-1">Time-Machine Strategy</div>
                </div>
                <Clock className={`w-6 h-6 ${activeTab === 'market' ? 'text-amber-400' : 'text-stone-500 group-hover:text-amber-400'}`} />
              </button>

              <button
                onClick={() => { setActiveTab('product'); setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group ${activeTab === 'product' ? 'bg-stone-700 border-amber-600 ring-1 ring-amber-600' : 'border-stone-600 hover:bg-stone-700'}`}
              >
                <div>
                  <div className={`font-bold transition ${activeTab === 'product' ? 'text-amber-400' : 'text-stone-300 group-hover:text-amber-400'}`}>2. Product</div>
                  <div className="text-xs text-stone-500 mt-1">Bottle to Can Conversion</div>
                </div>
                <Package className={`w-6 h-6 ${activeTab === 'product' ? 'text-amber-400' : 'text-stone-500 group-hover:text-amber-400'}`} />
              </button>

              <button
                onClick={() => { setActiveTab('promotion'); setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group ${activeTab === 'promotion' ? 'bg-stone-700 border-amber-600 ring-1 ring-amber-600' : 'border-stone-600 hover:bg-stone-700'}`}
              >
                <div>
                  <div className={`font-bold transition ${activeTab === 'promotion' ? 'text-amber-400' : 'text-stone-300 group-hover:text-amber-400'}`}>3. Promotion</div>
                  <div className="text-xs text-stone-500 mt-1">Media Blocking & Sports</div>
                </div>
                <Megaphone className={`w-6 h-6 ${activeTab === 'promotion' ? 'text-amber-400' : 'text-stone-500 group-hover:text-amber-400'}`} />
              </button>

              <button
                onClick={() => { setActiveTab('place'); setShowMobileDetail(true); }}
                className={`text-left p-5 rounded-xl border transition flex items-center justify-between group ${activeTab === 'place' ? 'bg-stone-700 border-amber-600 ring-1 ring-amber-600' : 'border-stone-600 hover:bg-stone-700'}`}
              >
                <div>
                  <div className={`font-bold transition ${activeTab === 'place' ? 'text-amber-400' : 'text-stone-300 group-hover:text-amber-400'}`}>4. Place</div>
                  <div className="text-xs text-stone-500 mt-1">Dual Track System</div>
                </div>
                <Truck className={`w-6 h-6 ${activeTab === 'place' ? 'text-amber-400' : 'text-stone-500 group-hover:text-amber-400'}`} />
              </button>
            </div>

            {/* Desktop Detail Content: Hidden on mobile */}
            <div className="hidden lg:flex w-full lg:w-2/3 bg-stone-900 rounded-xl p-6 border border-stone-700 relative flex-col">
              {renderDetailContent()}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MODAL */}
      {showMobileDetail && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
          <div className="bg-stone-900 w-full h-[85vh] sm:h-auto sm:max-h-[90vh] rounded-t-2xl sm:rounded-2xl p-6 overflow-y-auto relative border border-stone-700 animate-slide-up">
            <button
              onClick={() => setShowMobileDetail(false)}
              className="absolute top-4 right-4 p-2 bg-stone-800 rounded-full text-stone-400 hover:text-white transition"
            >
              <ArrowLeft className="w-6 h-6" /> {/* Using ArrowLeft as 'Back' semantics, or X */}
            </button>
            <div className="mt-8">
              {renderDetailContent()}

              {/* Bottom Close Button */}
              <button
                onClick={() => setShowMobileDetail(false)}
                className="w-full py-4 bg-stone-700 border border-stone-600 text-white rounded-xl mt-8 font-black text-lg hover:bg-stone-600 transition shadow-lg"
              >
                {lang === Language.KO ? '닫기' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StrategyDashboard;