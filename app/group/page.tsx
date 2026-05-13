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
            desc="이음시스템즈 그룹은 스포츠와 IT, 유통을 아우르는 종합 비즈니스 생태계를 구축하고 있습니다."
            center
          />

          {/* Org diagram */}
          <div className="mt-16 flex flex-col items-center">
            <div className="inline-flex flex-col items-center px-11 py-5 bg-coral rounded-xl font-bold text-base">
              이음네트웍스글로벌
              <span className="text-[11px] opacity-80 font-medium">
                Eum Networks Global
              </span>
            </div>

            {/* 세로선: 지주 → 분기점 */}
            <div className="w-px h-8 bg-white/15" />

            {/* 가로선 + 세로선 + 카드 (grid로 정렬) */}
            <div className="hidden md:grid grid-cols-3 w-full max-w-[640px]">
              {/* 가로선: 첫번째 중앙 ~ 마지막 중앙 */}
              <div className="col-span-3 flex">
                <div className="w-1/6" />
                <div className="flex-1 h-px bg-white/15" />
                <div className="w-1/6" />
              </div>
              {/* 세로선 3개 */}
              {SUBSIDIARIES.map((s) => (
                <div key={s.nameEn} className="flex justify-center">
                  <div className="w-px h-6 bg-white/15" />
                </div>
              ))}
              {/* 카드 3개 */}
              {SUBSIDIARIES.map((s) => (
                <div key={s.nameEn} className="flex justify-center px-2">
                  <div className="flex flex-col items-center px-7 py-4 border border-white/12 rounded-xl text-sm font-semibold w-full">
                    {s.name}
                    <span className="text-[11px] text-white/35 font-normal mt-0.5">
                      {s.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 모바일: 세로 리스트 */}
            <div className="md:hidden flex flex-col items-center gap-3">
              {SUBSIDIARIES.map((s, i) => (
                <div key={s.nameEn} className="flex flex-col items-center">
                  <div className="w-px h-4 bg-white/15" />
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
                <div className="w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-5">
                  {s.icon ? (
                    <img src={s.icon} alt={s.name} className="w-12 h-12" />
                  ) : (
                    <span className="text-xs font-bold text-gray-500 leading-tight whitespace-pre-line">{s.logoText}</span>
                  )}
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
