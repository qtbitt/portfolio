type TechType =
  | "frontend"
  | "backend"
  | "database"
  | "tooling"
  | "design"
  | "game-dev"
  | "deployment"
  | "language";

interface Tech {
  iconName: string;
  label: string;
  type?: TechType;
}

export type { TechType, Tech };
