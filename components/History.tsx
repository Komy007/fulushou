import React, { useState, useEffect } from 'react';
import { Language, HistoryMilestone } from '../types';
import { TrendingUp, Award, Map, Rocket, ChevronRight, Star, MousePointer2, X } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

interface HistoryProps {
  lang: Language;
}

const History: React.FC<HistoryProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<HistoryMilestone>('leader');
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showMobileDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showMobileDetail]);

  const GROWTH_DATA = [
    { year: '1Yr', value: 10 },
    { year: '5Yr', value: 45 },
    { year: '10Yr', value: 78 },
    { year: '15Yr', value: 100 },
  ];

  const CONTENT = {
    start: {
      title: { ko: "1년차: 신화의 서막, 불가능에 도전하다", en: "Year 1: The Dawn of a Legend" },
      desc: {
        ko: "2000년대 후반, 캄보디아 시장은 글로벌 거대 브랜드들이 장악하고 있었습니다. 하지만 Fu Lu Shou는 캄보디아의 폭발적인 성장 잠재력과 한국의 7080 개발 연대 사이의 평행이론을 발견했습니다. '박카스'라는 한국의 국민 음료를 들고 CEO가 직접 24개 주 전역을 누비며, 길바닥의 흙먼지 속에서 현지 상인들과 형제애를 쌓았습니다. 이것이 오늘날 95% 커버리지 유통망의 전설적인 시작이었습니다.",
        en: "In the late 2000s, the Cambodian market was dominated by global giants. However, Fu Lu Shou discovered a parallel between Cambodia's potential and Korea's rapid growth era. Our CEO traversed all 24 provinces with Bacchus, building brotherhood with local merchants in the dust of the streets. This was the legendary beginning of a distribution network that now covers 95% of the nation."
      },
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      stats: { ko: "전국 거점망 확보 100%", en: "100% Core Hub Secured" }
    },
    growth: {
      title: { ko: "5년차: '박카스 신화'로 시장의 판도를 바꾸다", en: "Year 5: Rewriting Market Rules with Bacchus" },
      desc: {
        ko: "단순한 수입 판매를 넘어 '하이퍼 로컬라이제이션'을 단행했습니다. 한국의 병 형태를 과감히 버리고 현지 기후와 물류 환경에 최적화된 '캔 박카스'를 도입했습니다. 동시에 미디어 블로킹 전략을 통해 TV 광고 시장을 선점하며 레드불과 카라바오를 제치고 에너지 음료 시장 점유율 1위를 달성했습니다. 박카스는 캄보디아인들에게 단순한 음료가 아닌, '성공을 향한 에너지'라는 새로운 문화를 심어주었습니다.",
        en: "We moved beyond simple imports to 'Hyper-Localization'. We courageously abandoned the traditional Korean bottle for a 'Bacchus Can' optimized for the local climate. By monopolizing TV ad slots through 'Media Blocking', we overtook Red Bull and Carabao to reach No.1. Bacchus became more than a drink; it became a culture of 'Energy for Success' for Cambodians."
      },
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      stats: { ko: "캄보디아 에너지 음료 1위", en: "No.1 Energy Drink in Cambodia" }
    },
    expansion: {
      title: { ko: "10년차: 한국 대표 브랜드들의 성공 지름길이 되다", en: "Year 10: The Shortcut for Top Korean Brands" },
      desc: {
        ko: "박카스의 성공을 통해 입증된 Fu Lu Shou의 유통 파워는 농심 신라면, 동아오츠카 포카리스웨트, 오라떼 등 한국의 대표 식음료 브랜드들로 확장되었습니다. 우리는 단순히 물건을 배달하는 것이 아니라, 각 브랜드가 캄보디아 현지 시장에 어떻게 안착해야 하는지 그 '성공의 알고리즘'을 제공했습니다. 캄보디아 전역의 촘촘한 도소매 네트워크는 이제 어떤 제품도 24시간 내에 전국 어디든 전달할 수 있는 무적의 인프라가 되었습니다.",
        en: "Fu Lu Shou's proven distribution power expanded to iconic Korean brands like Shin Ramyun, Pocari Sweat, and Olatte. We don't just deliver goods; we provide the 'Success Algorithm' for each brand to land perfectly in the local market. Our dense wholesale and retail network became an invincible infrastructure capable of delivering any product nationwide within 24 hours."
      },
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
      stats: { ko: "식품/음료 유통망 장악력 1위", en: "No.1 F&B Distribution Dominance" }
    },
    leader: {
      title: { ko: "15년차: 독보적 1위, 성공을 보장하는 비즈니스 게이트웨이", en: "Year 15: Absolute Leader & Success Gateway" },
      desc: {
        ko: "오늘날 Fu Lu Shou는 캄보디아 진출을 원하는 모든 한국 기업에게 '성공의 보증수표'와 같습니다. 연간 2억 캔 이상의 판매 신화는 지금도 계속되고 있으며, 우리의 유통망은 캄보디아 경제의 혈관과도 같습니다. 우리는 지난 15년간 단 한 번도 성장을 멈춘 적이 없습니다. Fu Lu Shou와 함께한다는 것은 캄보디아 시장에서 이미 절반의 성공을 거두고 시작하는 것과 같습니다. 우리가 걸어온 발자취가 바로 당신의 미래 성공 전략입니다.",
        en: "Today, Fu Lu Shou is the 'Guarantee of Success' for any Korean company entering Cambodia. Our legend of selling 200M+ cans annually continues, and our network is the lifeblood of the economy. We haven't stopped growing for 15 years. Partnering with Fu Lu Shou means starting with 50% of the success already achieved. Our footsteps are your future success strategy."
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      stats: { ko: "전국 유통망 마켓 셰어 1위", en: "No.1 National Distribution Share" }
    }
  };

  const milestones: { id: HistoryMilestone, year: string, sub: string, icon: any, label: string }[] = [
    { id: 'start', year: 'Year 01', label: 'THE ORIGIN', sub: lang === Language.KO ? '개척과 도전의 시작' : 'The First Step', icon: Map },
    { id: 'growth', year: 'Year 05', label: 'MARKET NO.1', sub: lang === Language.KO ? '박카스 신화의 탄생' : 'Bacchus Legend', icon: Award },
    { id: 'expansion', year: 'Year 10', label: 'PORTFOLIO', sub: lang === Language.KO ? '한국 대표 브랜드 수입' : 'Brand Expansion', icon: Rocket },
    { id: 'leader', year: 'Year 15+', label: 'CHAMPION', sub: lang === Language.KO ? '압도적 유통 1위' : 'Total Leader', icon: TrendingUp },
  ];

  const current = CONTENT[activeTab];
  const activeMilestone = milestones.find(m => m.id === activeTab);

  const DetailContent = () => (
    <div key={activeTab} className="relative z-10 animate-fade-in-up h-full flex flex-col">
      <div className="flex justify-between items-end mb-8 lg:mb-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4 text-amber-700">
            <div className="w-12 h-[2px] bg-amber-600"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Milestone Details</span>
          </div>
          <h4 className="text-3xl lg:text-5xl font-black text-stone-900 font-serif leading-tight">
            {current.title[lang]}
          </h4>
        </div>
        <div className="text-stone-200 font-black text-6xl lg:text-7xl leading-none opacity-50 font-serif">
          {activeMilestone?.year.split(' ')[1] || ''}
        </div>
      </div>

      <p className="text-stone-700 text-lg lg:text-2xl leading-[1.6] mb-12 lg:mb-16 text-justify font-light">
        {current.desc[lang]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-8 lg:mb-16">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-64 lg:h-72 border-8 border-white">
          <img src={current.image} alt="History" className="w-full h-full object-cover" />
        </div>
        <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-stone-100 flex flex-col justify-center">
          <div className="text-amber-700/60 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Achievement</div>
          <div className="text-stone-900 text-3xl lg:text-4xl font-black mb-6">
            {current.stats[lang]}
          </div>
          <div className="flex flex-wrap gap-2">
            {['BACCHUS', 'SHIN RAMYUN', 'POCARI', 'OLATTE'].map(brand => (
              <span key={brand} className="px-4 py-1.5 bg-stone-900 text-white text-[9px] font-black rounded-full border border-amber-500/20">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-8 lg:p-10 shadow-xl border border-stone-100 mt-auto">
        <div className="flex justify-between items-end mb-10">
          <h5 className="text-stone-900 font-black text-xl lg:text-2xl flex items-center gap-3">
            <TrendingUp size={28} className="text-amber-600" />
            {lang === Language.KO ? '시장 영향력 지표' : 'Market Index'}
          </h5>
          <span className="text-3xl lg:text-4xl font-black text-amber-600 font-serif">TOP 1</span>
        </div>
        <div className="h-[200px] lg:h-[240px] w-full" style={{ minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%" minHeight={200}>
            <AreaChart data={GROWTH_DATA}>
              <defs>
                <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B45309" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#B45309" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F0EC" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#A8A29E', fontSize: 13, fontWeight: '900' }} />
              <YAxis hide />
              <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', backgroundColor: '#1C1917', color: '#fff' }} />
              <Area type="monotone" dataKey="value" stroke="#B45309" strokeWidth={5} fill="url(#colorGold)" animationDuration={2000} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  return (
    <section id="history" className="py-24 bg-[#F9F6F0] relative overflow-hidden">
      {/* Turtle Background Integration - Low Opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45] mix-blend-multiply"
        style={{
          backgroundImage: 'url(/img/backgrounds/turtles.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px] -mr-48 -mt-48 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-4xl">
            <h2 className="text-amber-800 font-black tracking-[0.3em] uppercase text-xs mb-4 flex items-center justify-center lg:justify-start gap-2">
              <Star className="w-4 h-4 fill-amber-800" /> SUCCESS ARCHIVE
            </h2>
            <h3 className="text-5xl lg:text-8xl font-black text-stone-900 mb-8 font-serif leading-none tracking-tighter">
              {lang === Language.KO ? '발자취' : 'History'}
            </h3>
            <p className="text-2xl text-stone-600 leading-relaxed font-light max-w-2xl border-l-4 border-amber-600/30 pl-8">
              {lang === Language.KO
                ? "단순한 유통을 넘어, 우리는 캄보디아 유통 시장의 신화를 썼습니다."
                : "Beyond logistics, we wrote the legend of the Cambodian market."}
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-2 text-amber-900 font-black text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2 animate-bounce">
              <MousePointer2 className="w-5 h-5" />
              <span>Select Milestone</span>
            </div>
            <div className="w-32 h-1 bg-amber-600/20 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* List/Menu Column: ALWAYS Visible */}
          <div className="lg:w-[400px] w-full flex flex-col gap-6">
            <div className="bg-[#EAE4D9] p-5 rounded-[2.5rem] border border-stone-200 shadow-xl space-y-4">
              {milestones.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveTab(m.id);
                    setShowMobileDetail(true);
                  }}
                  className={`w-full group relative flex items-center p-6 rounded-[1.8rem] transition-all duration-500 transform ${activeTab === m.id
                    ? 'bg-stone-900 shadow-[0_20px_40px_rgba(0,0,0,0.3)] ring-2 ring-amber-500 -translate-y-2 scale-[1.03]'
                    : 'bg-white border border-stone-100 hover:border-amber-400 hover:shadow-lg hover:-translate-y-1'
                    }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mr-5 shrink-0 transition-all duration-500 ${activeTab === m.id ? 'bg-amber-600 text-white rotate-3' : 'bg-stone-100 text-stone-400'
                    }`}>
                    <m.icon size={28} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className={`text-[9px] font-black uppercase tracking-widest mb-1.5 ${activeTab === m.id ? 'text-amber-400' : 'text-stone-400'}`}>
                      {m.label}
                    </div>
                    <div className={`text-lg font-black leading-tight tracking-tight ${activeTab === m.id ? 'text-white' : 'text-stone-800'}`}>
                      {m.sub}
                    </div>
                  </div>
                  <ChevronRight size={24} className={activeTab === m.id ? 'text-amber-500' : 'text-stone-300'} />
                </button>
              ))}
            </div>
            {/* Left Column Decor - Desktop Only */}
            <div className="hidden lg:flex p-10 bg-gradient-to-br from-stone-900 to-[#1A1816] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex-col justify-between h-full min-h-[300px]">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-amber-600 rounded-full text-[10px] font-black tracking-widest uppercase mb-6">
                  Verified Heritage
                </span>
                <h5 className="text-3xl font-black mb-6 leading-tight font-serif italic">
                  {lang === Language.KO ? "검증된\n성공의 방정식" : "Proven\nSuccess DNA"}
                </h5>
                <p className="text-stone-400 text-sm leading-relaxed font-medium">
                  {lang === Language.KO
                    ? "우리의 발자취는 귀사가 걸어갈 가장 안전한 지름길입니다."
                    : "Our footsteps are the safest shortcut for your journey."}
                </p>
              </div>
              <div className="mt-8 flex gap-2">
                {milestones.map(m => (
                  <div key={m.id} className={`h-1.5 rounded-full transition-all duration-500 ${activeTab === m.id ? 'w-10 bg-amber-500' : 'w-4 bg-stone-700'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Detail Content: Hidden on mobile */}
          <div className="hidden lg:block lg:flex-1 w-full">
            <div className="bg-[#FAF8F3] rounded-[3.5rem] p-16 border border-stone-200 shadow-2xl min-h-[850px] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/20 to-transparent rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <DetailContent />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MODAL POPUP */}
      {showMobileDetail && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
          <div className="bg-[#FAF8F3] w-full h-[90vh] sm:h-auto sm:max-h-[90vh] rounded-t-[2.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 overflow-y-auto relative shadow-2xl animate-slide-up">
            <button
              onClick={() => setShowMobileDetail(false)}
              className="absolute top-6 right-6 p-2 bg-stone-900 rounded-full text-white shadow-lg hover:bg-stone-700 transition z-50"
            >
              <X size={24} />
            </button>
            <DetailContent />

            {/* Bottom Close Button */}
            <button
              onClick={() => setShowMobileDetail(false)}
              className="w-full py-4 bg-stone-200 border-2 border-stone-300 text-stone-700 rounded-xl mt-8 font-black text-lg hover:bg-stone-300 transition shadow-sm"
            >
              {lang === Language.KO ? '닫기' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default History;