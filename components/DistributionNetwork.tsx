import React, { useState } from 'react';
import { Language } from '../types';
import { MapPin, Warehouse, Truck, Users, ArrowRight, Building2, Store, ChevronRight } from 'lucide-react';

interface DistributionNetworkProps {
    lang: Language;
}

const DistributionNetwork: React.FC<DistributionNetworkProps> = ({ lang }) => {
    const [activeFlow, setActiveFlow] = useState<number>(0);

    const content = {
        sectionLabel: {
            ko: '유통 네트워크',
            en: 'Distribution Network',
            zh: '分销网络',
            kh: 'បណ្តាញចែកចាយ'
        },
        title: {
            ko: '캄보디아 전역을 커버하는 강력한 네트워크',
            en: 'Powerful Network Covering All of Cambodia',
            zh: '覆盖柬埔寨全境的强大网络',
            kh: 'បណ្តាញដ៏រឹងមាំគ្របដណ្តប់ទូទាំងកម្ពុជា'
        },
        subtitle: {
            ko: '본사에서 전국 24개 총판, 145개 도매상을 통해 소비자에게 직접 전달',
            en: 'Direct delivery from HQ through 24 sub-distributors and 145 wholesalers to consumers',
            zh: '从总部通过24个分销商和145个批发商直接配送给消费者',
            kh: 'ការដឹកជញ្ជូនផ្ទាល់ពីការិយាល័យកណ្តាលតាមរយៈអ្នកចែកចាយ 24 និងអ្នកលក់ដុំ 145'
        }
    };

    const flowSteps = [
        {
            icon: Building2,
            title: { ko: '본사', en: 'Head Office', zh: '总部', kh: 'ការិយាល័យកណ្តាល' },
            subtitle: { ko: '프놈펜', en: 'Phnom Penh', zh: '金边', kh: 'ភ្នំពេញ' },
            description: { ko: '중앙 물류 허브', en: 'Central Logistics Hub', zh: '中央物流中心', kh: 'មជ្ឈមណ្ឌលដឹកជញ្ជូន' },
            color: 'from-amber-600 to-amber-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/30'
        },
        {
            icon: MapPin,
            title: { ko: '24개 총판', en: '24 Sub-Distributors', zh: '24个分销商', kh: 'អ្នកចែកចាយ 24' },
            subtitle: { ko: '전국 24개 지방', en: '24 Provinces', zh: '24个省份', kh: 'ខេត្ត 24' },
            description: { ko: '지역별 물류 거점', en: 'Regional Logistics Points', zh: '区域物流据点', kh: 'ចំណុចដឹកជញ្ជូនតំបន់' },
            color: 'from-amber-600 to-amber-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/30'
        },
        {
            icon: Store,
            title: { ko: '145+ 도매상', en: '145+ Wholesalers', zh: '145+批发商', kh: 'អ្នកលក់ដុំ 145+' },
            subtitle: { ko: '도매 네트워크', en: 'Wholesale Network', zh: '批发网络', kh: 'បណ្តាញលក់ដុំ' },
            description: { ko: '지역 유통망', en: 'Local Distribution', zh: '本地分销', kh: 'ការចែកចាយមូលដ្ឋាន' },
            color: 'from-orange-600 to-orange-500',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-500/30'
        },
        {
            icon: Users,
            title: { ko: '소매점', en: 'Retailers', zh: '零售商', kh: 'អ្នកលក់រាយ' },
            subtitle: { ko: '전국 커버리지 95%+', en: '95%+ Coverage', zh: '95%+覆盖率', kh: 'គ្របដណ្តប់ 95%+' },
            description: { ko: '최종 소비자 접점', en: 'Consumer Touchpoint', zh: '消费者接触点', kh: 'ចំណុចទំនាក់ទំនងអ្នកប្រើប្រាស់' },
            color: 'from-yellow-500 to-amber-500',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/30'
        }
    ];

    const distributionStats = [
        {
            label: { ko: '현대 유통', en: 'Modern Trade', zh: '现代贸易', kh: 'ពាណិជ្ជកម្មទំនើប' },
            value: '5%',
            color: 'bg-amber-500'
        },
        {
            label: { ko: '일반 유통', en: 'General Trade', zh: '传统贸易', kh: 'ពាណិជ្ជកម្មទូទៅ' },
            value: '95%',
            color: 'bg-yellow-500'
        }
    ];

    const warehouses = [
        { name: 'Warehouse 1', location: 'Sen Sok', size: '1,600㎡' },
        { name: 'Warehouse 2', location: 'Toul Kok', size: '500㎡' },
        { name: 'Warehouse 3', location: 'Sen Sok', size: '3,200㎡' },
    ];

    return (
        <section id="distribution" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-stone-900 to-stone-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-amber-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-amber-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        <Truck className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
                        {content.title[lang]}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
                        {content.subtitle[lang]}
                    </p>
                </div>

                {/* Distribution Flow - Mobile Optimized */}
                <div className="mb-12 md:mb-16 lg:mb-20">
                    {/* Mobile: Vertical Steps */}
                    <div className="lg:hidden space-y-4">
                        {flowSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <button
                                    onClick={() => setActiveFlow(index)}
                                    className={`w-full p-4 rounded-2xl border transition-all ${activeFlow === index
                                        ? `${step.bgColor} ${step.borderColor}`
                                        : 'bg-stone-900/50 border-stone-800'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="text-lg font-black text-white">{step.title[lang]}</div>
                                            <div className="text-xs text-stone-400">{step.subtitle[lang]}</div>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 text-stone-500 transition-transform ${activeFlow === index ? 'rotate-90' : ''}`} />
                                    </div>

                                    {activeFlow === index && (
                                        <div className="mt-4 pt-4 border-t border-stone-700/50 text-left">
                                            <p className="text-sm text-stone-300">{step.description[lang]}</p>
                                        </div>
                                    )}
                                </button>

                                {index < flowSteps.length - 1 && (
                                    <div className="absolute left-6 top-full h-4 w-px bg-gradient-to-b from-stone-600 to-transparent z-10" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Horizontal Flow */}
                    <div className="hidden lg:flex items-stretch justify-between gap-4">
                        {flowSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`flex-1 p-6 xl:p-8 rounded-3xl border transition-all hover:-translate-y-2 cursor-pointer ${step.bgColor} ${step.borderColor}`}
                                    onMouseEnter={() => setActiveFlow(index)}
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2">{step.title[lang]}</h3>
                                    <p className="text-sm text-stone-400 mb-3">{step.subtitle[lang]}</p>
                                    <p className="text-xs text-stone-500">{step.description[lang]}</p>
                                </div>

                                {index < flowSteps.length - 1 && (
                                    <div className="flex items-center">
                                        <ArrowRight className="w-6 h-6 text-stone-600" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Stats & Warehouses Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Trade Distribution */}
                    <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-stone-900/50 border border-stone-800">
                        <h3 className="text-lg md:text-xl font-black text-white mb-6">
                            {lang === 'ko' ? '유통 채널 비율' : lang === 'zh' ? '分销渠道比例' : lang === 'kh' ? 'សមាមាត្រឆានែល' : 'Distribution Channel Ratio'}
                        </h3>
                        <div className="space-y-4">
                            {distributionStats.map((stat, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-stone-400">{stat.label[lang]}</span>
                                        <span className="text-sm font-bold text-white">{stat.value}</span>
                                    </div>
                                    <div className="h-3 bg-stone-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                                            style={{ width: stat.value }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-stone-700/50 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-white">30+</div>
                                <div className="text-[10px] md:text-xs text-stone-500 uppercase tracking-wider">{lang === 'ko' ? '배송 트럭' : 'Trucks'}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-white">24h</div>
                                <div className="text-[10px] md:text-xs text-stone-500 uppercase tracking-wider">{lang === 'ko' ? '전국 배송' : 'Delivery'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Warehouses */}
                    <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-stone-900/50 border border-stone-800">
                        <div className="flex items-center gap-3 mb-6">
                            <Warehouse className="w-6 h-6 text-amber-500" />
                            <h3 className="text-lg md:text-xl font-black text-white">
                                {lang === 'ko' ? '물류 창고' : lang === 'zh' ? '物流仓库' : lang === 'kh' ? 'ឃ្លាំង' : 'Warehouses'}
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {warehouses.map((warehouse, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-stone-800/50 border border-stone-700/50 hover:border-amber-500/30 transition-all"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-sm font-bold text-white">{warehouse.name}</div>
                                            <div className="text-xs text-stone-500">{warehouse.location}, Phnom Penh</div>
                                        </div>
                                        <div className="text-lg font-black text-amber-400">{warehouse.size}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-white">5,300㎡+</div>
                                <div className="text-xs text-stone-400">{lang === 'ko' ? '총 창고 면적' : lang === 'zh' ? '总仓库面积' : 'Total Warehouse Area'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DistributionNetwork;
