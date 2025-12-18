import React from 'react';
import { Language } from '../types';
import { Quote } from 'lucide-react';

interface CeoMessageProps {
  lang: Language;
}

const CeoMessage: React.FC<CeoMessageProps> = ({ lang }) => {
  return (
    <section id="ceo" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* CEO Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-amber-500 rounded-xl transform translate-x-2 translate-y-2 z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-stone-800">
              <img 
                src="/img/CEO.png" 
                onError={(e) => {
                  // Fallback to a placeholder if the image fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
                }}
                alt="CEO Sok Samnang" 
                className="w-full h-auto object-cover transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-2xl font-bold">Sok Samnang</h4>
                <p className="text-amber-400 font-medium">CEO & Founder, Fu Lu Shou Co., Ltd.</p>
              </div>
            </div>
          </div>
          
          {/* CEO Message */}
          <div className="lg:w-1/2">
            <Quote className="text-6xl text-amber-200 fill-amber-200 mb-4" size={64} />
            <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif italic">
              {lang === Language.KO ? (
                <>"글로벌 스탠다드보다<br />로컬 컨텍스트(Context)가 우선합니다."</>
              ) : (
                <>"Local Context Precedes<br />Global Standards."</>
              )}
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-justify">
              <p>
                {lang === Language.KO ? (
                  "지난 15년 동안 캄보디아 시장에서 박카스를 단순한 수입 음료가 아닌 '국민 드링크'로 키워내며, 저는 유통의 본질을 깨달았습니다. 현지 소비자의 마음을 얻지 못하면 어떤 글로벌 브랜드도 성공할 수 없습니다."
                ) : (
                  "Over the past 15 years of growing Bacchus from a simple imported beverage into a 'National Drink' in the Cambodian market, I have realized the true essence of distribution. Without winning the hearts of local consumers, no global brand can succeed."
                )}
              </p>
              <p>
                {lang === Language.KO ? (
                  <>
                    <strong>성공은 책상이 아닌 거리에서 만들어집니다.</strong><br />
                    캄보디아의 흙먼지 날리는 도로, 뜨거운 태양, 그리고 그 속에서 살아가는 사람들의 땀방울을 이해해야 합니다. 
                    Fu Lu Shou는 단순한 유통사가 아닙니다. 우리는 캄보디아 시장에 진출하려는 파트너사에게 시행착오 없는 
                    <strong>'가장 확실한 지름길'</strong>을 안내하는 <strong>'현지화 전략 파트너'</strong>입니다.
                  </>
                ) : (
                  <>
                    <strong>Success is made on the streets, not at desks.</strong><br />
                    You must understand the dusty roads, the scorching sun, and the sweat of the people living in Cambodia.
                    Fu Lu Shou is not just a distributor. We are a <strong>'Localization Strategy Partner'</strong> guiding you to the <strong>'surest shortcut'</strong> without trial and error.
                  </>
                )}
              </p>
              <p>
                {lang === Language.KO ? (
                  "파트너사의 성공이 곧 우리의 번영입니다. Fu Lu Shou(복록수)의 이름처럼, 귀하의 비즈니스에 복과 성공, 그리고 지속 가능성을 약속드립니다."
                ) : (
                  "Your success is our prosperity. Just like our name Fu Lu Shou, we promise Fortune, Success, and Sustainability for your business."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;