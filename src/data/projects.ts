export type Project = {
  title: string;
  techs: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Consultória de RH",
    techs: ["NextJS", "Prisma", "tRPC", "TailwindCSS", "AWS S3"],
    link: "https://hrminds.com.br",
  },
  {
    title: "Loja virtual",
    techs: ["React", "TypeScript", "Spring Boot", "MYSQL"],
    link: "https://github.com/ricardovac/loja-virtual",
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "https://github.com/ricardovac/ricardovac.github.io",
  },
];

export default projects;
