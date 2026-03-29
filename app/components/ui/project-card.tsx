import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

import { Tech } from "@/app/types/tech";
import TechPill from "./techpill";

export type Project = {
  title: string;
  dateRange: string;
  description: string;
  image: string;
  stack: Tech[];
  liveUrl?: string;
  githubUrl?: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden flex h-60">
      {/* Image - fixed width, full height */}
      <div className="w-64 shrink-0 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-5 gap-3 min-w-0 overflow-hidden">
        {/* Title + date */}
        <div>
          <h3 className="text-base font-bold text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-white/35 font-medium mt-1">
            {project.dateRange}
          </p>
        </div>

        {/* Description - clamped to 3 lines */}
        <p className="text-sm text-white/55 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechPill key={tech.label} {...tech} />
          ))}
        </div>

        {/* Separator + Buttons */}
        <div className="border-t border-white/8 pt-3 flex items-center gap-2">
          {project.liveUrl && (
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
          {project.githubUrl && (
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
  );
}

export default ProjectCard;
