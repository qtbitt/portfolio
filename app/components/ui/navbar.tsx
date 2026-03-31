"use client";

import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import TSLogo from "./logo";
import { navLinks } from "@/app/lib/content";

interface NavbarProps {
  activeHref?: string;
  onNavigate?: (href: string) => void;
}

function Navbar({ activeHref = "#home", onNavigate }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  const isInternalHref = (href?: string) => Boolean(href?.startsWith("#"));

  const handleNavigate = (
    href: string | undefined,
    event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (!href) return;

    if (isInternalHref(href) && onNavigate) {
      event?.preventDefault();
      onNavigate(href);
    }

    setOpenDropdown(null);
  };

  return (
    <nav className="relative z-50 mx-6" data-aos="fade-down" data-aos-delay="0">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm shadow-xl shadow-black/20 px-4 py-2.5">
        {/* Left: Logo + Desktop Nav Links */}
        <div className="flex items-center gap-1" ref={dropdownRef}>
          <div className="flex items-center gap-2.5 mr-2 pr-3 border-r border-white/10">
            <TSLogo />
          </div>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                    className={`flex items-center gap-1.5 rounded-xl border border-transparent px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                      openDropdown === item.label
                        ? "border-white/12 bg-white/10 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/8 hover:border-white/10"
                    } outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0`}
                  >
                    {item.label}
                    <BiChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-[calc(100%+10px)] w-72 rounded-2xl border border-white/10 bg-zinc-950 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="p-2 flex flex-col gap-0.5">
                        {item.dropdown.map((drop) => (
                          <a
                            key={drop.label}
                            href={drop.href}
                            target={
                              isInternalHref(drop.href) ? undefined : "_blank"
                            }
                            rel={
                              isInternalHref(drop.href)
                                ? undefined
                                : "noopener noreferrer"
                            }
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-white/8 group"
                            onClick={(event) =>
                              handleNavigate(drop.href, event)
                            }
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-white/60 group-hover:text-white group-hover:bg-white/12 transition-all">
                              {drop.icon}
                            </span>
                            <span>
                              <p className="text-sm font-semibold text-white/90 group-hover:text-white">
                                {drop.label}
                              </p>
                              <p className="text-xs text-white/45 group-hover:text-white/60 leading-snug mt-0.5">
                                {drop.desc}
                              </p>
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  href={item.href}
                  active={activeHref === item.href}
                  onNavigate={handleNavigate}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(event) => handleNavigate("#contact", event)}
            className="hidden sm:block rounded-xl border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/14 hover:text-white hover:border-white/25 hover:shadow-lg hover:shadow-white/5 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
          >
            Contact
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/6 text-white/60 transition-all duration-200 hover:text-white hover:bg-white/10 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <BiX size={20} /> : <BiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - absolutely positioned so it overlays the page */}
      {mobileOpen && (
        <div className="sm:hidden absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 flex flex-col gap-0.5">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleMobileExpanded(item.label)}
                    className="w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
                  >
                    {item.label}
                    <BiChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileExpanded === item.label && (
                    <div className="ml-2 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-white/8 pl-2">
                      {item.dropdown.map((drop) => (
                        <a
                          key={drop.label}
                          href={drop.href}
                          target={
                            isInternalHref(drop.href) ? undefined : "_blank"
                          }
                          rel={
                            isInternalHref(drop.href)
                              ? undefined
                              : "noopener noreferrer"
                          }
                          onClick={(event) => {
                            handleNavigate(drop.href, event);
                            closeMobile();
                          }}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-white/8 group"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-white/60 group-hover:text-white group-hover:bg-white/12 transition-all">
                            {drop.icon}
                          </span>
                          <span>
                            <p className="text-sm font-semibold text-white/90 group-hover:text-white">
                              {drop.label}
                            </p>
                            <p className="text-xs text-white/45 group-hover:text-white/60 leading-snug mt-0.5">
                              {drop.desc}
                            </p>
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => {
                    handleNavigate(item.href, event);
                    closeMobile();
                  }}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    activeHref === item.href
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/8"
                  } outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0`}
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="border-t border-white/8 mt-1 pt-1">
              <a
                href="#contact"
                onClick={(event) => {
                  handleNavigate("#contact", event);
                  closeMobile();
                }}
                className="block rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-medium text-center text-white/80 transition-all duration-200 hover:bg-white/14 hover:text-white hover:border-white/25 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
  onNavigate?: (
    href: string | undefined,
    event?: React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}

function NavLink({
  children,
  active,
  href = "#home",
  onNavigate,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => onNavigate?.(href, event)}
      className={`rounded-xl border border-transparent px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-white/12 text-white border border-white/12"
          : "text-white/60 hover:text-white hover:bg-white/8 hover:border-white/10"
      } outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0`}
    >
      {children}
    </a>
  );
}

export default Navbar;
