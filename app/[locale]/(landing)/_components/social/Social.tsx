"use client";

import NextImage from "next/image";
// Components & Styles
import styles from "./Social.module.css";

type SocialsLinks = {
  github: string;
  linkedin: string;
};

const socialsLinks: SocialsLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
};

function Social(): React.ReactElement {
  const onNavigateTo = (socialType: keyof SocialsLinks) => {
    const link = socialsLinks[socialType];
    window.open(link);
  };

  return (
    <div className={styles.socials}>
      <button
        className={styles.socials__link}
        name="github"
        type="button"
        onClick={() => onNavigateTo("github")}
      >
        <NextImage src="/icons/github.png" width={25} height={25} alt="github" />
      </button>
      <button
        className={styles.socials__link}
        name="linkedin"
        type="button"
        onClick={() => onNavigateTo("linkedin")}
      >
        <NextImage src="/icons/linkedin.png" width={25} height={25} alt="github" />
      </button>
    </div>
  );
}
export default Social;
