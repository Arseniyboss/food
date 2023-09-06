import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import {validate} from '../validation/validate';

export type ValidationOptions<T, P> = {
  required: {
    value: boolean;
    message: string;
  };
  pattern: {
    value: RegExp;
    message: string;
  };
  isValid: {
    value: (inputValue: string) => boolean;
    message: string;
  };
  match: {
    ref: Exclude<keyof T, P>;
    message: string;
  };
};

export type FieldValidation<T> = {
  [P in keyof T]: Partial<ValidationOptions<T, P>>;
};

export type ValidationSchema<T> = Partial<FieldValidation<T>>;

type SetValues<T> = Dispatch<SetStateAction<T>>;

export type Errors<T> = Partial<Record<keyof T, string>>;

type ReturnValues<T> = {
  values: T;
  setValues: SetValues<T>;
  errors: Errors<T>;
  handleChangeText: (key: keyof T, value: string) => void;
  handlePress: () => void;
};

export const useForm = <T extends Record<string, string>>(options: {
  initialValues: T;
  onSubmit: () => void;
  validationSchema?: ValidationSchema<T>;
}): ReturnValues<T> => {
  const {initialValues, onSubmit, validationSchema} = options;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const isValid = Object.keys(errors).length === 0;

  const validateOnSubmit = () => {
    if (validationSchema && isValid) {
      setErrors(validate(values, validationSchema));
      setIsSubmitted(true);
    }
  };

  const validateOnChange = useCallback(() => {
    if (validationSchema && isSubmitted && isChanging) {
      setErrors(validate(values, validationSchema));
      setIsChanging(false);
    }
  }, [validationSchema, values, isSubmitted, isChanging]);

  const handleChangeText = (key: keyof T, value: string) => {
    setValues({...values, [key]: value});
    setIsChanging(true);
    setIsSubmitting(false);
  };

  const handlePress = () => {
    validateOnSubmit();
    setIsSubmitting(true);
    setIsChanging(false);
  };

  useEffect(() => {
    validateOnChange();
  }, [validateOnChange]);

  useEffect(() => {
    if (isValid && isSubmitting) {
      onSubmit();
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [errors, isValid, isSubmitting, onSubmit]);

  return {values, setValues, errors, handleChangeText, handlePress};
};
