export enum Language {
  KO = 'ko',
  EN = 'en',
  ZH = 'zh',  // Chinese (中文)
  KH = 'kh',  // Khmer (ភាសាខ្មែរ)
}

export interface LocalizedContent {
  ko: string;
  en: string;
  zh: string;
  kh: string;
}

export interface NavItem {
  id: string;
  label: LocalizedContent;
}

export type StrategyType = 'market' | 'product' | 'promotion' | 'place';
export type HistoryMilestone = 'start' | 'growth' | 'expansion' | 'leader';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}