import dateFormat from "dateformat";

export const getTime = (inputDate) => {
  const date = new Date(inputDate);
  return dateFormat(date, "dd, mmm hh:MM TT");
};
