export const PASSWORD_MINLENGTH = 8;
export const ADDRESS_PATTERN = /^[a-zA-Z0-9/., ]+$/;
export const COUNTRY_PATTERN = /^[a-zA-Z- ]+$/;
export const CITY_PATTERN = /^[a-zA-Z- ]+$/;
export const POSTAL_CODE_PATTERN = /^[0-9]+$/;
export const CARD_NUMBER_PATTERN =
  /^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([-\s]?)\d{4}\1\d{4}\1\d{4}$/;
export const CARDHOLDER_NAME_PATTERN = /^[a-zA-Z- ]+$/;
export const EXPIRY_DATE_PATTERN = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
export const CVV_PATTERN = /^[0-9]{3,4}$/;
