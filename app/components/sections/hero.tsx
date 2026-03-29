"use client";

import { BiCodeAlt, BiCurrentLocation, BiGlobe } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import Flags from "country-flag-icons/react/3x2";

// Parallax config
const PARALLAX_ENABLED = true;

/** How many px the layers shift at maximum mouse offset (edge of hero) */
const PARALLAX_STRENGTH = {
  background: 6, // banner-empty.png — moves least
  person: 10, // ts.png        — moves most (foreground)
};

/** Starting position of the ts.png overlay (CSS right / bottom, in px).
 *  Tweak these two values to reposition yourself in the banner. */
const OVERLAY_POSITION = {
  right: 50, // px from the right edge of the hero
  bottom: -40, // px from the bottom edge of the hero
};

/** Scale of the ts.png cutout relative to the hero height */
const OVERLAY_HEIGHT = "105%"; // e.g. "100%" fills the hero vertically

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!PARALLAX_ENABLED) return;

    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      // Normalize -0.5 → +0.5 relative to hero centre
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x: nx, y: ny });
    };

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

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
      ref={heroRef}
      className="relative overflow-hidden rounded-3xl min-h-120 flex items-center"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      {/* Mobile - original hero with person baked in */}
      <img
        src="/hero-banner.png"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover scale-140 translate-x-30 md:hidden"
      />

      {/* Desktop - empty banner that shifts with parallax */}
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

      {/* Person cutout overlay (desktop only) */}
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

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent rounded-3xl" />

      {/* Content */}
      <div className="relative z-20 px-10 py-12 max-w-lg">
        <h1
          className="text-5xl font-bold text-white leading-tight max-w-none w-max"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          hey,{" "}
          <span className="whitespace-nowrap">
            I&apos;m Timothy{" "}
            <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                alt="👋"
                width={60}
                height={60}
                style={{ transform: "translateY(-7%)" }}
                className="inline-block align-middle"
              />
            </picture>
          </span>
        </h1>

        <p
          className="mt-4 text-lg text-white/80 leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Full Stack Developer from Gdańsk building web applications, currently
          focused on React and Next.js.
        </p>

        <div
          className="mt-6 rounded-2xl border border-white/20 bg-black/45 p-5 text-white shadow-xl backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <BiCurrentLocation className="shrink-0" />
              Gdańsk, Poland
            </p>
            <p className="flex items-center gap-2">
              <BiCodeAlt className="shrink-0" />
              React, Next.js, frontend performance
            </p>
            <p className="flex items-center gap-2">
              <BiGlobe className="shrink-0" />
              Open to remote & local collaboration
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
