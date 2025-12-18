export enum Language {
  KO = 'ko',
  EN = 'en',
}

export interface LocalizedContent {
  ko: string;
  en: string;
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