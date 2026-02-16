import React from 'react';
import { Language } from '../types';
import { Mail, MapPin, Send, Building2, Globe, Facebook, Instagram } from 'lucide-react';

interface ContactSectionProps {
    lang: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
    const content = {
        sectionLabel: {
            ko: '파트너십 문의',
            en: 'Partnership Inquiry',
            zh: '合作咨询',
            kh: 'ការសាកសួរភាពជាដៃគូ'
        },
        title: {
            ko: '캄보디아 시장 진출의 최고 파트너',
            en: 'Your Best Partner for Cambodia Market Entry',
            zh: '进入柬埔寨市场的最佳合作伙伴',
            kh: 'ដៃគូល្អបំផុតសម្រាប់ចូលទីផ្សារកម្ពុជា'
        },
        subtitle: {
            ko: '15년 이상의 성공 노하우로 귀사의 캄보디아 진출을 함께 합니다.',
            en: 'With over 15 years of success, we partner with you for your Cambodia market entry.',
            zh: '凭借15年以上的成功经验，我们与您携手进入柬埔寨市场。',
            kh: 'ជាមួយនឹងជោគជ័យជាង 15 ឆ្នាំ យើងជាដៃគូជាមួយអ្នក។'
        },
        cta: {
            ko: '파트너십 문의하기',
            en: 'Inquire About Partnership',
            zh: '咨询合作',
            kh: 'សាកសួរអំពីភាពជាដៃគូ'
        },
        email: {
            ko: '이메일',
            en: 'Email',
            zh: '电子邮件',
            kh: 'អ៊ីមែល'
        },
        phone: {
            ko: '전화',
            en: 'Phone',
            zh: '电话',
            kh: 'ទូរស័ព្ទ'
        },
        address: {
            ko: '주소',
            en: 'Address',
            zh: '地址',
            kh: 'អាសយដ្ឋាន'
        },
        hours: {
            ko: '운영 시간',
            en: 'Business Hours',
            zh: '营业时间',
            kh: 'ម៉ោងធ្វើការ'
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: content.email,
            value: 'info@fulushou.net',
            href: 'mailto:info@fulushou.net',
            color: 'from-amber-500 to-yellow-500'
        },
        {
            icon: Globe,
            label: { ko: '웹사이트', en: 'Website', zh: '网站', kh: 'គេហទំព័រ' },
            value: 'fulushou.net',
            href: 'https://fulushou.net',
            color: 'from-amber-600 to-amber-500'
        },
        {
            icon: MapPin,
            label: content.address,
            value: 'Phnom Penh, Cambodia',
            href: '#',
            color: 'from-orange-500 to-amber-500'
        }
    ];

    return (
        <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[600px] bg-gradient-to-b from-amber-100/30 to-transparent rounded-full blur-[100px]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20 scroll-reveal">
                    <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        <Building2 className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {content.sectionLabel[lang]}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 mb-4 md:mb-6 tracking-tight">
                        {content.title[lang]}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
                        {content.subtitle[lang]}
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.href}
                            className="group p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-lg border border-stone-200 hover:border-amber-400/50 transition-all hover:-translate-y-1 block"
                        >
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                <info.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest font-bold mb-1 md:mb-2">{info.label[lang]}</div>
                            <div className="text-sm md:text-base text-stone-900 font-bold group-hover:text-amber-600 transition-colors">{info.value}</div>
                        </a>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-50 via-amber-100/50 to-yellow-50 border border-amber-300 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-amber-500 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-amber-500 rounded-full blur-[60px]" />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-stone-900 mb-2 md:mb-3">
                                {lang === 'ko' ? '새로운 비즈니스 기회를 함께 만들어갑니다' :
                                    lang === 'zh' ? '让我们一起创造新的商业机会' :
                                        lang === 'kh' ? 'តោះបង្កើតឱកាសអាជីវកម្មថ្មីជាមួយគ្នា' :
                                            "Let's Create New Business Opportunities Together"}
                            </h3>
                            <p className="text-stone-600 text-sm md:text-base max-w-xl">
                                {lang === 'ko' ? '캄보디아 F&B 시장 진출에 관심이 있으시다면 지금 바로 연락주세요.' :
                                    lang === 'zh' ? '如果您对进入柬埔寨F&B市场感兴趣，请立即联系我们。' :
                                        lang === 'kh' ? 'ប្រសិនបើអ្នកចាប់អារម្មណ៍ក្នុងការចូលទីផ្សារ F&B កម្ពុជា សូមទាក់ទងមកយើងឥឡូវនេះ។' :
                                            'If you are interested in entering the F&B market in Cambodia, contact us now.'}
                            </p>
                        </div>

                        <a href="mailto:info@fulushou.net?subject=Partnership%20Inquiry" className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full font-bold text-sm md:text-base hover:from-yellow-500 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 whitespace-nowrap">
                            <Send className="w-4 h-4 md:w-5 md:h-5" />
                            {content.cta[lang]}
                        </a>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex flex-col items-center gap-4">
                    <span className="text-stone-500 text-xs md:text-sm uppercase tracking-widest font-bold">
                        {lang === 'ko' ? '소셜 미디어' : lang === 'zh' ? '社交媒体' : lang === 'kh' ? 'បណ្តាញសង្គម' : 'Follow Us'}
                    </span>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/BacchusEnergyDrinkCambodia/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-stone-200 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                            <Facebook className="w-6 h-6 text-white" />
                        </a>
                        <a href="https://www.instagram.com/bacchuscambodia/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-stone-200 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all hover:scale-110">
                            <Instagram className="w-6 h-6 text-white" />
                        </a>
                        <a href="https://www.tiktok.com/@bacchuscambodia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-stone-200 hover:bg-black flex items-center justify-center transition-all hover:scale-110">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Languages Supported */}
                <div className="mt-10 md:mt-12 text-center">
                    <div className="inline-flex items-center gap-2 md:gap-3 text-stone-500 text-xs md:text-sm">
                        <Globe className="w-4 h-4" />
                        <span>{lang === 'ko' ? '지원 언어:' : lang === 'zh' ? '支持语言:' : lang === 'kh' ? 'ភាសាដែលគាំទ្រ:' : 'Supported Languages:'}</span>
                        <span className="text-stone-700">🇰🇷 한국어 | 🇺🇸 English | 🇨🇳 中文 | 🇰🇭 ភាសាខ្មែរ</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
