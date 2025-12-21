import { Language } from "../types";

const callGeminiAPI = async (prompt: string, config?: any): Promise<string> => {
  try {
    const response = await fetch('/api/proxy', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, generationConfig: config }),
    });

    if (!response.ok) {
      let errorMsg = `Server Error: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData.error) errorMsg = errorData.error;
      } catch (e) {
        // Ignore JSON parse error if response is not JSON
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    return data.text || "No response generated.";
  } catch (error: any) {
    console.error("Failed to call Backend API:", error);
    // Return the actual error message so the user can see if it's 404, 500, etc.
    return `Error: ${error.message || "Unknown error"}. Please check backend connection.`;
  }
};


const COMPANY_CONTEXT = `
  IMPORTANT COMPANY HISTORY & IDENTITY:
  - **Company Name**: Fu Lu Shou Co., Ltd.
  - **Founder/CEO**: Sok Samnang (The legendary figure who created the "Bacchus Myth" in Cambodia).
  - **Origins**: The company started as "CAM GOLD" before rebranding to Fu Lu Shou.
  - **Core Identity**: Based on the concept of Fu (Fortune), Lu (Prosperity), and Shou (Longevity).
  - **Business**: Leading distribution partner connecting global brands to the Cambodian market.
  - **Key Products**: Bacchus (Energy Drink), Olatte, Pocari Sweat, Shin Ramyun (Nongshim).
  - **Future Interests**: Expanding into Korean Milk (Dairy), Seaweed (Laver), and broader F&B sectors.

  [CORE SUCCESS STORY: BACCHUS LEGEND]
  1. **Hyper-Localization**: Shifted from Glass Bottle (KR) to Can (Cambodia) to survive rough logistics and ice-bucket cooling compatibility.
  2. **Targeting**: Primary target was Blue-collar workers (construction/drivers) with "Fatigue Recovery". Sub-target was Youth (Trendy Energy Drink).
  3. **Price Strategy**: Massstige (Premium but accessible). $0.7/can. A symbol of "Small Luxury" for workers.
  4. **Distribution**: Direct Sales (Phnom Penh) + Wholesale/Distributors (Provinces) to cover the whole country.
  5. **Marketing**: 
     - "Media Blocking" (Bought all prime time TV slots to block competitors).
     - Concert Tours (Entertainment for rural areas) + CSR (Sports sponsorship).
  6. **Partnership**: Full trust & empowerment to local partner (Cam Gold/Fu Lu Shou) who knew the market best. No forcing of KR standards.
`;

export const generateStrategyInsight = async (
  product: string,
  category: string,
  lang: Language
): Promise<string> => {
  const langName = lang === Language.KO ? 'Korean' : 'English';

  const prompt = `
    You are an expert business consultant for the Cambodian market, representing "Fu Lu Shou".
    ${COMPANY_CONTEXT}
    
    Task: Create a meaningful, creative, and specific market entry strategy for a product.
    Product: "${product}"
    Category: "${category}"
    Target Audience Language: ${langName}

    IMPORTANT INSTRUCTIONS:
    1. **Avoid Repetition**: Do NOT just copy-paste the "Bacchus Legend" or generic advice. Think critically about THIS specific product.
    2. **Be Creative**: Use the "Hyper-Localization" spirit of Fu Lu Shou but apply it uniquely to "${product}".
    3. **Language**: The response MUST be in ${langName} ONLY.
    
    Please provide a structured response in Markdown format with the following sections:
    1. **Target Audience**: Who buys this in Cambodia? (Be specific: e.g., students, factory workers, elite, etc.)
    2. **Localization Idea**: How to adapt for local culture/climate? (e.g., packaging, flavor, size, cooling method)
    3. **Promotion Tactic**: Specific marketing idea relevant to Cambodia (e.g., TikTok challenge, wedding gifts, pagoda donations, etc.)
    
    Keep the tone professional yet innovative.
  `;

  // Higher temperature for more creativity
  return await callGeminiAPI(prompt, { temperature: 0.7 });
};

export const getChatResponse = async (userMessage: string, historyContext: string, lang: Language): Promise<string> => {
  const langName = lang === Language.KO ? 'Korean' : 'English';

  const prompt = `
    SYSTEM INSTRUCTION: You are "Mr. Bae", the Senior Executive Advisor (고문) for Fu Lu Shou.
    You MUST prioritize the following Company Context over any general knowledge.
    
    ${COMPANY_CONTEXT}
    
    Context:
    - Role: You are a wise, experienced strategic advisor (Senior Executive Advisor).
    - Style: Professional, insightful, authoritative yet approachable.
    - Answering in: ${langName}
    
    HISTORY OF CONVERSATION:
    ${historyContext}
    
    CURRENT USER QUESTION: "${userMessage}"
    
    Response Guidelines:
    1. **Strictly adhere to the Company Context.** Do not invent products or history.
    2. **Products**: If asked what we sell, list ONLY: Bacchus, Olatte, Pocari Sweat, Shin Ramyun.
    3. **Founder**: Sok Samnang (Legendary Bacchus Myth creator).
    4. **Future**: Korean Milk, Seaweed.
    5. **NO REPETITION**: If you have ALREADY mentioned the Company History, Founder, or Origins in the "HISTORY OF CONVERSATION" above, **DO NOT REPEAT IT**. Just answer the new specific question directly. Do not act like a broken record.
    
    Provide a helpful, precise, and concise response.
  `;

  return await callGeminiAPI(prompt);
};

export const resetChatSession = () => {
  // In a real app with history, we would clear the history array here or generate a new session ID.
  // For this simple single-turn implementation, we just log it.
  console.log("Chat session reset");
};