# 정치 MBTI - 2025 대선 후보 매칭 서비스

2025년 대통령 선거 후보들의 실제 공약을 바탕으로 사용자와 가장 잘 맞는 후보를 찾아주는 웹 애플리케이션입니다.

## 🎯 주요 기능

- **실제 공약 기반**: 중앙선관위 등록 실제 공약 데이터 활용 (https://policy.nec.go.kr)
- **4명 후보 비교**: 이재명, 김문수, 이준석, 권영국 후보
- **정책 우선순위 설정**: 6개 분야별 중요도 설정
- **12개 핵심 질문**: 경제, 복지, 교육, 외교안보, 사회, 환경 분야
- **정확한 매칭**: 가중치가 적용된 정교한 매칭 알고리즘
- **클라이언트 사이드**: 개인정보 수집 없는 안전한 테스트

## 🏗️ 프로젝트 구조

```
src/
├── components/
│   └── PoliticalMBTI.tsx         # 메인 컴포넌트
├── data/
│   ├── candidates.ts             # 후보자 데이터
│   ├── questions.ts              # 질문 데이터
│   └── policyAreas.ts            # 정책 분야 데이터
├── types/
│   └── index.ts                  # TypeScript 타입 정의
├── utils/
│   └── matching.ts               # 매칭 알고리즘
└── app/
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

## 🚀 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/political-mbti.git
cd political-mbti

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 확인
npm run start
```

## 📊 데이터 구조

### 후보자 데이터 (`src/data/candidates.ts`)
- 2025년 대선 등록 후보 4명 (이재명, 김문수, 이준석, 권영국)
- 실제 중앙선관위 등록 공약 기반 데이터
- 6개 정책 분야별 세부 입장 (1-5점 척도)
- 실제 발표된 주요 공약 키워드

### 질문 데이터 (`src/data/questions.ts`)
- 12개 핵심 정책 질문
- 4지선다 형태의 선택지
- 실제 정치 이슈 반영

## 🛠️ 기술 스택

- **Framework**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **아이콘**: Lucide React
- **배포**: Vercel

## 📱 모바일 최적화

- 모바일 우선 설계 (Mobile-first)
- 터치 친화적 인터페이스
- 반응형 디자인

## 🎨 주요 특징

- **직관적 UX**: MBTI 스타일의 친숙한 테스트 형태
- **실시간 진행률**: 현재 진행 상황 명확히 표시
- **시각적 결과**: 후보별 일치도 차트 및 주요 공약 표시
- **개인정보 보호**: 클라이언트에서만 작동, 데이터 수집 없음

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 정치 교육 및 정보 제공 목적으로 만들어졌습니다.

## ⚖️ 면책 조항

- 이 서비스는 정책 비교 및 교육 목적으로 제작되었습니다.
- 실제 투표 시에는 다양한 요소를 종합적으로 고려하시기 바랍니다.
- 후보자의 실제 입장과 다를 수 있으므로 참고용으로만 활용해 주세요.
- 개인정보를 수집하지 않으며, 모든 계산은 브라우저에서 처리됩니다.