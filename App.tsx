import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import Identity from './components/Identity';
import ProductScroller from './components/ProductScroller';
import Philosophy from './components/Philosophy';
import DistributionNetwork from './components/DistributionNetwork';
import History from './components/History';
import MarketingPower from './components/MarketingPower';
import CeoMessage from './components/CeoMessage';
import StrategyDashboard from './components/StrategyDashboard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>(Language.KO);

  React.useEffect(() => {
    // Force scroll to top on load
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar
        lang={lang}
        setLang={setLang}
        scrollToSection={scrollToSection}
      />

      <main>
        {/* Hero - 첫 인상, 회사 슬로건 */}
        <Hero lang={lang} scrollToSection={scrollToSection} />

        {/* Company Overview - 회사 개요, CEO, 통계 */}
        <CompanyOverview lang={lang} />

        {/* Products - 제품 스크롤러 */}
        <ProductScroller lang={lang} />

        {/* Identity - 왜 Fu Lu Shou인가? */}
        <Identity lang={lang} />

        {/* Philosophy - 福祿壽 철학 */}
        <Philosophy lang={lang} />

        {/* Distribution Network - 유통망 */}
        <DistributionNetwork lang={lang} />

        {/* History - 연혁 */}
        <History lang={lang} />

        {/* Marketing Power - 마케팅 역량 */}
        <MarketingPower lang={lang} />

        {/* Strategy Dashboard - 4P 믹스 케이스 스터디 */}
        <StrategyDashboard lang={lang} />

        {/* CEO Message */}
        <CeoMessage lang={lang} />

        {/* Contact - 파트너십 문의 */}
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;