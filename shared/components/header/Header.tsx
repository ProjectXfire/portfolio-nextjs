import styles from './Header.module.css';
// Components
import { Name, Navbar } from '..';

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <Name name='Gabriel' />
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
export default Header;
