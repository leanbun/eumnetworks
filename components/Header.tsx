"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/88 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[60px]">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          EUM <span className="text-coral">NETWORKS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
        <nav className="md:hidden bg-navy/95 backdrop-blur-2xl border-t border-white/5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-4 text-sm text-white/60 hover:text-coral hover:bg-white/5 transition-colors"
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
