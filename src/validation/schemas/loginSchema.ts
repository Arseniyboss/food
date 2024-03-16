import {EMAIL_REGEX, FieldValidation} from '../../hooks/useForm';
import {
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
} from './../../constants/validation/errors';

type InitialValues = {
  email: string;
  password: string;
};

export const loginSchema: FieldValidation<InitialValues> = {
  email: {
    required: {value: true, message: EMAIL_REQUIRED},
    pattern: {value: EMAIL_REGEX, message: EMAIL_INVALID},
  },
  password: {
    required: {value: true, message: PASSWORD_REQUIRED},
  },
};
