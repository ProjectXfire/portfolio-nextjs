"use client";

import type { IProject } from "@/shared/interfaces";
import NextImage from "next/image";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import styles from "./Cards.module.css";
import { Braces, MoveUpRight } from "lucide-react";

interface Props {
  project: IProject;
  techIcons: string[];
}

function ProjectCard({ project, techIcons }: Props): JSX.Element {
  const t = useTranslations("projects");

  return (
    <article className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__image}>
          <NextImage
            className={styles["card-image"]}
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles["card-background"]} />
          <svg className={styles.card__title}>
            <defs>
              <path id="curvedPath" d="M 80,80 A 150,100 0 0,0 250,50" />
            </defs>
            <text
              style={{ position: "absolute", right: 0 }}
              fill="var(--text-color)"
              fontSize="24"
              fontFamily="inherit"
            >
              <textPath href="#curvedPath">{project.name}</textPath>
            </text>
          </svg>
        </div>
        <div className={styles.card__tags}>
          {techIcons.map((image, i) => (
            <NextImage
              className={styles["card-tag"]}
              key={i}
              src={image}
              width={30}
              height={30}
              alt="tag"
            />
          ))}
        </div>
      </div>
      <div className={styles.card__background}>
        <div className={styles["card-link"]}>
          <Braces size={15} />
          <NextLink href={project.demo} type="button" target="_blank">
            {t("demo")}
          </NextLink>
        </div>
        <div className={styles["card-link"]}>
          <MoveUpRight size={15} />
          <NextLink href={project.code} type="button" target="_blank">
            {t("code")}
          </NextLink>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
