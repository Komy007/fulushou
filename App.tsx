import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Identity from './components/Identity';
import CeoMessage from './components/CeoMessage';
import Philosophy from './components/Philosophy';
import History from './components/History';
import StrategyDashboard from './components/StrategyDashboard';
import AiLab from './components/AiLab';
import MediaCenter from './components/MediaCenter';
import ProductScroller from './components/ProductScroller';
import Footer from './components/Footer';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>(Language.KO);

  const toggleLang = () => {
    setLang(prev => (prev === Language.KO ? Language.EN : Language.KO));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <Navbar
        lang={lang}
        toggleLang={toggleLang}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero lang={lang} scrollToSection={scrollToSection} />
        <Identity lang={lang} />
        <ProductScroller lang={lang} />
        <Philosophy lang={lang} />
        <History lang={lang} />
        <CeoMessage lang={lang} />
        <AiLab lang={lang} />
        <StrategyDashboard lang={lang} />
        <MediaCenter lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;