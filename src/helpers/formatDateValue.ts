export const formatDateValue = (value: 'month' | 'year') => {
  return new Intl.DateTimeFormat('en-US', {
    [value]: '2-digit',
  }).format(new Date());
};
