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
        <div className={styles["certificate-card__decorator"]} />
        <p className={styles["certificate-card__tag"]}>{headerTitle}</p>
        <Title text={title} size="medium" />
        <div style={{ flex: 1 }}></div>
        <CustomText text={subtitle} textStyles={{ fontSize: "1.2rem" }} />
      </article>
      <a className={styles["certificate-link"]} href={link} target="_blank" aria-label={title}>
        {t("certificate")}
      </a>
    </li>
  );
}
export default CertificateCard;
