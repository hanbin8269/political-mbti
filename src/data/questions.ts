import { Question } from '@/types';

export const questions: Question[] = [
  // 경제 정책 (4문항)
  {
    id: 1,
    area: 'economy',
    question: '대기업·부유층 세금 정책은?',
    options: [
      { id: 'a', text: '상속세 90% 등 대폭 증세', value: 5 },
      { id: 'b', text: '현행 세율 유지하며 점진적 조정', value: 4 },
      { id: 'c', text: '현재 수준이 적절', value: 3 },
      { id: 'd', text: '법인세·상속세 인하로 투자 활성화', value: 2 }
    ],
    policy_key: 'tax'
  },
  {
    id: 2,
    area: 'economy',
    question: '기업 규제 정책 방향은?',
    options: [
      { id: 'a', text: '공정거래·노동권 보호 위해 강화', value: 4 },
      { id: 'b', text: '현재 수준 적절', value: 3 },
      { id: 'c', text: '규제기준국가제로 선진국 수준 완화', value: 2 },
      { id: 'd', text: '글로벌 스탠다드로 대폭 완화', value: 1 }
    ],
    policy_key: 'regulation'
  },
  {
    id: 3,
    area: 'economy',
    question: '복지 예산 확대에 대해?',
    options: [
      { id: 'a', text: '증세로 대폭 확대', value: 5 },
      { id: 'b', text: '단계적 확대', value: 4 },
      { id: 'c', text: '현 수준 유지', value: 3 },
      { id: 'd', text: '경제성장 우선, 복지는 제한적', value: 2 }
    ],
    policy_key: 'welfare_budget'
  },
  {
    id: 4,
    area: 'economy',
    question: '기업 투자 지원 정책은?',
    options: [
      { id: 'a', text: '대기업보다 중소기업·협동조합 지원', value: 2 },
      { id: 'b', text: '균형잡힌 지원', value: 3 },
      { id: 'c', text: '혁신기업 중심 전략적 지원', value: 4 },
      { id: 'd', text: '세제혜택·규제완화로 적극 지원', value: 5 }
    ],
    policy_key: 'corporate_support'
  },

  // 복지 정책 (4문항)
  {
    id: 5,
    area: 'welfare',
    question: '기본소득·AI기본사회 도입은?',
    options: [
      { id: 'a', text: 'AI 기본사회·전국민 기본소득 즉시 도입', value: 5 },
      { id: 'b', text: '기본소득 단계적 확대', value: 4 },
      { id: 'c', text: '신중한 검토 후 결정', value: 3 },
      { id: 'd', text: '현실성 부족, 일자리 창출 우선', value: 2 }
    ],
    policy_key: 'universal_basic'
  },
  {
    id: 6,
    area: 'welfare',
    question: '의료비 부담 해결책은?',
    options: [
      { id: 'a', text: '전국민 병원비 100만원 상한제', value: 5 },
      { id: 'b', text: '건보 보장성 단계적 확대', value: 4 },
      { id: 'c', text: '현재 수준에서 점진적 개선', value: 3 },
      { id: 'd', text: '민간의료 활성화로 경쟁 유도', value: 2 }
    ],
    policy_key: 'healthcare'
  },
  {
    id: 7,
    area: 'welfare',
    question: '주거 정책 방향은?',
    options: [
      { id: 'a', text: '공공임대 200만호·주택 소유상한제', value: 5 },
      { id: 'b', text: '공공임대 확대·전세사기 대책', value: 4 },
      { id: 'c', text: '공공·민간 균형 공급', value: 3 },
      { id: 'd', text: '규제완화로 민간 공급 활성화', value: 2 }
    ],
    policy_key: 'housing'
  },
  {
    id: 8,
    area: 'welfare',
    question: '고령화 사회 대응책은?',
    options: [
      { id: 'a', text: '기초연금 70만원·24시간 돌봄', value: 5 },
      { id: 'b', text: '돌봄 사회책임 강화', value: 4 },
      { id: 'c', text: '현행 제도 개선', value: 3 },
      { id: 'd', text: '개인·가족 책임 중심', value: 2 }
    ],
    policy_key: 'elderly_care'
  },

  // 교육 정책 (4문항)
  {
    id: 9,
    area: 'education',
    question: '대학 교육비 지원 정책은?',
    options: [
      { id: 'a', text: '고등교육 완전 무상화', value: 5 },
      { id: 'b', text: '국공립대 등록금 폐지 확대', value: 4 },
      { id: 'c', text: '소득연계 지원 확대', value: 3 },
      { id: 'd', text: '든든출발자금 등 대출 지원', value: 2 }
    ],
    policy_key: 'free_education'
  },
  {
    id: 10,
    area: 'education',
    question: '사립학교 정책은?',
    options: [
      { id: 'a', text: '사립학교 단계적 공영화', value: 1 },
      { id: 'b', text: '자사고·외고 일반고 전환', value: 2 },
      { id: 'c', text: '현행 제도 유지', value: 3 },
      { id: 'd', text: '자율성 확대·다양화', value: 4 }
    ],
    policy_key: 'private_school'
  },
  {
    id: 11,
    area: 'education',
    question: '교육 평가·입시제도는?',
    options: [
      { id: 'a', text: '서울대 폐지·입시경쟁 완화', value: 2 },
      { id: 'b', text: '절대평가 확대', value: 3 },
      { id: 'c', text: '현행 제도 개선', value: 4 },
      { id: 'd', text: '경쟁력 강화 중심', value: 5 }
    ],
    policy_key: 'evaluation'
  },
  {
    id: 12,
    area: 'education',
    question: '직업교육 정책은?',
    options: [
      { id: 'a', text: '노동주도 도제교육·고졸 우대', value: 5 },
      { id: 'b', text: '특성화고 지원 확대', value: 4 },
      { id: 'c', text: '현행 직업교육 개선', value: 3 },
      { id: 'd', text: '대학교육 중심', value: 2 }
    ],
    policy_key: 'vocational'
  },

  // 외교안보 (4문항)
  {
    id: 13,
    area: 'security',
    question: '국방비 정책은?',
    options: [
      { id: 'a', text: '군비감축·복지예산 전환', value: 2 },
      { id: 'b', text: '현재 수준 적절', value: 3 },
      { id: 'c', text: '안보 위협 대비 점진적 증액', value: 4 },
      { id: 'd', text: '3축체계 강화·핵 억제력 확보', value: 5 }
    ],
    policy_key: 'defense_budget'
  },
  {
    id: 14,
    area: 'security',
    question: '외교정책 기조는?',
    options: [
      { id: 'a', text: '실용적 중립외교·다자협력', value: 4 },
      { id: 'b', text: '국익 중심 실용외교', value: 3 },
      { id: 'c', text: '가치외교·자유진영 연대', value: 2 },
      { id: 'd', text: '한미동맹 기반 강력외교', value: 1 }
    ],
    policy_key: 'diplomacy'
  },
  {
    id: 15,
    area: 'security',
    question: '한반도 평화 정책은?',
    options: [
      { id: 'a', text: '9.19 군사합의 복원·평화협정', value: 5 },
      { id: 'b', text: '남북대화·교류협력 재개', value: 4 },
      { id: 'c', text: '조건부 대화 추진', value: 3 },
      { id: 'd', text: '압박 우선·핵포기 전제', value: 2 }
    ],
    policy_key: 'peace'
  },
  {
    id: 16,
    area: 'security',
    question: '한미동맹 정책은?',
    options: [
      { id: 'a', text: '중립노선·동맹 재검토', value: 3 },
      { id: 'b', text: '균형외교·자주국방', value: 4 },
      { id: 'c', text: '동맹 강화·전작권 환수', value: 4 },
      { id: 'd', text: '핵공유·전술핵 재배치 검토', value: 5 }
    ],
    policy_key: 'alliance'
  },

  // 사회 정책 (4문항)
  {
    id: 17,
    area: 'society',
    question: '차별금지법·소수자 권리는?',
    options: [
      { id: 'a', text: '포괄적 차별금지법 즉시 제정', value: 5 },
      { id: 'b', text: '단계적 권리 확대', value: 4 },
      { id: 'c', text: '신중한 사회적 합의', value: 3 },
      { id: 'd', text: '현행 수준 유지', value: 2 }
    ],
    policy_key: 'minority_rights'
  },
  {
    id: 18,
    area: 'society',
    question: '성평등 정책은?',
    options: [
      { id: 'a', text: '성평등부 부총리급 신설', value: 5 },
      { id: 'b', text: '여성가족부 기능 강화', value: 4 },
      { id: 'c', text: '점진적 개선', value: 3 },
      { id: 'd', text: '여가부 폐지·성별 중립적 접근', value: 2 }
    ],
    policy_key: 'gender_equality'
  },
  {
    id: 19,
    area: 'society',
    question: '이민·다문화 정책은?',
    options: [
      { id: 'a', text: '이민청 설치·포용 정책', value: 4 },
      { id: 'b', text: '점진적 사회통합', value: 3 },
      { id: 'c', text: '선별적 이민 정책', value: 2 },
      { id: 'd', text: '엄격한 관리 중심', value: 1 }
    ],
    policy_key: 'immigration'
  },
  {
    id: 20,
    area: 'society',
    question: '노동권 정책은?',
    options: [
      { id: 'a', text: '노동기준법·노란봉투법 제정', value: 5 },
      { id: 'b', text: '노동자 권익 보호 강화', value: 4 },
      { id: 'c', text: '노사 균형 발전', value: 3 },
      { id: 'd', text: '기업 경쟁력 우선', value: 2 }
    ],
    policy_key: 'labor_rights'
  },

  // 환경 정책 (4문항)
  {
    id: 21,
    area: 'environment',
    question: '그린뉴딜·탄소중립 정책은?',
    options: [
      { id: 'a', text: '2030 탄소중립·그린뉴딜 전면 추진', value: 5 },
      { id: 'b', text: '그린뉴딜 2.0 단계적 추진', value: 4 },
      { id: 'c', text: '경제성 고려 균형 추진', value: 3 },
      { id: 'd', text: '경제성장 우선, 환경 연계', value: 2 }
    ],
    policy_key: 'green_new_deal'
  },
  {
    id: 22,
    area: 'environment',
    question: '원자력 발전 정책은?',
    options: [
      { id: 'a', text: '2040년 완전 탈핵', value: 1 },
      { id: 'b', text: '단계적 축소·재생에너지 확대', value: 2 },
      { id: 'c', text: '현 수준 유지 후 사회적 합의', value: 3 },
      { id: 'd', text: 'AI 시대 대비 원전 확대·SMR 개발', value: 5 }
    ],
    policy_key: 'nuclear'
  },
  {
    id: 23,
    area: 'environment',
    question: '탄소세·환경세 도입은?',
    options: [
      { id: 'a', text: '기업 탄소세·환경세 적극 도입', value: 5 },
      { id: 'b', text: '단계적 도입·국제공조', value: 4 },
      { id: 'c', text: '신중한 검토 필요', value: 3 },
      { id: 'd', text: '경제 부담 우려로 반대', value: 2 }
    ],
    policy_key: 'carbon_tax'
  },
  {
    id: 24,
    area: 'environment',
    question: '재생에너지 정책은?',
    options: [
      { id: 'a', text: '공공재생에너지 전면 확대', value: 5 },
      { id: 'b', text: '재생에너지 비중 확대', value: 4 },
      { id: 'c', text: '다양한 에너지원 조화', value: 3 },
      { id: 'd', text: '원전 중심·재생에너지 보완', value: 2 }
    ],
    policy_key: 'renewable'
  }
];