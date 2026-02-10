import React from 'react';
import { Language } from '../types';
import { Quote } from 'lucide-react';

interface CeoMessageProps {
  lang: Language;
}

const CeoMessage: React.FC<CeoMessageProps> = ({ lang }) => {
  const content = {
    sectionLabel: {
      ko: 'CEO 인사말',
      en: 'CEO Message',
      zh: 'CEO致辞',
      kh: 'សារ CEO'
    },
    quote: {
      ko: '"글로벌 스탠다드보다 로컬 컨텍스트(Context)가 우선합니다."',
      en: '"Local Context Precedes Global Standards."',
      zh: '"本地情境优先于全球标准。"',
      kh: '"បរិបទមូលដ្ឋានមានមុនស្តង់ដារសកល។"'
    },
    p1: {
      ko: '지난 15년 동안 캄보디아 시장에서 박카스를 단순한 수입 음료가 아닌 \'국민 드링크\'로 키워내며, 저는 유통의 본질을 깨달았습니다. 현지 소비자의 마음을 얻지 못하면 어떤 글로벌 브랜드도 성공할 수 없습니다.',
      en: 'Over the past 15 years of growing Bacchus from a simple imported beverage into a \'National Drink\' in the Cambodian market, I have realized the true essence of distribution. Without winning the hearts of local consumers, no global brand can succeed.',
      zh: '在过去15年里，我们将百事可乐从一款简单的进口饮料发展成为柬埔寨的"国民饮品"，我深刻理解了分销的本质。如果不能赢得当地消费者的心，任何全球品牌都无法成功。',
      kh: 'ក្នុងរយៈពេល 15 ឆ្នាំកន្លងមក នៃការលូតលាស់ Bacchus ពីភេសជ្ជៈនាំចូលធម្មតាមួយទៅជា "ភេសជ្ជៈជាតិ" នៅក្នុងទីផ្សារកម្ពុជា ខ្ញុំបានដឹងពីខ្លឹមសារពិតនៃការចែកចាយ។ បើគ្មានការឈ្នះដួងចិត្តអ្នកប្រើប្រាស់មូលដ្ឋានទេ គ្មានម៉ាកយីហោសកលណាមួយអាចជោគជ័យបានឡើយ។'
    },
    p2Strong1: {
      ko: '성공은 책상이 아닌 거리에서 만들어집니다.',
      en: 'Success is made on the streets, not at desks.',
      zh: '成功是在街头创造的，而不是在办公桌上。',
      kh: 'ភាពជោគជ័យត្រូវបានបង្កើតនៅតាមផ្លូវ មិនមែននៅតុទេ។'
    },
    p2Main: {
      ko: '캄보디아의 흙먼지 날리는 도로, 뜨거운 태양, 그리고 그 속에서 살아가는 사람들의 땀방울을 이해해야 합니다. Fu Lu Shou는 단순한 유통사가 아닙니다. 우리는 캄보디아 시장에 진출하려는 파트너사에게 시행착오 없는',
      en: 'You must understand the dusty roads, the scorching sun, and the sweat of the people living in Cambodia. Fu Lu Shou is not just a distributor. We are a',
      zh: '您必须了解柬埔寨尘土飞扬的道路、炎炎烈日以及生活在其中的人们的汗水。福禄寿不仅仅是一家分销商。我们是为想要进入柬埔寨市场的合作伙伴提供',
      kh: 'អ្នកត្រូវតែយល់ពីផ្លូវធូលីដី ព្រះអាទិត្យក្តៅ និងញើសរបស់មនុស្សដែលរស់នៅក្នុងប្រទេសកម្ពុជា។ Fu Lu Shou មិនមែនជាអ្នកចែកចាយធម្មតាទេ។ យើងជា'
    },
    p2Strong2: {
      ko: "'가장 확실한 지름길'",
      en: "'surest shortcut'",
      zh: "'最确定的捷径'",
      kh: "'ផ្លូវកាត់ដែលប្រាកដបំផុត'"
    },
    p2Strong3: {
      ko: "'현지화 전략 파트너'",
      en: "'Localization Strategy Partner'",
      zh: "'本地化战略合作伙伴'",
      kh: "'ដៃគូយុទ្ធសាស្រ្តមូលដ្ឋានីយកម្ម'"
    },
    p2End: {
      ko: '을 안내하는',
      en: 'guiding you to the',
      zh: '',
      kh: 'ដែលដឹកនាំអ្នកទៅកាន់'
    },
    p2Final: {
      ko: '입니다.',
      en: 'without trial and error.',
      zh: '。',
      kh: 'ដោយគ្មានការសាកល្បងនិងកំហុស។'
    },
    p3: {
      ko: '파트너사의 성공이 곧 우리의 번영입니다. Fu Lu Shou(복록수)의 이름처럼, 귀하의 비즈니스에 복과 성공, 그리고 지속 가능성을 약속드립니다.',
      en: 'Your success is our prosperity. Just like our name Fu Lu Shou, we promise Fortune, Success, and Sustainability for your business.',
      zh: '您的成功就是我们的繁荣。正如我们的名字福禄寿一样，我们承诺为您的业务带来财富、成功和可持续性。',
      kh: 'ភាពជោគជ័យរបស់អ្នកគឺជាភាពរុងរឿងរបស់យើង។ ដូចជាឈ្មោះរបស់យើង Fu Lu Shou យើងសន្យាផ្តល់សំណាង ភាពជោគជ័យ និងនិរន្តរភាពសម្រាប់អាជីវកម្មរបស់អ្នក។'
    }
  };

  return (
    <section id="ceo" className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/5 rounded-full blur-[100px] translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            <Quote className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            {content.sectionLabel[lang]}
          </span>
        </div>

        <div className="lg:flex lg:items-center lg:gap-12">
          {/* CEO Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-amber-500/30 rounded-2xl transform translate-x-2 translate-y-2 z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-stone-800">
              <img
                src="/img/CEO.png"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
                }}
                alt="CEO Sok Samnang"
                className="w-full h-auto object-cover transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950/90 to-transparent p-6">
                <h4 className="text-white text-2xl font-bold">Sok Samnang</h4>
                <p className="text-amber-400 font-medium">CEO & Founder, Fu Lu Shou Co., Ltd.</p>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="lg:w-1/2">
            <Quote className="text-amber-500/30 mb-4" size={64} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif italic">
              {content.quote[lang]}
            </h2>

            <div className="space-y-4 text-stone-400 leading-relaxed text-justify">
              <p>{content.p1[lang]}</p>
              <p>
                <strong className="text-amber-400">{content.p2Strong1[lang]}</strong><br />
                {content.p2Main[lang]} <strong className="text-amber-400">{content.p2Strong2[lang]}</strong> {content.p2End[lang]} <strong className="text-amber-400">{content.p2Strong3[lang]}</strong>{content.p2Final[lang]}
              </p>
              <p>{content.p3[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;