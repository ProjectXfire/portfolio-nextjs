'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/shared/lib';
// Components & Styles
import styles from './InfoCategories.module.css';

interface Props {
  url: string;
  name: string;
}

function InfoLink({ url, name }: Props): JSX.Element {
  const pathname = usePathname();

  return (
    <li className={styles['info-links']}>
      <Link className={styles['info-links__link']} href={url}>
        {name}
      </Link>
      <div
        className={`${styles['info-links__effect']} ${
          pathname === url ? styles['info-link-selected'] : ''
        }`}
      />
    </li>
  );
}
export default InfoLink;
