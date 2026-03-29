"use client";

import {
  FaBookOpen,
  FaGamepad,
  FaGraduationCap,
  FaPlaneDeparture,
} from "react-icons/fa";
import { SiGodotengine, SiUnity } from "react-icons/si";

import { BiX } from "react-icons/bi";
import { useEffect } from "react";

export default function LearnMoreModal({ onClose }: { onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl shadow-2xl shadow-black/50 p-7 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white leading-snug">
            A bit more about me
          </h3>
          <button
            onClick={onClose}
            className="shrink-0 rounded-lg p-1.5 text-white/40 hover:text-white hover:bg-white/8 transition-all"
          >
            <BiX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 text-white/60 text-sm leading-relaxed">
          <p>
            Besides{" "}
            <strong className="text-sky-300 font-semibold">
              web development
            </strong>
            , I am also interested in{" "}
            <mark
              className="rounded-sm px-1 font-semibold"
              style={{
                background: "rgba(1, 33, 105, 0.35)",
                color: "#93b4ff",
              }}
            >
              game development
            </mark>
            . In my free time, I create games using{" "}
            <a
              href="https://unity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
            >
              Unity
            </a>{" "}
            or{" "}
            <a
              href="https://godotengine.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
            >
              Godot
            </a>
            , and I enjoy experimenting with new ideas and mechanics.
          </p>

          <p>
            In addition to coding, I also like{" "}
            <strong className="text-sky-300 font-semibold">gaming</strong>,{" "}
            <strong className="text-sky-300 font-semibold">
              reading books
            </strong>
            , and{" "}
            <strong className="text-sky-300 font-semibold">traveling</strong>.
          </p>

          <p>
            <span className="inline-flex items-center gap-2 text-sky-300 font-semibold text-lg">
              <FaGraduationCap />
              Study
            </span>
            <br />I am currently studying in{" "}
            <mark
              className="rounded-sm px-1 font-semibold"
              style={{
                background: "rgba(220, 20, 60, 0.25)",
                color: "#ff9aaa",
              }}
            >
              Technikum
            </mark>{" "}
            and I will finish it in{" "}
            <mark
              className="rounded-sm px-1 font-semibold"
              style={{
                background: "rgba(255, 213, 0, 0.2)",
                color: "#ffd500",
              }}
            >
              2028
            </mark>
            .
          </p>
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="self-end rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:border-white/20 hover:bg-white/6 transition-all duration-200"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
