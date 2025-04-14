// Components & Styles
import styles from "./Contact.module.css";
import { ContactForm, ContactInfo } from "..";

function Contact(): React.ReactElement {
  return (
    <div className={styles.contact}>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
export default Contact;
