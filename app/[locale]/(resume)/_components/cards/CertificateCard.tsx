"use client";

import { CustomText, Title } from "@/shared/components";
import styles from "./Cards.module.css";
import { useTranslations } from "next-intl";

interface Props {
  headerTitle: string;
  title: string;
  subtitle: string;
  link: string;
}

function CertificateCard({ headerTitle, title, subtitle, link }: Props): JSX.Element {
  const t = useTranslations("resume");

  return (
    <li className={styles["certificate-card-container"]}>
      <article className={styles["certificate-card"]}>
        <div>
          <CustomText text={headerTitle} textStyles={{ fontSize: "1.3rem", fontWeight: "bold" }} />
          <Title text={title} size="medium" />
        </div>
        <div style={{ flex: 1 }}></div>
        <div className={styles["certificate-card__subtitle"]}>
          <div className={styles["certificate-card__dot"]} />
          <CustomText text={subtitle} textStyles={{ fontSize: "1.2rem" }} />
        </div>
      </article>
      <article className={styles["certificate-hover"]}>
        <a href={link} target="_blank" aria-label={title}>
          {t("certificate")}
        </a>
      </article>
    </li>
  );
}
export default CertificateCard;
