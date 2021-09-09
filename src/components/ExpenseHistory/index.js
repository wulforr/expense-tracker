import React from "react";
import style from "./style.module.css";
import { getTime } from "../../utils/utils";
export default function ExpenseHistory({ data }) {
  return (
    <div className={style.container}>
      {data.map((expense) => (
        <div className={style.lineItem}>
          <div className={style.lineItemInfo}>
            <div>{expense.Category}</div>
            <div>{expense.Description}</div>
            <div>{getTime(expense.Date)}</div>
          </div>
          <div className={style.lineItemPrice}>{expense.Amount}</div>
        </div>
      ))}
    </div>
  );
}
