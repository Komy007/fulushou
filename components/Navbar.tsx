import React from 'react';
import { Language, NavItem } from '../types';
import { Globe, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  scrollToSection: (id: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { ko: '홈', en: 'Home' } },
  { id: 'about', label: { ko: '기업 철학', en: 'Philosophy' } },
  { id: 'history', label: { ko: '우리의 발자취', en: 'Our Story' } },
  { id: 'ceo', label: { ko: 'CEO 메시지', en: 'CEO Message' } },
  { id: 'strategy', label: { ko: '성공 전략', en: 'Strategy' } },
];

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMobileNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-amber-700 tracking-tight">FU LU SHOU</span>
              <span className="text-xs text-stone-500 tracking-widest uppercase">Co., Ltd.</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-stone-600 hover:text-amber-700 transition"
              >
                {item.label[lang]}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('ai-lab')}
              className="text-sm font-bold text-amber-600 hover:text-amber-800 transition flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              AI Lab
            </button>

            <button
              onClick={() => scrollToSection('media')}
              className="text-sm font-medium text-stone-600 hover:text-amber-700 transition"
            >
              {lang === Language.KO ? '미디어' : 'Media'}
            </button>

            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 transition text-xs font-bold text-stone-700 border border-stone-300"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === Language.KO ? 'EN' : 'KR'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-4">
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 transition text-xs font-bold text-stone-700 border border-stone-300"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === Language.KO ? 'EN' : 'KR'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-amber-700 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMobileNavClick(item.id)}
              className="text-left py-2 text-base font-medium text-stone-600 hover:text-amber-700 transition border-b border-stone-50"
            >
              {item.label[lang]}
            </button>
          ))}
          <button
            onClick={() => handleMobileNavClick('ai-lab')}
            className="text-left py-2 text-base font-bold text-amber-600 hover:text-amber-800 transition flex items-center"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI Lab
          </button>
          <button
            onClick={() => handleMobileNavClick('media')}
            className="text-left py-2 text-base font-medium text-stone-600 hover:text-amber-700 transition"
          >
            {lang === Language.KO ? '미디어' : 'Media'}
          </button>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3 bg-stone-100 text-stone-500 rounded-lg mt-4 font-bold hover:bg-stone-200 flex items-center justify-center"
          >
            {lang === Language.KO ? '메뉴 닫기' : 'Close Menu'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;