import Logo from "./Logo";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#cases", label: "Cases" },
  { href: "#contact", label: "Contact" },
  // Placeholders until the real social profiles exist.
  { href: "#top", label: "LinkedIn" },
  { href: "#top", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#24342D] bg-ink text-[#C4CEC9]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-10 text-sm md:flex-row md:flex-wrap md:items-center md:justify-between">
        <span aria-label="Mizan Group" className="flex text-white">
          <Logo className="h-[26px] w-[110px]" />
        </span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="underline hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <span>© 2026 Mizan Group. All rights reserved.</span>
      </div>
    </footer>
  );
}
