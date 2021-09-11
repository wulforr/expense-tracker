import React, { useState } from "react";
import { getTime } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "react-rainbow-components";
import style from "./style.module.css";

export default function ExpenseHistoryLineItem({
  expense,
  handleEdit,
  handleDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={style.lineItem}>
      <div className={style.lineItemInfo}>
        <div>{expense.Category}</div>
        <div>{expense.Description}</div>
        <div>{getTime(expense.Date)}</div>
      </div>
      <div className={style.lineItemRight}>
        <div className={style.lineItemPrice}>{expense.Amount}</div>
      </div>

      <div className={style.actionButtonsMenu}>
        <ButtonIcon
          variant="base"
          size="medium"
          onClick={toggleIsOpen}
          icon={<FontAwesomeIcon icon={faEllipsisV} />}
        />
        {isOpen && (
          <div className={style.actionButtons}>
            <ButtonIcon
              variant="base"
              size="medium"
              tooltip="Edit"
              icon={<FontAwesomeIcon icon={faPencilAlt} />}
              onClick={() => handleEdit(expense)}
            />
            <ButtonIcon
              variant="base"
              size="medium"
              tooltip="Delete"
              icon={<FontAwesomeIcon icon={faTrashAlt} />}
              onClick={() => handleDelete(expense)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
