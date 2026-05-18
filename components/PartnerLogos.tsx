import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { Handshake } from 'lucide-react';

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
            // Ease out cubic
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
            { threshold: 0.2 }
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
            ko: '함께 성장하는 파트너사',
            en: 'Partners Growing Together',
            zh: '共同成长的合作伙伴',
            kh: 'ដៃគូដែលរីកចម្រើនជាមួយគ្នា'
        },
        subtitle: {
            ko: '글로벌 브랜드와의 독점 유통 계약을 통해 캄보디아 시장을 선도합니다.',
            en: 'Leading the Cambodian market through exclusive distribution agreements with global brands.',
            zh: '通过与全球品牌的独家分销协议引领柬埔寨市场。',
            kh: 'នាំមុខទីផ្សារកម្ពុជាតាមរយៈកិច្ចព្រមព្រៀងចែកចាយផ្តាច់មុខជាមួយម៉ាកសកល។'
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
            desc: { ko: '에너지 드링크 독점 유통', en: 'Exclusive energy drink distribution', zh: '独家能量饮料分销', kh: 'ការចែកចាយភេសជ្ជៈថាមពលផ្តាច់មុខ' }
        },
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            product: 'Pocari Sweat',
            country: '🇰🇷',
            logo: '/img/DONG-A.png',
            productImg: '/img/pocari.jpg',
            desc: { ko: 'ION 음료 독점 유통', en: 'Exclusive ION drink distribution', zh: '独家ION饮料分销', kh: 'ការចែកចាយភេសជ្ជៈ ION ផ្តាច់មុខ' }
        },
        {
            name: 'Nongshim',
            nameKo: '농심',
            product: 'Shin Ramyun',
            country: '🇰🇷',
            logo: '/img/NONGSHIM.png',
            productImg: '/img/shinramyun.png',
            desc: { ko: '한국 라면 독점 유통', en: 'Exclusive Korean noodle distribution', zh: '独家韩国拉面分销', kh: 'ការចែកចាយមីកូរ៉េផ្តាច់មុខ' }
        },
        {
            name: 'Dong-A Otsuka',
            nameKo: '동아오츠카',
            product: 'Olatte',
            country: '🇰🇷',
            logo: '/img/DONG-A.png',
            productImg: '/img/olatte.png',
            desc: { ko: '유제품 음료 독점 유통', en: 'Exclusive dairy beverage distribution', zh: '独家乳制品饮料分销', kh: 'ការចែកចាយភេសជ្ជៈទឹកដោះគោផ្តាច់មុខ' }
        }
    ];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        <Handshake className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
                        {content.title[lang]}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
                        {content.subtitle[lang]}
                    </p>
                </div>

                {/* Stats Summary */}
                <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

                {/* Partner Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col rounded-2xl md:rounded-3xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/30 transition-all duration-700 hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Product Image — enlarged */}
                            <div className="relative h-44 sm:h-52 md:h-64 bg-gradient-to-br from-stone-800 to-stone-900 flex-shrink-0 overflow-hidden">
                                <img
                                    src={partner.productImg}
                                    alt={partner.product}
                                    className="w-full h-full object-contain p-3 md:p-5 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 md:top-3 md:right-3 px-2 py-0.5 md:px-2.5 md:py-1 bg-stone-950/80 backdrop-blur-sm border border-amber-500/20 rounded-full text-amber-400 text-[9px] md:text-xs font-bold tracking-wider">
                                    {partner.product}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-3 md:p-5 flex flex-col flex-1">
                                {/* Company Logo + Name */}
                                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/90 p-1 md:p-1.5 flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                                            {partner.name}
                                        </h3>
                                        <div className="text-[9px] md:text-xs text-stone-500">{partner.nameKo}</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[11px] md:text-sm text-stone-400 leading-relaxed flex-1">
                                    {partner.desc[lang]}
                                </p>

                                {/* Bottom Accent */}
                                <div className="mt-3 h-0.5 md:h-1 w-full bg-stone-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full w-0 group-hover:w-full transition-all duration-700" />
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
