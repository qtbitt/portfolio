"use client";

import * as Flags from "country-flag-icons/react/3x2";

import { BiCodeAlt, BiCurrentLocation, BiGlobe } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import { identity } from "@/app/lib/content";

const PARALLAX_ENABLED = true;

const PARALLAX_STRENGTH = {
  background: 6,
  person: 10,
};

const OVERLAY_POSITION = {
  right: 50,
  bottom: -40,
};

const OVERLAY_HEIGHT = "105%";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!PARALLAX_ENABLED) return;

    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x: nx, y: ny });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const bgTranslate = PARALLAX_ENABLED
    ? `translate(calc(30 * 0.25rem + ${-offset.x * PARALLAX_STRENGTH.background}px), ${-offset.y * PARALLAX_STRENGTH.background}px)`
    : "translate(calc(30 * 0.25rem), 0)";

  const personTranslate = PARALLAX_ENABLED
    ? `translate(${offset.x * PARALLAX_STRENGTH.person}px, ${offset.y * PARALLAX_STRENGTH.person}px)`
    : "translate(0, 0)";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden rounded-3xl flex items-end md:items-center min-h-120 md:min-h-120"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      {/* Mobile background */}
      <img
        src="/hero-banner.png"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
      />

      {/* Desktop empty banner with parallax */}
      <img
        src="/empty-banner.png"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover scale-140 hidden md:block"
        style={{
          transform: bgTranslate,
          transition: PARALLAX_ENABLED
            ? "transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : undefined,
          willChange: "transform",
        }}
      />

      {/* Person cutout (desktop only) */}
      <img
        src="/ts.png"
        alt=""
        aria-hidden="true"
        className="absolute hidden md:block pointer-events-none select-none object-contain object-bottom z-10"
        style={{
          right: OVERLAY_POSITION.right,
          bottom: OVERLAY_POSITION.bottom,
          height: OVERLAY_HEIGHT,
          transform: personTranslate,
          transition: PARALLAX_ENABLED
            ? "transform 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : undefined,
          willChange: "transform",
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/90 via-black/60 to-black/30 md:bg-none" />
      <div className="absolute inset-0 rounded-3xl hidden md:block bg-linear-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-20 px-6 py-8 md:px-10 md:py-12 w-full md:max-w-lg">
        <h1
          className="text-4xl md:text-5xl font-bold text-white leading-tight"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          hey,{" "}
          <span className="whitespace-nowrap">
            I&apos;m {identity.name}{" "}
            <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                alt="👋"
                width={48}
                height={48}
                style={{ transform: "translateY(-7%)" }}
                className="inline-block align-middle md:w-[60px] md:h-[60px]"
              />
            </picture>
          </span>
        </h1>

        <p
          className="mt-3 md:mt-4 text-base md:text-lg text-white/80 leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {identity.role} from {identity.location} building web applications,
          currently focused on React and Next.js.
        </p>

        <div
          className="mt-4 md:mt-6 rounded-2xl border border-white/20 bg-black/45 p-4 md:p-5 text-white shadow-xl backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <BiCurrentLocation className="shrink-0" />
              {identity.location}
            </p>
            <p className="flex items-center gap-2">
              <BiCodeAlt className="shrink-0" />
              React, Next.js, frontend performance
            </p>
            <p className="flex items-center gap-2">
              <BiGlobe className="shrink-0" />
              {identity.availability}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Flags.US className="h-4 w-5 rounded-sm opacity-80" />
            <Flags.PL className="h-4 w-5 rounded-sm opacity-80" />
            <Flags.UA className="h-4 w-5 rounded-sm opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
