import { Tech } from "./tech";

type Project = {
  featured: boolean;
  title: string;
  dateRange: string;
  description: string;
  image: string;
  stack: Tech[];
  currentlyWorkingOn?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export type { Project };
