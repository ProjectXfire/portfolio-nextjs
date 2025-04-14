"use client";

import { useTranslations } from "next-intl";
import { resumeRoutes } from "@/shared/constants";
// Components & styles
import styles from "./InfoCategories.module.css";
import { InfoLink, ResumeBlock } from "..";
import { Title } from "@/shared/components";

function InfoCategories(): React.ReactElement {
  const t = useTranslations("resume");

  return (
    <ResumeBlock>
      <Title text={t("main title")} size="large" />
      <p className={styles["info-categories-text"]}>{t("main text")}</p>
      <ul className={styles["info-categories-links"]}>
        {resumeRoutes.map((route) => (
          <InfoLink key={route.name} name={t(route.name)} url={route.path} />
        ))}
      </ul>
    </ResumeBlock>
  );
}
export default InfoCategories;
