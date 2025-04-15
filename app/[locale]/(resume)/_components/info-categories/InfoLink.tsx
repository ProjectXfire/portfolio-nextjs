"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
// Components & Styles
import styles from "./InfoCategories.module.css";

interface Props {
  url: string;
  name: string;
}

function InfoLink({ url, name }: Props): React.ReactElement {
  const pathname = usePathname();

  const pathnameWithoutLocale = `/${pathname.split("/").slice(2).join("/")}`;

  return (
    <li className={styles["info-link"]}>
      <Link className={styles["info-link__link"]} href={url}>
        {name}
      </Link>
      <div
        className={`${styles["info-link__effect"]} ${
          url === pathnameWithoutLocale ? styles["info-link-selected"] : ""
        }`}
      />
    </li>
  );
}
export default InfoLink;
