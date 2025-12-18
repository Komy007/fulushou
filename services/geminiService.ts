import { GoogleGenAI, Chat } from "@google/genai";
import { Language } from "../types";

// Always use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using the recommended model for basic text/chat tasks
const MODEL_NAME = 'gemini-3-flash-preview';

export const generateStrategyInsight = async (
  product: string,
  category: string,
  lang: Language
): Promise<string> => {
  const langName = lang === Language.KO ? 'Korean' : 'English';
  
  const prompt = `
    You are a senior strategist at Fu Lu Shou Co., Ltd. in Cambodia.
    Your task: Create a brief "Market Entry Strategy" for a product: "${product}" (Category: ${category}).
    
    Context:
    - Apply Fu Lu Shou's "Time-Machine Strategy" (using Korea's 1970-80s growth tactics in today's Cambodia).
    - Apply "Hyper-Localization" (adapting to local climate, culture).
    
    Output Format (in ${langName}):
    1. **Target Audience**: Who needs this in Cambodia? (e.g., Construction workers, Young students)
    2. **Localization Idea**: How to change packaging/taste? (e.g., Cans instead of bottles, Sweeter taste)
    3. **Promotion Tactic**: A creative marketing idea (e.g., Media blocking, Concert sponsorship).
    
    Keep it concise, professional, and encouraging. Use Markdown formatting.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Strategy Error:", error);
    return lang === Language.KO 
      ? "죄송합니다. 현재 서비스 연결이 원활하지 않습니다. 모델 구성을 확인해주세요."
      : "Sorry, the service is currently unavailable. Please check the model configuration.";
  }
};

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string, lang: Language): Promise<string> => {
  const langContext = lang === Language.KO ? 'Answer in Korean.' : 'Answer in English.';
  const systemInstruction = `
    You are the AI Business Consultant for Fu Lu Shou Co., Ltd.
    Company Info:
    - CEO: Sok Samnang (Emphasis on local context over global standards).
    - Philosophy: Fu (Harmony), Lu (Prosperity), Shou (Longevity).
    - Best Case: Bacchus (Energy Drink) - No.1 Market Share, beating Red Bull.
    - Strategy: Time-Machine Strategy (Transplanting Korea's 80s success to Cambodia), Media Blocking, Dual Track Distribution.
    - Role: Help potential partners understand the Cambodian market and Fu Lu Shou's capabilities.
    ${langContext}
    Keep answers polite, professional, and helpful.
  `;

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction,
        }
      });
    }

    const response = await chatSession.sendMessage({
      message: userMessage
    });

    return response.text || "";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return lang === Language.KO 
      ? "AI 응답 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      : "An error occurred while getting AI response. Please try again later.";
  }
};

export const resetChatSession = () => {
  chatSession = null;
};