import React from 'react';
import { Language, NavItem } from '../types';
import { Globe, Menu, X } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-stone-950/80 backdrop-blur-xl border-b border-stone-800 py-4'
      : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-widest group-hover:text-amber-500 transition-colors">FU LU SHOU</span>
              <span className="text-[10px] text-amber-500/80 tracking-[0.4em] uppercase font-bold">The Golden Legacy</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[13px] font-bold uppercase tracking-wider text-stone-400 hover:text-white transition-all relative group"
              >
                {item.label[lang]}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all group-hover:w-full" />
              </button>
            ))}



            <div className="h-4 w-px bg-stone-800 mx-2" />

            <button
              onClick={toggleLang}
              className="flex items-center space-x-2 text-stone-400 hover:text-white transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-widest">{lang === Language.KO ? 'EN' : 'KR'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-6">
            <button
              onClick={toggleLang}
              className="flex items-center space-x-2 text-stone-400 hover:text-white transition-all"
            >
              <Globe className="w-5 h-5" />
              <span className="text-[14px] font-black uppercase tracking-widest">{lang === Language.KO ? 'EN' : 'KR'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-stone-950/95 backdrop-blur-2xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMobileNavClick(item.id)}
              className="text-2xl font-black text-stone-300 hover:text-amber-500 transition-all uppercase tracking-tighter"
            >
              {item.label[lang]}
            </button>
          ))}


          <div className="pt-8 flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-stone-800" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-stone-500 text-sm font-bold uppercase tracking-widest"
            >
              {lang === Language.KO ? '닫기' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;