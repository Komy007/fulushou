import React from 'react';
import { Language } from '../types';
import { Newspaper, ArrowRight } from 'lucide-react';

interface MediaCenterProps {
  lang: Language;
}

const MediaCenter: React.FC<MediaCenterProps> = ({ lang }) => {
  const VIDEOS = [
    {
      id: 'n7S-DcYBZv4',
      title: { ko: '박카스 캄보디아 TVC (최신)', en: 'Bacchus Cambodia TVC (Latest)' },
      desc: 'Local TV Commercial emphasizing energy & youth.'
    },
    {
      id: 'Ki-JWhNphD4',
      title: { ko: '박카스 브랜드 캠페인', en: 'Brand Campaign' },
      desc: 'Connecting with the dreams of Cambodian people.'
    },
    {
      id: '09ZxYs5SUz4',
      title: { ko: '초기 진입 광고 (10년 전)', en: 'Legacy Ad (10 Years Ago)' },
      desc: 'The beginning of the legend.'
    }
  ];

  const PRESS_LINKS = [
    {
      url: 'https://biz.heraldcorp.com/article/10478687',
      title: {
        ko: '레드불까지 제쳤다…캄보디아 ‘바까 열풍’',
        en: 'Overcoming Red Bull: The Bacchus Craze in Cambodia'
      },
      desc: 'HeraldCorp coverage on market leadership.'
    },
    {
      url: 'https://aseanexpress.co.kr/news/article.html?no=2608',
      title: { ko: 'ASEAN Express Interview', en: 'ASEAN Express Interview' },
      desc: 'Focus on Sok Samnang\'s localization leadership.'
    },
    {
      url: 'https://www.hkn24.com/news/articleView.html?idxno=305083',
      title: {
        ko: '‘바까 주세요!’ 식지 않는 박카스 열풍',
        en: "Can't Stop the Heat: Bacchus Fever in Cambodia"
      },
      desc: 'HKN24 deep dive into the local distribution success.'
    }
  ];

  return (
    <section id="media" className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Turtle Background Integration - Low Opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45] mix-blend-multiply"
        style={{
          backgroundImage: 'url(/img/backgrounds/turtles.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Media Center</h2>
            <h3 className="text-3xl font-extrabold text-stone-900">
              {lang === Language.KO ? '언론 보도 및 영상' : 'News & Media'}
            </h3>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VIDEOS.map((video, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Video ${idx}`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-stone-900 mb-1">
                  {video.title[lang]}
                </h4>
                <p className="text-xs text-stone-500">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Articles List */}
        <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
          <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
            <Newspaper className="text-amber-600 mr-2" />
            {lang === Language.KO ? '주요 언론 보도' : 'Press Release'}
          </h4>
          <div className="space-y-4">
            {PRESS_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="block p-4 rounded-lg bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 transition group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-stone-800 group-hover:text-amber-800">
                      {typeof link.title === 'string' ? link.title : link.title[lang]}
                    </h5>
                    <p className="text-sm text-stone-500 mt-1">{link.desc}</p>
                  </div>
                  <ArrowRight className="text-stone-400 group-hover:text-amber-600" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCenter;