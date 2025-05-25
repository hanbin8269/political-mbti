import { Candidate } from '@/types';

export const candidates: Candidate[] = [
  { 
    id: 'A', 
    name: '이재명', 
    party: '더불어민주당', 
    color: 'text-blue-600',
    positions: {
      economy: { tax: 4, regulation: 4, welfare_budget: 5 },
      welfare: { universal_basic: 4, healthcare: 5, housing: 4 },
      education: { free_education: 4, private_school: 2, evaluation: 2 },
      security: { defense_budget: 3, diplomacy: 4, peace: 4 },
      society: { minority_rights: 4, gender_equality: 4, immigration: 4 },
      environment: { green_new_deal: 5, nuclear: 2, carbon_tax: 4 }
    }
  },
  {
    id: 'B',
    name: '김문수',
    party: '국민의힘',
    color: 'text-red-600',
    positions: {
      economy: { tax: 2, regulation: 1, welfare_budget: 2 },
      welfare: { universal_basic: 2, healthcare: 3, housing: 3 },
      education: { free_education: 2, private_school: 4, evaluation: 4 },
      security: { defense_budget: 5, diplomacy: 3, peace: 2 },
      society: { minority_rights: 2, gender_equality: 2, immigration: 2 },
      environment: { green_new_deal: 2, nuclear: 5, carbon_tax: 2 }
    }
  },
  {
    id: 'C',
    name: '이준석',
    party: '개혁신당',
    color: 'text-purple-600',
    positions: {
      economy: { tax: 3, regulation: 2, welfare_budget: 3 },
      welfare: { universal_basic: 3, healthcare: 3, housing: 3 },
      education: { free_education: 3, private_school: 3, evaluation: 4 },
      security: { defense_budget: 4, diplomacy: 4, peace: 3 },
      society: { minority_rights: 3, gender_equality: 3, immigration: 3 },
      environment: { green_new_deal: 3, nuclear: 4, carbon_tax: 3 }
    }
  }
];

// 후보별 주요 공약
export const keyPolicies: { [key: string]: string[] } = {};