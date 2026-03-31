import { BiHash } from "react-icons/bi";
import TechPill from "../ui/techpill";
import { techList } from "@/app/lib/content";

const typeLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  tooling: "Tooling",
  design: "Design",
  language: "Languages",
  "game-dev": "Game Dev",
  deployment: "Deployment",
};

function Stack() {
  const grouped = techList.reduce<Record<string, typeof techList>>(
    (acc, tech) => {
      const key = tech.type ?? "other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(tech);
      return acc;
    },
    {},
  );

  return (
    <section className="mx-6 my-10" data-aos="fade-up" data-aos-delay="0">
      <h2 className="flex items-center gap-2 text-2xl font-bold leading-snug text-white sm:text-3xl">
        <BiHash size={32} color="#757575" />
        Technologies I use
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-relaxed">
        I&apos;ve worked with a range of technologies over the years. The
        following are some of the technologies I&apos;ve worked with:
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:gap-4">
        {Object.entries(grouped).map(([type, techs]) => (
          <div
            key={type}
            className="rounded-2xl border border-white/8 bg-white/4 p-4 backdrop-blur-sm sm:grid sm:grid-cols-[7rem_1.5rem_minmax(0,1fr)] sm:items-center sm:gap-x-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
          >
            <div className="flex items-center gap-6 sm:contents">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 sm:text-left sm:text-xs sm:tracking-wider">
                {typeLabels[type] ?? type}
              </span>
              <div className="h-px flex-1 -translate-x-3 bg-white/10 sm:w-6 sm:flex-none" />
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-0 sm:min-w-0 sm:items-center">
              {techs.map((tech) => (
                <TechPill
                  key={tech.iconName}
                  iconName={tech.iconName}
                  label={tech.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;
