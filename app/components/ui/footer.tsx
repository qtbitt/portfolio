import { BiEnvelope, BiHash } from "react-icons/bi";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";

import TSLogo from "./logo";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <SiGithub size={15} />,
    href: "https://github.com/yourhandle",
    label: "GitHub",
  },
  {
    icon: <SiDiscord size={15} color="#5865F2" />,
    href: "https://discord.com/users/yourid",
    label: "Discord",
  },
  { icon: <SiX size={15} />, href: "https://x.com/yourhandle", label: "X" },
  {
    icon: <SiInstagram size={15} color="#E1306C" />,
    href: "https://instagram.com/yourhandle",
    label: "Instagram",
  },
  {
    icon: <BiEnvelope size={15} />,
    href: "mailto:your@email.com",
    label: "Email",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-6 mb-6 mt-4">
      <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm px-6 py-5">
        <div className="flex flex-col gap-4">
          {/* Top row */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <TSLogo />
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  Timothy S.
                </p>
                <p className="text-xs text-white/30">FullStack Developer</p>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex items-center gap-1 flex-wrap">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/40 hover:text-white hover:bg-white/6 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-1.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-8 h-8 rounded-xl border border-white/10 bg-white/4 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/6" />

          {/* Bottom row */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs text-white/20">
              © {year} Timothy S. All rights reserved.
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
