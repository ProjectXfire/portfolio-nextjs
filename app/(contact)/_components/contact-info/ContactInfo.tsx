// Components & Styles
import styles from './ContactInfo.module.css';
import { InfoCard } from '@/shared/components';
import { Mail, Phone, User } from 'lucide-react';

function ContactInfo(): JSX.Element {
  return (
    <div className={styles['contact-info']}>
      <InfoCard icon={<User />} title='Phone' subtitle='Gabriel Vargas Bravo' />
      <InfoCard icon={<Phone />} title='Phone' subtitle='(+011) 51 990 994 750' />
      <InfoCard icon={<Mail />} title='Phone' subtitle='gvbdeveloper@gmail.com' />
    </div>
  );
}
export default ContactInfo;
