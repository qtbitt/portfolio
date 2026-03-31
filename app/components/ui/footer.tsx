"use client";

import { identity, navLinks, socials } from "@/app/lib/content";

import TSLogo from "./logo";

function Footer() {
  const year = new Date().getFullYear();

  const allNavLinks = navLinks.flatMap((link) =>
    link.dropdown
      ? link.dropdown.map((d) => ({
          label: d.shortLabel ?? d.label,
          href: d.href,
        }))
      : [{ label: link.label, href: link.href }],
  );

  const handleSocialClick = (
    s: (typeof socials)[number],
    e: React.MouseEvent,
  ) => {
    if (s.copyToClipboard) {
      e.preventDefault();
      navigator.clipboard.writeText(s.handle);
      alert(`Copied ${s.handle} to clipboard!`);
    }
  };

  return (
    <footer className="mx-6 mb-6 mt-4">
      <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm px-6 py-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <TSLogo />
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  {identity.name} S.
                </p>
                <p className="text-xs text-white/30">{identity.role}</p>
              </div>
            </div>

            <nav className="flex items-center gap-1 flex-wrap">
              {allNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/40 hover:text-white hover:bg-white/6 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.copyToClipboard ? undefined : s.href}
                    target={s.href?.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    onClick={(e) => handleSocialClick(s, e)}
                    className="flex items-center justify-center w-8 h-8 rounded-xl border border-white/10 bg-white/4 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    <Icon size={15} color={s.iconColor} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-white/6" />

          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs text-white/20">
              © {year} {identity.fullName}. All rights reserved.
            </p>
            <p className="text-xs text-white/15 flex items-center gap-1">
              Built with
              <span className="text-white/25 font-medium">Next.js</span>
              <span className="text-white/10">·</span>
              <span className="text-white/25 font-medium">Tailwind CSS</span>
              <span className="text-white/10">·</span>
              <span className="text-white/25 font-medium">TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
