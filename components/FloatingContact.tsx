import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact: React.FC = () => {
    const telegramLink = 'https://t.me/fulushou';

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Telegram Button */}
            <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0088cc] to-[#0077b5] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#0088cc]/40 hover:scale-110 transition-all duration-300"
                aria-label="Contact us via Telegram"
            >
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full bg-[#0088cc]/30 animate-ping" style={{ animationDuration: '2s' }} />

                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-7 md:h-7 relative z-10">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-700">
                    Telegram
                </span>
            </a>

            {/* Email Button */}
            <a
                href="mailto:info@fulushou.net?subject=Partnership%20Inquiry"
                className="group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-500/40 hover:scale-110 transition-all duration-300"
                aria-label="Email us"
            >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-700">
                    Email Us
                </span>
            </a>
        </div>
    );
};

export default FloatingContact;
