import dateFormat from "dateformat";

export const getTime = (inputDate) => {
  const date = new Date(inputDate);
  return dateFormat(date, "dd, mmm hh:MM TT");
};

export const getCategory = (data) => {
  const categories = ["Food", "Travel", "Shopping", "Stocks", "Rent"];
  const categoriesInData = data.map((ele) => ele.Category);
  const notFoundCategories = categoriesInData.filter(
    (c) => !categories.includes(c)
  );
  return [...categories, ...notFoundCategories];
};
