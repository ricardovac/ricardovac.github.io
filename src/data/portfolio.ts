export type Stat = { value: string; label: string };

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  period: string;
  featured: boolean;
  highlights: string[];
  tech: string[];
  link?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
  highlight?: boolean;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

export type Portfolio = {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  location: string;
  available: boolean;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  summary: string;
  roleStrings: string[];
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education;
  languages: string[];
};

const portfolio: Portfolio = {
  name: "Ricardo Vinicius Amaral Clemente",
  firstName: "Ricardo",
  lastName: "Clemente",
  role: "Full Stack Software Engineer",
  tagline: "AI-first engineering · TypeScript · Go",
  location: "São Paulo, Brasil",
  available: true,
  email: "ricardoviicius@gmail.com",
  phone: "(11) 99399-1207",
  github: "ricardovac",
  linkedin: "ricardovaclemente",
  website: "ricardovac.github.io",
  summary:
    "Engenheiro Full Stack com 4 anos de experiência em TypeScript e Go. Especialista em fluxos de desenvolvimento assistido por IA — agents customizados, code review automatizado e workflows de entrega 40% mais rápida. Histórico sólido em startups e consultoria.",
  roleStrings: [
    "Full Stack Software Engineer",
    "AI-first Developer",
    "TypeScript & Go Specialist",
    "Engenheiro Fundador",
  ],
  stats: [
    { value: "4+", label: "Anos exp." },
    { value: "40%", label: "Entrega mais rápida" },
    { value: "60%", label: "Onboarding reduzido" },
    { value: "50%", label: "Performance web" },
  ],
  experience: [
    {
      id: "solutis",
      company: "Solutis Tecnologias",
      role: "Desenvolvedor de Software",
      period: "Set 2024 – presente",
      type: "Consultoria",
      highlights: [
        "Desenvolvimento de sistemas web em Vue.js e Laravel, com APIs REST, autenticação, bancos relacionais e Clean Architecture.",
        "Refatoração de módulos legados em Java/Spring e migração incremental de telas Angular, reduzindo tempo de manutenção em ~30% via padronização e ampliação de testes.",
      ],
      tech: ["Vue.js", "Laravel", "Java", "Spring", "Angular", "REST", "Docker", "Git"],
    },
    {
      id: "versary",
      company: "Versary",
      role: "Engenheiro Fundador",
      period: "Jun 2025 – presente",
      type: "Startup",
      highlights: [
        "Definição da arquitetura monorepo em Vue 3 (Vite), Nuxt 3, Go (gqlgen) e Bun, com integração frontend-backend via GraphQL e HTTP APIs.",
        "Padronização do stack de UI (Tailwind CSS, vee-validate + zod) e tooling de build/deploy com Docker, reduzindo onboarding em ~60%.",
        "Fluxo de desenvolvimento assistido por IA com agents especializados por camada (backend e frontend) e slash commands cobrindo o ciclo completo da task — redução de ~40% no tempo de entrega.",
      ],
      tech: ["Vue 3", "Nuxt 3", "Go", "gqlgen", "GraphQL", "Tailwind CSS", "Docker", "Bun"],
    },
    {
      id: "hrminds",
      company: "HRMinds",
      role: "Desenvolvedor Freelancer",
      period: "Jun 2024 – Set 2025",
      type: "Freelance",
      highlights: [
        "Landing page institucional em Next.js com Prisma, Tailwind CSS e estratégias de SSR/SSG, reduzindo carregamento em ~50% e melhorando indicadores de SEO.",
        "Pipelines de CI/CD com deploy automatizado na Vercel, encurtando ciclo de publicação de dias para minutos.",
      ],
      tech: ["Next.js", "Prisma", "Tailwind CSS", "Vercel", "SSR/SSG", "CI/CD"],
    },
  ],
  projects: [
    {
      id: "lane",
      name: "Lane",
      subtitle: "Issue Tracker",
      description:
        "Issue tracker minimalista inspirado no Linear. UX keyboard-first, colaboração em tempo real e visualizações customizáveis por time.",
      period: "Ago 2025 – Jan 2026",
      featured: true,
      highlights: [
        "Backend NestJS com Prisma + PostgreSQL, JWT auth com refresh tokens e WebSocket gateway para colaboração em tempo real.",
        "Frontend React + TypeScript com TanStack Query, shadcn/ui — command palette (Cmd+K), updates otimistas e drag-and-drop.",
        "Auditoria completa de mudanças por issue, views salvas com filtros compostos e API pública versionada com documentação OpenAPI.",
      ],
      tech: [
        "NestJS",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
        "TanStack Query",
        "shadcn/ui",
        "OpenAPI",
      ],
    },
    {
      id: "trello-clone",
      name: "Trello Clone",
      subtitle: "Board App",
      description:
        "Clone do Trello em Next.js, TypeScript e Drizzle ORM. Boards, listas, cartões e colaboração via WebSockets — laboratório de state management distribuído.",
      period: "Nov 2023 – Mar 2024",
      featured: false,
      highlights: [
        "State management distribuído com WebSockets em tempo real.",
        "Next.js App Router com TypeScript e Drizzle ORM para persistência.",
      ],
      tech: ["Next.js", "TypeScript", "Drizzle ORM", "WebSockets"],
    },
  ],
  skills: [
    { category: "Linguagens", items: ["TypeScript", "Go", "Java", "SQL"] },
    {
      category: "Backend",
      items: [
        "NestJS",
        "Node.js",
        "gqlgen",
        "Spring",
        "GraphQL",
        "REST",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Vue 3",
        "Nuxt",
        "TanStack Query",
        "Tailwind CSS",
        "shadcn/ui",
        "vee-validate + zod",
      ],
    },
    {
      category: "IA & Dev Assistido",
      highlight: true,
      items: [
        "Claude Code",
        "Agents customizados",
        "Slash commands",
        "Code review automatizado",
        "MCP",
        "LLMs (Anthropic, OpenAI)",
      ],
    },
    {
      category: "DevOps & Ferramentas",
      items: ["Docker", "Bun", "Vite", "Git", "GitHub Actions", "Vercel", "Monorepos"],
    },
  ],
  education: {
    institution: "Universidade Cruzeiro do Sul",
    degree: "Bacharelado em Ciência da Computação",
    period: "Jan 2022 – Dez 2025",
    location: "São Paulo, SP",
  },
  languages: ["Inglês — avançado", "Português — nativo"],
};

export default portfolio;
