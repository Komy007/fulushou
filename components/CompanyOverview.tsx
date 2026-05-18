import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { Users, Warehouse, Truck, MapPin, Target, Award, TrendingUp, Building } from 'lucide-react';
import { useCountUp } from './PartnerLogos';

interface CompanyOverviewProps {
    lang: Language;
}

const CompanyOverview: React.FC<CompanyOverviewProps> = ({ lang }) => {
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

    const employeeCount = useCountUp(150, 2000, isVisible);
    const warehouseCount = useCountUp(5300, 2000, isVisible);
    const distributorCount = useCountUp(24, 1500, isVisible);
    const truckCount = useCountUp(30, 1500, isVisible);

    const content = {
        sectionLabel: {
            ko: '회사 개요',
            en: 'Company Overview',
            zh: '公司概况',
            kh: 'ទិដ្ឋភាពទូទៅ'
        },
        title: {
            ko: '캄보디아 F&B 유통의 리더',
            en: 'Leader in Cambodia F&B Distribution',
            zh: '柬埔寨F&B分销领导者',
            kh: 'អ្នកដឹកនាំចែកចាយ F&B កម្ពុជា'
        },
        subtitle: {
            ko: '15년 이상의 성공적인 비즈니스 경험을 바탕으로 캄보디아 전역에 고품질 제품을 공급합니다.',
            en: 'With over 15 years of successful business experience, we supply high-quality products across Cambodia.',
            zh: '凭借15年以上的成功商业经验，我们为柬埔寨全境供应高质量产品。',
            kh: 'ជាមួយនឹងបទពិសោធន៍អាជីវកម្មជោគជ័យជាង 15 ឆ្នាំ យើងផ្គត់ផ្គង់ផលិតផលគុណភាពខ្ពស់ទូទាំងកម្ពុជា។'
        },
        ceo: {
            ko: 'CEO / 대표이사',
            en: 'President / CEO',
            zh: '总裁/首席执行官',
            kh: 'ប្រធាន/នាយកប្រតិបត្តិ'
        },
        vision: {
            ko: '비전',
            en: 'Vision',
            zh: '愿景',
            kh: 'ចក្ខុវិស័យ'
        },
        visionText: {
            ko: '캄보디아의 선도적인 무역 회사가 되어, 고품질 제품과 건강 혜택 제품을 제공합니다.',
            en: 'To be a leading trading company in Cambodia, providing high-quality products and health-benefit products.',
            zh: '成为柬埔寨领先的贸易公司，提供高质量和健康益处的产品。',
            kh: 'ដើម្បីក្លាយជាក្រុមហ៊ុនពាណិជ្ជកម្មឈានមុខគេនៅកម្ពុជា។'
        },
        mission: {
            ko: '미션',
            en: 'Mission',
            zh: '使命',
            kh: 'បេសកកម្ម'
        },
        missionText: {
            ko: '우리는 수요를 따르지 않고, 수요를 창출합니다. 혁신적인 제품을 시장에 도입하고 소비자를 교육합니다.',
            en: 'We do not simply follow the demand, but we Create Demand. We bring innovative products to market and educate consumers.',
            zh: '我们不仅仅跟随需求，而是创造需求。我们将创新产品引入市场并教育消费者。',
            kh: 'យើងមិនគ្រាន់តែធ្វើតាមតម្រូវការ ប៉ុន្តែយើងបង្កើតតម្រូវការ។'
        }
    };

    const stats = [
        {
            icon: Users,
            value: '150+',
            label: { ko: '직원', en: 'Employees', zh: '员工', kh: 'បុគ្គលិក' },
            description: {
                ko: '150여 명의 임직원이 전국 유통망을 완벽하게 책임지고 있습니다.',
                en: 'Over 150 employees are perfectly guarding our nationwide distribution network.',
                zh: '150多名员工完美守护着全国分销网络。',
                kh: 'បុគ្គលិកជាង ១៥០ នាក់កំពុងការពារបណ្តាញចែកចាយទូទាំងប្រទេសយ៉ាងល្អឥតខ្ចោះ។'
            },
            color: 'from-amber-500 to-yellow-500'
        },
        {
            icon: Warehouse,
            value: '5,300㎡',
            label: { ko: '창고 면적', en: 'Warehouse', zh: '仓库面积', kh: 'ឃ្លាំង' },
            description: {
                ko: '확장 가능한 부지 위에 5,300㎡ 규모의 물류 센터를 확보하고 있습니다.',
                en: 'We have secured 5,300㎡ of warehouse space on expandable land.',
                zh: '在可扩展的土地上拥有5,300平方米的仓库面积。',
                kh: 'យើងមានឃ្លាំងទំហំ ៥,៣០០ ម៉ែត្រការ៉េនៅលើដីដែលអាចពង្រីកបាន។'
            },
            color: 'from-amber-500 to-yellow-500'
        },
        {
            icon: MapPin,
            value: '24',
            label: { ko: '전국 총판', en: 'Sub-Distributors', zh: '分销商', kh: 'អ្នកចែកចាយ' },
            description: {
                ko: '전국 24개 지역에 강력한 총판 네트워크를 구축했습니다.',
                en: 'We have established a strong network of exclusive distributors in 24 regions nationwide.',
                zh: '我们在全国24个地区建立了强大的总经销商网络。',
                kh: 'យើងបានបង្កើតបណ្តាញចែកចាយផ្តាច់មុខដ៏រឹងមាំនៅ ២៤ តំបន់ទូទាំងប្រទេស។'
            },
            color: 'from-yellow-600 to-amber-400'
        },
        {
            icon: Truck,
            value: '30+',
            label: { ko: '배송 트럭', en: 'Delivery Trucks', zh: '送货卡车', kh: 'រថយន្ត' },
            description: {
                ko: '30여 대의 자체 차량과 외주 시스템으로 원활한 물류를 수행합니다.',
                en: 'We ensure smooth logistics with over 30 owned vehicles and an outsourced delivery system.',
                zh: '拥有30多辆自营车辆及外包系统，确保物流顺畅。',
                kh: 'យើងធានានូវការដឹកជញ្ជូនដោយរលូនជាមួយយានយន្តផ្ទាល់ខ្លួនជាង ៣០ គ្រឿង និងប្រព័ន្ធដឹកជញ្ជូនក្រៅ។'
            },
            color: 'from-orange-500 to-amber-400'
        }
    ];

    return (
        <section id="company" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-stone-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="absolute top-1/3 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/5 rounded-full blur-[100px] translate-x-1/2" />
            <div className="absolute bottom-1/4 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-amber-500/5 rounded-full blur-[80px] -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex justify-center mb-6 md:mb-8">
                        <img
                            src="/img/fulushou-logo.svg"
                            alt="Fu Lu Shou F&B Co., Ltd."
                            className="h-24 md:h-28 lg:h-32 w-auto drop-shadow-[0_0_30px_rgba(32,127,195,0.3)]"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        <Building className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
                        {content.title[lang]}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
                        {content.subtitle[lang]}
                    </p>
                </div>

                {/* CEO Card - Right after subtitle */}
                <div className="max-w-2xl mx-auto mb-12 md:mb-16 lg:mb-20">
                    <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-stone-900 to-stone-900/50 border border-stone-800 overflow-hidden group hover:border-amber-500/30 transition-all">
                        <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-2xl" />
                        <div className="relative z-10 text-center">
                            <div className="text-[10px] md:text-xs text-amber-400 uppercase tracking-widest font-bold mb-1 md:mb-2">{content.ceo[lang]}</div>
                            <div className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 md:mb-3">Mr. Sok Samnang</div>
                            <p className="text-sm md:text-base text-stone-400 leading-relaxed">
                                {lang === 'ko' ? 'F&B 수입 및 유통을 통해 캄보디아 전역에 고품질 제품을 공급하는 비전을 실현합니다.' :
                                    lang === 'zh' ? '通过F&B进口和分销，实现向柬埔寨全境供应高品质产品的愿景。' :
                                        lang === 'kh' ? 'សម្រេចចក្ខុវិស័យនៃការផ្គត់ផ្គង់ផលិតផលគុណភាពខ្ពស់ទូទាំងកម្ពុជា។' :
                                            'Realizing the vision of supplying high-quality products nationwide through F&B import and distribution.'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            const el = document.getElementById('ceo');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full mt-3 py-3 md:py-4 px-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-sm md:text-base tracking-wide transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2"
                    >
                        <span>💬</span>
                        {lang === 'ko' ? 'CEO 인사말 보기' : lang === 'zh' ? '查看CEO致辞' : lang === 'kh' ? 'មើលសារ CEO' : 'View CEO Message'}
                    </button>
                </div>

                {/* Stats Grid - Mobile Optimized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-stone-900/50 border border-stone-800 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${stat.color} rounded-2xl md:rounded-3xl blur-xl -z-10`} style={{ opacity: 0.1 }} />
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
                                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 md:mb-3">
                                {index === 0 ? `${employeeCount}+` : index === 1 ? `${warehouseCount.toLocaleString()}㎡` : index === 2 ? distributorCount : `${truckCount}+`}
                            </div>
                            <div className="text-[10px] md:text-xs text-amber-500 uppercase tracking-wider font-bold mb-3">{stat.label[lang]}</div>
                            <p className="text-[11px] md:text-xs text-stone-400 leading-relaxed font-light break-keep">
                                {stat.description[lang]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Vision */}
                    <div className="p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/30 transition-all group">
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                <Target className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-black text-white">{content.vision[lang]}</h3>
                        </div>
                        <p className="text-sm md:text-base text-stone-400 leading-relaxed">{content.visionText[lang]}</p>
                    </div>

                    {/* Mission */}
                    <div className="p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-stone-900/50 border border-stone-800 hover:border-yellow-500/30 transition-all group">
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-black text-white">{content.mission[lang]}</h3>
                        </div>
                        <p className="text-sm md:text-base text-stone-400 leading-relaxed">{content.missionText[lang]}</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CompanyOverview;
