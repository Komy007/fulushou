import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { Award, CheckCircle } from 'lucide-react';

interface ProductScrollerProps {
    lang: Language;
}

const ProductScroller: React.FC<ProductScrollerProps> = ({ lang }) => {
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

    const content = {
        sectionLabel: {
            ko: '독점 공식 유통사',
            en: 'Exclusive Official Distributors',
            zh: '独家官方经销商',
            kh: 'អ្នកចែកចាយផ្លូវការផ្តាច់មុខ'
        },
        exclusive: {
            ko: '독점 유통 계약',
            en: 'Exclusive Distribution Agreement',
            zh: '独家分销协议',
            kh: 'កិច្ចព្រមព្រៀងចែកចាយផ្តាច់មុខ'
        }
    };

    const brands = [
        {
            name: 'Dong-A ST',
            nameKo: '동아 ST',
            country: '🇰🇷 Korea',
            logo: '/img/DONG-A-ST.svg',
            bgFrom: 'from-cyan-950/50',
            borderColor: 'border-cyan-500/30',
            accentColor: 'text-cyan-400',
            badgeBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
            products: [
                { name: 'Bacchus', icon: '⚡' },
                { name: 'Olatte', icon: '🥛' },
            ],
            desc: {
                ko: '바카스, 오라떼 등 프리미엄 음료 브랜드의 캄보디아 독점 공식 유통 파트너',
                en: 'Official exclusive distributor of Bacchus, Olatte and premium beverage brands in Cambodia',
                zh: '百加得、欧拿铁等优质饮料品牌的柬埔寨独家官方经销商',
                kh: 'ដៃគូចែកចាយផ្លូវការផ្តាច់មុខ Bacchus, Olatte នៅកម្ពុជា'
            }
        },
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            country: '🇰🇷 Korea',
            logo: '/img/DONG-A.png',
            bgFrom: 'from-blue-950/50',
            borderColor: 'border-blue-500/30',
            accentColor: 'text-blue-400',
            badgeBg: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
            products: [
                { name: 'Pocari Sweat', icon: '💧' },
            ],
            desc: {
                ko: '포카리 스웨트 ION 음료의 캄보디아 독점 공식 유통 파트너',
                en: 'Official exclusive distributor of Pocari Sweat ION beverage in Cambodia',
                zh: '宝矿力水特ION饮料的柬埔寨独家官方经销商',
                kh: 'ដៃគូចែកចាយផ្លូវការផ្តាច់មុខ Pocari Sweat ION នៅកម្ពុជា'
            }
        },
        {
            name: 'Nongshim',
            nameKo: '농심',
            country: '🇰🇷 Korea',
            logo: '/img/NONGSHIM-LOGO.svg',
            bgFrom: 'from-red-950/50',
            borderColor: 'border-red-500/30',
            accentColor: 'text-red-400',
            badgeBg: 'bg-red-500/15 border-red-500/30 text-red-300',
            products: [
                { name: 'Shin Ramyun', icon: '🍜' },
            ],
            desc: {
                ko: '세계 1위 한국 라면 브랜드 신라면의 캄보디아 독점 공식 유통 파트너',
                en: "Official exclusive distributor of Shin Ramyun — world's #1 Korean noodle — in Cambodia",
                zh: '全球第一韩国拉面辛拉面的柬埔寨独家官方经销商',
                kh: 'ដៃគូចែកចាយផ្លូវការផ្តាច់មុខ Shin Ramyun មីកូរ៉េ #1 នៅកម្ពុជា'
            }
        }
    ];

    return (
        <div ref={sectionRef} className="py-16 md:py-24 bg-stone-950 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-4">
                        <Award className="w-3 h-3 md:w-4 md:h-4" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                        {lang === 'ko' ? '글로벌 브랜드와의 독점 파트너십' :
                         lang === 'zh' ? '与全球品牌的独家合作伙伴关系' :
                         lang === 'kh' ? 'ភាពជាដៃគូផ្តាច់មុខជាមួយម៉ាកសកល' :
                         'Exclusive Partnerships with Global Brands'}
                    </h3>
                </div>

                {/* Brand Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col rounded-3xl bg-gradient-to-b ${brand.bgFrom} to-stone-900 border ${brand.borderColor} overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${150 + index * 150}ms` }}
                        >
                            {/* Logo Area — large and prominent */}
                            <div className="flex items-center justify-center bg-white rounded-2xl mx-4 mt-4 p-5 md:p-6 shadow-lg min-h-[100px] md:min-h-[120px]">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-w-full max-h-[70px] md:max-h-[85px] w-auto object-contain"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                {/* Company Name */}
                                <div className="mb-3 md:mb-4">
                                    <h4 className={`text-xl md:text-2xl font-black ${brand.accentColor} leading-tight`}>
                                        {brand.name}
                                    </h4>
                                    <p className="text-stone-500 text-sm font-medium mt-0.5">{brand.nameKo} · {brand.country}</p>
                                </div>

                                {/* Exclusive badge */}
                                <div className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase mb-3 ${brand.badgeBg}`}>
                                    <CheckCircle className="w-3 h-3" />
                                    {content.exclusive[lang]}
                                </div>

                                {/* Description */}
                                <p className="text-stone-400 text-sm md:text-base leading-relaxed mb-4 flex-1">
                                    {brand.desc[lang]}
                                </p>

                                {/* Product Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {brand.products.map((p) => (
                                        <span key={p.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-200 text-xs md:text-sm font-bold">
                                            <span>{p.icon}</span> {p.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${
                                brand.name === 'Nongshim' ? 'from-red-500 to-red-400' :
                                brand.name === 'Dong-A ST' ? 'from-cyan-500 to-cyan-400' :
                                'from-blue-500 to-blue-400'
                            } transition-all duration-700`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>
    );
};

export default ProductScroller;
