import NextImage from "next/image";
// Components & Styles
import styles from "./Cards.module.css";

interface Props {
  imagePath: string;
  name: string;
}

function SkillCard({ imagePath, name }: Props): JSX.Element {
  return (
    <li className={styles["skill-card-container"]}>
      <div className={styles["skill-card"]}>
        <NextImage src={imagePath} alt="skill" width={50} height={50} />
      </div>
      <p className={styles["skill-card-text"]}>{name}</p>
    </li>
  );
}
export default SkillCard;
