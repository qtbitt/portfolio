import { Tech } from "./tech";

type ExperienceEntry = {
  company: string;
  logo: string;
  role: string;
  type: string;
  dateRange: string;
  location: string;
  description: string;
  stack?: Tech[];
  url?: string;
};

export type { ExperienceEntry };
