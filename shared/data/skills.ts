import type { ISkill } from "../interfaces";

export const skills: ISkill[] = [
  { name: "HTML", pathIcon: "/icons/html.svg" },
  { name: "CSS", pathIcon: "/icons/css.svg" },
  { name: "Javascript", pathIcon: "/icons/javascript.svg" },
  { name: "Typescript", pathIcon: "/icons/typescript.svg" },
  { name: "React", pathIcon: "/icons/react.svg" },
  { name: "React Native", pathIcon: "/icons/react native.svg" },
  { name: "Angular", pathIcon: "/icons/angular.svg" },
  { name: "Git", pathIcon: "/icons/git.svg" },
  { name: "NextJS", pathIcon: "/icons/nextjs.svg" },
  { name: "NestJS", pathIcon: "/icons/nestjs.svg" },
];

export const technologies: Record<string, string> = {
  html: "/icons/html.svg",
  css: "/icons/css.svg",
  javascript: "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  react: "/icons/react.svg",
  ["react native"]: "/icons/react native.svg",
  angular: "/icons/angular.svg",
  git: "/icons/git.svg",
  astro: "/icons/astrojs.svg",
  nextjs: "/icons/nextjs.svg",
  nestjs: "/icons/nestjs.svg",
};

export const techFilter: Record<string, string> = {
  html: "/icons/html.svg",
  css: "/icons/css.svg",
  javascript: "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  react: "/icons/react.svg",
  angular: "/icons/angular.svg",
  nextjs: "/icons/nextjs.svg",
};
