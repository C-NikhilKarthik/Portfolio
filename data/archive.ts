export interface archiveType {
  project: string;
  tech: string[];
  year: string;
  Link?: string;
  GitHubLink?: string;
}

export const Archives: archiveType[] = [
  {
    project: "IIIT Dharwad",
    tech: ["Next.js", "Tailwind CSS", "Shadcn/UI", "Figma"],
    year: "2024",
    Link: "https://iiitdwd.ac.in/",
  },
  {
    project: "Landing Page",
    tech: ["Next.js", "TailwindCSS", "GSAP", "Framer Motion", "Figma"],
    year: "2024",
    Link: "https://landingpage-portfoliov1.netlify.app/",
  },
  {
    project: "SnapMark",
    tech: ["React Native", "Python", "ML", "TensorFlow", "Figma"],
    year: "2024",
    GitHubLink: "https://github.com/C-NikhilKarthik/MiniProject-6thSem",
  },
  {
    project: "RecapAI",
    tech: ["Next.js", "Redux", "PostgreSQL", "Tailwind CSS", "ML", "Python"],
    year: "2023",
    Link: "https://devpostxdocker.netlify.app/",
    GitHubLink: "https://github.com/C-NikhilKarthik/RecapAI",
  },
  {
    project: "BlogPenn",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "ML", "Figma"],
    year: "2023",
    GitHubLink: "https://github.com/C-NikhilKarthik/CS-301-Project",
  },
  {
    project: "E-Cell Website",
    tech: ["Next.js", "TailwindCSS", "Figma"],
    year: "2023",
    Link: "https://velocity-ecell.netlify.app/",
  },
  {
    project: "Physics Research Paper",
    tech: ["Python", "Numpy", "LaTeX", "Physics"],
    year: "2022",
    GitHubLink: "https://github.com/zaidragib1/P4it-Research-paper1",
  },
  {
    project: "Outpass and Complaints Automation System",
    tech: ["HTML", "CSS", "JS", "MySQL"],
    year: "2022",
    GitHubLink: "https://github.com/C-NikhilKarthik/Outpass-and-Complaints",
  },
];
