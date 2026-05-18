import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { Handshake, Star } from 'lucide-react';

interface PartnerLogosProps {
    lang: Language;
}

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!startCounting) return;
        countRef.current = 0;
        startTimeRef.current = null;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            countRef.current = Math.floor(eased * end);
            setCount(countRef.current);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [end, duration, startCounting]);

    return count;
};

const PartnerLogos: React.FC<PartnerLogosProps> = ({ lang }) => {
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

    const yearsCount = useCountUp(15, 2000, isVisible);
    const companiesCount = useCountUp(2, 1500, isVisible);

    const content = {
        sectionLabel: {
            ko: '글로벌 파트너',
            en: 'Global Partners',
            zh: '全球合作伙伴',
            kh: 'ដៃគូសកល'
        },
        title: {
            ko: '함께 성장하는 파트너 브랜드',
            en: 'Partner Brands Growing Together',
            zh: '共同成长的合作品牌',
            kh: 'ម៉ាកដៃគូដែលរីកចម្រើនជាមួយគ្នា'
        },
        subtitle: {
            ko: '글로벌 브랜드와의 독점 유통 계약을 통해 캄보디아 시장을 선도합니다.',
            en: 'Leading the Cambodian market through exclusive distribution agreements with global brands.',
            zh: '通过与全球品牌的独家分销协议引领柬埔寨市场。',
            kh: 'នាំមុខទីផ្សារកម្ពុជាតាមរយៈកិច្ចព្រមព្រៀងចែកចាយផ្តាច់មុខជាមួយម៉ាកសកល។'
        },
        exclusive: {
            ko: '독점 유통',
            en: 'Exclusive',
            zh: '独家',
            kh: 'ផ្តាច់មុខ'
        }
    };

    const partners = [
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            product: 'Bacchus',
            country: '🇰🇷',
            logo: '/img/DONG-A.png',
            productImg: '/img/bacchus.jpg',
            bgGradient: 'from-amber-950/40 via-stone-900 to-stone-950',
            accentColor: 'border-amber-500/40',
            tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
            desc: {
                ko: '캄보디아 #1 에너지 드링크 · 독점 유통',
                en: 'Cambodia #1 Energy Drink · Exclusive Distribution',
                zh: '柬埔寨第一能量饮料 · 独家分销',
                kh: 'ភេសជ្ជៈថាមពល #1 · ចែកចាយផ្តាច់មុខ'
            }
        },
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            product: 'Pocari Sweat',
            country: '🇰🇷',
            logo: '/img/DONG-A.png',
            productImg: '/img/pocari.jpg',
            bgGradient: 'from-sky-950/40 via-stone-900 to-stone-950',
            accentColor: 'border-sky-500/40',
            tagColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
            desc: {
                ko: '이온 스포츠 음료 · 독점 유통',
                en: 'ION Sport Drink · Exclusive Distribution',
                zh: '电解质运动饮料 · 独家分销',
                kh: 'ភេសជ្ជៈកីឡា ION · ចែកចាយផ្តាច់មុខ'
            }
        },
        {
            name: 'Nongshim',
            nameKo: '농심',
            product: 'Shin Ramyun',
            country: '🇰🇷',
            logo: '/img/NONGSHIM.png',
            productImg: '/img/shinramyun.png',
            bgGradient: 'from-red-950/40 via-stone-900 to-stone-950',
            accentColor: 'border-red-500/40',
            tagColor: 'bg-red-500/20 text-red-300 border-red-500/30',
            desc: {
                ko: '세계 1위 한국 라면 · 독점 유통',
                en: "World's #1 Korean Noodle · Exclusive Distribution",
                zh: '全球第一韩国拉面 · 独家分销',
                kh: 'មីកូរ៉េ #1 ពិភពលោក · ចែកចាយផ្តាច់មុខ'
            }
        },
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            product: 'Olatte',
            country: '🇰🇷',
            logo: '/img/DONG-A.png',
            productImg: '/img/olatte.png',
            bgGradient: 'from-orange-950/40 via-stone-900 to-stone-950',
            accentColor: 'border-orange-500/40',
            tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
            desc: {
                ko: '프리미엄 유음료 · 독점 유통',
                en: 'Premium Dairy Drink · Exclusive Distribution',
                zh: '优质乳制品饮料 · 独家分销',
                kh: 'ភេសជ្ជៈទឹកដោះគោ · ចែកចាយផ្តាច់មុខ'
            }
        }
    ];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        <Handshake className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
                        {content.title[lang]}
                    </h2>
                    <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
                        {content.subtitle[lang]}
                    </p>
                </div>

                {/* Stats */}
                <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-10 md:mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-amber-400">{yearsCount}+</div>
                        <div className="text-xs md:text-sm text-stone-500 uppercase tracking-wider font-bold mt-1">
                            {lang === 'ko' ? '파트너십 연차' : lang === 'zh' ? '合作年限' : lang === 'kh' ? 'ឆ្នាំភាពជាដៃគូ' : 'Years of Partnership'}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-amber-400">{companiesCount}</div>
                        <div className="text-xs md:text-sm text-stone-500 uppercase tracking-wider font-bold mt-1">
                            {lang === 'ko' ? '브랜드사' : lang === 'zh' ? '品牌企业' : lang === 'kh' ? 'ក្រុមហ៊ុនម៉ាក' : 'Brand Companies'}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-black text-amber-400">4</div>
                        <div className="text-xs md:text-sm text-stone-500 uppercase tracking-wider font-bold mt-1">
                            {lang === 'ko' ? '유통상품' : lang === 'zh' ? '分销产品' : lang === 'kh' ? 'ផលិតផលចែកចាយ' : 'Distributed Products'}
                        </div>
                    </div>
                </div>

                {/* Product Cards — 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col rounded-3xl bg-gradient-to-b ${partner.bgGradient} border ${partner.accentColor} hover:border-amber-500/50 transition-all duration-700 hover:-translate-y-2 overflow-hidden shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            {/* Product Image — very tall */}
                            <div className="relative h-64 sm:h-72 md:h-80 xl:h-72 bg-gradient-to-b from-stone-800/50 to-stone-900/80 flex-shrink-0 overflow-hidden flex items-center justify-center">
                                <img
                                    src={partner.productImg}
                                    alt={partner.product}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Exclusive tag */}
                                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full border text-[9px] md:text-[10px] font-black tracking-widest uppercase flex items-center gap-1 ${partner.tagColor} backdrop-blur-sm`}>
                                    <Star className="w-2.5 h-2.5" />
                                    {content.exclusive[lang]}
                                </div>
                                {/* Product name badge */}
                                <div className="absolute bottom-3 right-3 px-3 py-1 bg-stone-950/85 backdrop-blur-sm border border-white/10 rounded-full text-white text-[10px] md:text-xs font-bold tracking-wider">
                                    {partner.product}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 md:p-5 flex flex-col flex-1">
                                {/* Company Logo + Name */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/95 p-1.5 flex-shrink-0 flex items-center justify-center shadow-md">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                                            {partner.name}
                                        </h3>
                                        <div className="text-[10px] md:text-xs text-stone-500">{partner.nameKo} {partner.country}</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-xs md:text-sm text-stone-400 leading-relaxed flex-1">
                                    {partner.desc[lang]}
                                </p>

                                {/* Bottom accent */}
                                <div className="mt-4 h-0.5 w-full bg-stone-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full w-0 group-hover:w-full transition-all duration-700" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { useCountUp };
export default PartnerLogos;
