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
  },
  {
    id: 'D',
    name: '권영국',
    party: '민주노동당',
    color: 'text-green-600',
    positions: {
      economy: { tax: 5, regulation: 4, welfare_budget: 5 },
      welfare: { universal_basic: 4, healthcare: 5, housing: 5 },
      education: { free_education: 5, private_school: 2, evaluation: 2 },
      security: { defense_budget: 2, diplomacy: 4, peace: 5 },
      society: { minority_rights: 5, gender_equality: 5, immigration: 4 },
      environment: { green_new_deal: 5, nuclear: 1, carbon_tax: 5 }
    }
  }
];

// 후보별 주요 공약 (실제 2025 대선 공약 기반)
export const keyPolicies: { [key: string]: string[] } = {
  'A': ['AI 기본사회', '세종 행정수도', '기본소득 확대', '그린뉴딜 2.0'],
  'B': ['AI 3강 도약', '원자력 강국', '규제완화·감세', '강한 안보'],
  'C': ['규제기준국가제', '정부조직 개편', '연금 개혁', '세대교체'],
  'D': ['차별금지법 제정', '성평등부 신설', '노동자 권익 강화', '부자 증세']
};