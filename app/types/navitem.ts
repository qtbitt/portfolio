import { DropdownItem } from "./dropdown-item";

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

export type { NavItem };
