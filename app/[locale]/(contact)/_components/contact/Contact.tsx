// Components & Styles
import { ContactForm, ContactInfo } from '..';
import styles from './Contact.module.css';

function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
export default Contact;
