'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from '@/shared/hooks';
import { toast } from 'sonner';
// Services
import { sendEmail } from '@/core/services/email';
// Components & Styles
import styles from './ContactForm.module.css';
import { Button, CustomText, Input, Textarea, Title } from '@/shared/components';

function ContactForm(): JSX.Element {
  const t = useTranslations('contact');
  const t2 = useTranslations('commons');
  const { message, subject, onChangeValue, touched, isValidForm, resetForm } = useForm({
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidForm()) return;
    setIsLoading(true);
    const { error, message: successfulMessage } = await sendEmail(subject.value, message.value);
    if (successfulMessage) {
      resetForm();
      toast.success(t2('succesful-message'));
    }
    if (error) {
      toast.error(t2('error-message'));
    }
    setIsLoading(false);
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
        disabled={isLoading}
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
        disabled={isLoading}
        value={message.value}
        onChange={(e) => onChangeValue('message', e.target.value)}
        onBlur={() => touched('message')}
      />
      <Button
        className={styles['contact-form__submit']}
        disabled={isLoading}
        type='submit'
        name='submit'
      >
        {t('form_submit')}
      </Button>
    </form>
  );
}
export default ContactForm;
