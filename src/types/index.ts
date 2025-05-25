import { LucideIcon } from 'lucide-react';

export interface PolicyArea {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  color: string;
  positions: {
    [key: string]: {
      [key: string]: number;
    };
  };
}

export interface Question {
  id: number;
  area: string;
  question: string;
  options: Array<{
    id: string;
    text: string;
    value: number;
  }>;
  policy_key: string;
}

export interface Answer {
  value: number;
  policy_key: string;
  area: string;
}

export interface MatchResult extends Candidate {
  matchPercentage: number;
}