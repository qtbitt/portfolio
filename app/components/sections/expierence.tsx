"use client";

import { BiHash } from "react-icons/bi";
import TimelineEntry from "../ui/timeline-entry";
import { experience } from "@/app/lib/content";

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
        {experience.map((entry, i) => (
          <TimelineEntry
            key={entry.company}
            entry={entry}
            isLast={i === experience.length - 1}
            isLatest={i === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
