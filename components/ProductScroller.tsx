import React from 'react';
import { Language } from '../types';

interface ProductScrollerProps {
    lang: Language;
}

const ProductScroller: React.FC<ProductScrollerProps> = ({ lang }) => {
    const content = {
        sectionTitle: {
            ko: '주요 유통 제품',
            en: 'Our Major Products',
            zh: '主要产品',
            kh: 'ផលិតផលសំខាន់ៗ'
        }
    };

    const products = [
        { name: 'Olatte', img: '/img/olatte.png', desc: { ko: '밀키 & 프루티', en: 'Milky & Fruity', zh: '奶味果汁', kh: 'ទឹកដោះគោ & ផ្លែឈើ' } },
        { name: 'Pocari Sweat', img: '/img/pocari.jpg', desc: { ko: 'ION 음료', en: 'ION Drink', zh: 'ION饮料', kh: 'ភេសជ្ជៈ ION' } },
        { name: 'Shin Ramyun', img: '/img/shinramyun.png', desc: { ko: '한국 라면', en: 'Korea Noodle', zh: '韩国拉面', kh: 'មី​កូរ៉េ' } },
        { name: 'Bacchus', img: '/img/bacchus.jpg', desc: { ko: '에너지 드링크', en: 'Energy Drink', zh: '能量饮料', kh: 'ភេសជ្ជៈថាមពល' } },
    ];

    // Duplicate for seamless scroll
    const allProducts = [...products, ...products, ...products, ...products];

    return (
        <div className="py-12 md:py-16 bg-white overflow-hidden border-y border-stone-100 relative">
            {/* Subtle Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'url(/img/backgrounds/turtles.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-10 text-center relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-stone-600 uppercase tracking-widest">
                    {content.sectionTitle[lang]}
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* First Row */}
                <div className="py-6 md:py-12 animate-marquee whitespace-nowrap flex items-center space-x-8 md:space-x-16">
                    {allProducts.map((product, index) => (
                        <div
                            key={`a-${index}`}
                            className="inline-block w-48 h-48 md:w-64 md:h-64 mx-2 md:mx-4 transform transition-transform hover:scale-110 duration-300"
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:border-amber-500/30 transition-all">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="max-w-full max-h-24 md:max-h-32 object-contain filter hover:brightness-110 transition-all mb-3"
                                />
                                <div className="text-center">
                                    <div className="text-sm md:text-base font-bold text-stone-800">{product.name}</div>
                                    <div className="text-[10px] md:text-xs text-stone-500">{product.desc[lang]}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row for seamless loop */}
                <div className="absolute top-0 py-6 md:py-12 animate-marquee2 whitespace-nowrap flex items-center space-x-8 md:space-x-16">
                    {allProducts.map((product, index) => (
                        <div
                            key={`b-${index}`}
                            className="inline-block w-48 h-48 md:w-64 md:h-64 mx-2 md:mx-4 transform transition-transform hover:scale-110 duration-300"
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:border-amber-500/30 transition-all">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="max-w-full max-h-24 md:max-h-32 object-contain filter hover:brightness-110 transition-all mb-3"
                                />
                                <div className="text-center">
                                    <div className="text-sm md:text-base font-bold text-stone-800">{product.name}</div>
                                    <div className="text-[10px] md:text-xs text-stone-500">{product.desc[lang]}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
        </div>
    );
};

export default ProductScroller;
