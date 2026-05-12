# Plan: eumnetworks-homepage

## Executive Summary

| 항목 | 내용 |
|------|------|
| **Feature** | 이음네트웍스글로벌 기업 홈페이지 |
| **시작일** | 2026-05-12 |
| **예상 기간** | 3일 |
| **레벨** | Starter (정적 사이트) |

### Value Delivered

| 관점 | 내용 |
|------|------|
| **Problem** | 이음네트웍스글로벌의 온라인 존재가 없어, 사업 파트너·고객에게 그룹 구조와 사업 영역을 전달할 수단이 부재 |
| **Solution** | Sports Bold 디자인 컨셉의 정적 기업 홈페이지를 Next.js + Tailwind CSS로 구축하여 eumnetworksglobal.com에 배포 |
| **Function UX Effect** | 블랙+코랄 다이내믹 디자인으로 스포츠 사업의 역동성과 IT 사업의 전문성을 동시에 전달. 원스크롤로 전체 사업 파악 가능 |
| **Core Value** | 그룹 브랜드 인지도 확보 및 사업 제휴·파트너 유입을 위한 디지털 허브 역할 |

---

## 1. 개요

### 1.1 프로젝트 배경
이음네트웍스글로벌은 스포츠(브라더스포츠아카데미, 유소년야구단, 야구용품), IT(이음시스템즈 금융 IT 인력관리) 사업을 영위하는 그룹 지주사이다. 현재 공식 홈페이지가 없어 기업 홍보 및 파트너 유치에 한계가 있다.

### 1.2 프로젝트 목표
- eumnetworksglobal.com 도메인에 정적 기업 홈페이지 배포
- Sports Bold 디자인 컨셉 (블랙 + 코랄 강조) 적용
- DB 없이 순수 정적 사이트로 운영 (유지보수 최소화)
- 모바일/데스크톱 반응형 완벽 지원

### 1.3 범위 (Scope)

#### In Scope
| 항목 | 상세 |
|------|------|
| 메인(홈) | 히어로, 사업영역 미리보기, 통계, CTA |
| 회사소개 (/about) | CEO 인사말, 가치, 연혁 타임라인 |
| 사업영역 — 스포츠 (/business/sports) | 아카데미, 유소년야구단, 용품 유통 |
| 사업영역 — IT (/business/it) | 시스템 유지보수, 금융 IT 인력관리 |
| 계열사 (/group) | 조직도, 계열사 카드 (이음시스템즈, 브라더스포츠, 유소년야구단) |
| 공통 | Header, Footer, SEO 메타, OG 태그, 반응형 |

#### Out of Scope
| 항목 | 사유 |
|------|------|
| ~~문의하기 (Contact)~~ | 고객 요청으로 제외 |
| ~~DB / 백엔드 API~~ | 순수 정적 사이트, DB 없음 |
| ~~관리자 패널~~ | 정적 사이트이므로 불필요 |
| ~~다국어 지원~~ | 1차 버전은 한국어만 |
| ~~블로그/뉴스~~ | 추후 확장 시 검토 |

---

## 2. 기술 스택

| 구분 | 기술 | 비고 |
|------|------|------|
| **프레임워크** | Next.js 15 (App Router) | 정적 Export (`output: "export"`) |
| **스타일링** | Tailwind CSS 4 | brothersports와 동일 기반 |
| **언어** | TypeScript | 타입 안정성 |
| **폰트** | Pretendard Variable | CDN 로드 |
| **배포** | 정적 HTML/JS/CSS | 가비아 또는 Vercel |
| **DB** | 없음 | 모든 데이터 하드코딩 |
| **API** | 없음 | 순수 정적 사이트 |

---

## 3. 디자인 시스템 — Sports Bold

### 3.1 컬러 팔레트

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--black` | `#0A0A0A` | 다크 섹션 배경 |
| `--black-light` | `#141414` | 다크 섹션 배경 (변형) |
| `--black-card` | `#1A1A1A` | 다크 섹션 카드 배경 |
| `--light` | `#F5F5F5` | 라이트 섹션 배경 |
| `--light-card` | `#FFFFFF` | 라이트 섹션 카드 배경 |
| `--coral` | `#E8563A` | 주요 강조 (CTA, 배지, 포인트) |
| `--coral-light` | `#FF6B4A` | 호버 상태 |
| `--white-90` | `rgba(255,255,255,.9)` | 다크 섹션 제목 텍스트 |
| `--white-50` | `rgba(255,255,255,.5)` | 다크 섹션 본문 텍스트 |
| `--white-10` | `rgba(255,255,255,.1)` | 다크 섹션 구분선 |
| `--white-05` | `rgba(255,255,255,.05)` | 다크 섹션 카드 보더 |
| `--gray-900` | `#1A1A1A` | 라이트 섹션 제목 텍스트 |
| `--gray-500` | `#6B7280` | 라이트 섹션 본문 텍스트 |
| `--gray-200` | `#E5E7EB` | 라이트 섹션 구분선, 카드 보더 |

