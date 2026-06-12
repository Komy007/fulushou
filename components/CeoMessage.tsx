import React from 'react';
import { Language } from '../types';
import { Quote } from 'lucide-react';

interface CeoMessageProps {
  lang: Language;
}

const CeoMessage: React.FC<CeoMessageProps> = ({ lang }) => {
  const content = {
    sectionLabel: { ko: 'CEO 인사말', en: 'CEO Message', zh: 'CEO致辞', kh: 'សារ CEO' },
    quote: {
      ko: '"글로벌 스탠다드보다 로컬 컨텍스트가 우선합니다."',
      en: '"Local Context Precedes Global Standards."',
      zh: '"本地情境优先于全球标准。"',
      kh: '"បរិបទមូលដ្ឋានមានមុនស្តង់ដារសកល។"',
    },
    p1: {
      ko: '지난 15년 동안 캄보디아 시장에서 박카스를 단순한 수입 음료가 아닌 \'국민 드링크\'로 키워내며, 저는 유통의 본질을 깨달았습니다. 현지 소비자의 마음을 얻지 못하면 어떤 글로벌 브랜드도 성공할 수 없습니다.',
      en: "Over the past 15 years of growing Bacchus from a simple imported beverage into a 'National Drink' in Cambodia, I have realized the true essence of distribution. Without winning the hearts of local consumers, no global brand can succeed.",
      zh: '在过去15年里，我们将百加得从一款进口饮料发展成为"国民饮品"，我深刻理解了分销的本质。如果不能赢得当地消费者的心，任何全球品牌都无法成功。',
      kh: 'ក្នុងរយៈពេល 15 ឆ្នាំ នៃការលូតលាស់ Bacchus ពីភេសជ្ជៈនាំចូលទៅជា "ភេសជ្ជៈជាតិ" ខ្ញុំបានដឹងពីខ្លឹមសារពិតនៃការចែកចាយ។',
    },
    p2Strong1: {
      ko: '성공은 책상이 아닌 거리에서 만들어집니다.',
      en: 'Success is made on the streets, not at desks.',
      zh: '成功是在街头创造的，而不是在办公桌上。',
      kh: 'ភាពជោគជ័យត្រូវបានបង្កើតនៅតាមផ្លូវ មិនមែននៅតុទេ។',
    },
    p2Main: {
      ko: 'Fu Lu Shou는 단순한 유통사가 아닙니다. 우리는 캄보디아 시장에 진출하려는 파트너사에게',
      en: 'Fu Lu Shou is not just a distributor. We are a',
      zh: '福禄寿不仅仅是一家分销商。我们是',
      kh: 'Fu Lu Shou មិនមែនជាអ្នកចែកចាយធម្មតាទេ។ យើងជា',
    },
    p2Strong2: { ko: "'가장 확실한 지름길'",          en: "'surest shortcut'",                    zh: "'最确定的捷径'",     kh: "'ផ្លូវកាត់ដែលប្រាកដបំផុត'" },
    p2Strong3: { ko: "'현지화 전략 파트너'",           en: "'Localization Strategy Partner'",      zh: "'本地化战略合作伙伴'", kh: "'ដៃគូយុទ្ធសាស្រ្តមូលដ្ឋានីយកម្ម'" },
    p2End:     { ko: '을 안내하는',                    en: 'guiding you to the',                   zh: '',                  kh: 'ដែលដឹកនាំអ្នកទៅកាន់' },
    p2Final:   { ko: '입니다.',                        en: 'without trial and error.',             zh: '。',                kh: 'ដោយគ្មានការសាកល្បង។' },
    p3: {
      ko: '파트너사의 성공이 곧 우리의 번영입니다. Fu Lu Shou의 이름처럼, 귀하의 비즈니스에 복과 성공, 그리고 지속 가능성을 약속드립니다.',
      en: 'Your success is our prosperity. Just like our name Fu Lu Shou, we promise Fortune, Success, and Sustainability for your business.',
      zh: '您的成功就是我们的繁荣。正如我们的名字福禄寿一样，我们承诺为您的业务带来财富、成功和可持续性。',
      kh: 'ភាពជោគជ័យរបស់អ្នកគឺជាភាពរុងរឿងរបស់យើង។ ដូចជាឈ្មោះរបស់យើង Fu Lu Shou យើងសន្យា។',
    },
  };

  return (
    <section id="ceo" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-mist rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Label */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 text-forest text-xs font-bold tracking-widest uppercase">
            <Quote className="w-3 h-3" />
            {content.sectionLabel[lang]}
          </span>
        </div>

        <div className="lg:flex lg:items-center lg:gap-14">
          {/* CEO Photo */}
          <div className="lg:w-5/12 mb-12 lg:mb-0">
            <div className="relative">
              {/* Shadow frame */}
              <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-mist border border-mist" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink/10 bg-mist">
                <img
                  src="/img/CEO.png"
                  onError={e => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
                  }}
                  alt="CEO Sok Samnang"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-7">
                  <h4 className="text-white text-2xl font-black font-display">Sok Samnang</h4>
                  <p className="text-citrus text-sm font-bold mt-1">CEO &amp; Founder, Fu Lu Shou F&amp;B Co., Ltd.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="lg:w-7/12">
            {/* Giant quote mark */}
            <div className="text-[8rem] leading-none text-forest/10 font-serif select-none -mb-8">"</div>

            <h2 className="text-2xl md:text-3xl font-black text-ink mb-8 font-serif italic leading-snug">
              {content.quote[lang]}
            </h2>

            <div className="space-y-5 text-ink/60 leading-relaxed text-base md:text-lg">
              <p>{content.p1[lang]}</p>
              <p>
                <strong className="text-forest font-black">{content.p2Strong1[lang]}</strong>
                <br />
                {content.p2Main[lang]}{' '}
                <strong className="text-citrus">{content.p2Strong2[lang]}</strong>{' '}
                {content.p2End[lang]}{' '}
                <strong className="text-forest">{content.p2Strong3[lang]}</strong>
                {content.p2Final[lang]}
              </p>
              <p>{content.p3[lang]}</p>
            </div>

            {/* Signature line */}
            <div className="mt-10 pt-8 border-t border-mist flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif font-black text-lg">福</span>
              </div>
              <div>
                <div className="font-black text-ink text-sm">Sok Samnang</div>
                <div className="text-ink/40 text-xs mt-0.5">Fu Lu Shou F&amp;B Co., Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
