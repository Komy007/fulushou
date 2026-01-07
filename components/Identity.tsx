import React from 'react';
import { Language } from '../types';

interface IdentityProps {
  lang: Language;
}

const Identity: React.FC<IdentityProps> = ({ lang }) => {
  return (
    <section id="about" className="py-32 bg-stone-950 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-6">Identity</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              {lang === Language.KO ? (
                <>왜<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Fu Lu Shou</span> 인가?</>
              ) : (
                <>Why<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Fu Lu Shou?</span></>
              )}
            </h3>
            <p className="text-xl text-stone-400 leading-relaxed font-light">
              {lang === Language.KO ? (
                <>
                  우리는 한국의 고도 성장기 성공 방정식을 캄보디아에 이식하는 <strong className="text-white font-bold">'시공간적 이식 전략(Time-Machine Strategy)'</strong>의 전문가입니다.
                  데이터를 넘어, 현장의 흙먼지 속에서 찾아낸 실전 인사이트로 시장을 압도합니다.
                </>
              ) : (
                <>
                  We are experts in the <strong className="text-white font-bold">'Time-Machine Strategy'</strong>, transplanting proven growth formulas into modern Cambodia.
                  We dominate with real-world insights born from the field, not just data sheets.
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-stone-900/40 border border-stone-800 backdrop-blur-sm group hover:border-amber-500/30 transition-all duration-500">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors">#1</div>
              <div className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4">
                {lang === Language.KO ? '시장 점유율 (에너지 음료)' : 'Market Share (Energy Drink)'}
              </div>
              <p className="text-stone-400 text-sm leading-snug">Beating Red Bull & Carabao in Cambodia.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-stone-900/40 border border-stone-800 backdrop-blur-sm group hover:border-amber-500/30 transition-all duration-500">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors">$58M+</div>
              <div className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4">
                {lang === Language.KO ? '연간 수입 실적 (2024)' : 'Annual Import Volume (2024)'}
              </div>
              <p className="text-stone-400 text-sm leading-snug">Approx. 83.6 Billion KRW of massive growth.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-stone-900/40 border border-stone-800 backdrop-blur-sm group hover:border-amber-500/30 transition-all duration-500 sm:col-span-2">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-black text-white group-hover:text-amber-500 transition-colors">200M</span>
                <span className="text-xl font-bold text-stone-600 mb-1">Cans</span>
              </div>
              <div className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-4">
                {lang === Language.KO ? '연간 판매량 (Cans)' : 'Annual Sales Volume'}
              </div>
              <p className="text-stone-400 text-sm leading-snug">12 Cans per Capita / Year. Dominating the daily life of Cambodia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
