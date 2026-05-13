import Link from "next/link";
import { COMPANY, NAV_ITEMS } from "@/data/content";
import Logo from "./Logo";
import NavText from "./NavText";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* 상단: 로고 + 네비게이션 */}
        <div className="flex items-center justify-between py-5">
          <Link href="/">
            <Logo height={44} />
          </Link>
          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/40 hover:text-white transition-colors duration-300"
              >
                <NavText label={item.label} />
              </Link>
            ))}
          </nav>
        </div>

        {/* 하단: 회사 정보 + 카피라이트 */}
        <div className="border-t border-white/10 py-5 text-[13px] text-white/35 leading-relaxed">
          <p>
            Add. {COMPANY.address}
          </p>
          <p className="mt-1">
            E-mail. {COMPANY.email}
            <span className="mx-4">Tel. {COMPANY.tel}</span>
            <span>Fax. {COMPANY.fax}</span>
            <span className="mx-4">
              Copyright &copy; {COMPANY.nameEn.toUpperCase()}. ALL rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
