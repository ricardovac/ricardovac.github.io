type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ricardoviicius@gmail.com",
  title: "Olá, me chamo Ricardo 👋",
  // profile: "/profile.webp",
  description:
    "sou um estudante de *Ciência da Computação* apaixonado por tecnologia. Atualmente eu estou trabalhando em aprimorar meus conhecimentos em *Fullstack Developing*.",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/ricardovaclemente",
    },
    {
      label: "Github",
      link: "https://github.com/ricardovac",
    },
  ],
};

export default presentation;
