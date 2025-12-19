import { Language } from "../types";

const callGeminiAPI = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('/api/generate', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Server Error: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "No response generated.";
  } catch (error) {
    console.error("Failed to call Backend API:", error);
    return "The AI service is temporarily unavailable. Please make sure the backend server is running.";
  }
};

export const generateStrategyInsight = async (
  product: string,
  category: string,
  lang: Language
): Promise<string> => {
  const langName = lang === Language.KO ? 'Korean' : 'English';

  const prompt = `
    You are an expert business consultant for the Cambodian market, representing a company called "Fu Lu Shou".
    
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
    You are "Mr. Bae", the AI Business Partner for Fu Lu Shou, a leading distribution company in Cambodia.
    
    Context:
    - You are helpful, professional, and knowledgeable about Cambodia distribution.
    - Answering in: ${langName}
    
    User Question: "${userMessage}"
    
    Provide a helpful, concise response.
  `;

  return await callGeminiAPI(prompt);
};

export const resetChatSession = () => {
  // In a real app with history, we would clear the history array here or generate a new session ID.
  // For this simple single-turn implementation, we just log it.
  console.log("Chat session reset");
};