"use client";

import {
  BiChevronDown,
  BiEnvelope,
  BiLogoGithub,
  BiShareAlt,
} from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import TSLogo from "./logo";

const dropdownItems = [
  {
    icon: <BiLogoGithub size={18} />,
    label: "My Github Profile",
    desc: "Explore my projects and contributions.",
    href: "#",
  },
  {
    icon: <BiShareAlt size={18} />,
    label: "My Socials",
    desc: "Find me across the web.",
    href: "#",
  },
  {
    icon: <BiEnvelope size={18} />,
    label: "Contact Me",
    desc: "Have any questions? Reach out.",
    href: "#",
  },
];

function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative z-50 mx-6" data-aos="fade-down" data-aos-delay="0">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm shadow-xl shadow-black/20 px-4 py-2.5">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-1">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mr-2 pr-3 border-r border-white/10">
            <TSLogo />
          </div>

          {/* Nav links */}
          <NavLink active>Home</NavLink>
          <NavLink>My work</NavLink>

          {/* More dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                moreOpen
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/8"
              }`}
            >
              More
              <BiChevronDown
                size={15}
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown */}
            {moreOpen && (
              <div className="absolute left-0 top-[calc(100%+10px)] w-72 rounded-2xl border border-white/10 bg-zinc-950 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 flex flex-col gap-0.5">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-white/8 group"
                      onClick={() => setMoreOpen(false)}
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-white/60 group-hover:text-white group-hover:bg-white/12 transition-all">
                        {item.icon}
                      </span>
                      <span>
                        <p className="text-sm font-semibold text-white/90 group-hover:text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-white/45 group-hover:text-white/60 leading-snug mt-0.5">
                          {item.desc}
                        </p>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Contact button */}
        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/14 hover:text-white hover:border-white/25 hover:shadow-lg hover:shadow-white/5"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

function NavLink({
  children,
  active,
  href = "#",
}: {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`rounded-xl px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-white/12 text-white border border-white/12"
          : "text-white/60 hover:text-white hover:bg-white/8"
      }`}
    >
      {children}
    </a>
  );
}

export default Navbar;
