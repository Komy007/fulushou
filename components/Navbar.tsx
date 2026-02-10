import React, { useState, useRef, useEffect } from 'react';
import { Language, NavItem } from '../types';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  scrollToSection: (id: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { ko: '홈', en: 'Home', zh: '首页', kh: 'ទំព័រដើម' } },
  { id: 'company', label: { ko: '회사소개', en: 'About', zh: '关于我们', kh: 'អំពីយើង' } },
  { id: 'about', label: { ko: '기업 철학', en: 'Philosophy', zh: '企业理念', kh: 'ទស្សនវិជ្ជា' } },
  { id: 'distribution', label: { ko: '유통망', en: 'Network', zh: '分销网络', kh: 'បណ្តាញ' } },
  { id: 'history', label: { ko: '발자취', en: 'History', zh: '发展历程', kh: 'ប្រវត្តិ' } },
  { id: 'marketing', label: { ko: '마케팅', en: 'Marketing', zh: '营销', kh: 'ទីផ្សារ' } },
  { id: 'strategy', label: { ko: '전략', en: 'Strategy', zh: '战略', kh: 'យុទ្ធសាស្ត្រ' } },
  { id: 'contact', label: { ko: '문의', en: 'Contact', zh: '联系我们', kh: 'ទំនាក់ទំនង' } },
];

const LANGUAGES = [
  { code: Language.KO, name: '한국어', flag: '🇰🇷' },
  { code: Language.EN, name: 'English', flag: '🇺🇸' },
  { code: Language.ZH, name: '中文', flag: '🇨🇳' },
  { code: Language.KH, name: 'ខ្មែរ', flag: '🇰🇭' },
];

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking/touching outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const isOutsideDesktop = langRef.current && !langRef.current.contains(target);
      const isOutsideMobile = mobileLangRef.current && !mobileLangRef.current.contains(target);
      if (isOutsideDesktop && isOutsideMobile) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleMobileNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const handleLangSelect = (langCode: Language) => {
    setLang(langCode);
    setIsLangOpen(false);
  };

  const currentLang = LANGUAGES.find(l => l.code === lang);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-stone-950/90 backdrop-blur-xl border-b border-amber-900/20 py-3 md:py-4'
      : 'bg-transparent py-4 md:py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-white tracking-widest group-hover:text-amber-400 transition-colors">FU LU SHOU</span>
              <span className="text-[8px] md:text-[10px] text-amber-500/80 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">The Golden Legacy</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[11px] 2xl:text-[12px] font-bold uppercase tracking-wider text-stone-400 hover:text-white transition-all relative group"
              >
                {item.label[lang]}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 transition-all group-hover:w-full" />
              </button>
            ))}

            <div className="h-4 w-px bg-stone-800 mx-2" />

            {/* Language Dropdown - Desktop */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-stone-400 hover:text-white transition-all px-3 py-2 rounded-lg hover:bg-stone-800/50"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-widest">{currentLang?.flag} {currentLang?.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-stone-900/95 backdrop-blur-xl rounded-xl border border-stone-700 shadow-2xl overflow-hidden animate-fade-in-up">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLangSelect(language.code)}
                      className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center gap-3 transition-all ${lang === language.code
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                        }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden space-x-4" ref={mobileLangRef}>
            {/* Mobile Language Selector */}
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 text-stone-400 hover:text-white transition-all p-2 rounded-lg"
            >
              <span className="text-lg">{currentLang?.flag}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-stone-800/50 transition-all"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Language Dropdown */}
        {isLangOpen && (
          <div className="xl:hidden absolute left-4 right-4 mt-2 bg-stone-900/95 backdrop-blur-xl rounded-xl border border-stone-700 shadow-2xl overflow-hidden animate-fade-in-up z-50">
            <div className="grid grid-cols-2 gap-1 p-2">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLangSelect(language.code)}
                  className={`px-4 py-3 text-center text-sm font-medium flex items-center justify-center gap-2 rounded-lg transition-all ${lang === language.code
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                    }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-xs">{language.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown - Full Screen */}
      <div className={`xl:hidden fixed inset-0 top-16 bg-stone-950/98 backdrop-blur-2xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-start pt-12 h-full space-y-6 px-8 overflow-y-auto">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleMobileNavClick(item.id)}
              className="text-xl font-black text-stone-300 hover:text-amber-400 transition-all uppercase tracking-tight animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label[lang]}
            </button>
          ))}

          <div className="pt-8 flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-stone-500 text-sm font-bold uppercase tracking-widest hover:text-amber-400 transition-colors"
            >
              {lang === Language.KO ? '닫기' : lang === Language.ZH ? '关闭' : lang === Language.KH ? 'បិទ' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;