### 3.2 다크/라이트 섹션 교차 패턴

| 페이지 | 섹션 | 테마 | 배경 |
|--------|------|------|------|
| **홈** | Header | Dark | `#0A0A0A` |
| | Hero | **Dark** | `#0A0A0A` |
| | 사업영역 미리보기 | **Light** | `#F5F5F5` |
| | 통계 스트립 | **Dark** (코랄 그라데이션) | gradient |
| | 계열사 미리보기 | **Light** | `#F5F5F5` |
| **회사소개** | 소개 텍스트 | **Dark** | `#0A0A0A` |
| | 핵심 가치 | **Light** | `#F5F5F5` |
| | 연혁 | **Dark** | `#141414` |
| **사업영역** | 스포츠 사업 | **Dark** | `#0A0A0A` |
| | IT 사업 | **Light** | `#F5F5F5` |
| **계열사** | 조직도 | **Dark** | `#0A0A0A` |
| | 계열사 카드 | **Light** | `#F5F5F5` |
| **공통** | Footer | Dark | `#0A0A0A` |

### 3.2 타이포그래피

| 요소 | 폰트 | 사이즈 | 웨이트 |
|------|------|--------|--------|
| 히어로 타이틀 | Pretendard | 48px (모바일 32px) | 900 |
| 섹션 타이틀 | Pretendard | 36px (모바일 28px) | 800 |
| 섹션 라벨 | Pretendard | 13px | 600, uppercase, tracking 2px |
| 카드 제목 | Pretendard | 20px | 700 |
| 본문 | Pretendard | 14~16px | 400 |

### 3.3 컴포넌트 패턴

| 컴포넌트 | 스타일 |
|----------|--------|
| **카드** | bg `#1A1A1A`, border `rgba(255,255,255,.05)`, radius 16px, hover 시 border coral + translateY(-2px) |
| **버튼 (Primary)** | bg coral, radius 8px, 14px 32px padding |
| **버튼 (Outline)** | transparent bg, border white/30, hover 시 coral |
| **배지** | bg coral, radius 4px, 12px bold, tracking 1px |
| **태그** | bg white/05, radius 20px, 11px |
| **구분선** | 1px solid white/10 |
| **통계 수치** | 40px, weight 900, + coral 기호 |

---

## 4. 페이지 구조 & 사이트맵

```
eumnetworksglobal.com/
├── / (메인)
│   ├── Hero — 캐치프레이즈 + SINCE 2024 뱃지 + 통계
│   ├── 사업영역 미리보기 (2개 카드: 스포츠/IT)
│   └── 계열사 로고 스트립
├── /about/
│   ├── 회사 소개 텍스트 + 가치 4카드
│   └── 연혁 타임라인
├── /business/
│   ├── 스포츠 사업 (아카데미, 유소년, 용품)
│   └── IT 사업 (유지보수, 인력관리)
├── /group/
│   ├── 조직도 다이어그램
│   └── 계열사 카드 3장 (링크 포함)
└── (공통)
    ├── Header — 로고 + ABOUT / SPORTS / IT / GROUP
    └── Footer — 4컬럼 (소개/메뉴/그룹/정보)
```

---

## 5. 파일 구조

```
eumnetworks/
├── app/
│   ├── layout.tsx          ← 루트 레이아웃 (Header + Footer 포함)
│   ├── page.tsx            ← 메인 홈
│   ├── globals.css         ← 디자인 토큰 + 공통 스타일
│   ├── about/
│   │   └── page.tsx        ← 회사소개
│   ├── business/
│   │   └── page.tsx        ← 사업영역 (스포츠 + IT 통합)
│   └── group/
│       └── page.tsx        ← 계열사
├── components/
│   ├── Header.tsx          ← 고정 헤더 (모바일 햄버거 포함)
│   ├── Footer.tsx          ← 4컬럼 푸터
│   ├── Hero.tsx            ← 히어로 섹션
│   ├── StatsStrip.tsx      ← 통계 수치 스트립
│   ├── BusinessPreview.tsx ← 홈 사업영역 미리보기
│   ├── SectionHeader.tsx   ← 재사용 섹션 헤더 (라벨+타이틀+설명)
│   ├── BizCard.tsx         ← 사업 카드 (일반/Featured)
│   ├── GroupCard.tsx       ← 계열사 카드
│   ├── OrgDiagram.tsx      ← 조직도
│   ├── Timeline.tsx        ← 연혁 타임라인
│   └── ValueCard.tsx       ← 가치 카드
├── data/
│   └── content.ts          ← 모든 텍스트/데이터 중앙 관리
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts          ← output: "export"
├── tailwind.config.ts
└── package.json
```

