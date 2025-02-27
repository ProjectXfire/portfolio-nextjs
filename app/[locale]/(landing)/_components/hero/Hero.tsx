"use client";

import { useTranslations } from "next-intl";
// Components & styles
import styles from "./Hero.module.css";
import { IconsAnimation, Social } from "..";
import { TextAnimated, TextTyped } from "@/shared/components";

function Hero(): JSX.Element {
  const t = useTranslations("landing");

  return (
    <section className={styles["hero-container"]}>
      <div className={styles["hero-info"]}>
        <div className={styles["hero-info__title"]}>
          <h2>{t("title")}</h2>
          <Social />
        </div>
        <TextTyped text={`${t("subtitle")} Gabriel`} />
        <p className={styles["hero-info__description"]}>{t("text")}</p>
      </div>
      <div className={styles["hero-avatar"]}>
        <IconsAnimation />
      </div>
    </section>
  );
}
export default Hero;

// Hello I&apos;m
