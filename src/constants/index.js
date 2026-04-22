import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  aprix,
  claro,
  kelhel,
  abc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile \n Software Engineer",
    icon: backend,
  },
  {
    title: "Native & Cross-Platform Developer",
    icon: frontend,
  },
  {
    title: " Mobile \n Architecture Patterns",
    icon: ux,
  },
  {
    title: "CI/CD & App \n Deployment",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "iOS",
    icon: css,
  },
  {
    name: "Android",
    icon: html,
  },
  {
    name: "Swift",
    icon: docker,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Kotlin",
    icon: rubyrails,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: typescript,
  },
  {
    name: "SwiftUI/UIKit",
    icon: postgresql,
  },
  {
    name: "Flutter",
    icon: nodejs,
  },
  {
    name: "Dart",
    icon: redux,
  },
  {
    name: "Python",
    icon: graphql,
  },
  {
    name: "MySQL",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Mobile Software Engineer II",
    company_name: "ABC Bank via CWI Software",
    icon: abc,
    iconBg: "#FFFFFF",
    date: "Apr 2025 - PRESENT",
  },
  {
    title: "Awarded Mobile Engineer II & Technical Mentor",
    company_name: "Claro",
    icon: claro,
    iconBg: "#FFFFFF",
    date: "Jan 2025 - May 2026",
  },
  {
    title: "Mobile Software Engineer II",
    company_name: "EuroChem and Vibra Energy via Aprix",
    icon: aprix,
    iconBg: "#FFFFFF",
    date: "Nov 2024 - Apr 2025",
  },
  {
    title: "Mobile Software Engineer I",
    company_name: "Apple Developer",
    icon: kelhel,
    iconBg: "#FFFFFF",
    date: "Nov 2022 - Nov 2024",
  },
  {
    title: "Mobile Software Engineer I",
    company_name: "EPJEL",
    icon: dcc,
    iconBg: "#FFFFFF",
    date: "Nov 2021 - Aug 2022",
  },
  {
    title: "Software Engineer Intern",
    company_name: "PUCRS",
    icon: coverhunt,
    iconBg: "#FFFFFF",
    date: "Oct 2020 - Sep 2021",
  },
];

const projects = [
  {
    id: "project-1",
    name: "SAF Herbaria",
    description:
      "Award-winning AgTech pitched in Silicon Valley for data-driven farming.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/IgorDouradoBR",
    demo: "herbaria/index.html",
  },
  {
    id: "project-2",
    name: "Vibra Energy",
    description:
      "B2B & B2C app for Brazil's largest fuel distributor handling real-time pricing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/IgorDouradoBR",
    demo: "https://apps.apple.com/br/app/ice-fall-the-cold-game/id6476595916",
  },
  {
    id: "project-3",
    name: "ABC Bank",
    description: `International Arab bank app for secure investments and transactions.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/IgorDouradoBR",
    demo: "carreiraprati/index.html",
  },
  {
    id: "project-4",
    name: "EuroChem",
    description: `Global agrochemical platform for dynamic pricing and product catalogs`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/IgorDouradoBR",
    demo: "https://apps.apple.com/br/app/gastronordeste/id6463458523",
  },
  {
    id: "project-5",
    name: "Auway",
    description:
      "Auway help you and your dog to get a health and fun life walking together",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/IgorDouradoBR",
    demo: "https://auway.com.br/",
  },
];

export { services, technologies, experiences, projects };
