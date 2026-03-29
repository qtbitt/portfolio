"use client";

import {
  BiArrowToRight,
  BiChevronLeft,
  BiChevronRight,
  BiHash,
} from "react-icons/bi";
import ProjectCard, { Project } from "../ui/project-card";
import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

const projects: Project[] = [
  {
    title: "Portfolio Website",
    dateRange: "March 2025 – Present",
    description:
      "A personal portfolio showcasing my projects and skills. Built with a focus on performance and smooth animations, featuring a dark glassmorphic aesthetic and fully responsive layout.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    stack: [
      { iconName: "SiNextdotjs", label: "Next.js" },
      { iconName: "SiReact", label: "React" },
      { iconName: "SiTypescript", label: "TypeScript" },
      { iconName: "SiTailwindcss", label: "Tailwind CSS" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    dateRange: "January 2025 – February 2025",
    description:
      "A full-stack e-commerce platform with product listings, cart management, Stripe payments, and an admin dashboard. Includes real-time inventory tracking and order management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    stack: [
      { iconName: "SiNextdotjs", label: "Next.js" },
      { iconName: "SiTypescript", label: "TypeScript" },
      { iconName: "SiPrisma", label: "Prisma" },
      { iconName: "SiPostgresql", label: "PostgreSQL" },
      { iconName: "SiStripe", label: "Stripe" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat App",
    dateRange: "November 2024 – December 2024",
    description:
      "A real-time messaging application supporting private and group chats, file sharing, and read receipts. Built with a Node.js backend and Firebase for live data synchronization.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    stack: [
      { iconName: "SiReact", label: "React" },
      { iconName: "SiNodedotjs", label: "Node.js" },
      { iconName: "SiFirebase", label: "Firebase" },
      { iconName: "SiTailwindcss", label: "Tailwind CSS" },
    ],
    githubUrl: "#",
  },
  {
    title: "AI Study Assistant",
    dateRange: "September 2024 – October 2024",
    description:
      "A web app that helps students generate flashcards, summaries, and quizzes from uploaded PDFs and notes. Integrates with OpenAI's API and stores user data with Supabase.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    stack: [
      { iconName: "SiNextdotjs", label: "Next.js" },
      { iconName: "SiPython", label: "Python" },
      { iconName: "SiSupabase", label: "Supabase" },
      { iconName: "SiMongodb", label: "MongoDB" },
    ],
    liveUrl: "#",
  },
];

export default function FeaturedProjects() {
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
            {projects.length}
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
              disabled={current === projects.length - 1}
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
          {projects.map((project) => (
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
          href="#projects"
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
