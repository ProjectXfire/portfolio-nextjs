"use client";

import type { IProject } from "@/shared/interfaces";
import { MouseEvent, useRef, useState, TouchEvent } from "react";
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
  const moveElement = useRef<HTMLDivElement | null>(null);
  const initMoveValue = useRef(0);
  const [leftMove, setLeftMove] = useState(0);

  const handleOpenDoor = (e: MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    initMoveValue.current = e.clientX;
    document.addEventListener("mousemove", moveDoor);
    document.addEventListener("mouseup", dropDoor);
  };

  const handleOpenDoorMobile = (e: TouchEvent<HTMLButtonElement>) => {
    initMoveValue.current = e.touches[0].clientX;
    document.addEventListener("touchmove", moveDoorMobile);
    document.addEventListener("touchend", dropDoor);
  };

  const moveDoorMobile = (e: globalThis.TouchEvent) => {
    const door = moveElement.current;
    if (!door) return;
    const position = (initMoveValue.current - e.touches[0].clientX) * 2;
    const value = Math.min(110, Math.max(0, position));
    door.style.setProperty("left", `-${value}px`);
  };

  const moveDoor = (e: globalThis.MouseEvent) => {
    const door = moveElement.current;
    if (!door) return;
    const position = (initMoveValue.current - e.clientX) * 2;
    const value = Math.min(110, Math.max(0, position));
    door.style.setProperty("left", `-${value}px`);
  };

  const dropDoor = () => {
    document.removeEventListener("mousemove", moveDoor);
    document.removeEventListener("mouseup", dropDoor);

    document.removeEventListener("touchmove", moveDoorMobile);
    document.removeEventListener("touchend", dropDoor);
  };

  return (
    <article className={styles.card}>
      <div ref={moveElement} className={styles.card__content}>
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
        <button
          type="button"
          name="door"
          className={styles.card__handle}
          onMouseDown={handleOpenDoor}
          onTouchStart={handleOpenDoorMobile}
        >
          <NextImage src="/icons/handle.png" alt="handle" width={40} height={40} />
        </button>
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
