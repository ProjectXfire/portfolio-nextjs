'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
// Components & Styles
import styles from './InfoCategories.module.css';

interface Props {
  url: string;
  name: string;
}

function InfoLink({ url, name }: Props): JSX.Element {
  const pathname = usePathname();

  return (
    <div className={styles['info-links']}>
      <NextLink className={styles['info-links__link']} href={url}>
        {name}
      </NextLink>
      <div
        className={`${styles['info-links__effect']} ${
          pathname === url ? styles['info-link-selected'] : ''
        }`}
      />
    </div>
  );
}
export default InfoLink;
