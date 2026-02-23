export const formatDate = (date: Date | undefined) => {
  if (!date) {
    throw new Error('Invalid date');
  }
  return date.toISOString().slice(0, 10);
};
