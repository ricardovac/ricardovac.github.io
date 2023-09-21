export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Consultória de RH",
    techs: ["NextJS", "Prisma", "tRPC", "TailwindCSS", "AWS S3"],
    link: "https://hrminds.com.br",
  },
  {
    title: "Loja virtual",
    techs: ["React", "TypeScript", "Java (Spring Boot)", "MYSQL"],
    link: "https://github.com/ricardovac/loja-virtual",
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
