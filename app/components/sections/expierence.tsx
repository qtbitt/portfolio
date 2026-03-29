"use client";

import { BiHash, BiLinkExternal } from "react-icons/bi";

import { ExperienceEntry } from "@/app/types/experience-entry";
import TechPill from "../ui/techpill";
import TimelineEntry from "../ui/timeline-entry";

const experiences: ExperienceEntry[] = [
  {
    company: "Dynatrace",
    logo: "/dynatrace-logo.png",
    role: "Software Engineer Intern",
    type: "Internship",
    dateRange: "May 2026 - June 2026",
    location: "Gdańsk, Poland",
    description:
      "Worked on the Dynatrace SaaS platform, contributing to the development of new features and performance optimizations.",
    stack: [
      { iconName: "SiTypescript", label: "TypeScript" },
      { iconName: "SiGo", label: "Go" },
    ],
    url: "https://dynatrace.com",
  },
  {
    company: "Sii",
    logo: "/sii-logo.png",
    role: "Frontend Developer Intern",
    type: "Internship",
    dateRange: "May 2025 - June 2025",
    location: "Gdańsk, Poland",
    description:
      "Built a full-stack web application for hosting definitions of internet slang and memes.",
    stack: [
      { iconName: "SiReact", label: "React" },
      { iconName: "SiNodedotjs", label: "Node.js" },
      { iconName: "SiExpress", label: "Express.js" },
      { iconName: "SiFigma", label: "Figma" },
    ],
    url: "https://sii.pl",
  },
];

function Experience() {
  return (
    <section
      className="mx-6 my-10 flex flex-col gap-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="flex items-center gap-2 text-3xl font-bold text-white">
        <BiHash size={32} color="#757575" />
        Experience
      </h2>

      <div className="flex flex-col">
        {experiences.map((entry, i) => (
          <TimelineEntry
            key={entry.company}
            entry={entry}
            isLast={i === experiences.length - 1}
            isLatest={i === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
