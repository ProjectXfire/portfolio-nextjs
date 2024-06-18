'use client';

import { useTranslations } from 'next-intl';
// Components & Styles
import styles from './ContactInfo.module.css';
import { InfoCard } from '@/shared/components';
import { Mail, Phone, User } from 'lucide-react';

function ContactInfo(): JSX.Element {
  const t = useTranslations('commons');

  return (
    <div className={styles['contact-info']}>
      <InfoCard icon={<User />} title={t('name')} subtitle='Gabriel Vargas Bravo' />
      <InfoCard icon={<Phone />} title={t('phone')} subtitle='(+011) 51 990 994 750' />
      <InfoCard icon={<Mail />} title={t('email')} subtitle='gvbdeveloper@gmail.com' />
    </div>
  );
}
export default ContactInfo;