---

## 6. 데이터 관리 전략

DB 없이 모든 콘텐츠를 `data/content.ts`에서 타입 안전하게 관리:

```typescript
// data/content.ts 구조 예시
export const COMPANY = {
  name: "이음네트웍스글로벌",
  nameEn: "Eum Networks Global",
  since: 2024,
  slogan: "현장에서 시스템까지, 이음이 만든다",
  description: "유소년 야구의 꿈을 키우고, 그룹의 IT 인프라를 잇는다",
};

export const STATS = [
  { value: "2", label: "사업 영역" },
  { value: "45+", label: "아카데미 회원" },
  { value: "15+", label: "금융 IT 인력" },
  { value: "100%", label: "그룹사 협력" },
];

export const BUSINESSES: Business[] = [ ... ];
export const SUBSIDIARIES: Subsidiary[] = [ ... ];
export const TIMELINE: TimelineItem[] = [ ... ];
```

---

## 7. 구현 순서

| 순서 | 작업 | 산출물 | 예상 시간 |
|------|------|--------|-----------|
| **1** | 프로젝트 설정 | next.config, globals.css, layout.tsx | 30분 |
| **2** | data/content.ts | 전체 콘텐츠 데이터 파일 | 30분 |
| **3** | 공통 컴포넌트 | Header, Footer, SectionHeader | 1시간 |
| **4** | 메인 페이지 | Hero, StatsStrip, BusinessPreview | 1.5시간 |
| **5** | 회사소개 | ValueCard, Timeline, about/page.tsx | 1시간 |
| **6** | 사업영역 | BizCard, business/page.tsx | 1.5시간 |
| **7** | 계열사 | GroupCard, OrgDiagram, group/page.tsx | 1시간 |
| **8** | SEO & 마무리 | robots.txt, sitemap.xml, OG 메타 | 30분 |
| **9** | 반응형 QA | 모바일/태블릿 테스트 | 1시간 |
| **합계** | | | **~8.5시간** |

---

## 8. 네비게이션 구조

```
Header: [로고: EUM NETWORKS] ─── [ABOUT] [SPORTS] [IT] [GROUP]
```

| 메뉴 | 경로 | 대상 |
|------|------|------|
| ABOUT | `/about` | 회사소개 페이지 |
| SPORTS | `/business#sports` | 사업영역 스포츠 섹션 |
| IT | `/business#it` | 사업영역 IT 섹션 |
| GROUP | `/group` | 계열사 페이지 |

> SPORTS와 IT는 `/business` 페이지 내 앵커 링크로 이동 (별도 페이지 X)

---

## 9. SEO 전략

| 항목 | 적용 |
|------|------|
| Title 패턴 | `{페이지명} \| 이음네트웍스글로벌` |
| Meta Description | 페이지별 고유 설명 |
| OG Image | 로고 기반 1200x630 이미지 |
| robots.txt | 전체 허용 |
| sitemap.xml | 4페이지 포함 |
| 구조화 데이터 | Organization schema (JSON-LD) |

---

## 10. 배포 전략

| 항목 | 내용 |
|------|------|
| 빌드 | `next build` → `out/` 정적 파일 생성 |
| 배포 대상 | eumnetworksglobal.com (가비아 호스팅) |
| 방식 | `out/` 폴더를 웹루트에 업로드 (FTP 또는 rsync) |
| 대안 | Vercel 무료 호스팅 (도메인 연결) |

---

## 11. 제약사항 & 리스크

| 리스크 | 대응 |
|--------|------|
| 이음시스템즈 CI 이미지 미확보 | 텍스트 로고로 대체, 추후 이미지 교체 가능하도록 설계 |
| 콘텐츠 확정 전 개발 | data/content.ts 중앙 관리로 텍스트 수정 용이 |
| 사진/이미지 소스 부재 | placeholder 영역 확보, 추후 실사 교체 |

---

## 12. 완료 기준 (Definition of Done)

- [ ] 4페이지 (홈, 회사소개, 사업영역, 계열사) 모두 구현
- [ ] Sports Bold 디자인 시스템 일관 적용
- [ ] 모바일 (375px) ~ 데스크톱 (1440px) 반응형 정상
- [ ] `next build` 에러 없이 정적 Export 성공
- [ ] Lighthouse Performance 90+ / Accessibility 90+
- [ ] robots.txt, sitemap.xml 정상 생성
- [ ] 모든 데이터가 data/content.ts에서 중앙 관리
