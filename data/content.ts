export const COMPANY = {
  name: "이음네트웍스글로벌",
  nameEn: "Eum Networks Global",
  since: 2014,
  slogan: "현장에서 시스템까지, 이음이 만든다",
  description:
    "유소년 야구의 꿈을 키우고, 그룹의 IT 인프라를 잇는다 — 이음네트웍스글로벌",
  aboutText:
    "이음네트웍스글로벌은 스포츠 현장과 IT 시스템을 잇는 종합 비즈니스 그룹입니다. 브라더스포츠아카데미의 운영 노하우와 이음시스템즈의 금융 IT 역량을 결합하여, 현장에서 시스템까지 하나로 연결합니다.",
  quote: "현장을 알아야 시스템을 만들 수 있다",
  address: "서울특별시 금천구 가산디지털1로 205, 케이씨씨 웰츠밸리 604호",
  tel: "02-6925-7371",
  fax: "02-6455-5756",
  email: "info@eumnetworksglobal.com",
};

export const HERO_STATS = [
  { value: "5", suffix: "+", label: "사업 영역" },
  { value: "200", suffix: "+", label: "아카데미 회원" },
  { value: "60", suffix: "+", label: "금융 IT 인력" },
  { value: "100", suffix: "%", label: "그룹사 협력" },
];

export const BANNER_STATS = [
  { value: "2014", label: "설립연도" },
  { value: "3", label: "계열사" },
  { value: "60", suffix: "+", label: "전체 인력" },
  { value: "100", suffix: "%", label: "그룹 시너지" },
];

export const VALUES = [
  {
    icon: "⚾",
    title: "스포츠 전문성",
    desc: "야구 아카데미 운영 및 유소년 선수 육성의 현장 전문성",
  },
  {
    icon: "💻",
    title: "IT 인프라",
    desc: "금융 시스템 개발 및 안정적 운영 인력 관리 역량",
  },
  {
    icon: "📦",
    title: "글로벌 유통",
    desc: "해외 야구 장비 직수입 및 국내 유통 네트워크",
  },
  {
    icon: "🤝",
    title: "그룹 시너지",
    desc: "계열사 간 협력으로 통합 비즈니스 가치 창출",
  },
];

export const TIMELINE = [
  { year: "2024", text: "이음네트웍스글로벌 설립" },
  { year: "2024", text: "브라더스포츠아카데미 운영 개시" },
  { year: "2024", text: "브라더유소년야구단 창단" },
  { year: "2024", text: "이음시스템즈 금융 IT 인력관리 사업 연계" },
  { year: "2024", text: "야구 용품 수입·판매 사업 개시" },
];

export interface Business {
  id: string;
  icon: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  featured?: boolean;
}

export const SPORTS_BIZ: Business[] = [
  {
    id: "academy",
    icon: "⚾",
    category: "핵심 사업",
    title: "브라더스포츠아카데미",
    desc: "전문 야구 트레이닝 아카데미. 투수, 야수, 재활, 트레이닝 등 체계적인 프로그램을 운영하며, 최신 시설과 전문 코칭 스태프를 갖추고 있습니다.",
    tags: ["투수 트레이닝", "야수 트레이닝", "재활 프로그램", "체력 트레이닝"],
    featured: true,
  },
  {
    id: "youth",
    icon: "⚽",
    category: "선수 육성",
    title: "브라더유소년야구단",
    desc: "차세대 야구 인재를 체계적으로 육성합니다. 전국 대회 참가 및 진로 지도.",
    tags: ["유소년 육성", "전국 대회", "진로 지도"],
  },
  {
    id: "equipment",
    icon: "🛒",
    category: "유통",
    title: "야구 용품 수입·판매",
    desc: "해외 프리미엄 야구 장비 직수입 및 국내 유통. 합리적 가격의 전문 장비를 공급합니다.",
    tags: ["직수입", "프리미엄 장비", "국내 유통"],
  },
];

export const IT_BIZ: Business[] = [
  {
    id: "maintenance",
    icon: "💻",
    category: "시스템 운영",
    title: "시스템 유지보수",
    desc: "금융 IT 시스템의 안정적 운영을 위한 유지보수 서비스. 24/7 모니터링 및 장애 대응.",
    tags: ["금융 시스템", "유지보수", "모니터링"],
  },
  {
    id: "staffing",
    icon: "👥",
    category: "인력 관리",
    title: "금융 IT 개발·운영인력",
    desc: "이음시스템즈의 금융 IT 전문 인력 파견 및 관리. 검증된 엔지니어를 프로젝트에 투입합니다.",
    tags: ["인력 파견", "프로젝트 관리", "전문 인력"],
  },
];

export interface Subsidiary {
  name: string;
  nameEn: string;
  role: string;
  desc: string;
  url?: string;
  logoText: string;
  icon?: string;
}

export const SUBSIDIARIES: Subsidiary[] = [
  {
    name: "이음네트웍스글로벌",
    nameEn: "Eum Networks Global",
    role: "스포츠·유통",
    desc: "스포츠 현장과 글로벌 유통을 잇는 종합 비즈니스 기업. 아카데미 운영과 장비 유통.",
    url: "https://eumnetworksglobal.com",
    logoText: "이음\n네트웍스",
    icon: "/icon-networks.svg",
  },
  {
    name: "브라더스포츠아카데미",
    nameEn: "Brother Sports Academy",
    role: "야구 트레이닝",
    desc: "전문 야구 트레이닝 아카데미. 투수, 야수, 재활, 트레이닝 프로그램 운영.",
    url: "https://brothersportsacademy.com",
    logoText: "브라더\n스포츠",
    icon: "/icon-baseball.svg",
  },
  {
    name: "브라더유소년야구단",
    nameEn: "Brother Youth Baseball",
    role: "선수 육성",
    desc: "차세대 야구 인재를 체계적으로 육성하는 유소년 야구단.",
    url: "https://brothersportsacademy.com/youth",
    logoText: "유소년\n야구단",
    icon: "/icon-youth.svg",
  },
];

export const NAV_ITEMS = [
  { label: "Company", href: "/about" },
  { label: "Sports", href: "/business#sports" },
  { label: "IT System", href: "/business#it" },
  { label: "Group", href: "/group" },
];
