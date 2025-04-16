"use client";

import NextImage from "next/image";
import { useTranslations } from "next-intl";
import styles from "./Cards.module.css";
import { CustomText, Title } from "@/shared/components";

interface Props {
  headerTitle: string;
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

function CertificateCard({ headerTitle, title, subtitle, link, image }: Props): React.ReactElement {
  const t = useTranslations("resume");

  return (
    <li className={styles["certificate-card-container"]}>
      <article className={styles["certificate-card"]}>
        <div className={styles["certificate-card__decorator"]} />
        <p className={styles["certificate-card__tag"]}>{headerTitle}</p>
        <Title text={title} size="medium" />
        <div style={{ flex: 1 }}></div>
        <div className={styles["certificate-card__footer"]}>
          <CustomText text={subtitle} textStyles={{ fontSize: "1.2rem" }} />
          <NextImage
            className={styles["footer-image"]}
            src={image}
            alt={title}
            width={35}
            height={35}
          />
        </div>
      </article>
      <a className={styles["certificate-link"]} href={link} target="_blank" aria-label={title}>
        {t("certificate")}
      </a>
    </li>
  );
}
export default CertificateCard;
