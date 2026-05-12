import type { Metadata } from "next";
import { SUBSIDIARIES } from "@/data/content";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "계열사 | 이음네트웍스글로벌",
  description:
    "이음시스템즈, 브라더스포츠아카데미, 브라더유소년야구단 등 이음 그룹 계열사를 소개합니다.",
};

export default function GroupPage() {
  return (
    <>
      {/* ── [DARK] 조직도 ── */}
      <section className="pt-[140px] pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            label="GROUP STRUCTURE"
            title="그룹 구조"
            desc="이음 그룹은 스포츠와 IT, 유통을 아우르는 종합 비즈니스 생태계를 구축하고 있습니다."
            center
          />

          {/* Org diagram */}
          <div className="mt-16">
            <div className="inline-flex flex-col items-center px-11 py-5 bg-coral rounded-xl font-bold text-base">
              이음네트웍스글로벌
              <span className="text-[11px] opacity-80 font-medium">
                Eum Networks Global · 지주
              </span>
            </div>

            <div className="w-px h-8 bg-white/15 mx-auto" />
            <div className="w-[400px] max-w-full h-px bg-white/15 mx-auto" />

            <div className="flex justify-center gap-12 max-md:flex-col max-md:items-center max-md:gap-4 mt-0">
              {SUBSIDIARIES.map((s) => (
                <div key={s.nameEn} className="relative">
                  <div className="w-px h-4 bg-white/15 mx-auto max-md:hidden" />
                  <div className="flex flex-col items-center px-7 py-4 border border-white/12 rounded-xl text-sm font-semibold">
                    {s.name}
                    <span className="text-[11px] text-white/35 font-normal mt-0.5">
                      {s.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── [LIGHT] 계열사 상세 ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="SUBSIDIARIES"
            title="계열사 소개"
            desc="각 계열사의 전문 역량이 그룹의 경쟁력을 만듭니다."
            theme="light"
            center
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {SUBSIDIARIES.map((s) => (
              <div key={s.nameEn} className="card-light p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-5 text-xs font-bold text-gray-500 leading-tight whitespace-pre-line">
                  {s.logoText}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5 mb-3">
                  {s.nameEn}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {s.desc}
                </p>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-coral font-semibold hover:underline"
                  >
                    {s.url.replace("https://", "")} &rarr;
                  </a>
                ) : (
                  <span className="text-sm text-coral font-semibold">
                    자세히 보기 &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
