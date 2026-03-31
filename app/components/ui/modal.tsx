"use client";

import { BiX } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalShellProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
  footer?: ReactNode;
  maxWidthClassName?: string;
}

function ModalShell({
  children,
  onClose,
  title,
  footer,
  maxWidthClassName = "max-w-lg",
}: ModalShellProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        className={`relative z-10 flex w-full flex-col gap-5 rounded-[28px] border border-white/10 bg-zinc-950/88 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-7 ${maxWidthClassName}`.trim()}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>
          <button
            onClick={onClose}
            className="shrink-0 rounded-xl border border-white/8 bg-white/4 p-2 text-white/45 transition-all duration-200 hover:border-white/16 hover:bg-white/8 hover:text-white"
            aria-label="Close modal"
          >
            <BiX size={18} />
          </button>
        </div>

        <div className="text-sm leading-relaxed text-white/62">{children}</div>

        {footer}
      </div>
    </div>,
    document.body,
  );
}

function LearnMoreModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalShell
      onClose={onClose}
      title="A bit more about me"
      footer={
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-white/68 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
          >
            Got it
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <p>
          Besides{" "}
          <strong className="font-semibold text-sky-300">web development</strong>
          , I&apos;m also really into{" "}
          <mark
            className="rounded-sm px-1 font-semibold"
            style={{
              background: "rgba(1, 33, 105, 0.35)",
              color: "#93b4ff",
            }}
          >
            game development
          </mark>
          . In my free time, I make games in{" "}
          <a
            href="https://unity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
          >
            Unity
          </a>{" "}
          or{" "}
          <a
            href="https://godotengine.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline underline-offset-2 transition-colors hover:text-sky-300"
          >
            Godot
          </a>
          , and I love experimenting with new mechanics and little ideas.
        </p>

        <p>
          Outside of coding, I also enjoy{" "}
          <strong className="font-semibold text-sky-300">gaming</strong>,{" "}
          <strong className="font-semibold text-sky-300">reading</strong>, and{" "}
          <strong className="font-semibold text-sky-300">traveling</strong>.
        </p>

        <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
          <span className="inline-flex items-center gap-2 text-base font-semibold text-sky-300">
            <FaGraduationCap />
            Study
          </span>
          <p className="mt-3">
            I&apos;m currently studying in{" "}
            <mark
              className="rounded-sm px-1 font-semibold"
              style={{
                background: "rgba(220, 20, 60, 0.25)",
                color: "#ff9aaa",
              }}
            >
              Technikum
            </mark>{" "}
            and I&apos;ll finish in{" "}
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
      </div>
    </ModalShell>
  );
}

export { ModalShell };
export default LearnMoreModal;
