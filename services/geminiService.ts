import { Language } from "../types";

// Mock implementation to remove external API dependency
export const generateStrategyInsight = async (
  product: string,
  category: string,
  lang: Language
): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const langName = lang === Language.KO ? 'Korean' : 'English';

  // Mock response based on product and language
  if (lang === Language.KO) {
    return `### 🚀 ${product} (${category}) 캄보디아 시장 진입 전략
    
**1. 타겟 오디언스 (Target Audience)**
* **주요 타겟:** 20-30대 젊은 층 및 건설/봉제 공장의 현장 근로자.
* **이유:** ${category} 카테고리는 특히 에너지 소모가 많은 현장 노동자와 새로운 트렌드에 민감한 젊은 층에게 소구력이 높습니다.

**2. 현지화 아이디어 (Localization Idea)**
* **패키징:** 캄보디아의 더운 날씨를 고려하여, 차갑게 유지될 수 있는 알루미늄 캔 패키지를 강조하거나, 얼음 컵과 함께 제공하는 번들 상품을 기획합니다.
* **맛/성분:** 현지인들이 선호하는 강한 단맛을 조금 더 추가하거나, 비타민 등 활력 성분을 강조하는 문구를 크메르어로 큼직하게 표기합니다.

**3. 프로모션 전략 (Promotion Tactic)**
* **게릴라 샘플링:** 프놈펜 주요 공단 지역 및 대학가 앞에서 출근/등교 시간에 맞춰 무료 시음 행사를 진행합니다.
* **모바일 연계:** 캔 따개 뒷면에 QR코드를 넣어, 당첨 시 1개를 더 주는 'Lucky Draw' 이벤트를 진행하여 재구매율을 높입니다.`;
  } else {
    return `### 🚀 Market Entry Strategy for ${product} (${category})
    
**1. Target Audience**
* **Primary Target:** Young adults (20-30s) and field workers in construction/garment factories.
* **Reason:** This ${category} category appeals strongly to workers needing energy and youth seeking trends.

**2. Localization Idea**
* **Packaging:** Considering the hot climate, emphasize aluminum cans that stay cold longer, or offer "Ice Cup" bundles.
* **Flavor/Ingredients:** Slightly increase sweetness to match local preference, and highlight vitality ingredients in large Khmer text.

**3. Promotion Tactic**
* **Guerrilla Sampling:** Conduct free tasting events at major industrial parks and universities during rush hour.
* **Mobile Campaign:** Add QR codes under the tab for a "Buy 1 Get 1 Free" lucky draw to boost repurchase rates.`;
  }
};

export const getChatResponse = async (userMessage: string, lang: Language): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (lang === Language.KO) {
    return `**[AI 파트너 (Mock Mode)]**\n\n죄송합니다. 현재 데모 버전에서는 실시간 AI 응답이 비활성화되어 있습니다.\n\n하지만 **Fu Lu Shou**는 언제나 파트너사의 문의를 환영합니다. 구체적인 비즈니스 상담은 하단의 **Contact** 정보를 통해 연락 주시면, 담당자(Mr. Bae)가 신속히 답변 드리겠습니다.\n\n*질문해 주셔서 감사합니다: "${userMessage}"*`;
  } else {
    return `**[AI Partner (Mock Mode)]**\n\nI apologize. Real-time AI responses are currently disabled in this demo version.\n\nHowever, **Fu Lu Shou** always welcomes inquiries. For specific business discussions, please reach out via the **Contact** info at the bottom, and our advisor (Mr. Bae) will respond promptly.\n\n*Thank you for your question: "${userMessage}"*`;
  }
};

export const resetChatSession = () => {
  // No-op for mock
  console.log("Chat session reset (Mock)");
};