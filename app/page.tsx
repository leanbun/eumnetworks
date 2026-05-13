import Link from "next/link";
import {
  COMPANY,
  HERO_STATS,
  BANNER_STATS,
  SUBSIDIARIES,
} from "@/data/content";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      {/* ── [DARK] Hero ── */}
      <section className="relative pt-[140px] pb-20 bg-navy">
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(ellipse_at_80%_40%,rgba(232,86,58,.04),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-coral text-white text-xs font-bold rounded tracking-wider mb-7">
            SINCE {COMPANY.since}
          </span>
          <h1 className="text-[52px] max-md:text-[34px] font-black leading-[1.2] tracking-tight mb-5">
            현장에서 시스템까지,
            <br />
            이음이 만든다
          </h1>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[620px] mb-9">
            {COMPANY.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral text-white rounded-lg text-[15px] font-semibold hover:bg-coral-light transition-colors"
            >
              사업영역 보기 &rarr;
            </Link>
            <Link
              href="/group"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 rounded-lg text-[15px] font-semibold hover:border-coral hover:text-coral transition-colors"
            >
              계열사 소개
            </Link>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 border-t border-white/10 pt-10 mt-12">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-[44px] font-extrabold leading-none">
                  {s.value}
                  {s.suffix && (
                    <span className="text-coral">{s.suffix}</span>
                  )}
                </div>
                <div className="text-[13px] text-white/30 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [LIGHT] 사업영역 미리보기 ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="OUR BUSINESS"
            title="두 개의 축으로<br/>세상을 잇습니다"
            desc="스포츠 현장의 열정과 IT 시스템의 정밀함 — 이음네트웍스글로벌의 핵심 사업입니다."
            theme="light"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: "⚾",
                cat: "SPORTS",
                title: "스포츠 사업",
                desc: "야구 아카데미 운영, 유소년 선수 육성, 전문 장비 유통",
                items: [
                  "브라더스포츠아카데미 운영",
                  "브라더유소년야구단 운영",
                  "야구 용품 수입 및 판매",
                ],
                href: "/business#sports",
              },
              {
                icon: "💻",
                cat: "IT · SYSTEM",
                title: "시스템·IT 사업",
                desc: "금융 IT 인프라 운영과 전문 인력 관리",
                items: [
                  "시스템 유지보수",
                  "금융 IT 개발·운영인력 관리",
                  "이음시스템즈 그룹 계열사",
                ],
                href: "/business#it",
              },
            ].map((b) => (
              <Link key={b.cat} href={b.href} className="group">
                <div className="card-light p-10 h-full relative">
                  <div className="text-4xl mb-5">{b.icon}</div>
                  <p className="text-xs font-bold text-coral tracking-wider mb-1">
                    {b.cat}
                  </p>
                  <h3 className="text-[22px] font-bold text-gray-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{b.desc}</p>
                  <ul className="space-y-1.5">
                    {b.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-500 before:content-['•'] before:mr-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="absolute bottom-6 right-6 text-xl text-coral opacity-40 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── [GRADIENT] 통계 배너 ── */}
      <section className="py-16 bg-gradient-to-r from-coral-dark to-coral-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 text-center">
            {BANNER_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-5xl max-md:text-4xl font-extrabold">
                  {s.value}
                  {s.suffix ?? ""}
                </div>
                <div className="text-sm text-white/85 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [LIGHT] 계열사 미리보기 ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            label="GROUP"
            title="이음시스템즈 그룹"
            desc="하나의 비전으로 연결된 파트너사"
            theme="light"
            center
          />
          <div className="flex justify-center gap-12 max-md:gap-8 flex-wrap mt-12">
            {SUBSIDIARIES.map((s) => (
              <div key={s.nameEn} className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-3">
                  {s.icon ? (
                    <img src={s.icon} alt={s.name} className="w-14 h-14" />
                  ) : (
                    <span className="text-xs font-bold text-gray-500 leading-tight whitespace-pre-line">{s.logoText}</span>
                  )}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {s.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
