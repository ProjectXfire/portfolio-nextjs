import styles from "./Header.module.css";
// Components
import { Name, Navbar } from "..";

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props): React.ReactElement {
  return (
    <>
      <header className={styles.header}>
        <Name name="Gabriel" />
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
export default Header;
