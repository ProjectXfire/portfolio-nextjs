"use client";

import { useTranslations } from "next-intl";
// Components & Styles
import styles from "./PersonalInfo.module.css";
import InfoBlock from "./InfoBlock";

function PersonalInfo(): React.ReactElement {
  const t = useTranslations("commons");

  return (
    <div className={styles["personal-info"]}>
      <div>
        <InfoBlock keyData={t("name")} data="Gabriel Vargas Bravo" />
        <InfoBlock keyData={t("nationality")} data={t("nacionality-name")} />
      </div>
      <div>
        <InfoBlock keyData={t("phone")} data="(+011) 51 990 994 750" />
        <InfoBlock keyData={t("email")} data="gvbdeveloper@gmail.com" />
      </div>
    </div>
  );
}
export default PersonalInfo;
