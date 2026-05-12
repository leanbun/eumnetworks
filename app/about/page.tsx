import type { Metadata } from "next";
import { COMPANY, VALUES, TIMELINE } from "@/data/content";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "회사소개 | 이음네트웍스글로벌",
  description: COMPANY.aboutText,
};

export default function AboutPage() {
  return (
    <>
      {/* ── [DARK] 회사 소개 ── */}
      <section className="pt-[140px] pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="ABOUT US"
                title="연결이 만드는<br/>새로운 가치"
              />
              <p className="text-white/50 leading-relaxed mt-6 mb-8">
                {COMPANY.aboutText}
              </p>
              <a
                href="/business"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral text-white rounded-lg text-[15px] font-semibold hover:bg-coral-light transition-colors"
              >
                사업영역 보기 &rarr;
              </a>
            </div>

            <div className="card-dark p-12 text-center">
              <div className="text-7xl text-coral/25 leading-none">
                &ldquo;
              </div>
              <p className="text-[22px] font-semibold mt-3 leading-snug">
                {COMPANY.quote}
              </p>
              <p className="text-sm text-white/30 mt-4">
                — {COMPANY.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── [LIGHT] 핵심 가치 ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="CORE VALUES"
            title="핵심 가치"
            desc="이음네트웍스글로벌이 추구하는 4가지 가치"
            theme="light"
            center
          />
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 mt-12">
            {VALUES.map((v) => (
              <div key={v.title} className="card-light p-8">
                <div className="w-12 h-12 rounded-xl bg-coral/8 flex items-center justify-center text-[22px] mb-4">
                  {v.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5">
                  {v.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [DARK ALT] 연혁 ── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            label="HISTORY"
            title="연혁"
            desc="이음네트웍스글로벌의 발자취"
            center
          />
          <div className="max-w-[700px] mx-auto mt-12">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 py-5 border-b border-white/6 text-left"
              >
                <span className="text-[15px] font-bold text-coral min-w-[60px]">
                  {item.year}
                </span>
                <span className="text-[15px] text-white/55">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
