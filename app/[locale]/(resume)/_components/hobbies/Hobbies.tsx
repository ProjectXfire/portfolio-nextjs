'use client';

import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
// Components & Styles
import styles from './Hobbies.module.css';
import { Title } from '@/shared/components';

function Hobbies(): JSX.Element {
  const t = useTranslations('resume');

  return (
    <>
      <Title text={t('hobbie_title')} size='medium' />
      <div className={styles.hobbies}>
        <div className={styles.hobbies__image}>
          <p className={styles['hobbies__image--text']}>{t('hobbie_1')}</p>
          <NextImage
            fill
            src='/images/hobbie_1.jpg'
            alt='hobbie'
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <div className={styles.hobbies__image}>
          <p className={styles['hobbies__image--text']}>{t('hobbie_2')}</p>
          <NextImage
            fill
            src='/images/hobbie_2.jpg'
            alt='hobbie'
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
    </>
  );
}
export default Hobbies;
