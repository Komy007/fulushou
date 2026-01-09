import React from 'react';
import { Language } from '../types';
import { Facebook, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Let's Build the Next Legend Together</h3>
        <p className="mb-8 max-w-2xl mx-auto">
          {lang === Language.KO
            ? "귀사의 제품이 캄보디아 시장에서 제2의 박카스 신화가 되기를 원하신다면, Fu Lu Shou가 그 여정의 가장 든든한 동반자가 되겠습니다."
            : "If you want your product to be the next legend in Cambodia, Fu Lu Shou will be your most reliable partner on that journey."}
        </p>
        <div className="inline-block px-8 py-4 rounded-lg bg-stone-800 border border-stone-700 text-white font-bold mb-8">
          FU LU SHOU CO., LTD.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm border-t border-stone-800 pt-8">
          <div className="flex flex-col items-center">
            <h5 className="text-white font-bold mb-3 flex items-center"><MapPin className="w-4 h-4 mr-2" /> Location</h5>
            <p>Phnom Penh, Cambodia</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-white font-bold mb-3 flex items-center"><Phone className="w-4 h-4 mr-2" /> Contact</h5>
            <p>Phnom Penh, Cambodia</p>
            <p className="mt-2">contact@fulushou.net</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-white font-bold mb-3">Social</h5>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/BacchusEnergyDrinkCambodia/about" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition"><Facebook /></a>
              <a href="https://www.youtube.com/@bacchuscambodia" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition"><Youtube /></a>
              <a href="https://www.instagram.com/bacchuscambodia" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition"><Instagram /></a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-stone-600">
          &copy; 2024 Fu Lu Shou Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;