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
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mobile & iOS Developer',
    icon: backend,
  },
  {
    title: 'Backend & Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Web Development & UI/UX Design',
    icon: ux,
  },
  {
    title: 'Machine Learning & Artificial Intelligence',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Swift',
    icon: docker,
  },
  {
    name: 'Java',
    icon: typescript,
  },
  {
    name: 'Python',
    icon: graphql,
  },
  {
    name: 'C',
    icon: rubyrails,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Dart',
    icon: redux,
  },
  {
    name: 'MySQL',
    icon: tailwind,
  },
  {
    name: 'SwiftUI/UIKit',
    icon: postgresql,
  },
  {
    name: 'Flutter',
    icon: nodejs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'TI Intern & Research',
    company_name: 'PUCRS',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2021 - Nov 2022',
  },
  {
    title: 'Mobile & iOS Developer',
    company_name: 'Apple Developer Academy',
    icon: microverse,
    iconBg: '#333333',
    date: 'Fev 2023 - Dec 2024',
  },
  {
    title: 'Software Engineer, Mobile & Web Full Stack Developer',
    company_name: 'EPJEL',
    icon: dcc,
    iconBg: '#333333',
    date: 'Dec 2023 - Nov 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Herbaria',
    description:
      'An app to identify plants, view details, catalog them, and get care reminders.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'html5up-solid-state/index.html',
  },
  {
    id: 'project-3',
    name: 'Auway',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Carreira Pra TI',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
