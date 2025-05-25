import { Question } from '@/types';

export const questions: Question[] = [
  // 경제 정책
  {
    id: 1,
    area: 'economy',
    question: '대기업과 부유층 세금 정책은?',
    options: [
      { id: 'a', text: '대폭 증세로 불평등 해소', value: 5 },
      { id: 'b', text: '점진적 세율 조정', value: 4 },
      { id: 'c', text: '현재 수준 유지', value: 3 },
      { id: 'd', text: '감세로 경제 활성화', value: 2 }
    ],
    policy_key: 'tax'
  },
  {
    id: 2,
    area: 'economy',
    question: '기업 규제에 대한 입장은?',
    options: [
      { id: 'a', text: '공정거래 위해 강화', value: 4 },
      { id: 'b', text: '현재 수준 적절', value: 3 },
      { id: 'c', text: '투자 활성화 위해 완화', value: 2 },
      { id: 'd', text: '글로벌 기준으로 대폭 완화', value: 1 }
    ],
    policy_key: 'regulation'
  },
  // 복지 정책
  {
    id: 3,
    area: 'welfare',
    question: '기본소득·기본사회 도입은?',
    options: [
      { id: 'a', text: 'AI 기본사회 즉시 구현', value: 5 },
      { id: 'b', text: '기본소득 단계적 확대', value: 4 },
      { id: 'c', text: '신중한 검토 필요', value: 3 },
      { id: 'd', text: '현실성 없어 반대', value: 2 }
    ],
    policy_key: 'universal_basic'
  },
  {
    id: 4,
    area: 'welfare',
    question: '무상의료 확대 정책은?',
    options: [
      { id: 'a', text: '전면 무상의료 실시', value: 5 },
      { id: 'b', text: '건보 보장성 확대', value: 4 },
      { id: 'c', text: '현재 수준 유지', value: 3 },
      { id: 'd', text: '민간의료 활성화', value: 2 }
    ],
    policy_key: 'healthcare'
  },
  // 교육 정책
  {
    id: 5,
    area: 'education',
    question: '대학 교육비 지원은?',
    options: [
      { id: 'a', text: '전면 무상교육', value: 5 },
      { id: 'b', text: '소득연계 확대', value: 4 },
      { id: 'c', text: '현재 수준 유지', value: 3 },
      { id: 'd', text: '개인 부담 원칙', value: 2 }
    ],
    policy_key: 'free_education'
  },
  {
    id: 6,
    area: 'education',
    question: '사립학교 자율성 확대는?',
    options: [
      { id: 'a', text: '공교육 통합 강화', value: 2 },
      { id: 'b', text: '현재 수준 유지', value: 3 },
      { id: 'c', text: '자율성 확대', value: 4 },
      { id: 'd', text: '완전 자율화', value: 5 }
    ],
    policy_key: 'private_school'
  },
  // 외교안보
  {
    id: 7,
    area: 'security',
    question: '국방비 증액에 대해?',
    options: [
      { id: 'a', text: '복지로 예산 전환', value: 2 },
      { id: 'b', text: '현재 수준 적절', value: 3 },
      { id: 'c', text: '안보 위해 증액', value: 4 },
      { id: 'd', text: '3축 체계 강화로 대폭 증액', value: 5 }
    ],
    policy_key: 'defense_budget'
  },
  {
    id: 8,
    area: 'security',
    question: '한반도 평화 정책은?',
    options: [
      { id: 'a', text: '적극적 평화외교', value: 5 },
      { id: 'b', text: '대화와 압박 병행', value: 4 },
      { id: 'c', text: '신중한 접근', value: 3 },
      { id: 'd', text: '강경 대응 우선', value: 2 }
    ],
    policy_key: 'peace'
  },
  // 사회 정책
  {
    id: 9,
    area: 'society',
    question: '차별금지법·성소수자 권리는?',
    options: [
      { id: 'a', text: '포괄적 차별금지법 제정', value: 5 },
      { id: 'b', text: '점진적 권리 확대', value: 4 },
      { id: 'c', text: '신중한 사회적 논의', value: 3 },
      { id: 'd', text: '현재 수준 유지', value: 2 }
    ],
    policy_key: 'minority_rights'
  },
  {
    id: 10,
    area: 'society',
    question: '성평등 정책 강화는?',
    options: [
      { id: 'a', text: '성평등부 신설·강화', value: 5 },
      { id: 'b', text: '적극적 지원 정책', value: 4 },
      { id: 'c', text: '점진적 개선', value: 3 },
      { id: 'd', text: '성별 중립적 접근', value: 2 }
    ],
    policy_key: 'gender_equality'
  },
  // 환경 정책
  {
    id: 11,
    area: 'environment',
    question: '그린뉴딜/탄소중립 정책은?',
    options: [
      { id: 'a', text: '2030 탄소중립 전면 추진', value: 5 },
      { id: 'b', text: '그린뉴딜 2.0 단계적 추진', value: 4 },
      { id: 'c', text: '경제성 고려하여 추진', value: 3 },
      { id: 'd', text: '경제 우선, 환경 후순위', value: 2 }
    ],
    policy_key: 'green_new_deal'
  },
  {
    id: 12,
    area: 'environment',
    question: '원자력 발전 정책은?',
    options: [
      { id: 'a', text: '탈원전, 재생에너지 확대', value: 1 },
      { id: 'b', text: '단계적 감축', value: 2 },
      { id: 'c', text: '현재 수준 유지 후 판단', value: 3 },
      { id: 'd', text: 'AI시대 대비 원전 확대', value: 5 }
    ],
    policy_key: 'nuclear'
  }
];