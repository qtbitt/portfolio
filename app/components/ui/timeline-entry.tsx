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
  const details = [entry.role, entry.type].filter(Boolean).join(" / ");

  return (
    <div className="flex gap-3 sm:gap-5">
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

      <div className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
        <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
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

              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {entry.company}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/55 sm:text-sm">
                  {details}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 border-t border-white/8 pt-3 text-left sm:shrink-0 sm:border-t-0 sm:pt-0 sm:text-right">
              <p className="text-xs font-medium tracking-[0.02em] text-white/40">
                {entry.dateRange}
              </p>
              <p className="text-xs text-white/25">{entry.location}</p>
            </div>
          </div>

          <p className="text-sm leading-7 text-white/55">{entry.description}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
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
                className="inline-flex w-fit items-center gap-1 text-xs text-white/25 transition-colors duration-200 hover:text-white/60 sm:ml-auto"
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
