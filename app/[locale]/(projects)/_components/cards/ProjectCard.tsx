"use client";

import type { IProject } from "@/shared/interfaces";
import NextImage from "next/image";
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
      <NextImage
        className={styles["card-image"]}
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className={styles["card-name"]}>{project.name}</p>
      <div className={styles["card-icons-tech"]}>
        {techIcons.map((iTech, i) => (
          <NextImage key={i} src={iTech} alt="icon-tech" width={40} height={40} />
        ))}
      </div>
      <div className={styles["card-hover"]}>
        <p className={styles["card-hover-description"]}>{project.description}</p>
        <div className={styles["card-hover-actions"]}>
          <a href={project.demo} target="_blank">
            <MoveUpRight size={15} /> {t("demo")}
          </a>
          <a href={project.code} target="_blank">
            <Braces size={15} /> {t("code")}
          </a>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
