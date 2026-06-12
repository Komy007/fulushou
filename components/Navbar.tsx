import React, { useState, useRef, useEffect } from 'react';
import { Language, NavItem } from '../types';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  scrollToSection: (id: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home',         label: { ko: '홈',      en: 'Home',       zh: '首页',   kh: 'ទំព័រដើម' } },
  { id: 'company',      label: { ko: '회사소개', en: 'About',      zh: '关于',   kh: 'អំពីយើង' } },
  { id: 'about',        label: { ko: '철학',    en: 'Philosophy', zh: '理念',   kh: 'ទស្សនវិជ្ជា' } },
  { id: 'distribution', label: { ko: '유통망',  en: 'Network',    zh: '网络',   kh: 'បណ្តាញ' } },
  { id: 'history',      label: { ko: '발자취',  en: 'History',    zh: '历程',   kh: 'ប្រវត្តិ' } },
  { id: 'marketing',    label: { ko: '마케팅',  en: 'Marketing',  zh: '营销',   kh: 'ទីផ្សារ' } },
  { id: 'contact',      label: { ko: '문의',    en: 'Contact',    zh: '联系',   kh: 'ទំនាក់ទំនង' } },
];

const LANGUAGES = [
  { code: Language.KO, name: '한국어', flag: '🇰🇷' },
  { code: Language.EN, name: 'English', flag: '🇺🇸' },
  { code: Language.ZH, name: '中文',   flag: '🇨🇳' },
  { code: Language.KH, name: 'ខ្មែរ',  flag: '🇰🇭' },
];

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isLangOpen, setIsLangOpen]   = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const langRef       = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const mobileDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (
        langRef.current       && !langRef.current.contains(t) &&
        mobileLangRef.current && !mobileLangRef.current.contains(t) &&
        mobileDropRef.current && !mobileDropRef.current.contains(t)
      ) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('touchstart', close);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('touchstart', close); };
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === lang);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-cream/90 backdrop-blur-xl border-b border-mist shadow-sm shadow-ink/5 py-3'
        : 'bg-cream/60 backdrop-blur-sm py-4 md:py-5'
    }`}>
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mist">
        <div
          className="h-full bg-gradient-to-r from-forest via-citrus to-gold transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group"
            style={{ minHeight: 44 }}
          >
            <img
              src="/img/fulushou-logo.svg"
              alt="Fu Lu Shou F&B"
              className="h-9 md:h-10 w-auto flex-shrink-0 group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[13px] md:text-sm font-black text-ink tracking-widest group-hover:text-forest transition-colors font-display">
                FU LU SHOU
              </span>
              <span className="text-[9px] md:text-[10px] text-forest font-bold tracking-wider mt-0.5">
                F&amp;B CO., LTD.
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[11px] 2xl:text-xs font-bold uppercase tracking-wider text-ink/50 hover:text-forest transition-colors relative group"
                style={{ minHeight: 44 }}
              >
                {item.label[lang]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-citrus transition-all group-hover:w-full rounded-full" />
              </button>
            ))}

            <div className="h-4 w-px bg-mist mx-2" />

            {/* Language dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-ink/50 hover:text-ink transition-colors px-3 py-2 rounded-xl hover:bg-mist"
                style={{ minHeight: 44 }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {currentLang?.flag} {currentLang?.name}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl border border-mist shadow-xl shadow-ink/10 overflow-hidden animate-fade-in-up">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsLangOpen(false); }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center gap-3 transition-colors ${
                        lang === l.code
                          ? 'bg-forest/10 text-forest'
                          : 'text-ink/70 hover:bg-mist hover:text-ink'
                      }`}
                      style={{ minHeight: 44 }}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center xl:hidden gap-2" ref={mobileLangRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-ink/60 hover:text-ink p-2 rounded-xl transition-colors"
              style={{ minHeight: 44 }}
            >
              <span className="text-lg">{currentLang?.flag}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl hover:bg-mist transition-colors text-ink"
              style={{ minHeight: 44 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile lang dropdown */}
        {isLangOpen && (
          <div ref={mobileDropRef} className="xl:hidden absolute left-4 right-4 mt-2 bg-white rounded-2xl border border-mist shadow-xl z-50 overflow-hidden animate-fade-in-up">
            <div className="grid grid-cols-2 gap-1 p-2">
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsLangOpen(false); }}
                  className={`px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 rounded-xl transition-colors ${
                    lang === l.code ? 'bg-forest/10 text-forest' : 'text-ink/70 hover:bg-mist'
                  }`}
                  style={{ minHeight: 44 }}
                >
                  <span className="text-lg">{l.flag}</span>
                  <span className="text-xs">{l.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile full-screen menu */}
      <div className={`xl:hidden fixed inset-0 top-16 bg-cream/98 backdrop-blur-2xl transition-all duration-400 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-start pt-12 h-full gap-6 px-8 overflow-y-auto">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
              className="text-2xl font-black text-ink hover:text-forest transition-colors uppercase tracking-tight font-display animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both', minHeight: 44 }}
            >
              {item.label[lang]}
            </button>
          ))}
          <div className="pt-8 flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-ink/40 text-sm font-bold uppercase tracking-widest hover:text-citrus transition-colors"
              style={{ minHeight: 44 }}
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
