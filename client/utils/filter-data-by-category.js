export const filterData = (data, category) => {
  return data.filter((el) => el.category === category);
};
