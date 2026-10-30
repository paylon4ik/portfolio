export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  role: string;
  team: string;
  duration: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Rethinking onboarding for a fintech platform',
    client: 'Client Name',
    year: '2025',
    summary: 'Placeholder summary describing the problem and the outcome in one sentence.',
    role: 'Lead Product Designer',
    team: '2 designers, 6 engineers, 1 PM',
    duration: '6 months',
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'A design system for a multi-product suite',
    client: 'Client Name',
    year: '2024',
    summary: 'Placeholder summary describing the problem and the outcome in one sentence.',
    role: 'Design Systems Lead',
    team: '3 designers, 4 engineers',
    duration: '9 months',
    featured: true,
  },
  {
    slug: 'project-three',
    title: 'Simplifying scheduling for healthcare teams',
    client: 'Client Name',
    year: '2023',
    summary: 'Placeholder summary describing the problem and the outcome in one sentence.',
    role: 'Senior Product Designer',
    team: '1 designer, 5 engineers, 1 PM',
    duration: '4 months',
    featured: false,
  },
  {
    slug: 'project-four',
    title: 'Data dashboards for operations managers',
    client: 'Client Name',
    year: '2022',
    summary: 'Placeholder summary describing the problem and the outcome in one sentence.',
    role: 'Senior Product Designer',
    team: '2 designers, 7 engineers',
    duration: '5 months',
    featured: false,
  },
];
