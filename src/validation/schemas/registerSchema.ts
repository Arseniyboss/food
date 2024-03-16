import {EMAIL_REGEX, FieldValidation} from '../../hooks/useForm';
import {
  USERNAME_REQUIRED,
  USERNAME_INVALID,
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
  PASSWORD_INVALID,
} from './../../constants/validation/errors';
import {PASSWORD_MINLENGTH} from '../../constants/validation/patterns';

type InitialValues = {
  username: string;
  email: string;
  password: string;
};

export const registerSchema: FieldValidation<InitialValues> = {
  username: {
    required: {value: true, message: USERNAME_REQUIRED},
    minLength: {value: 3, message: USERNAME_INVALID},
  },
  email: {
    required: {value: true, message: EMAIL_REQUIRED},
    pattern: {value: EMAIL_REGEX, message: EMAIL_INVALID},
  },
  password: {
    required: {value: true, message: PASSWORD_REQUIRED},
    minLength: {value: PASSWORD_MINLENGTH, message: PASSWORD_INVALID},
  },
};
