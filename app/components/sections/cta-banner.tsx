"use client";

import { BiArrowToRight, BiEnvelopeOpen, BiStar } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import LightRays from "../ui/light-rays";
import { identity } from "@/app/lib/content";

function CTABanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });

  const mouseX = isHovering ? mouseOffset.x : 0;
  const mouseY = isHovering ? mouseOffset.y : 0;

  const layerTransforms = {
    back: `translate(${mouseX * 26 + scrollOffset.x * 0.8}px, ${mouseY * 22 + scrollOffset.y * 0.8}px)`,
    mid: `translate(${mouseX * -42 + scrollOffset.x * -0.65}px, ${mouseY * 30 + scrollOffset.y * 0.7}px)`,
    front: `translate(${mouseX * 58 + scrollOffset.x * 0.45}px, ${mouseY * -42 + scrollOffset.y * -0.9}px)`,
    halo: `translate(${mouseX * -24 + scrollOffset.x * 0.35}px, ${mouseY * -18 + scrollOffset.y * -0.45}px)`,
  };

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const updateScrollOffset = () => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const viewportWidth = window.innerWidth || 1;
      const progressY =
        (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const progressX =
        (rect.left + rect.width / 2 - viewportWidth / 2) / viewportWidth;

      setScrollOffset({
        x: progressX * -20,
        y: progressY * -34,
      });
    };

    const queueScrollUpdate = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        updateScrollOffset();
        frameRef.current = null;
      });
    };

    const handlePointerMove = (event: MouseEvent) => {
      const rect = banner.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setIsHovering(true);
      setMouseOffset({ x, y });
    };

    const handlePointerLeave = () => {
      setIsHovering(false);
      setMouseOffset({ x: 0, y: 0 });
    };

    banner.addEventListener("mousemove", handlePointerMove);
    banner.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("scroll", queueScrollUpdate, { passive: true });
    window.addEventListener("resize", queueScrollUpdate);
    updateScrollOffset();

    return () => {
      banner.removeEventListener("mousemove", handlePointerMove);
      banner.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("scroll", queueScrollUpdate);
      window.removeEventListener("resize", queueScrollUpdate);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-0 backdrop-blur-sm"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />

      <div
        className="pointer-events-none absolute -left-28 top-[-5rem] h-72 w-72 rounded-full bg-sky-400/14 blur-3xl transition-transform duration-200 ease-out"
        style={{
          transform: layerTransforms.back,
        }}
      />
      <div
        className="pointer-events-none absolute right-[-3rem] top-1/4 h-56 w-56 rounded-full bg-emerald-300/14 blur-3xl transition-transform duration-200 ease-out"
        style={{
          transform: layerTransforms.mid,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-4rem] left-1/3 h-60 w-60 rounded-full bg-cyan-200/12 blur-3xl transition-transform duration-200 ease-out"
        style={{
          transform: layerTransforms.front,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-[14%] top-[18%] h-36 rounded-full bg-white/6 blur-3xl transition-transform duration-200 ease-out"
        style={{
          transform: layerTransforms.halo,
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        <LightRays
          raysOrigin="left"
          raysColor="#7dd3fc"
          raysSpeed={0.9}
          lightSpread={1.05}
          rayLength={1.4}
          pulsating
          fadeDistance={1.2}
          saturation={0.8}
          followMouse
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.08}
        />
      </div>

      <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/8" />

      <div className="relative z-10 grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1fr)_18rem] md:px-8 md:py-9">
        <div className="max-w-2xl">
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            Let&apos;s build it together!
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
            If you have a product, portfolio, or interactive concept in mind,
            I&apos;d love to work on it with you. I&apos;m always open to
            discussing new projects!
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${identity.email}?subject=${encodeURIComponent("Let's create something together")}`}
              className="group inline-flex items-center gap-2 rounded-2xl border border-sky-400/30 bg-sky-500/18 px-5 py-3 text-sm font-semibold text-sky-200 transition-all duration-200 hover:border-sky-300/50 hover:bg-sky-500/28 hover:text-white"
            >
              <BiEnvelopeOpen size={16} />
              Start a project
              <BiArrowToRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#my-work"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/72 transition-all duration-200 hover:border-white/24 hover:bg-white/10 hover:text-white"
            >
              Explore my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
