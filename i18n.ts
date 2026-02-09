import { LocalizedContent } from './types';

// 다국어 번역 데이터
export const translations = {
    // Navigation
    nav: {
        home: { ko: '홈', en: 'Home', zh: '首页', kh: 'ទំព័រដើម' },
        about: { ko: '회사소개', en: 'About', zh: '关于我们', kh: 'អំពីយើង' },
        products: { ko: '제품', en: 'Products', zh: '产品', kh: 'ផលិតផល' },
        philosophy: { ko: '철학', en: 'Philosophy', zh: '理念', kh: 'ទស្សនវិជ្ជា' },
        history: { ko: '연혁', en: 'History', zh: '历程', kh: 'ប្រវត្តិ' },
        strategy: { ko: '전략', en: 'Strategy', zh: '战略', kh: 'យុទ្ធសាស្ត្រ' },
        network: { ko: '유통망', en: 'Network', zh: '分销网络', kh: 'បណ្តាញ' },
        marketing: { ko: '마케팅', en: 'Marketing', zh: '营销', kh: 'ទីផ្សារ' },
        contact: { ko: '문의', en: 'Contact', zh: '联系我们', kh: 'ទំនាក់ទំនង' },
    } as Record<string, LocalizedContent>,

    // Hero Section
    hero: {
        badge: {
            ko: '캄보디아 시장의 마켓 아키텍트',
            en: "Cambodia's Premier Market Architect",
            zh: '柬埔寨市场的市场建筑师',
            kh: 'ស្ថាបត្យករទីផ្សារកម្ពុជា'
        },
        title1: {
            ko: '불가능을 가능으로,',
            en: 'Turning the Impossible',
            zh: '化不可能为可能，',
            kh: 'បំប្លែងអសាធ្យ'
        },
        title2: {
            ko: '신화를 현실로.',
            en: 'into Legend.',
            zh: '创造传奇。',
            kh: 'ទៅជារឿងព្រេង។'
        },
        desc: {
            ko: 'Fu Lu Shou는 단순한 유통을 넘어, 현지화 전략과 강력한 네트워크로 귀사의 브랜드를 캄보디아의 \'국민 브랜드\'로 설계합니다.',
            en: 'Beyond simple logistics, we architect your brand into a \'National Brand\' through hyper-localization strategies and an unrivaled network.',
            zh: '福禄寿超越简单的物流，通过本地化战略和强大的网络，将您的品牌打造成柬埔寨的"国民品牌"。',
            kh: 'ហួសពីការដឹកជញ្ជូនសាមញ្ញ យើងរចនាម៉ាកយីហោរបស់អ្នកទៅជា \'ម៉ាកយីហោជាតិ\' តាមរយៈយុទ្ធសាស្រ្តមូលដ្ឋានកម្រិតខ្ពស់ និងបណ្តាញដែលមិនអាចប្រៀបផ្ទឹមបាន។'
        },
        cta: {
            ko: '성공 사례 분석',
            en: 'View Case Study',
            zh: '查看案例研究',
            kh: 'មើលករណីសិក្សា'
        },
    } as Record<string, LocalizedContent>,

    // Company Overview Section
    companyOverview: {
        sectionTitle: { ko: '회사 개요', en: 'Company Overview', zh: '公司概况', kh: 'ទិដ្ឋភាពទូទៅរបស់ក្រុមហ៊ុន' },
        subtitle: { ko: '캄보디아 F&B 유통의 리더', en: 'Leader in Cambodia F&B Distribution', zh: '柬埔寨食品饮料分销领导者', kh: 'អ្នកដឹកនាំក្នុងការចែកចាយអាហារ និងភេសជ្ជៈកម្ពុជា' },
        ceo: { ko: 'CEO', en: 'CEO', zh: '首席执行官', kh: 'នាយកប្រតិបត្តិ' },
        ceoName: { ko: 'Mr. Sok Samnang', en: 'Mr. Sok Samnang', zh: 'Sok Samnang先生', kh: 'លោក សុខ សំណាង' },
        employees: { ko: '직원', en: 'Employees', zh: '员工', kh: 'បុគ្គលិក' },
        yearsExp: { ko: '년 경력', en: 'Years Experience', zh: '年经验', kh: 'ឆ្នាំបទពិសោធន៍' },
        warehouse: { ko: '창고 면적', en: 'Warehouse Area', zh: '仓库面积', kh: 'ផ្ទៃឃ្លាំង' },
        distributors: { ko: '전국 총판', en: 'Distributors', zh: '全国分销商', kh: 'អ្នកចែកចាយ' },
        trucks: { ko: '배송 트럭', en: 'Delivery Trucks', zh: '送货卡车', kh: 'រថយន្តដឹកជញ្ជូន' },
        vision: {
            ko: '캄보디아의 선도적인 무역 회사가 되어, 고품질 제품과 건강 혜택 제품을 제공합니다.',
            en: 'To be a leading trading company in Cambodia, providing high-quality products and health-benefit products.',
            zh: '成为柬埔寨领先的贸易公司，提供高质量和健康益处的产品。',
            kh: 'ដើម្បីក្លាយជាក្រុមហ៊ុនពាណិជ្ជកម្មឈានមុខគេនៅកម្ពុជា ដោយផ្តល់ផលិតផលគុណភាពខ្ពស់ និងផលិតផលមានប្រយោជន៍ដល់សុខភាព។'
        },
        mission: {
            ko: '우리는 수요를 따르지 않고, 수요를 창출합니다. 혁신적인 제품을 시장에 도입하고 소비자를 교육합니다.',
            en: 'We do not simply follow the demand, but we Create Demand and then supply. We bring innovative products to market and educate consumers.',
            zh: '我们不仅仅跟随需求，而是创造需求然后供应。我们将创新产品引入市场并教育消费者。',
            kh: 'យើងមិនគ្រាន់តែធ្វើតាមតម្រូវការទេ ប៉ុន្តែយើងបង្កើតតម្រូវការ ហើយបន្ទាប់មកផ្គត់ផ្គង់។ យើងនាំយកផលិតផលច្នៃប្រឌិតទៅទីផ្សារ និងអប់រំអ្នកប្រើប្រាស់។'
        }
    } as Record<string, LocalizedContent>,

    // Distribution Network Section
    distribution: {
        sectionTitle: { ko: '유통 네트워크', en: 'Distribution Network', zh: '分销网络', kh: 'បណ្តាញចែកចាយ' },
        subtitle: { ko: '캄보디아 전역을 커버하는 강력한 네트워크', en: 'Powerful Network Covering All of Cambodia', zh: '覆盖柬埔寨全境的强大网络', kh: 'បណ្តាញដ៏រឹងមាំគ្របដណ្តប់ទូទាំងកម្ពុជា' },
        headOffice: { ko: '본사', en: 'Head Office', zh: '总部', kh: 'ការិយាល័យកណ្តាល' },
        subDistributors: { ko: '전국 총판', en: 'Sub-Distributors', zh: '分销商', kh: 'អ្នកចែកចាយរង' },
        wholesalers: { ko: '도매상', en: 'Wholesalers', zh: '批发商', kh: 'អ្នកលក់ដុំ' },
        retailers: { ko: '소매점', en: 'Retailers', zh: '零售商', kh: 'អ្នកលក់រាយ' },
        modernTrade: { ko: '현대 유통', en: 'Modern Trade', zh: '现代贸易', kh: 'ពាណិជ្ជកម្មទំនើប' },
        generalTrade: { ko: '일반 유통', en: 'General Trade', zh: '传统贸易', kh: 'ពាណិជ្ជកម្មទូទៅ' },
        phnomPenh: { ko: '프놈펜', en: 'Phnom Penh', zh: '金边', kh: 'ភ្នំពេញ' },
        provinces: { ko: '지방', en: 'Provinces', zh: '省份', kh: 'ខេត្ត' },
        directSales: { ko: '직접 판매', en: 'Direct Sales', zh: '直销', kh: 'ការលក់ផ្ទាល់' },
        coverage: { ko: '커버리지', en: 'Coverage', zh: '覆盖率', kh: 'ការគ្របដណ្តប់' },
    } as Record<string, LocalizedContent>,

    // Marketing Power Section  
    marketing: {
        sectionTitle: { ko: '마케팅 파워', en: 'Marketing Power', zh: '营销力量', kh: 'អំណាចទីផ្សារ' },
        subtitle: { ko: '360° 통합 마케팅 커뮤니케이션', en: '360° Integrated Marketing Communication', zh: '360°整合营销传播', kh: 'ទំនាក់ទំនងទីផ្សាររួម 360°' },
        atl: { ko: 'ATL (Above The Line)', en: 'ATL (Above The Line)', zh: 'ATL (线上广告)', kh: 'ATL (លើខ្សែ)' },
        btl: { ko: 'BTL (Below The Line)', en: 'BTL (Below The Line)', zh: 'BTL (线下广告)', kh: 'BTL (ក្រោមខ្សែ)' },
        digital: { ko: '디지털', en: 'Digital', zh: '数字营销', kh: 'ឌីជីថល' },
        tvSpots: { ko: 'TV 광고 스팟/월', en: 'TV Spots/Month', zh: '电视广告位/月', kh: 'កន្លែងទូរទស្សន៍/ខែ' },
        tvChannels: { ko: 'Top TV 채널', en: 'Top TV Channels', zh: '顶级电视频道', kh: 'ប៉ុស្តិ៍ទូរទស្សន៍កំពូល' },
        billboards: { ko: '빌보드 광고', en: 'Billboard Ads', zh: '广告牌', kh: 'ផ្ទាំងផ្សាយពាណិជ្ជកម្ម' },
        sampling: { ko: '샘플링 활동', en: 'Sampling Activities', zh: '试用活动', kh: 'សកម្មភាពសាកល្បង' },
        booth: { ko: '부스/이벤트', en: 'Booth/Events', zh: '展位/活动', kh: 'បូត/ព្រឹត្តិការណ៍' },
        kol: { ko: 'KOL 마케팅', en: 'KOL Marketing', zh: 'KOL营销', kh: 'ទីផ្សារ KOL' },
        facebook: { ko: 'Facebook 커뮤니티', en: 'Facebook Community', zh: 'Facebook社区', kh: 'សហគមន៍ Facebook' },
    } as Record<string, LocalizedContent>,

    // Identity Section
    identity: {
        sectionTitle: { ko: '아이덴티티', en: 'Identity', zh: '企业标识', kh: 'អត្តសញ្ញាណ' },
        whyFls: { ko: '왜 Fu Lu Shou 인가?', en: 'Why Fu Lu Shou?', zh: '为什么选择福禄寿？', kh: 'ហេតុអ្វីបានជា Fu Lu Shou?' },
        strategy: {
            ko: '우리는 한국의 고도 성장기 성공 방정식을 캄보디아에 이식하는 \'시공간적 이식 전략(Time-Machine Strategy)\'의 전문가입니다.',
            en: 'We are experts in the \'Time-Machine Strategy\', transplanting proven growth formulas into modern Cambodia.',
            zh: '我们是"时间机器战略"的专家，将经过验证的增长公式移植到现代柬埔寨。',
            kh: 'យើងជាអ្នកជំនាញក្នុង \'យុទ្ធសាស្ត្រម៉ាស៊ីនពេលវេលា\' ដោយផ្ទេរម៉ូដែលកំណើនដែលបានបញ្ជាក់ទៅកម្ពុជាទំនើប។'
        },
        marketShare: { ko: '시장 점유율 (에너지 음료)', en: 'Market Share (Energy Drink)', zh: '市场份额（能量饮料）', kh: 'ចំណែកទីផ្សារ (ភេសជ្ជៈថាមពល)' },
        annualImport: { ko: '연간 수입 실적', en: 'Annual Import Volume', zh: '年进口额', kh: 'បរិមាណនាំចូលប្រចាំឆ្នាំ' },
        annualSales: { ko: '연간 판매량 (Cans)', en: 'Annual Sales Volume', zh: '年销量（罐）', kh: 'បរិមាណលក់ប្រចាំឆ្នាំ' },
    } as Record<string, LocalizedContent>,

    // Products Section
    products: {
        sectionTitle: { ko: '주요 유통 제품', en: 'Our Major Products', zh: '主要产品', kh: 'ផលិតផលសំខាន់ៗរបស់យើង' },
    } as Record<string, LocalizedContent>,

    // Philosophy Section
    philosophy: {
        sectionTitle: { ko: '철학 & DNA', en: 'Philosophy & DNA', zh: '理念与DNA', kh: 'ទស្សនវិជ្ជា និង DNA' },
        threeWisdoms: { ko: '번영을 향한 세 가지 지혜', en: 'Three Wisdoms for Prosperity', zh: '繁荣的三大智慧', kh: 'ប្រាជ្ញាបីសម្រាប់សុភមង្គល' },
        ourName: {
            ko: '우리의 이름 \'복록수(福祿壽)\'는 비즈니스가 도달해야 할 가장 숭고한 경지를 의미합니다.',
            en: 'Our name \'Fu Lu Shou\' signifies the most noble heights a business can reach.',
            zh: '我们的名字"福禄寿"象征着企业可以达到的最崇高境界。',
            kh: 'ឈ្មោះរបស់យើង \'Fu Lu Shou\' មានន័យថាកម្រិតដ៏ថ្កុំថ្កើងបំផុតដែលអាជីវកម្មមួយអាចឈានដល់។'
        },
        fu: { ko: '福 (Harmony)', en: 'Fu (Harmony)', zh: '福（和谐）', kh: 'Fu (សុភមង្គល)' },
        lu: { ko: '祿 (Status)', en: 'Lu (Status)', zh: '禄（地位）', kh: 'Lu (ឋានៈ)' },
        shou: { ko: '壽 (Longevity)', en: 'Shou (Longevity)', zh: '寿（长寿）', kh: 'Shou (អាយុវែង)' },
    } as Record<string, LocalizedContent>,

    // Contact Section
    contact: {
        sectionTitle: { ko: '파트너십 문의', en: 'Partnership Inquiry', zh: '合作咨询', kh: 'ការសាកសួរភាពជាដៃគូ' },
        subtitle: {
            ko: '캄보디아 시장 진출을 위한 최고의 파트너',
            en: 'Your Best Partner for Entering the Cambodian Market',
            zh: '进入柬埔寨市场的最佳合作伙伴',
            kh: 'ដៃគូល្អបំផុតរបស់អ្នកសម្រាប់ចូលទីផ្សារកម្ពុជា'
        },
        cta: { ko: '문의하기', en: 'Contact Us', zh: '联系我们', kh: 'ទាក់ទងមកយើង' },
        email: { ko: '이메일', en: 'Email', zh: '电子邮件', kh: 'អ៊ីមែល' },
        phone: { ko: '전화', en: 'Phone', zh: '电话', kh: 'ទូរស័ព្ទ' },
        address: { ko: '주소', en: 'Address', zh: '地址', kh: 'អាសយដ្ឋាន' },
        addressValue: {
            ko: '프놈펜, 캄보디아',
            en: 'Phnom Penh, Cambodia',
            zh: '柬埔寨金边',
            kh: 'ភ្នំពេញ កម្ពុជា'
        },
    } as Record<string, LocalizedContent>,

    // Common
    common: {
        learnMore: { ko: '자세히 보기', en: 'Learn More', zh: '了解更多', kh: 'ស្វែងយល់បន្ថែម' },
        close: { ko: '닫기', en: 'Close', zh: '关闭', kh: 'បិទ' },
        scroll: { ko: '스크롤', en: 'Scroll', zh: '滚动', kh: 'រំកិល' },
    } as Record<string, LocalizedContent>,

    // Language names
    languages: {
        ko: { ko: '한국어', en: 'Korean', zh: '韩语', kh: 'ភាសាកូរ៉េ' },
        en: { ko: 'English', en: 'English', zh: '英语', kh: 'ភាសាអង់គ្លេស' },
        zh: { ko: '中文', en: 'Chinese', zh: '中文', kh: 'ភាសាចិន' },
        kh: { ko: 'ភាសាខ្មែរ', en: 'Khmer', zh: '高棉语', kh: 'ភាសាខ្មែរ' },
    } as Record<string, LocalizedContent>,
};

// Helper function to get translation
export const t = (section: keyof typeof translations, key: string, lang: string): string => {
    const sectionData = translations[section];
    if (!sectionData) return key;

    const item = sectionData[key] as LocalizedContent | undefined;
    if (!item) return key;

    return item[lang as keyof LocalizedContent] || item.en || key;
};
