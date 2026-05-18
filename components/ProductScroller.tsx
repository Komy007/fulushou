import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { ExternalLink, Award } from 'lucide-react';

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
            ko: '주요 유통 브랜드사',
            en: 'Major Distribution Brands',
            zh: '主要分销品牌',
            kh: 'ម៉ាកចែកចាយសំខាន់ៗ'
        },
        exclusive: {
            ko: '독점 공식 유통사',
            en: 'Exclusive Official Distributor',
            zh: '独家官方经销商',
            kh: 'អ្នកចែកចាយផ្លូវការផ្តាច់មុខ'
        }
    };

    const brands = [
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            country: '🇰🇷 Korea',
            logo: '/img/DONG-A.png',
            bg: 'from-blue-950/60 to-stone-900',
            accent: 'border-blue-500/30',
            glow: 'shadow-blue-500/10',
            products: ['Bacchus', 'Pocari Sweat', 'Olatte'],
            since: '2009',
            desc: {
                ko: '동아오츠카의 캄보디아 공식 독점 유통 파트너로서 에너지드링크, 이온음료, 유음료 3개 카테고리를 책임집니다.',
                en: 'Official exclusive distributor for Dong-A Otsuka in Cambodia, covering energy drinks, ION beverages, and dairy drink categories.',
                zh: '作为东亚大冢在柬埔寨的官方独家经销商，负责能量饮料、电解质饮料和乳制品饮料三大品类。',
                kh: 'ជាដៃគូចែកចាយផ្លូវការផ្តាច់មុខរបស់ Dong-A Otsuka នៅកម្ពុជា គ្របដណ្តប់ ០៣ ប្រភេទ។'
            }
        },
        {
            name: 'Nongshim',
            nameKo: '농심',
            country: '🇰🇷 Korea',
            logo: '/img/NONGSHIM.png',
            bg: 'from-red-950/60 to-stone-900',
            accent: 'border-red-500/30',
            glow: 'shadow-red-500/10',
            products: ['Shin Ramyun'],
            since: '2018',
            desc: {
                ko: '세계 최고 한국 라면 브랜드 농심의 캄보디아 공식 독점 유통 파트너로, 신라면을 캄보디아 전역에 공급합니다.',
                en: "Official exclusive distributor for Nongshim in Cambodia, supplying Shin Ramyun — the world's #1 Korean instant noodle — nationwide.",
                zh: '作为农心在柬埔寨的官方独家经销商，将辛拉面——全球最畅销韩国拉面——供应至全国。',
                kh: 'ជាដៃគូចែកចាយផ្លូវការផ្តាច់មុខរបស់ Nongshim នៅកម្ពុជា ផ្គត់ផ្គង់ Shin Ramyun ទូទាំងប្រទេស។'
            }
        }
    ];

    return (
        <div ref={sectionRef} className="py-16 md:py-24 bg-stone-950 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-xs md:text-sm font-black text-amber-500 uppercase tracking-[0.4em] mb-3">
                        {content.sectionLabel[lang]}
                    </h3>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                </div>

                {/* Brand Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl bg-gradient-to-br ${brand.bg} border ${brand.accent} overflow-hidden shadow-2xl ${brand.glow} transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${200 + index * 200}ms` }}
                        >
                            {/* Background glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
                            </div>

                            <div className="p-6 sm:p-8 md:p-10">
                                {/* Top: Logo + Meta */}
                                <div className="flex items-start justify-between mb-6 md:mb-8">
                                    {/* Large Logo */}
                                    <div className="w-40 h-24 sm:w-52 sm:h-28 md:w-64 md:h-32 bg-white rounded-2xl p-4 md:p-5 flex items-center justify-center shadow-lg flex-shrink-0">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            loading="lazy"
                                            decoding="async"
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    {/* Exclusive badge */}
                                    <div className="flex flex-col items-end gap-2 ml-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                                            <Award className="w-3 h-3" />
                                            {content.exclusive[lang]}
                                        </span>
                                        <span className="text-stone-500 text-[10px] md:text-xs font-medium">{brand.country}</span>
                                        <span className="text-stone-600 text-[10px] font-medium">Since {brand.since}</span>
                                    </div>
                                </div>

                                {/* Brand Name */}
                                <div className="mb-4 md:mb-5">
                                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                                        {brand.name}
                                    </h4>
                                    <p className="text-stone-500 text-sm md:text-base font-medium mt-1">{brand.nameKo}</p>
                                </div>

                                {/* Description */}
                                <p className="text-stone-400 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                                    {brand.desc[lang]}
                                </p>

                                {/* Product Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {brand.products.map((p) => (
                                        <span key={p} className="px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-stone-300 text-xs md:text-sm font-bold">
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom accent bar */}
                            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>
    );
};

export default ProductScroller;
