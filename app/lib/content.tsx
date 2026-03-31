import { BiEnvelope, BiLogoGithub, BiShareAlt } from "react-icons/bi";
import {
  SiDiscord,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";

import { ExperienceEntry } from "../types/experience-entry";
import { FavoriteSong } from "../types/favorite-song";
import { NavItem } from "../types/navitem";
import { Project } from "../types/project";
import { Tech } from "../types/tech";

// Identity

export const identity = {
  name: "Timothy",
  fullName: "Timothy Shevchenko",
  role: "Full-stack Developer",
  birthDate: "2009-01-30",
  location: "Gdańsk, Poland",
  availability: "Open to remote & local collaboration",
  email: "tshvchnko@gmail.com",
};

// Socials
export const socials = [
  {
    label: "GitHub",
    handle: "@qtbitt",
    href: "https://github.com/qtbitt",
    icon: SiGithub,
    color: "hover:border-white/20 hover:bg-white/6",
    accent: "text-white/60",
  },
  {
    label: "Discord",
    handle: "@_qtbit",
    copyToClipboard: true,
    icon: SiDiscord,
    iconColor: "#5865F2",
    color: "hover:border-indigo-400/30 hover:bg-indigo-500/8",
    accent: "text-indigo-400",
  },
  {
    label: "Twitter / X",
    handle: "@qtbit",
    href: "https://x.com/qtbit",
    icon: SiX,
    color: "hover:border-white/20 hover:bg-white/6",
    accent: "text-white/60",
  },
  {
    label: "Instagram",
    handle: "@tymekk_so_",
    href: "https://instagram.com/tymekk_so_",
    icon: SiInstagram,
    iconColor: "#E1306C",
    color: "hover:border-pink-400/30 hover:bg-pink-500/8",
    accent: "text-pink-400",
  },
  {
    label: "Email",
    handle: identity.email,
    href: `mailto:${identity.email}`,
    icon: SiGmail,
    iconColor: "#EA4335",
    color: "hover:border-red-400/30 hover:bg-red-500/8",
    accent: "text-red-400",
  },
];

// Nav
export const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "My work", href: "#my-work" },
  {
    label: "More",
    dropdown: [
      {
        icon: <BiLogoGithub size={18} />,
        label: "My Github Profile",
        shortLabel: "GitHub",
        desc: "Explore my projects and contributions.",
        href: "https://github.com/qtbitt",
      },
      {
        icon: <BiShareAlt size={18} />,
        label: "My Socials",
        shortLabel: "Socials",
        desc: "Find me across the web.",
        href: "#contact",
      },
      {
        icon: <BiEnvelope size={18} />,
        label: "Contact Me",
        shortLabel: "Contact",
        desc: "Have any questions? Reach out.",
        href: "#contact",
      },
    ],
  },
];

// Stack

export const stack = [
  // Frontend
  { iconName: "SiHtml5", label: "HTML", category: "frontend" },
  { iconName: "SiCss", label: "CSS", category: "frontend" },
  { iconName: "SiJavascript", label: "JavaScript", category: "frontend" },
  { iconName: "SiTypescript", label: "TypeScript", category: "frontend" },
  { iconName: "SiTailwindcss", label: "Tailwind CSS", category: "frontend" },
  { iconName: "SiReact", label: "React", category: "frontend" },
  { iconName: "SiNextdotjs", label: "Next.js", category: "frontend" },
  { iconName: "SiAngular", label: "Angular", category: "frontend" },
  { iconName: "SiFigma", label: "Figma", category: "design" },

  // Backend
  { iconName: "SiNodedotjs", label: "Node.js", category: "backend" },
  { iconName: "SiExpress", label: "Express.js", category: "backend" },
  { iconName: "SiSharp", label: "C#", category: "backend" },

  // Database
  { iconName: "SiMysql", label: "MySQL", category: "database" },
  { iconName: "SiMongodb", label: "MongoDB", category: "database" },

  // Tools
  { iconName: "SiGit", label: "Git", category: "tools" },
  { iconName: "SiNpm", label: "NPM", category: "tools" },
  { iconName: "SiEslint", label: "ESLint", category: "tools" },
  { iconName: "SiVercel", label: "Vercel", category: "tools" },

  // Game dev
  { iconName: "SiUnity", label: "Unity", category: "gamedev" },
  { iconName: "SiGodotengine", label: "Godot", category: "gamedev" },
];

