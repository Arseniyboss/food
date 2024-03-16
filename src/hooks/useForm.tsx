import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import {validate} from '../validation/validation';

export type ValidationSchema<T> = {
  required?: {
    value: boolean;
    message: string;
  };
  // pattern?: {
  //   value: RegExp | ((inputValue: string) => boolean);
  //   message: string;
  // };
  pattern?: {
    value: RegExp;
    message: string;
  };
  isValid?: {
    value: (inputValue: string) => boolean;
    message: string;
  };
  ref?: {
    value: keyof T;
    pattern: (currentInputValue: string, refInputValue: string) => boolean;
    message: string;
  };
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  length?: {
    value: number;
    message: string;
  };
  match?: {
    ref: keyof T;
    message: string;
  };
};

export type FieldValidation<T> = Partial<Record<keyof T, ValidationSchema<T>>>;
export type Errors<T> = Partial<Record<keyof T, string>>;

type SetValues<T> = Dispatch<SetStateAction<T>>;

type ReturnValues<T> = {
  values: T;
  setValues: SetValues<T>;
  errors: Errors<T>;
  handleChangeText: (key: keyof T, value: string | boolean) => void;
  handlePress: () => void;
};

// new
export const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const useForm = <T,>(options: {
  initialValues: T;
  onSubmit: () => void;
  validationSchema?: FieldValidation<T>;
}): ReturnValues<T> => {
  const {initialValues, onSubmit, validationSchema} = options;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [isChanging, setIsChanging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateOnSubmit = () => {
    if (validationSchema && !isSubmitted) {
      setErrors(validate(values, validationSchema));
      setIsChanging(false);
      setIsSubmitted(true);
    }
  };

  const validateOnChange = useCallback(() => {
    if (validationSchema && isSubmitted && isChanging) {
      setErrors(validate(values, validationSchema));
      setIsChanging(false);
    }
  }, [validationSchema, values, isSubmitted, isChanging]);

  const handleChangeText = (key: keyof T, value: string | boolean) => {
    setValues({...values, [key]: value});
    setIsChanging(true);
    setIsSubmitting(false);
  };

  const handlePress = () => {
    setIsSubmitting(true);
    validateOnSubmit();
  };

  useEffect(() => {
    validateOnChange();
  }, [validateOnChange]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmit();
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [errors, isSubmitting, onSubmit]);

  return {
    values,
    setValues,
    errors,
    handleChangeText,
    handlePress,
  };
};
