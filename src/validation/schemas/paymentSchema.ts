import {FieldValidation} from '../../hooks/useForm';
import {validateExpiryDate} from '../../helpers/validateExpiryDate';
import {
  CARD_NUMBER_REQUIRED,
  CARD_NUMBER_INVALID,
  CARDHOLDER_NAME_REQUIRED,
  CARDHOLDER_NAME_INVALID,
  EXPIRY_DATE_REQUIRED,
  EXPIRY_DATE_INVALID,
  CARD_EXPIRED,
  CVV_REQUIRED,
  CVV_INVALID,
} from './../../constants/validation/errors';
import {
  CARD_NUMBER_PATTERN,
  CARDHOLDER_NAME_PATTERN,
  EXPIRY_DATE_PATTERN,
  CVV_PATTERN,
} from '../../constants/validation/patterns';

type InitialValues = {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
};

export const paymentSchema: FieldValidation<InitialValues> = {
  cardNumber: {
    required: {value: true, message: CARD_NUMBER_REQUIRED},
    pattern: {value: CARD_NUMBER_PATTERN, message: CARD_NUMBER_INVALID},
  },
  cardholderName: {
    required: {value: true, message: CARDHOLDER_NAME_REQUIRED},
    pattern: {value: CARDHOLDER_NAME_PATTERN, message: CARDHOLDER_NAME_INVALID},
  },
  expiryDate: {
    required: {value: true, message: EXPIRY_DATE_REQUIRED},
    pattern: {value: EXPIRY_DATE_PATTERN, message: EXPIRY_DATE_INVALID},
    isValid: {
      value: expiryDate => validateExpiryDate(expiryDate),
      message: CARD_EXPIRED,
    },
  },
  cvv: {
    required: {value: true, message: CVV_REQUIRED},
    pattern: {value: CVV_PATTERN, message: CVV_INVALID},
  },
};