// Experience
export const experience: ExperienceEntry[] = [
  {
    company: "Dynatrace",
    logo: "/dynatrace-logo.png",
    role: "Software Engineer Intern",
    type: "Internship",
    dateRange: "May 2026 - June 2026",
    location: "Gdańsk, Poland",
    description:
      "Worked on the Dynatrace SaaS platform, contributing to the development of new features and performance optimizations.",
    stack: [
      { iconName: "SiTypescript", label: "TypeScript" },
      { iconName: "SiGo", label: "Go" },
    ],
    url: "https://dynatrace.com",
  },
  {
    company: "Sii",
    logo: "/sii-logo.png",
    role: "Frontend Developer Intern",
    type: "Internship",
    dateRange: "May 2025 - June 2025",
    location: "Gdańsk, Poland",
    description:
      "Built a full-stack web application for hosting definitions of internet slang and memes.",
    stack: [
      { iconName: "SiReact", label: "React" },
      { iconName: "SiNodedotjs", label: "Node.js" },
      { iconName: "SiExpress", label: "Express.js" },
      { iconName: "SiFigma", label: "Figma" },
    ],
    url: "https://sii.pl",
  },
];

// Projects
export const projects: Project[] = [
  {
    featured: true,
    title: "LineLabs",
    dateRange: "February 2026 - Present",
    description:
      "A platform that makes learning and using in-game lineups for competitive play easy. Right now it's focused on Valorant, but more games are coming soon.",
    image: "/linelabs-preview.png",
    stack: [
      { iconName: "SiNextdotjs", label: "Next.js" },
      { iconName: "SiReact", label: "React" },
      { iconName: "SiTailwindcss", label: "Tailwind CSS" },
      { iconName: "SiSupabase", label: "Supabase" },
    ],
    currentlyWorkingOn: true,
    liveUrl: "https://linelabs.com",
  },
  {
    featured: true,
    title: "Techniplayer",
    dateRange: "June 2025 - Present",
    description:
      "Started as a simple school project, it grew into a daily-used music player app. I built the frontend, while my friend made the backend. Songs use YouTube embeds for playback.",
    image: "/techniplayer-preview.png",
    stack: [
      { iconName: "SiHtml5", label: "HTML" },
      { iconName: "SiCss", label: "CSS" },
      { iconName: "SiPhp", label: "PHP" },
      { iconName: "SiMysql", label: "MySQL" },
    ],
    liveUrl: "https://adegdansk.pl/winrar/techni",
  },
];

// Stack
export const techList: Tech[] = [
  // Frontend
  { iconName: "SiHtml5", label: "HTML", type: "frontend" },
  { iconName: "SiCss", label: "CSS", type: "frontend" },
  { iconName: "SiJavascript", label: "JavaScript", type: "frontend" },
  { iconName: "SiTypescript", label: "TypeScript", type: "frontend" },
  { iconName: "SiTailwindcss", label: "Tailwind CSS", type: "frontend" },
  { iconName: "SiBootstrap", label: "Bootstrap", type: "frontend" },
  { iconName: "SiReact", label: "React", type: "frontend" },
  { iconName: "SiNextdotjs", label: "Next.js", type: "frontend" },
  { iconName: "SiAngular", label: "Angular", type: "frontend" },

  // Backend
  { iconName: "SiNodedotjs", label: "Node.js", type: "backend" },
  { iconName: "SiExpress", label: "Express.js", type: "backend" },
  { iconName: "SiPhp", label: "PHP", type: "backend" },
  { iconName: "SiDotnet", label: ".NET", type: "backend" },
  { iconName: "SiFirebase", label: "Firebase", type: "backend" },
  { iconName: "SiSupabase", label: "Supabase", type: "backend" },

  // Databases
  { iconName: "SiMysql", label: "MySQL", type: "database" },
  { iconName: "SiMongodb", label: "MongoDB", type: "database" },

  // Tooling
  { iconName: "SiNpm", label: "NPM", type: "tooling" },
  { iconName: "SiEslint", label: "ESLint", type: "tooling" },
  { iconName: "SiGit", label: "Git", type: "tooling" },

  // Design
  { iconName: "SiFigma", label: "Figma", type: "design" },

  // Languages
  { iconName: "SiSharp", label: "C#", type: "language" },
  { iconName: "SiPython", label: "Python", type: "language" },
  { iconName: "SiLua", label: "Lua", type: "language" },

  // Game Dev
  { iconName: "SiUnity", label: "Unity", type: "game-dev" },
  { iconName: "SiGodotengine", label: "Godot", type: "game-dev" },

  // Deployment / Hosting
  { iconName: "SiVercel", label: "Vercel", type: "deployment" },
];

export const favoriteSong: FavoriteSong = {
  title: "astrid",
  artist: "glaive",
  href: "https://open.spotify.com/track/3SpRtNO7GKWaFyWydXArvn?si=73e630824e0b4772",
  cover:
    "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b2730a994d905b3983b535de6149",
  gradient: "from-emerald-300/18 via-teal-400/14 to-sky-500/18",
};
