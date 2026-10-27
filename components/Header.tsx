"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
  { href: "#cases", label: "Business cases" },
  { href: "#process", label: "How we work" },
];

export default function Header() {
  // On small screens the links live in a drop-down menu.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-line-soft bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-[18px]">
        <a href="#top" aria-label="Mizan Group — home" className="text-brand">
          <Logo className="h-[31px] w-[132px]" />
        </a>

        <nav aria-label="Main" className="hidden gap-[26px] text-[15px] font-medium lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-[10px] bg-brand px-5 py-[13px] text-[15px] font-semibold text-white hover:bg-ink sm:inline-block"
          >
            Get a free consultation
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line-soft px-6 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line-soft py-4 text-base font-medium hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block rounded-[10px] bg-brand px-5 py-[13px] text-center text-[15px] font-semibold text-white"
          >
            Get a free consultation
          </a>
        </nav>
      )}
    </header>
  );
}
