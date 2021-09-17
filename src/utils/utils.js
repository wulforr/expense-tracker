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

const getAmountForDateAndCategory = (date, category, data) => {
  return data.reduce((acc, curr) => {
    if (
      curr.Category === category &&
      new Date(curr.Date).toLocaleDateString() === date
    )
      return acc + curr.Amount;
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

export const getLineChartData = (data, category) => {
  const dates = data.map((ele) => new Date(ele.Date).toLocaleDateString());
  const uniqueDates = [...new Set(dates)];
  const lineChartData = uniqueDates.map((date) => [
    getAmountForDateAndCategory(date, category, data),
  ]);
  return { mappedData: lineChartData.reverse(), dates: uniqueDates.reverse() };
};
