"use client";

import {
  BiArrowToRight,
  BiChevronLeft,
  BiChevronRight,
  BiHash,
} from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";

import ProjectCard from "../ui/project-card";
import { projects } from "../../lib/content";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    watchDrag: false,
  });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="flex flex-col gap-4"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-white">
          <BiHash size={32} color="#757575" />
          Featured Projects
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white/30 tabular-nums">
            {current + 1}
            <span className="text-white/15 mx-1">/</span>
            {featuredProjects.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              disabled={current === 0}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/4 p-1.5 text-white/50 transition-all duration-200 hover:text-white hover:bg-white/8 hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <BiChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              disabled={current === featuredProjects.length - 1}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/4 p-1.5 text-white/50 transition-all duration-200 hover:text-white hover:bg-white/8 hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <BiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {featuredProjects.map((project) => (
            <div key={project.title} className="flex-none w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-1">
        <span className="text-sm text-white/30">Want to see more?</span>
        <a
          href="#my-work"
          className="group flex items-center gap-1.5 rounded-xl border border-white/10 px-3.5 py-1.5 text-sm font-semibold text-white/50 transition-all duration-200 hover:text-white hover:border-white/20 hover:bg-white/6"
        >
          More Projects
          <BiArrowToRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
