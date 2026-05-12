import Link from "next/link";
import { COMPANY, NAV_ITEMS, SUBSIDIARIES } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-lg font-extrabold mb-3">
              EUM <span className="text-coral">NETWORKS</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed">
              {COMPANY.name}
              <br />
              스포츠와 IT의 경계를 넘어
              <br />
              새로운 비즈니스 가치를 창출합니다.
            </p>
          </div>

          <div>
            <h5 className="text-[11px] font-bold text-white/40 tracking-[1.5px] uppercase mb-4">
              Company
            </h5>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-white/30 hover:text-coral transition-colors mb-2.5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="text-[11px] font-bold text-white/40 tracking-[1.5px] uppercase mb-4">
              Group
            </h5>
            {SUBSIDIARIES.map((s) => (
              <a
                key={s.nameEn}
                href={s.url || "#"}
                target={s.url ? "_blank" : undefined}
                rel={s.url ? "noopener noreferrer" : undefined}
                className="block text-sm text-white/30 hover:text-coral transition-colors mb-2.5"
              >
                {s.name}
              </a>
            ))}
          </div>

          <div>
            <h5 className="text-[11px] font-bold text-white/40 tracking-[1.5px] uppercase mb-4">
              Info
            </h5>
            <p className="text-sm text-white/30 mb-2.5">{COMPANY.address}</p>
            <p className="text-sm text-white/30 mb-2.5">{COMPANY.tel}</p>
            <p className="text-sm text-white/30">{COMPANY.email}</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} {COMPANY.name} ({COMPANY.nameEn}).
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
