'use client';

import { useTranslations } from 'next-intl';
// Components & styles
import styles from './Hero.module.css';
import { IconsAnimation, Social } from '..';

function Hero(): JSX.Element {
  const t = useTranslations('landing');

  return (
    <section className={styles['hero-container']}>
      <div className={styles['hero-info']}>
        <div className={styles['hero-info__title']}>
          <h2>{t('title')}</h2>
          <Social />
        </div>
        <h1 className={`${styles['hero-info__hi']}`}>{t('subtitle')}</h1>
        <h1 className={`${styles['hero-info__hi']} ${styles['hero-info__hi--color']}`}>
          Gabriel Vargas
        </h1>
        <p className={styles['hero-info__description']}>{t('text')}</p>
      </div>
      <div className={styles['hero-avatar']}>
        <IconsAnimation />
      </div>
    </section>
  );
}
export default Hero;

// Hello I&apos;m
