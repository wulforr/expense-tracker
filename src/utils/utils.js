import dateFormat from "dateformat";

export const getTime = (inputDate) => {
  const date = new Date(inputDate);
  return dateFormat(date, "dd, mmm hh:MM TT");
};

export const getCategoryOptions = (data) => {
  const categories = ["Food", "Travel", "Shopping", "Stocks", "Rent"];
  const categoriesInData = data.map((ele) => ele.Category);
  const notFoundCategories = categoriesInData.filter(
    (c) => !categories.includes(c)
  );
  return [...categories, ...notFoundCategories];
};

const totalAmountForCategory = (category, data) => {
  return data.reduce((acc, curr) => {
    if (curr.Category === category) return acc + curr.Amount;
    return acc;
  }, 0);
};

export const getPieChartData = (data) => {
  const categories = data.map((ele) => ele.Category);
  const uniqueCategories = [...new Set(categories)];
  const pieChartData = uniqueCategories.map((category) => ({
    name: category,
    y: totalAmountForCategory(category, data),
  }));
  return pieChartData;
};
