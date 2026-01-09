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
      url: 'http://www.sciencemd.com/news/view.asp?idx=101801',
      title: 'ScienceMD News Coverage',
      desc: 'Detailed report on Bacchus\'s market dominance and strategy.'
    },
    {
      url: 'https://aseanexpress.co.kr/news/article.html?no=2608',
      title: 'ASEAN Express Interview',
      desc: 'Focus on Sok Samnang\'s localization leadership.'
    },
    {
      url: 'https://kofice.or.kr/c30correspondent/c30_correspondent_02_view.asp?seq=16994',
      title: 'KOFICE Cultural Report',
      desc: 'Korean Foundation for International Cultural Exchange report.'
    }
  ];

  return (
    <section id="media" className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Turtle Background Integration - Low Opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.30] mix-blend-multiply"
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
                    <h5 className="font-bold text-stone-800 group-hover:text-amber-800">{link.title}</h5>
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