"use client";

import "yet-another-react-lightbox/styles.css";

import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

import { HiEye } from "react-icons/hi2";
import Lightbox from "yet-another-react-lightbox";
import { Project } from "@/app/types/project";
import TechPill from "./techpill";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from "react";

function ProjectCard({
  project,
  variant = "featured",
}: {
  project: Project;
  variant?: "featured" | "grid";
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isGrid = variant === "grid";

  return (
    <>
      <div
        className={`overflow-hidden rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm ${
          isGrid ? "flex h-full flex-col" : "flex flex-col sm:h-56 sm:flex-row"
        }`}
      >
        {/* Image */}
        <div
          className={`group relative shrink-0 cursor-zoom-in overflow-hidden ${
            isGrid ? "h-56 w-full" : "h-44 sm:h-auto sm:w-56"
          }`}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-110"
          />
          {/* Directional gradient */}
          <div
            className={`absolute inset-0 ${
              isGrid
                ? "bg-linear-to-b from-transparent via-transparent to-black/60"
                : "hidden bg-linear-to-r from-transparent to-black/50 sm:block"
            }`}
          />
          {!isGrid && (
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 sm:hidden" />
          )}

          {/* Eye overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-300">
            <div className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out flex items-center justify-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 shadow-lg">
              <HiEye size={20} className="text-white drop-shadow" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex min-w-0 flex-1 flex-col overflow-hidden px-5 py-4 ${
            isGrid ? "gap-3" : "gap-2.5"
          }`}
        >
          {/* Title + date */}
          <div className="shrink-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3
                  className={`font-bold leading-tight text-white ${
                    isGrid ? "text-lg" : "truncate text-base"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-white/35">
                  {project.dateRange}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className={`shrink-0 text-sm leading-relaxed text-white/55 ${
              isGrid ? "line-clamp-4" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {project.stack.map((tech) => (
              <TechPill key={tech.label} {...tech} />
            ))}
          </div>

          {/* Buttons */}
          <div className="border-t border-white/8 pt-2.5 flex items-center gap-2 shrink-0 mt-auto">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-sky-500/20 border border-sky-400/30 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-all duration-200 hover:bg-sky-500/30 hover:border-sky-400/50 hover:text-sky-200"
              >
                <BiLinkExternal size={12} />
                View Live
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/55 transition-all duration-200 hover:text-white hover:border-white/20 hover:bg-white/6"
              >
                <BiLogoGithub size={12} />
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: project.image, alt: project.title }]}
        plugins={[Zoom]}
        carousel={{ finite: true }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
      />
    </>
  );
}

export default ProjectCard;
