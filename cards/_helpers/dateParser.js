export default (stringDate) => {
  const d = new Date();
  d.setDate(parseInt(stringDate.split('.')[0], 10));
  d.setMonth(parseInt(stringDate.split('.')[1], 10) - 1);
  d.setFullYear(parseInt(stringDate.split('.')[2], 10));
  return d;
};
