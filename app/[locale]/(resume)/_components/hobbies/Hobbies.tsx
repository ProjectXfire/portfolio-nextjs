"use client";

import NextImage from "next/image";
import { useTranslations } from "next-intl";
// Components & Styles
import styles from "./Hobbies.module.css";
import { Title } from "@/shared/components";

function Hobbies(): JSX.Element {
  const t = useTranslations("resume");

  return (
    <>
      <Title text={t("hobbie_title")} size="medium" />
      <div className={styles.hobbies}>
        <div className={styles["hobbie-card"]}>
          <p className={styles["hobbie-card__text"]}>{t("hobbie_1")}</p>
          <NextImage
            className={styles["hobbie-card__icon"]}
            width={50}
            height={50}
            src="/icons/game.png"
            alt="game"
          />
          <div className={styles["hobbie-card__image"]}>
            <NextImage
              fill
              src="/images/hobbie_1.jpg"
              alt="hobbie"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className={styles["hobbie-card"]}>
          <p className={styles["hobbie-card__text"]}>{t("hobbie_2")}</p>
          <NextImage
            className={styles["hobbie-card__icon"]}
            width={50}
            height={50}
            src="/icons/guitar.png"
            alt="game"
          />
          <div className={styles["hobbie-card__image"]}>
            <NextImage
              fill
              src="/images/hobbie_2.jpg"
              alt="hobbie"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hobbies;
