import * as Icons from "@icons-pack/react-simple-icons";

import { Tech } from "@/app/types/tech";

export default function TechPill({ iconName, label }: Tech) {
  const Icon = (Icons as any)[iconName];

  return (
    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-xs font-medium text-white/60 whitespace-nowrap">
      <span className="shrink-0">
        {Icon ? <Icon size={12} color="default" /> : null}
      </span>
      {label}
    </span>
  );
}
