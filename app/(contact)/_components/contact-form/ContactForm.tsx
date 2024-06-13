'use client';

// Components & Styles
import { Button, CustomText, Input, Textarea, Title } from '@/shared/components';
import styles from './ContactForm.module.css';
import { useState } from 'react';
import { useForm } from '@/shared/hooks';

function ContactForm(): JSX.Element {
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
      <Title text="Let's work together" size='medium' />
      <CustomText
        textStyles={{ fontSize: '1.2rem' }}
        text='If you want to contact me feel free to send a message'
      />
      <Input
        className={`${styles['contact-form__input']} focus-visible:ring-[var(--color-1)] ${
          subject.error && subject.touched && styles.error
        }`}
        type='text'
        placeholder='Subject'
        name='subject'
        value={subject.value}
        onChange={(e) => onChangeValue('subject', e.target.value)}
        onBlur={() => touched('subject')}
      />
      <Textarea
        className={`${styles['contact-form__textarea']} focus-visible:ring-[var(--color-1)] ${
          message.error && message.touched && styles.error
        }`}
        placeholder='Type your message here.'
        rows={10}
        name='message'
        value={message.value}
        onChange={(e) => onChangeValue('message', e.target.value)}
        onBlur={() => touched('message')}
      />
      <Button className={styles['contact-form__submit']} type='submit' name='submit'>
        Send
      </Button>
    </form>
  );
}
export default ContactForm;
