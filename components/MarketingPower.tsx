import React, { useState } from 'react';
import { Language } from '../types';
import { Tv, Target, Users, Megaphone, Share2, Calendar, ChevronRight, Play } from 'lucide-react';
import MarketingModal from './MarketingModal';

interface MarketingPowerProps {
    lang: Language;
}

const MarketingPower: React.FC<MarketingPowerProps> = ({ lang }) => {
    const [activeTab, setActiveTab] = useState<'atl' | 'btl' | 'digital'>('atl');
    const [showModal, setShowModal] = useState(false);

    const content = {
        sectionLabel: {
            ko: '마케팅 파워',
            en: 'Marketing Power',
            zh: '营销力量',
            kh: 'អំណាចទីផ្សារ'
        },
        title: {
            ko: '360° 통합 마케팅 커뮤니케이션',
            en: '360° Integrated Marketing Communication',
            zh: '360°整合营销传播',
            kh: 'ទំនាក់ទំនងទីផ្សាររួម 360°'
        },
        subtitle: {
            ko: 'ATL, BTL, 디지털을 아우르는 강력한 마케팅 역량으로 브랜드 인지도를 극대화합니다.',
            en: 'Maximize brand awareness with powerful marketing capabilities spanning ATL, BTL, and Digital.',
            zh: '凭借覆盖ATL、BTL和数字化的强大营销能力，最大化品牌知名度。',
            kh: 'បង្កើនការយល់ដឹងម៉ាកយីហោជាមួយសមត្ថភាពទីផ្សារដ៏រឹងមាំ។'
        }
    };

    const tabs = [
        {
            id: 'atl',
            label: { ko: 'ATL', en: 'ATL', zh: 'ATL', kh: 'ATL' },
            fullLabel: { ko: 'Above The Line', en: 'Above The Line', zh: '线上广告', kh: 'លើខ្សែ' },
            icon: Tv,
            color: 'from-amber-600 to-amber-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/30',
            stats: [
                { value: '2,000+', label: { ko: 'TV 광고 스팟/월', en: 'TV Spots/Month', zh: '电视广告位/月', kh: 'កន្លែងទូរទស្សន៍/ខែ' } },
                { value: '8', label: { ko: 'Top TV 채널', en: 'Top TV Channels', zh: '顶级电视频道', kh: 'ប៉ុស្តិ៍ទូរទស្សន៍កំពូល' } },
                { value: '15+', label: { ko: '빌보드 위치', en: 'Billboard Locations', zh: '广告牌位置', kh: 'ទីតាំងផ្ទាំងផ្សាយ' } },
            ],
            items: [
                { ko: 'TV 광고 제작 및 방영', en: 'TV Commercial Production & Broadcasting', zh: '电视广告制作与播放', kh: 'ផលិតកម្មផ្សាយពាណិជ្ជកម្មទូរទស្សន៍' },
                { ko: '프라임 타임 광고 슬롯 선점', en: 'Prime Time Slot Blocking', zh: '黄金时段广告位占领', kh: 'ការទប់ស្កាត់ពេលវេលាមាស' },
                { ko: '옥외 빌보드 광고', en: 'Outdoor Billboard Advertising', zh: '户外广告牌', kh: 'ការផ្សាយពាណិជ្ជកម្មផ្ទាំងផ្សាយ' },
                { ko: '콘서트 및 이벤트 스폰서십', en: 'Concert & Event Sponsorship', zh: '演唱会和活动赞助', kh: 'ការឧបត្ថម្ភគម្រោង' },
            ]
        },
        {
            id: 'btl',
            label: { ko: 'BTL', en: 'BTL', zh: 'BTL', kh: 'BTL' },
            fullLabel: { ko: 'Below The Line', en: 'Below The Line', zh: '线下广告', kh: 'ក្រោមខ្សែ' },
            icon: Target,
            color: 'from-amber-600 to-amber-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/30',
            stats: [
                { value: '100+', label: { ko: '샘플링 이벤트/년', en: 'Sampling Events/Year', zh: '试用活动/年', kh: 'ព្រឹត្តិការណ៍សាកល្បង/ឆ្នាំ' } },
                { value: '50+', label: { ko: '부스 활동/년', en: 'Booth Activities/Year', zh: '展位活动/年', kh: 'សកម្មភាពបូត/ឆ្នាំ' } },
                { value: '1000+', label: { ko: '진열 매장', en: 'Merchandised Stores', zh: '陈列店铺', kh: 'ហាងដែលបានដាក់លក់' } },
            ],
            items: [
                { ko: '시장 및 슈퍼마켓 샘플링', en: 'Market & Supermarket Sampling', zh: '市场和超市试用', kh: 'ការសាកល្បងផ្សារ និងផ្សារទំនើប' },
                { ko: '매장 디스플레이 및 POSM', en: 'Store Display & POSM', zh: '店铺陈列和POSM', kh: 'ការដាក់បង្ហាញហាង និង POSM' },
                { ko: '이벤트 부스 운영', en: 'Event Booth Operations', zh: '活动展位运营', kh: 'ប្រតិបត្តិការបូតព្រឹត្តិការណ៍' },
                { ko: '프로모션 캠페인', en: 'Promotional Campaigns', zh: '促销活动', kh: 'យុទ្ធនាការផ្សព្វផ្សាយ' },
            ]
        },
        {
            id: 'digital',
            label: { ko: '디지털', en: 'Digital', zh: '数字', kh: 'ឌីជីថល' },
            fullLabel: { ko: 'Digital Marketing', en: 'Digital Marketing', zh: '数字营销', kh: 'ទីផ្សារឌីជីថល' },
            icon: Share2,
            color: 'from-rose-600 to-rose-500',
            bgColor: 'bg-rose-500/10',
            borderColor: 'border-rose-500/30',
            stats: [
                { value: '500K+', label: { ko: 'Facebook 팔로워', en: 'Facebook Followers', zh: 'Facebook粉丝', kh: 'អ្នកតាមដាន Facebook' } },
                { value: '50+', label: { ko: 'KOL 파트너십', en: 'KOL Partnerships', zh: 'KOL合作', kh: 'ភាពជាដៃគូ KOL' } },
                { value: '10M+', label: { ko: '월간 리치', en: 'Monthly Reach', zh: '月覆盖人数', kh: 'ការឈានដល់ប្រចាំខែ' } },
            ],
            items: [
                { ko: 'Facebook 커뮤니티 운영', en: 'Facebook Community Management', zh: 'Facebook社区管理', kh: 'ការគ្រប់គ្រងសហគមន៍ Facebook' },
                { ko: 'KOL/인플루언서 마케팅', en: 'KOL/Influencer Marketing', zh: 'KOL/网红营销', kh: 'ទីផ្សារ KOL/អ្នកមានឥទ្ធិពល' },
                { ko: '웹 시리즈 및 콘텐츠', en: 'Web Series & Content', zh: '网络剧和内容', kh: 'រឿងភាគនិងមាតិកា' },
                { ko: '시즌 프로모션 캠페인', en: 'Seasonal Promotion Campaigns', zh: '季节性促销活动', kh: 'យុទ្ធនាការផ្សព្វផ្សាយតាមរដូវ' },
            ]
        }
    ];

    const activeTabData = tabs.find(t => t.id === activeTab);

    return (
        <section id="marketing" className="py-16 md:py-24 lg:py-32 bg-stone-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-amber-500/5 rounded-full blur-[100px]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 scroll-reveal">
                    <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        <Megaphone className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
                        {content.title[lang]}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-3xl mx-auto">
                        {content.subtitle[lang]}
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 'atl' | 'btl' | 'digital')}
                            className={`px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === tab.id
                                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                                : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600'
                                }`}
                        >
                            <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-base">{tab.label[lang]}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTabData && (
                    <div className={`p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl ${activeTabData.bgColor} border ${activeTabData.borderColor} transition-all`}>
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${activeTabData.color} flex items-center justify-center`}>
                                <activeTabData.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-white">{activeTabData.label[lang]}</h3>
                                <p className="text-xs md:text-sm text-stone-500">{activeTabData.fullLabel[lang]}</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
                            {activeTabData.stats.map((stat, index) => (
                                <div key={index} className="text-center p-3 md:p-4 bg-stone-900/50 rounded-xl">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                    <div className="text-[9px] md:text-xs text-stone-500 uppercase tracking-wide">{stat.label[lang]}</div>
                                </div>
                            ))}
                        </div>

                        {/* Items List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {activeTabData.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 md:p-4 bg-stone-900/30 rounded-xl border border-stone-800/50 hover:border-stone-600 transition-all"
                                >
                                    <ChevronRight className="w-4 h-4 text-stone-600 flex-shrink-0" />
                                    <span className="text-sm md:text-base text-stone-300">{item[lang]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Event Gallery */}
                <div className="mt-12 md:mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                            {lang === 'ko' ? 'Bacchus Tour Concert: The Legacy of Power' : lang === 'zh' ? 'Bacchus巡回演唱会：力量的传承' : lang === 'kh' ? 'Bacchus Tour Concert: ដាក់ថាមពល' : 'Bacchus Tour Concert: The Legacy of Power'}
                        </h3>
                        <p className="text-stone-500 text-sm md:text-base">
                            {lang === 'ko' ? '캄보디아 전역을 대상으로 한 대규모 콘서트 및 이벤트 스폰서십' : lang === 'zh' ? '覆盖柬埔寨全国的大型演唱会和活动赞助' : lang === 'kh' ? 'ការឧបត្ថម្ភគម្រោងពេញប្រទេសកម្ពុជា' : 'Major concert and event sponsorship across Cambodia'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="relative group rounded-2xl overflow-hidden">
                            <img src="/img/events/concert1.jpg" alt="Bacchus Concert 1" className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden">
                            <img src="/img/events/concert2.jpg" alt="Bacchus Concert 2" className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden">
                            <img src="/img/events/concert3.jpg" alt="Bacchus Concert 3" className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
                {/* Bottom CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center gap-3 px-6 py-4 bg-stone-900/50 border border-stone-800 rounded-2xl hover:bg-stone-800 hover:border-amber-500/50 transition-all group cursor-pointer"
                    >
                        <Play className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                        <span className="text-stone-400 text-sm md:text-base group-hover:text-white transition-colors">
                            {lang === 'ko' ? '마케팅 성공 사례' : lang === 'zh' ? '营销成功案例' : lang === 'kh' ? 'ករណីជោគជ័យទីផ្សារ' : 'Marketing Success Cases'}
                        </span>
                    </button>
                </div>
            </div>
            <MarketingModal isOpen={showModal} onClose={() => setShowModal(false)} lang={lang} />
        </section>
    );
};

export default MarketingPower;
