import {ValidationSchema} from '../../hooks/useForm';
import {
  USERNAME_REQUIRED,
  USERNAME_INVALID,
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
  PASSWORD_INVALID,
} from './../../constants/validation/errors';
import {EMAIL_REGEX} from '../../constants/validation/patterns';

export type Values = {
  username: string;
  email: string;
  password: string;
};

export const validationSchema: ValidationSchema<Values> = {
  username: {
    required: {value: true, message: USERNAME_REQUIRED},
    isValid: {
      value: username => username.length >= 3,
      message: USERNAME_INVALID,
    },
  },
  email: {
    required: {value: true, message: EMAIL_REQUIRED},
    pattern: {value: EMAIL_REGEX, message: EMAIL_INVALID},
  },
  password: {
    required: {value: true, message: PASSWORD_REQUIRED},
    isValid: {
      value: password => password.length >= 6,
      message: PASSWORD_INVALID,
    },
  },
};
