import React from "react";
import style from "./style.module.css";
import { getTime } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "react-rainbow-components";

export default function ExpenseHistory({ data }) {
  return (
    <div className={style.container}>
      {data.map((expense) => (
        <div className={style.lineItem} key={expense.ID}>
          <div className={style.lineItemInfo}>
            <div>{expense.Category}</div>
            <div>{expense.Description}</div>
            <div>{getTime(expense.Date)}</div>
          </div>
          <div className={style.lineItemRight}>
            <div className={style.actionButtons}>
              <ButtonIcon
                variant="base"
                size="medium"
                tooltip="Edit"
                icon={<FontAwesomeIcon icon={faPencilAlt} />}
              />
              <ButtonIcon
                variant="base"
                size="medium"
                tooltip="Delete"
                icon={<FontAwesomeIcon icon={faTrashAlt} />}
              />
            </div>
            <div className={style.lineItemPrice}>{expense.Amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
