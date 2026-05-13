"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/content";
import Logo from "./Logo";
import NavText from "./NavText";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/88 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center h-[70px]">
        <Link href="/" className="shrink-0">
          <Logo height={52} />
        </Link>

        <nav className="hidden md:flex items-center justify-end flex-1 gap-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <NavText label={item.label} />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-white/10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-8 py-4 text-[15px] text-white/60 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
