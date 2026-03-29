import { BiHash } from "react-icons/bi";
import { Tech } from "@/app/types/tech";
import TechPill from "../ui/techpill";

function Stack() {
  const techList: Tech[] = [
    { iconName: "SiHtml5", label: "HTML" },
    { iconName: "SiCss", label: "CSS" },
    { iconName: "SiJavascript", label: "JavaScript" },
    { iconName: "SiTypescript", label: "TypeScript" },
    { iconName: "SiTailwindcss", label: "Tailwind CSS" },
    { iconName: "SiFigma", label: "Figma" },
    { iconName: "SiReact", label: "React" },
    { iconName: "SiNextdotjs", label: "Next.js" },
    { iconName: "SiAngular", label: "Angular" },
    { iconName: "SiNodedotjs", label: "Node.js" },
    { iconName: "SiExpress", label: "Express.js" },
    { iconName: "SiMysql", label: "MySQL" },
    { iconName: "SiMongodb", label: "MongoDB" },
    { iconName: "SiNpm", label: "NPM" },
    { iconName: "SiEslint", label: "ESLint" },
    { iconName: "SiGit", label: "Git" },
    { iconName: "SiSharp", label: "C#" },
    { iconName: "SiUnity", label: "Unity" },
    { iconName: "SiGodotengine", label: "Godot" },
    { iconName: "SiVercel", label: "Vercel" },
  ];

  return (
    <section data-aos="fade-up" data-aos-delay="0">
      <h2 className="flex items-center gap-2 text-3xl font-bold leading-snug text-white">
        <BiHash size={32} color="#757575" />
        Technologies I use
      </h2>

      <p className="text-base leading-relaxed text-white/60">
        I've worked with a range of technologies over the years. The following
        are some of the technologies I've worked with:
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {techList.map((tech) => (
          <TechPill
            key={tech.iconName}
            iconName={tech.iconName}
            label={tech.label}
          />
        ))}
      </div>
    </section>
  );
}

export default Stack;
