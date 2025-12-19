import { Language } from "../types";

const callGeminiAPI = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('/api/proxy', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
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
    
    Task: meaningful market entry strategy for a product.
    Product: "${product}"
    Category: "${category}"
    Target Audience Language: ${langName}

    Please provide a structured response in Markdown format with the following sections:
    1. **Target Audience**: Who buys this in Cambodia?
    2. **Localization Idea**: How to adapt for local culture/climate?
    3. **Promotion Tactic**: Specific marketing idea.
    
    Keep the tone professional, encouraging, and insightful.
  `;

  return await callGeminiAPI(prompt);
};

export const getChatResponse = async (userMessage: string, lang: Language): Promise<string> => {
  const langName = lang === Language.KO ? 'Korean' : 'English';

  const prompt = `
    You are "Mr. Bae", the AI Business Partner for Fu Lu Shou.
    ${COMPANY_CONTEXT}
    
    Context:
    - You are helpful, professional, and knowledgeable about Cambodia distribution.
    - Answering in: ${langName}
    
    User Question: "${userMessage}"
    
    Provide a helpful, precise response based on the company history provided above.
  `;

  return await callGeminiAPI(prompt);
};

export const resetChatSession = () => {
  // In a real app with history, we would clear the history array here or generate a new session ID.
  // For this simple single-turn implementation, we just log it.
  console.log("Chat session reset");
};