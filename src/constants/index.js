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
    name: 'Carreira Pra TI',
    description: `The app to help you to choose a career in TI`,
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
    repo: 'https://github.com/IgorDouradoBR',
    demo: 'carreiraprati/index.html',
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
    repo: 'https://github.com/IgorDouradoBR',
    demo: 'herbaria/index.html',
  },
  {
    id: 'project-3',
    name: 'Auway',
    description: 'Auway help you and your dog to get a health and fun life together',
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
    repo: 'https://github.com/IgorDouradoBR',
    demo: 'https://auway.com.br/',
  },
  {
    id: 'project-4',
    name: 'GastroNordeste',
    description:
     `27 Recipes from nordeste adapted for each part of the world and person`,
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
    image: komikult,
    repo: 'https://github.com/IgorDouradoBR',
    demo: 'https://apps.apple.com/br/app/gastronordeste/id6463458523',
  },
  {
    id: 'project-5',
    name: 'Ice Fall',
    description:
      'Make Pingo survive on the ice and avoid the shark as much as possible.',
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
    repo: 'https://github.com/IgorDouradoBR',
    demo: 'https://apps.apple.com/br/app/ice-fall-the-cold-game/id6476595916',
  },
];

export { services, technologies, experiences, projects };
