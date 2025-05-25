import { Candidate } from '@/types';

export const candidates: Candidate[] = [
  { 
    id: 'A', 
    name: '이재명', 
    party: '더불어민주당', 
    color: 'text-blue-600',
    positions: {
      economy: { tax: 4, regulation: 4, welfare_budget: 5, corporate_support: 3 },
      welfare: { universal_basic: 5, healthcare: 5, housing: 4, elderly_care: 4 },
      education: { free_education: 4, private_school: 2, evaluation: 3, vocational: 4 },
      security: { defense_budget: 3, diplomacy: 4, peace: 5, alliance: 4 },
      society: { minority_rights: 4, gender_equality: 4, immigration: 4, labor_rights: 5 },
      environment: { green_new_deal: 5, nuclear: 2, carbon_tax: 4, renewable: 5 }
    }
  },
  {
    id: 'B',
    name: '김문수',
    party: '국민의힘',
    color: 'text-red-600',
    positions: {
      economy: { tax: 2, regulation: 1, welfare_budget: 2, corporate_support: 5 },
      welfare: { universal_basic: 2, healthcare: 3, housing: 3, elderly_care: 3 },
      education: { free_education: 2, private_school: 4, evaluation: 4, vocational: 3 },
      security: { defense_budget: 5, diplomacy: 3, peace: 2, alliance: 5 },
      society: { minority_rights: 2, gender_equality: 2, immigration: 2, labor_rights: 2 },
      environment: { green_new_deal: 2, nuclear: 5, carbon_tax: 2, renewable: 2 }
    }
  },
  {
    id: 'C',
    name: '이준석',
    party: '개혁신당',
    color: 'text-purple-600',
    positions: {
      economy: { tax: 3, regulation: 2, welfare_budget: 3, corporate_support: 4 },
      welfare: { universal_basic: 3, healthcare: 3, housing: 3, elderly_care: 4 },
      education: { free_education: 3, private_school: 3, evaluation: 4, vocational: 4 },
      security: { defense_budget: 4, diplomacy: 4, peace: 3, alliance: 4 },
      society: { minority_rights: 3, gender_equality: 3, immigration: 3, labor_rights: 3 },
      environment: { green_new_deal: 3, nuclear: 4, carbon_tax: 3, renewable: 3 }
    }
  },
  {
    id: 'D',
    name: '권영국',
    party: '민주노동당',
    color: 'text-green-600',
    positions: {
      economy: { tax: 5, regulation: 4, welfare_budget: 5, corporate_support: 2 },
      welfare: { universal_basic: 5, healthcare: 5, housing: 5, elderly_care: 5 },
      education: { free_education: 5, private_school: 1, evaluation: 2, vocational: 5 },
      security: { defense_budget: 2, diplomacy: 4, peace: 5, alliance: 3 },
      society: { minority_rights: 5, gender_equality: 5, immigration: 4, labor_rights: 5 },
      environment: { green_new_deal: 5, nuclear: 1, carbon_tax: 5, renewable: 5 }
    }
  }
];

// 후보별 주요 공약 (실제 2025 대선 공약 기반으로 수정)
export const keyPolicies: { [key: string]: string[] } = {
  'A': [
    'AI 기본사회 구현', 
    '세종 행정수도 완성', 
    '그린뉴딜 2.0', 
    '전 국민 일자리보장제',
    '아동수당 18세까지 확대',
    '한반도 평화프로세스'
  ],
  'B': [
    'AI 3강 도약', 
    '원자력 강국 실현', 
    '규제완화·감세정책', 
    '강한 안보·한미동맹',
    '청년주택 3·3·3 정책',
    'GTX 전국 확대'
  ],
  'C': [
    '규제기준국가제 도입', 
    '정부조직 13부처로 개편', 
    '신-구 연금분리 개혁',
    '든든출발자금 5천만원',
    '교권보호 국가책임제',
    '세대교체·정치개혁'
  ],
  'D': [
    '포괄적 차별금지법', 
    '성평등부 부총리급 격상', 
    '증세통한 불평등 해소',
    '전국민 일자리보장제',
    '2035년 탈석탄·탈핵',
    '한반도 평화협정'
  ]
};