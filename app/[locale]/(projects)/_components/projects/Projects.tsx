"use client";

import type { IProject } from "@/shared/interfaces";
import { useState } from "react";
import NextImage from "next/image";
import { technologies, techFilter } from "@/shared/data";
// Components & Styles
import styles from "./Projects.module.css";
import ProjectCard from "../cards/ProjectCard";
import { PressButton } from "@/shared/components";

interface Props {
  projects: IProject[];
}

function Projects({ projects }: Props): JSX.Element {
  const [tech, setTech] = useState("all");

  const onSelectTech = (tech: string) => {
    setTech(tech);
  };

  const projectsFiltered =
    tech === "all" ? projects : projects.filter((proj) => proj.tags.includes(tech.toUpperCase()));

  return (
    <div className={styles["project-container"]}>
      <div className={styles["projects-techs"]}>
        <PressButton
          bgColor="var(--bg-icon)"
          baseColor="var(--border-card)"
          onClick={() => onSelectTech("all")}
        >
          All
        </PressButton>
        {Object.entries(techFilter).map(([key, icon], i) => (
          <PressButton
            key={i}
            baseColor="var(--border-card)"
            bgColor="var(--bg-icon)"
            onClick={() => onSelectTech(key)}
          >
            <NextImage src={icon} alt="icon" width={35} height={35} />
          </PressButton>
        ))}
      </div>
      <ul className={styles["projects-list"]}>
        {projectsFiltered.map((project) => {
          const techIcons = project.tags.map((tag) => technologies[tag.toLowerCase()]);
          return <ProjectCard key={project.id} project={project} techIcons={techIcons} />;
        })}
      </ul>
    </div>
  );
}
export default Projects;
