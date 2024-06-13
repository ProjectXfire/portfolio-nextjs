'use client';

import { useTranslations } from 'next-intl';
// Components & Styles
import { Button, CustomText, Input, Textarea, Title } from '@/shared/components';
import styles from './ContactForm.module.css';
import { useForm } from '@/shared/hooks';

function ContactForm(): JSX.Element {
  const t = useTranslations('contact');
  const { message, subject, onChangeValue, touched, isValidForm } = useForm({
    subject: '',
    message: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidForm()) return;
    console.log({ message, subject });
  };

  return (
    <form className={styles['contact-form']} onSubmit={onSubmit}>
      <Title text={t('form_title')} size='medium' />
      <CustomText textStyles={{ fontSize: '1.2rem' }} text={t('form_text')} />
      <Input
        className={`${styles['contact-form__input']} focus-visible:ring-[var(--color-1)] ${
          subject.error && subject.touched && styles.error
        }`}
        type='text'
        placeholder={t('form_subject')}
        name='subject'
        value={subject.value}
        onChange={(e) => onChangeValue('subject', e.target.value)}
        onBlur={() => touched('subject')}
      />
      <Textarea
        className={`${styles['contact-form__textarea']} focus-visible:ring-[var(--color-1)] ${
          message.error && message.touched && styles.error
        }`}
        placeholder={t('form_message')}
        rows={10}
        name='message'
        value={message.value}
        onChange={(e) => onChangeValue('message', e.target.value)}
        onBlur={() => touched('message')}
      />
      <Button className={styles['contact-form__submit']} type='submit' name='submit'>
        {t('form_submit')}
      </Button>
    </form>
  );
}
export default ContactForm;
