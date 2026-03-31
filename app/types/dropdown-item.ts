import { ReactNode } from "react";

type DropdownItem = {
  icon: ReactNode;
  label: string;
  shortLabel?: string;
  desc: string;
  href: string;
};

export type { DropdownItem };
