import React from 'react';
import { Language } from '../types';

interface ProductScrollerProps {
    lang: Language;
}

const ProductScroller: React.FC<ProductScrollerProps> = ({ lang }) => {
    const content = {
        sectionTitle: {
            ko: '주요 유통 브랜드사',
            en: 'Major Distribution Brands',
            zh: '主要分销品牌',
            kh: 'ម៉ាកចែកចាយសំខាន់ៗ'
        }
    };

    const brands = [
        { name: 'Dong-A Otsuka', logo: '/img/DONG-A.jpg' },
        { name: 'Nongshim', logo: '/img/NONGSHIM.jpg' },
    ];

    return (
        <div className="py-16 md:py-24 bg-stone-950 overflow-hidden relative">
            {/* Top divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            {/* Section Title */}
            <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16 text-center relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-stone-500 uppercase tracking-[0.3em]">
                    {content.sectionTitle[lang]}
                </h3>
            </div>

            {/* Brand Logos */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 px-4">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center"
                    >
                        <div className="w-64 h-40 md:w-80 md:h-52 bg-white rounded-3xl p-8 flex items-center justify-center shadow-lg shadow-black/20 hover:shadow-amber-500/20 hover:scale-105 transition-all duration-500 border border-stone-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-100 to-stone-200 opacity-50" />
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="relative z-10 max-w-full max-h-full object-contain filter drop-shadow-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>
    );
};

export default ProductScroller;

