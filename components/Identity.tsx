import React from 'react';
import { Language } from '../types';

interface IdentityProps {
  lang: Language;
}

const Identity: React.FC<IdentityProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Identity</h2>
          <h3 className="text-3xl font-extrabold text-stone-900 sm:text-4xl mb-6">
            {lang === Language.KO ? '왜 Fu Lu Shou 인가?' : 'Why Fu Lu Shou?'}
          </h3>
          <p className="text-lg text-stone-600 leading-relaxed">
            {lang === Language.KO ? (
              <>
                우리는 한국의 1970~80년대 고도 성장기 성공 방정식을 21세기 캄보디아에 이식하는 <strong>'시공간적 이식 전략(Time-Machine Strategy)'</strong>의 전문가입니다.
                책상 위의 데이터가 아닌, 현장의 흙먼지 속에서 찾아낸 인사이트로 시장을 장악합니다.
              </>
            ) : (
              <>
                We are experts in the <strong>'Time-Machine Strategy'</strong>, transplanting Korea's high-growth success formulas of the 70s and 80s into 21st-century Cambodia.
                We dominate the market with insights found not in data sheets, but in the dust and sweat of the field.
              </>
            )}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
          <div className="p-6">
            <div className="text-5xl font-black text-amber-700 mb-2">#1</div>
            <div className="text-sm font-bold text-stone-500 uppercase tracking-wide">
              {lang === Language.KO ? '시장 점유율 (에너지 음료)' : 'Market Share (Energy Drink)'}
            </div>
            <p className="mt-2 text-stone-600 text-sm">Beating Red Bull & Carabao</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-black text-stone-800 mb-2">$58M+</div>
            <div className="text-sm font-bold text-stone-500 uppercase tracking-wide">
              {lang === Language.KO ? '연간 수입 실적 (2024)' : 'Annual Import Volume (2024)'}
            </div>
            <p className="mt-2 text-stone-600 text-sm">Approx. 83.6 Billion KRW</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-black text-stone-800 mb-2">200M</div>
            <div className="text-sm font-bold text-stone-500 uppercase tracking-wide">
              {lang === Language.KO ? '연간 판매량 (Cans)' : 'Annual Sales Volume'}
            </div>
            <p className="mt-2 text-stone-600 text-sm">12 Cans per Capita / Year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
