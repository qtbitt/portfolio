"use client";

import { BiHash } from "react-icons/bi";
import ProjectCard from "../ui/project-card";
import { projects } from "@/app/lib/content";

function MyWork() {
  const activeProjects = projects.filter(
    (project) => project.currentlyWorkingOn,
  ).length;

  return (
    <section
      id="my-work"
      className="flex flex-col gap-3"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <h2 className="flex items-center gap-2 text-3xl font-bold text-white">
        <BiHash size={32} color="#757575" />
        My work
      </h2>

      <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-relaxed">
        This is a list of all my projects, both personal and professional.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} variant="grid" />
        ))}
      </div>
    </section>
  );
}

export default MyWork;
