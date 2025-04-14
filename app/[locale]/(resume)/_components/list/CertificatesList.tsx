import type { IData } from "@/shared/interfaces";
// Components & Styles
import styles from "./List.module.css";
import { CertificateCard } from "..";

interface Props {
  data: IData[];
}

function List({ data }: Props): React.ReactElement {
  return (
    <ul className={styles["certificates-list"]}>
      {data.map((info) => (
        <CertificateCard
          key={info.id}
          headerTitle={info.year.toString()}
          title={info.name}
          subtitle={info.school}
          link={info.link}
        />
      ))}
    </ul>
  );
}
export default List;
