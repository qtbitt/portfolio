"use client";

import { BiArrowToRight, BiHash } from "react-icons/bi";

import LearnMoreModal from "../ui/modal";
import Widget from "../ui/widget";
import { useState } from "react";

function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section>
      {modalOpen && <LearnMoreModal onClose={() => setModalOpen(false)} />}

      <div
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Left */}
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="flex items-center gap-2 text-3xl font-bold text-white leading-snug">
              <BiHash size={32} color="#757575" />
              About me
            </h2>

            <p className="text-white/60 text-base leading-relaxed">
              I&apos;ve been hooked on coding since a young age — starting with{" "}
              <a
                href="https://scratch.mit.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
              >
                Scratch
              </a>
              , then{" "}
              <a
                href="https://python.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
              >
                Python
              </a>
              , and eventually landing on{" "}
              <strong className="text-sky-300 font-semibold">
                web development
              </strong>
              . Today I build with{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
              >
                React
              </a>{" "}
              &amp;{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
              >
                Next.js
              </a>
              , always eager to pick up what&apos;s next.
              <br />
              <br />I am{" "}
              <strong className="text-sky-300 font-semibold">
                17 years old
              </strong>{" "}
              and based in{" "}
              <strong className="text-sky-300 font-semibold">
                Gdańsk, Poland.
              </strong>{" "}
              I speak{" "}
              <mark
                className="rounded-sm px-1 font-semibold"
                style={{
                  background: "rgba(1, 33, 105, 0.35)",
                  color: "#93b4ff",
                }}
              >
                English
              </mark>
              ,{" "}
              <mark
                className="rounded-sm px-1 font-semibold"
                style={{
                  background: "rgba(220, 20, 60, 0.25)",
                  color: "#ff9aaa",
                }}
              >
                Polish
              </mark>
              , and{" "}
              <mark
                className="rounded-sm px-1 font-semibold"
                style={{
                  background: "rgba(255, 213, 0, 0.2)",
                  color: "#ffd500",
                }}
              >
                Ukrainian
              </mark>{" "}
              fluently, and I am open to remote and local opportunities.{" "}
              <button
                onClick={() => setModalOpen(true)}
                className="inline text-sky-400/70 underline underline-offset-2 hover:text-sky-300 transition-colors text-sm cursor-pointer"
              >
                ...learn more
              </button>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-sky-500/20 border border-sky-400/30 px-5 py-2.5 text-sm font-semibold text-sky-300 transition-all duration-200 hover:bg-sky-500/30 hover:border-sky-400/50 hover:text-sky-200"
            >
              View my projects
              <BiArrowToRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/60 transition-all duration-200 hover:text-white hover:border-white/20 hover:bg-white/6"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right: Widgets */}
        <div className="grid grid-cols-2 gap-3 content-start">
          <div className="col-span-2">
            <Widget label="Currently working on" />
          </div>
          <Widget label="Experience" />
          <Widget label="Education" />
          <Widget label="Interests" />
          <Widget label="Location" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
