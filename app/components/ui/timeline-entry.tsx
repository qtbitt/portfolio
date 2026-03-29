import { BiLinkExternal } from "react-icons/bi";
import { ExperienceEntry } from "@/app/types/experience-entry";
import TechPill from "./techpill";

function TimelineEntry({
  entry,
  isLast,
  isLatest,
}: {
  entry: ExperienceEntry;
  isLast: boolean;
  isLatest: boolean;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="relative mt-1">
          <div
            className={`h-3 w-3 shrink-0 rounded-full border-2 ${
              isLatest
                ? "border-sky-400 bg-sky-500/40 shadow-[0_0_8px_2px_rgba(56,189,248,0.3)]"
                : "border-white/20 bg-white/8"
            }`}
          />
        </div>

        {!isLast && (
          <div className="mt-2 min-h-8 w-px flex-1 bg-linear-to-b from-white/10 to-transparent" />
        )}
      </div>

      <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
        <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/8">
                <img
                  src={entry.logo}
                  alt={entry.company}
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">
                    {entry.company}
                  </h3>
                </div>
                <p className="mt-0.5 text-xs text-white/50">
                  {entry.role} · {entry.type}
                </p>
              </div>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-xs font-medium text-white/40">
                {entry.dateRange}
              </p>
              <p className="mt-0.5 text-xs text-white/25">{entry.location}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-white/55">
            {entry.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {entry.stack && (
              <div className="flex flex-wrap gap-1.5">
                {entry.stack.map((tech) => (
                  <TechPill
                    key={tech.iconName}
                    iconName={tech.iconName}
                    label={tech.label}
                  />
                ))}
              </div>
            )}

            {entry.url && (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex shrink-0 items-center gap-1 text-xs text-white/25 transition-colors duration-200 hover:text-white/60"
              >
                <BiLinkExternal size={11} />
                {entry.company}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineEntry;
