import React from 'react';
import { Language } from '../types';

interface ProductScrollerProps {
    lang: Language;
}

const ProductScroller: React.FC<ProductScrollerProps> = ({ lang }) => {
    const products = [
        { name: 'Olatte', img: '/img/olatte.png' },
        { name: 'Pocari Sweat', img: '/img/pocari.jpg' },
        { name: 'Shin Ramyun', img: '/img/shinramyun.png' },
        { name: 'Bacchus', img: '/img/bacchus.jpg' },
        // Duplicate for infinite scroll illusion if needed, or we just map twice
        { name: 'Olatte', img: '/img/olatte.png' },
        { name: 'Pocari Sweat', img: '/img/pocari.jpg' },
        { name: 'Shin Ramyun', img: '/img/shinramyun.png' },
        { name: 'Bacchus', img: '/img/bacchus.jpg' },
    ];

    return (
        <div className="py-16 bg-white overflow-hidden border-y border-stone-100">
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                <h3 className="text-xl font-bold text-stone-400 uppercase tracking-widest">
                    {lang === Language.KO ? '주요 유통 제품' : 'Our Major Products'}
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="py-12 animate-marquee whitespace-nowrap flex items-center space-x-16">
                    {products.concat(products).map((product, index) => (
                        <div key={index} className="inline-block w-64 h-64 mx-4 transform transition-transform hover:scale-110 duration-300">
                            <div className="w-full h-full flex items-center justify-center p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center space-x-16">
                    {products.concat(products).map((product, index) => (
                        <div key={`dup-${index}`} className="inline-block w-64 h-64 mx-4 transform transition-transform hover:scale-110 duration-300">
                            <div className="w-full h-full flex items-center justify-center p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
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
