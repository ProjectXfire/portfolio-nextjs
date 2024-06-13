import { useState } from 'react';

type IFormOptions = {
  error: boolean;
  value: string;
  touched: boolean;
};

export type IForm<T> = {
  [key in keyof T]: IFormOptions;
};

export function useForm<T extends Record<string, any>>(values: T) {
  const [form, setform] = useState<IForm<typeof values>>(() => {
    const initialForm = {} as IForm<typeof values>;
    for (const key in values) {
      initialForm[key] = { error: true, value: '', touched: false };
    }
    return initialForm;
  });

  const onChangeValue = (field: keyof T, value: string) => {
    if (!form) return;
    if (!value) {
      setform({ ...form, [field]: { ...form[field], value, error: true } });
    } else {
      setform({ ...form, [field]: { ...form[field], value, error: false } });
    }
  };

  const touched = (field: keyof T) => {
    setform({ ...form, [field]: { ...form[field], touched: true } });
  };

  const isValidForm = (): boolean => {
    const isValid = Object.values(form).every((v) => v.error === false);
    const cloneForm = structuredClone(form);
    for (const key in form) {
      cloneForm[key].touched = true;
    }
    setform(cloneForm);
    return isValid;
  };

  return {
    ...form,
    onChangeValue,
    touched,
    isValidForm,
  };
}
