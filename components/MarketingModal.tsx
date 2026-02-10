import React, { useEffect, useState } from 'react';
import { X, Trophy, TrendingUp, Package, MapPin, Users, Music, Award } from 'lucide-react';
import { Language } from '../types';

interface MarketingModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: Language;
}

const MarketingModal: React.FC<MarketingModalProps> = ({ isOpen, onClose, lang }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = 'unset';
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // ESC key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen && !visible) return null;

    const content = {
        headerTitle: {
            ko: '[심층 리포트] 박카스 성공 신화',
            en: '[Deep Dive Report] The Success Myth of Bacchus',
            zh: '[深度报告] Bacchus 的成功神话',
            kh: '[របាយការណ៍ស៊ីជម្រៅ] ទេវកថាជោគជ័យរបស់ Bacchus'
        },
        mainTitle: {
            ko: <>캄보디아의 국민 에너지 드링크,<br /><span className="text-amber-500">박카스 성공 신화 분석</span></>,
            en: <>Cambodia's National Energy Drink,<br /><span className="text-amber-500">Analysis of Bacchus Success Myth</span></>,
            zh: <>柬埔寨的国民能量饮料，<br /><span className="text-amber-500">Bacchus 成功神话分析</span></>,
            kh: <>ភេសជ្ជៈថាមពលជាតិរបស់កម្ពុជា<br /><span className="text-amber-500">ការវិភាគទេវកថាជោគជ័យរបស់ Bacchus</span></>
        },
        intro: {
            ko: <>이 성공 사례의 핵심은 캄보디아의 현재를 <span className="text-white font-bold">"대한민국의 1970~80년대 고도 성장기"</span>로 정의하고, 그 시절 한국에서 통했던 성공 방정식을 2010년대 캄보디아에 그대로 이식한 <span className="text-white font-bold">'시차 경영'</span>에 있습니다.</>,
            en: <>The core of this success story lies in defining Cambodia's present as <span className="text-white font-bold">"South Korea's high-growth period of the 1970s-80s"</span> and transplanting the success formula that worked in Korea at that time to 2010s Cambodia through <span className="text-white font-bold">'Time-lag Management'</span>.</>,
            zh: <>这个成功案例的核心在于将柬埔寨的现状定义为<span className="text-white font-bold">“韩国1970-80年代的高速增长期”</span>，并通过<span className="text-white font-bold">“时差经营”</span>将在当时韩国行之有效的成功方程式移植到2010年代的柬埔寨。</>,
            kh: <>ស្នូលនៃរឿងជោគជ័យនេះស្ថិតនៅត្រង់ការកំណត់បច្ចុប្បន្នភាពរបស់កម្ពុជាថាជា <span className="text-white font-bold">"សម័យកាលរីកចម្រើនខ្ពស់របស់កូរ៉េខាងត្បូងក្នុងទសវត្សរ៍ឆ្នាំ ១៩៧០-៨០"</span> និងការប្តូររូបមន្តជោគជ័យដែលធ្លាប់មានប្រសិទ្ធភាពនៅកូរ៉េនាពេលនោះមកកាន់កម្ពុាក្នុងទសវត្សរ៍ឆ្នាំ ២០១០ តាមរយៈ <span className="text-white font-bold">'ការគ្រប់គ្រងពេលវេលា (Time-lag Management)'</span>។</>
        },
        section1: {
            title: {
                ko: "시장 진입 배경: '시차(Time-lag) 마케팅'의 승리",
                en: "Market Entry Background: Victory of 'Time-lag Marketing'",
                zh: "市场进入背景：'时差(Time-lag)营销'的胜利",
                kh: "ប្រវត្តិការចូលទីផ្សារ៖ ជ័យជំនះនៃ 'ទីផ្សារ Time-lag'"
            },
            box1: {
                title: { ko: "사회적 맥락의 일치", en: "Alignment of Social Context", zh: "社会背景的一致性", kh: "ការតម្រឹមបរិបទសង្គម" },
                desc: {
                    ko: "캄보디아는 연 7%대의 높은 경제 성장률을 기록하며 프놈펜 곳곳에서 건설 붐이 일고 있습니다. 이는 과거 한국의 산업화 시기와 매우 유사합니다.",
                    en: "Cambodia records a high economic growth rate of 7% per year, and construction booms are occurring throughout Phnom Penh. This is very similar to Korea's industrialization period in the past.",
                    zh: "柬埔寨不仅保持着年均7%的高经济增长率，金边各地更是掀起了建设热潮。这与过去韩国的工业化时期非常相似。",
                    kh: "ប្រទេសកម្ពុជាកត់ត្រាកំណើនសេដ្ឋកិច្ចខ្ពស់ ៧% ក្នុងមួយឆ្នាំ ហើយការរីកចម្រើនសំណង់កំពុងកើតឡើងនៅទូទាំងរាជធានីភ្នំពេញ។ នេះគឺស្រដៀងទៅនឹងសម័យកាលឧស្សាហកម្មរបស់កូរ៉េកាលពីអតីតកាល។"
                }
            },
            box2: {
                title: { ko: "핵심 타겟의 니즈 포착", en: "Capturing Core Target Needs", zh: "捕捉核心目标需求", kh: "ការចាប់យកតម្រូវការគោលដៅស្នូល" },
                desc: {
                    ko: <>전체 인구의 70%가 30대 이하인 '젊은 국가'. 젊은 노동자들의 <strong className="text-white">'육체적 피로'</strong>가 극에 달해 있었습니다. 박카스는 이들에게 <strong className="text-white">"하루의 활력을 주는 필수 에너지원"</strong>으로 접근했습니다.</>,
                    en: <>A 'young country' where 70% of the population is under 30. The <strong className="text-white">'physical fatigue'</strong> of young workers was at its peak. Bacchus approached them as an <strong className="text-white">"essential energy source enabling vitality for the day"</strong>.</>,
                    zh: <>70%的人口都在30岁以下的“年轻国家”。年轻劳动者的<strong className="text-white">“肉体疲劳”</strong>达到了极点。Bacchus作为<strong className="text-white">“给予一天活力的必要能量源”</strong>接近了他们。</>,
                    kh: <>'ប្រទេសវ័យក្មេង' ដែល ៧០% នៃប្រជាជនមានអាយុក្រោម ៣០ ឆ្នាំ។ <strong className="text-white">'ភាពអស់កម្លាំងរាងកាយ'</strong> របស់កម្មករវ័យក្មេងបានឈានដល់កម្រិតកំពូល។ Bacchus បានចូលទៅជិតពួកគេក្នុងនាមជា <strong className="text-white">"ប្រភពថាមពលដ៏សំខាន់ដែលផ្តល់ vital for the day"</strong>។</>
                }
            }
        },
        section2: {
            title: {
                ko: "제품 및 가격 전략 (Product & Price): 철저한 현지화",
                en: "Product & Price Strategy: Thorough Localization",
                zh: "产品及价格战略 (Product & Price)：彻底的本土化",
                kh: "យុទ្ធសាស្ត្រផលិតផល និងតម្លៃ (Product & Price)៖ ធ្វើឱ្យទៅជាលក្ខណៈក្នុងស្រុកទាំងស្រុង"
            },
            box1: {
                title: {
                    ko: "① 유통 환경을 고려한 패키지 혁신 (Can vs Bottle)",
                    en: "① Package Innovation Considering Distribution Environment (Can vs Bottle)",
                    zh: "① 考虑流通环境的包装革新 (Can vs Bottle)",
                    kh: "① ការច្នៃប្រឌិតកញ្ចប់ដោយពិចារណាលើបរិយាកាសចែកចាយ (Can vs Bottle)"
                },
                desc: {
                    ko: <>한국의 상징인 갈색 병(Bottle)을 과감히 포기하고 캔(Can) 제품을 주력으로 내세웠습니다.</>,
                    en: <>Boldly adhering to the brown bottle symbol of Korea, the Can product was put forward as the main focus.</>,
                    zh: <>果断放弃了作为韩国象征的褐色瓶子(Bottle)，将罐装(Can)产品作为主力推出。</>,
                    kh: <>បោះបង់ចោលដបពណ៌ត្នោត (Bottle) ដែលជានិមិត្តសញ្ញារបស់កូរ៉េ ហើយដាក់ចេញផលិតផលកំប៉ុង (Can) ជាគោលដៅសំខាន់។</>
                },
                reason1: {
                    ko: <><strong>이유 1 (물류):</strong> 도로 사정이 좋지 않아 유리병은 파손 위험이 크고 무겁습니다.</>,
                    en: <><strong>Reason 1 (Logistics):</strong> Due to poor road conditions, glass bottles are heavy and have a high risk of breakage.</>,
                    zh: <><strong>理由 1 (物流):</strong> 由于道路状况不佳，玻璃瓶破损风险大且沉重。</>,
                    kh: <><strong>មូលហេតុទី ១ (ភស្តុភារ):</strong> ដោយសារស្ថានភាពផ្លូវមិនល្អ ដបកែវងាយនឹងបែកបាក់ និងធ្ងន់។</>
                },
                reason2: {
                    ko: <><strong>이유 2 (보관):</strong> 소매점은 냉장고 대신 <strong className="text-white">아이스박스</strong>에 보관합니다. 병 라벨은 훼손되지만, 캔은 브랜드가 유지되며 더 빨리 시원해집니다.</>,
                    en: <><strong>Reason 2 (Storage):</strong> Retailers store drinks in <strong className="text-white">iceboxes</strong> instead of fridges. Bottle labels get damaged, but cans maintain branding and cool faster.</>,
                    zh: <><strong>理由 2 (保管):</strong> 零售店用<strong className="text-white">冰盒</strong>代替冰箱保管饮料。瓶子标签会损坏，但罐装能保持品牌且甚至更快变凉。</>,
                    kh: <><strong>មូលហេតុទី ២ (ការរក្សាទុក):</strong> អ្នកលក់រាយរក្សាទុកភេសជ្ជៈនៅក្នុង <strong className="text-white">ធុងទឹកកក</strong> ជំនួសឱ្យទូទឹកកក។ ស្លាកដបអាចខូច ប៉ុន្តែកំប៉ុងរក្សាម៉ាកសញ្ញា និងត្រជាក់លឿនជាង។</>
                }
            },
            box2: {
                title: {
                    ko: "② 고가 프리미엄 전략 (High Price, High Volume)",
                    en: "② High Price Premium Strategy (High Price, High Volume)",
                    zh: "② 高价高端战略 (High Price, High Volume)",
                    kh: "② យុទ្ធសាស្ត្របុព្វលាភតម្លៃខ្ពស់ (High Price, High Volume)"
                },
                desc1: {
                    ko: "경쟁자인 태국의 레드불(Red Bull), 카라바오(Carabao)보다 가격을 높게 책정했습니다.",
                    en: "Priced higher than competitors Red Bull and Carabao from Thailand.",
                    zh: "定价高于竞争对手泰国的红牛(Red Bull)和卡拉宝(Carabao)。",
                    kh: "កំណត់តម្លៃខ្ពស់ជាងគូប្រជែង Red Bull និង Carabao មកពីប្រទេសថៃ។"
                },
                desc2: {
                    ko: <>1인당 GDP가 낮은 상황에서도 <strong className="text-white">"성공한 사람들이 마시는 한국의 프리미엄 드링크"</strong>라는 이미지를 심어주었습니다.</>,
                    en: <>Even with low GDP per capita, it planted the image of <strong className="text-white">"Korea's premium drink for successful people"</strong>.</>,
                    zh: <>即使在人均GDP较低的情况下，也植入了<strong className="text-white">“成功人士喝的韩国高端饮料”</strong>的形象。</>,
                    kh: <>ទោះបីជា GDP ក្នុងមនុស្សម្នាក់ទាបក៏ដោយ វាបានបង្កើតរូបភាពថា <strong className="text-white">"ភេសជ្ជៈបុព្វលាភរបស់កូរ៉េសម្រាប់មនុស្សជោគជ័យ"</strong>។</>
                }
            }
        },
        section3: {
            title: {
                ko: "유통 및 파트너십 전략 (Place): 신뢰 경영의 정수",
                en: "Distribution & Partnership Strategy (Place): The Essence of Trust Management",
                zh: "流通及合作伙伴战略 (Place)：信任经营的精髓",
                kh: "យុទ្ធសាស្ត្រចែកចាយ និងភាពជាដៃគូ (Place)៖ សារៈសំខាន់នៃការគ្រប់គ្រងដោយទំនុកចិត្ត"
            },
            box1: {
                title: { ko: "이원화된 유통 구조", en: "Dual Track Distribution Structure", zh: "二元化流通结构", kh: "រចនាសម្ព័ន្ធចែកចាយផ្លូវពីរ" },
                capital: { ko: "프놈펜 (수도)", en: "Phnom Penh (Capital)", zh: "金边 (首都)", kh: "ភ្នំពេញ (រាជធានី)" },
                capitalDesc: { ko: "본사가 직접 240여 개 도매상 관리 (루트 세일즈)", en: "Headquarters manages 240+ wholesalers directly (Route Sales)", zh: "总公司直接管理240多个批发商 (路线销售)", kh: "ទីស្នាក់ការកណ្តាលគ្រប់គ្រងអ្នកលក់ដុំជាង ២៤០ ដោយផ្ទាល់ (Route Sales)" },
                provincial: { ko: "지방 (Provincial)", en: "Provincial", zh: "地方 (Provincial)", kh: "ខេត្ត (Provincial)" },
                provincialDesc: {
                    ko: <>24개 주요 지방 유력자에게 <strong className="text-amber-500">'총판권(Master Franchise)'</strong> 부여.</>,
                    en: <>Granted <strong className="text-amber-500">'Master Franchise'</strong> rights to influential figures in 24 major provinces.</>,
                    zh: <>赋予24个主要地方有力人士<strong className="text-amber-500">'总经销权(Master Franchise)'</strong>。</>,
                    kh: <>ផ្តល់សិទ្ធិ <strong className="text-amber-500">'Master Franchise'</strong> ដល់បុគ្គលដែលមានឥទ្ធិពលនៅក្នុង ២៤ ខេត្តសំខាន់ៗ។</>
                }
            },
            box2: {
                title: { ko: "파트너십의 재정의", en: "Redefinition of Partnership", zh: "重新定义合作伙伴关系", kh: "កំណត់និយមន័យភាពជាដៃគូឡើងវិញ" },
                desc: {
                    ko: <>"한국 방식대로 하라"고 지시하지 않고, <strong className="text-white">현지 파트너(쏙 삼낭 대표)</strong>의 판단을 전적으로 신뢰하고 지원했습니다.</>,
                    en: <>Instead of dictating "Do it the Korean way", fully trusted and supported the judgment of the <strong className="text-white">local partner (CEO Sok Samnang)</strong>.</>,
                    zh: <>没有指示“按照韩国方式做”，而是完全信任并支持<strong className="text-white">当地合作伙伴(Sok Samnang 代表)</strong>的判断。</>,
                    kh: <>ជំនួសឱ្យការបង្គាប់បញ្ជាថា "ធ្វើតាមរបៀបកូរ៉េ" បានជឿទុកចិត្ត និងគាំទ្រយ៉ាងពេញទំហឹងនូវការសម្រេចចិត្តរបស់ <strong className="text-white">ដៃគូក្នុងស្រុក (CEO Sok Samnang)</strong>។</>
                }
            }
        },
        section4: {
            title: {
                ko: "홍보 및 마케팅 전략 (Promotion): 압도적인 물량 공세",
                en: "Promotion & Marketing Strategy: Overwhelming Volume Offensive",
                zh: "宣传及营销战略 (Promotion)：压倒性的物量攻势",
                kh: "យុទ្ធសាស្ត្រផ្សព្វផ្សាយ និងទីផ្សារ (Promotion)៖ ការវាយលុកដោយបរិមាណលើសលប់"
            },
            strat1: {
                title: { ko: "① 미디어 선점 및 차단 (Blocking Strategy)", en: "① Media Preemption & Blocking Strategy", zh: "① 媒体抢占及阻断 (Blocking Strategy)", kh: "① ការដណ្តើមប្រព័ន្ធផ្សព្វផ្សាយ និងយុទ្ធសាស្ត្រទប់ស្កាត់" },
                desc: {
                    ko: <>주요 프라임 타임 광고 슬롯을 <strong className="text-white">2~3년 치 미리 현찰로 선구매(Buying)</strong>해버렸습니다. 경쟁사의 진입을 원천 봉쇄하는 전략입니다.</>,
                    en: <>Pre-purchased prime time ad slots for <strong className="text-white">2-3 years in cash</strong>. A strategy to block competitor entry at the source.</>,
                    zh: <><strong className="text-white">提前用现金购买了2~3年</strong>的主要黄金时段广告位。从源头上封锁竞争对手进入的战略。</>,
                    kh: <>បានទិញទុកមុននូវម៉ោងផ្សាយពាណិជ្ជកម្មសំខាន់ៗសម្រាប់ <strong className="text-white">២-៣ ឆ្នាំ ដោយសាច់ប្រាក់</strong>។ យុទ្ធសាស្ត្រទប់ស្កាត់ការចូលរបស់គូប្រជែងនៅប្រភពដើម។</>
                }
            },
            strat2: {
                title: { ko: "② 문화 결핍을 파고든 '찾아가는 콘서트'", en: "② 'Visiting Concerts' Targeting Cultural Scarcity", zh: "② 针对文化匮乏的'巡回演唱会'", kh: "② 'ការប្រគុំតន្ត្រីចល័ត' តម្រង់គោលដៅលើកង្វះវប្បធម៌" },
                desc: {
                    ko: <>지방 순회 뮤직 콘서트 개최. 주민들에게 <strong className="text-white">'즐거움을 주는 고마운 브랜드'</strong>로 각인되었습니다.</>,
                    en: <>Held provincial music concerts. Imprinted as a <strong className="text-white">'grateful brand that brings joy'</strong> to residents.</>,
                    zh: <>举办地方巡回音乐演唱会。给居民留下了<strong className="text-white">“带来快乐的感激品牌”</strong>的印象。</>,
                    kh: <>បានរៀបចំការប្រគុំតន្ត្រីនៅតាមខេត្ត។ បានដក់ជាប់ក្នុងចិត្តប្រជាជនថាជា <strong className="text-white">'ម៉ាកដែលនាំមកនូវភាពសប្បាយរីករាយ'</strong>។</>
                }
            },
            strat3: {
                title: { ko: "③ 국민 정서와 함께하는 스포츠/애국 마케팅", en: "③ Sports/Patriotic Marketing with National Sentiment", zh: "③ 与国民情绪共鸣的体育/爱国营销", kh: "③ ទីផ្សារកីឡា/ស្នេហាជាតិ ជាមួយមនោសញ្ចេតនាជាតិ" },
                desc: {
                    ko: "국민 영웅 후원 및 쿤 크메르(Kun Khmer) 지원. \"박카스는 캄보디아의 자부심과 함께한다\"는 메시지를 전달했습니다.",
                    en: "Sponsored national heroes and Kun Khmer. Delivered the message \"Bacchus stands with Cambodia's pride\".",
                    zh: "赞助国民英雄及高棉拳(Kun Khmer)。传递了“Bacchus与柬埔寨的自豪感同在”的信息。",
                    kh: "ឧបត្ថម្ភវីរបុរសជាតិ និងគុនខ្មែរ (Kun Khmer)។ បានបញ្ជូនសារថា \"Bacchus ឈរឈ្មោះជាមួយមោទនភាពរបស់កម្ពុជា\"។"
                }
            }
        },
        conclusion: {
            title: { ko: "결론 및 시사점", en: "Conclusion & Implications", zh: "结论及启示", kh: "សេចក្តីសន្និដ្ឋាន និងអត្ថន័យ" },
            desc: {
                ko: <>이 사례는 단순히 물건을 많이 판 이야기가 아닙니다.<br /><span className="text-amber-400 text-lg md:text-xl font-black block mt-2">"현지 파트너가 가진 잠재력을 한국의 자본과 기획력이 어떻게 폭발시켰는가"</span><span className="block mt-1 text-sm text-stone-400">에 대한 이야기입니다.</span></>,
                en: <>This is not just a story of selling many products.<br /><span className="text-amber-400 text-lg md:text-xl font-black block mt-2">"How Korean capital and planning unleashed the potential of local partners"</span><span className="block mt-1 text-sm text-stone-400">That is what this story is truly about.</span></>,
                zh: <>这不仅仅是一个卖了很多产品的故事。<br /><span className="text-amber-400 text-lg md:text-xl font-black block mt-2">"韩国的资本和企划力如何引爆当地合作伙伴的潜力"</span><span className="block mt-1 text-sm text-stone-400">这才是这个故事真正要讲述的。</span></>,
                kh: <>នេះមិនមែនគ្រាន់តែជារឿងនៃការលក់ផលិតផលបានច្រើននោះទេ។<br /><span className="text-amber-400 text-lg md:text-xl font-black block mt-2">"របៀបដែលដើមទុន និងការរៀបចំផែនការរបស់កូរ៉េបានធ្វើឱ្យសក្តានុពលរបស់ដៃគូក្នុងស្រុកផ្ទុះឡើង"</span><span className="block mt-1 text-sm text-stone-400">នោះហើយជាអ្វីដែលរឿងនេះពិតជានិយាយអំពី។</span></>
            }
        },
        close: { ko: "닫기 (Close)", en: "Close", zh: "关闭", kh: "បិទ" }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] bg-stone-900 border border-stone-800 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-stone-800 bg-stone-900/95 sticky top-0 z-10 backdrop-blur-md">
                    <h2 className="text-base md:text-xl lg:text-2xl font-bold text-white flex items-center gap-2 min-w-0">
                        <Trophy className="w-5 h-5 md:w-6 md:h-6 text-amber-500 flex-shrink-0" />
                        <span className="truncate">{content.headerTitle[lang]}</span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-8 md:space-y-12 text-stone-300 leading-relaxed scrollbar-hide">

                    {/* Intro */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                            {content.mainTitle[lang]}
                        </h3>
                        <div className="p-3 md:p-4 bg-amber-900/20 border border-amber-500/20 rounded-xl">
                            <p className="font-medium text-amber-100 text-sm md:text-base">
                                {content.intro[lang]}
                            </p>
                        </div>
                    </div>

                    {/* Section 1 */}
                    <section className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm md:text-base border border-blue-500/30">1</div>
                            <div className="space-y-4">
                                <h4 className="text-lg md:text-xl font-bold text-white">{content.section1.title[lang]}</h4>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-stone-800/50 p-5 rounded-xl border border-stone-700">
                                        <div className="flex items-center gap-2 mb-2 text-stone-200 font-bold">
                                            <TrendingUp className="w-4 h-4 text-green-500" /> {content.section1.box1.title[lang]}
                                        </div>
                                        <p className="text-sm">
                                            {content.section1.box1.desc[lang]}
                                        </p>
                                    </div>
                                    <div className="bg-stone-800/50 p-5 rounded-xl border border-stone-700">
                                        <div className="flex items-center gap-2 mb-2 text-stone-200 font-bold">
                                            <Users className="w-4 h-4 text-orange-500" /> {content.section1.box2.title[lang]}
                                        </div>
                                        <p className="text-sm">
                                            {content.section1.box2.desc[lang]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm md:text-base border border-blue-500/30">2</div>
                            <div className="space-y-4">
                                <h4 className="text-lg md:text-xl font-bold text-white">{content.section2.title[lang]}</h4>

                                <div className="space-y-6">
                                    <div className="bg-stone-800/30 p-5 rounded-xl border border-stone-700">
                                        <h5 className="font-bold text-amber-500 mb-3 flex items-center gap-2">
                                            <Package className="w-4 h-4" />
                                            {content.section2.box1.title[lang]}
                                        </h5>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="flex-1 space-y-3">
                                                <p>{content.section2.box1.desc[lang]}</p>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex gap-2">
                                                        <span className="text-stone-500">•</span>
                                                        <span>{content.section2.box1.reason1[lang]}</span>
                                                    </li>
                                                    <li className="flex gap-2">
                                                        <span className="text-stone-500">•</span>
                                                        <span>{content.section2.box1.reason2[lang]}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="w-full md:w-48 h-32 rounded-lg bg-stone-950 overflow-hidden flex items-center justify-center border border-stone-700">
                                                <img src="/img/bacchus.jpg" alt="Bacchus Can" className="h-full object-contain" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-stone-800/30 p-5 rounded-xl border border-stone-700">
                                        <h5 className="font-bold text-amber-500 mb-2">{content.section2.box2.title[lang]}</h5>
                                        <p className="mb-2">{content.section2.box2.desc1[lang]}</p>
                                        <p className="text-sm border-l-2 border-stone-600 pl-3 italic text-stone-400">
                                            {content.section2.box2.desc2[lang]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm md:text-base border border-blue-500/30">3</div>
                            <div className="space-y-4">
                                <h4 className="text-lg md:text-xl font-bold text-white">{content.section3.title[lang]}</h4>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-5 rounded-xl border border-stone-700">
                                        <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-red-500" /> {content.section3.box1.title[lang]}
                                        </h5>
                                        <ul className="space-y-3 text-sm">
                                            <li>
                                                <div className="font-bold text-stone-300">{content.section3.box1.capital[lang]}</div>
                                                <div className="text-stone-500">{content.section3.box1.capitalDesc[lang]}</div>
                                            </li>
                                            <li>
                                                <div className="font-bold text-stone-300">{content.section3.box1.provincial[lang]}</div>
                                                <div className="text-stone-500">{content.section3.box1.provincialDesc[lang]}</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-5 rounded-xl border border-stone-700">
                                        <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <Users className="w-4 h-4 text-blue-500" /> {content.section3.box2.title[lang]}
                                        </h5>
                                        <p className="text-sm mb-2">"Localization is Respect"</p>
                                        <p className="text-xs text-stone-400 leading-relaxed">
                                            {content.section3.box2.desc[lang]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm md:text-base border border-blue-500/30">4</div>
                            <div className="space-y-4">
                                <h4 className="text-lg md:text-xl font-bold text-white">{content.section4.title[lang]}</h4>

                                <div className="space-y-4">
                                    {/* Strategy 1 */}
                                    <div className="bg-stone-900 p-5 rounded-xl border border-stone-800">
                                        <h5 className="font-bold text-white mb-2">{content.section4.strat1.title[lang]}</h5>
                                        <p className="text-sm text-stone-400">
                                            {content.section4.strat1.desc[lang]}
                                        </p>
                                    </div>

                                    {/* Strategy 2 */}
                                    <div className="bg-stone-900 p-5 rounded-xl border border-stone-800 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                                        <h5 className="font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                                            <Music className="w-4 h-4 text-amber-500" /> {content.section4.strat2.title[lang]}
                                        </h5>
                                        <p className="text-sm text-stone-400 relative z-10">
                                            {content.section4.strat2.desc[lang]}
                                        </p>
                                    </div>

                                    {/* Strategy 3 */}
                                    <div className="bg-stone-900 p-5 rounded-xl border border-stone-800">
                                        <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <Award className="w-4 h-4 text-yellow-500" /> {content.section4.strat3.title[lang]}
                                        </h5>
                                        <p className="text-sm text-stone-400">
                                            {content.section4.strat3.desc[lang]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="bg-gradient-to-r from-amber-900/40 to-stone-900 p-4 md:p-6 rounded-xl md:rounded-2xl border border-amber-500/30 text-center">
                        <h4 className="text-base md:text-lg font-bold text-white mb-3">{content.conclusion.title[lang]}</h4>
                        <p className="text-stone-300 font-medium text-sm md:text-base">
                            {content.conclusion.desc[lang]}
                        </p>
                    </section>

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-stone-800 bg-stone-900/95 backdrop-blur-md flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors font-medium text-sm"
                    >
                        {content.close[lang]}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarketingModal;
