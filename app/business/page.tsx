import type { Metadata } from "next";
import { SPORTS_BIZ, IT_BIZ } from "@/data/content";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "사업영역 | 이음네트웍스글로벌",
  description:
    "스포츠 사업(아카데미, 유소년야구단, 용품 유통)과 IT 사업(시스템 유지보수, 금융 IT 인력)을 운영합니다.",
};

export default function BusinessPage() {
  return (
    <>
      {/* ── [DARK] 스포츠 사업 ── */}
      <section id="sports" className="pt-[140px] pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="SPORTS BUSINESS"
            title="스포츠 사업"
            desc="야구 현장의 전문성을 바탕으로, 선수 육성부터 장비 유통까지 통합 스포츠 비즈니스를 운영합니다."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {SPORTS_BIZ.map((b, i) => {
              if (b.featured) {
                return (
                  <div
                    key={b.id}
                    className="card-dark p-10 md:col-span-2 md:grid md:grid-cols-2 md:gap-10 md:items-center"
                  >
                    <div>
                      <p className="text-xs font-bold text-coral tracking-wider mb-1.5">
                        {b.category}
                      </p>
                      <h3 className="text-2xl font-extrabold mb-2">
                        {b.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {b.tags.map((t) => (
                          <span
                            key={t}
                            className="tag-dark px-3.5 py-1 rounded-full text-[11px] font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/3 rounded-2xl h-[200px] flex items-center justify-center text-6xl mt-6 md:mt-0">
                      ⚾
                    </div>
                  </div>
                );
              }
              return (
                <div key={b.id} className="card-dark p-9 relative">
                  <span className="absolute top-4 right-6 text-[56px] font-black text-white/4 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs font-bold text-coral tracking-wider mb-1.5">
                    {b.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="tag-dark px-3.5 py-1 rounded-full text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── [LIGHT] IT 사업 ── */}
      <section id="it" className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="IT BUSINESS"
            title="시스템·IT 사업"
            desc="이음시스템즈 그룹 계열사로서, 금융 IT 시스템의 안정적 운영과 전문 인력 관리를 담당합니다."
            theme="light"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {IT_BIZ.map((b) => (
              <div key={b.id} className="card-light p-9 relative">
                <div className="text-[32px] mb-4">{b.icon}</div>
                <p className="text-xs font-bold text-coral tracking-wider mb-1.5">
                  {b.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {b.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="tag-light px-3.5 py-1 rounded-full text-[11px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
