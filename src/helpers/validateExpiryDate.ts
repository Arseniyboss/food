import {formatDateValue} from './formatDateValue';

export const validateExpiryDate = (expiryDate: string) => {
  const currentMonth = formatDateValue('month');
  const currentYear = formatDateValue('year');
  const formattedCurrentDate = currentYear + currentMonth;

  const expiryMonth = expiryDate.slice(0, 2);
  const expiryYear = expiryDate.slice(-2);
  const formattedExpiryDate = expiryYear + expiryMonth;

  return formattedExpiryDate >= formattedCurrentDate;
};
