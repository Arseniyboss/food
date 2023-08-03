import {FieldValidation} from '../../hooks/useForm';
import {
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
} from './../../constants/validation/errors';
import {EMAIL_REGEX} from '../../constants/validation/patterns';

type InitialValues = {
  email: string;
  password: string;
};

export const validationSchema: FieldValidation<InitialValues> = {
  email: {
    required: {value: true, message: EMAIL_REQUIRED},
    pattern: {value: EMAIL_REGEX, message: EMAIL_INVALID},
  },
  password: {
    required: {value: true, message: PASSWORD_REQUIRED},
  },
};
