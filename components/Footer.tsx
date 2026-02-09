import React from 'react';
import { Language } from '../types';
import { MapPin, Mail, Globe, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    tagline: {
      ko: '캄보디아 시장 진출의 가장 확실한 파트너',
      en: 'Your Most Reliable Partner for Cambodia Market Entry',
      zh: '进入柬埔寨市场最可靠的合作伙伴',
      kh: 'ដៃគូដែលអាចទុកចិត្តបានបំផុតសម្រាប់ចូលទីផ្សារកម្ពុជា'
    },
    quickLinks: {
      ko: '바로가기',
      en: 'Quick Links',
      zh: '快速链接',
      kh: 'តំណភ្ជាប់រហ័ស'
    },
    contact: {
      ko: '연락처',
      en: 'Contact',
      zh: '联系方式',
      kh: 'ទំនាក់ទំនង'
    },
    rights: {
      ko: '모든 권리 보유',
      en: 'All Rights Reserved',
      zh: '版权所有',
      kh: 'រក្សាសិទ្ធិទាំងអស់'
    }
  };

  const links = [
    { id: 'company', label: { ko: '회사소개', en: 'About Us', zh: '关于我们', kh: 'អំពីយើង' } },
    { id: 'about', label: { ko: '기업 철학', en: 'Philosophy', zh: '企业理念', kh: 'ទស្សនវិជ្ជា' } },
    { id: 'distribution', label: { ko: '유통망', en: 'Network', zh: '分销网络', kh: 'បណ្តាញ' } },
    { id: 'history', label: { ko: '발자취', en: 'History', zh: '历程', kh: 'ប្រវត្តិ' } },
    { id: 'strategy', label: { ko: '성공 전략', en: 'Strategy', zh: '战略', kh: 'យុទ្ធសាស្ត្រ' } },
    { id: 'contact', label: { ko: '문의하기', en: 'Contact', zh: '联系我们', kh: 'ទំនាក់ទំនង' } },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-black text-white tracking-widest">FU LU SHOU</span>
              <span className="block text-[10px] text-amber-500/80 tracking-[0.3em] uppercase font-bold mt-1">The Golden Legacy</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-md">
              {content.tagline[lang]}
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-xs">
              <Globe className="w-4 h-4" />
              <span>🇰🇷 한국어 | 🇺🇸 English | 🇨🇳 中文 | 🇰🇭 ភាសាខ្មែរ</span>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.facebook.com/BacchusEnergyDrinkCambodia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/bacchuscambodia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.tiktok.com/@bacchuscambodia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-black flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{content.quickLinks[lang]}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{content.contact[lang]}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <a href="mailto:info@fulushou.net" className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>info@fulushou.net</span>
              </a>
              <a href="https://fulushou.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-400 transition-colors">
                <Globe className="w-4 h-4 text-amber-500" />
                <span>fulushou.net</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-stone-500 text-xs">
              © {new Date().getFullYear()} Fu Lu Shou Co., Ltd. {content.rights[lang]}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-stone-600 text-xs">Cambodia F&B Distribution Leader</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;