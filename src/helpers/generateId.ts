export const generateId = () => {
  const min = 100000;
  const max = 1000000;
  const id = Math.floor(Math.random() * (max - min + 1) + min);
  return id;
};
