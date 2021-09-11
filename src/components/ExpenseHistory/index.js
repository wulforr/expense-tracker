import React, { useState } from "react";
import style from "./style.module.css";
import ExpenseHistoryLineItem from "../ExpenseHistoryLineItem";
import Modal from "../Modal";

export default function ExpenseHistory({ data, getData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const handleEdit = (expense) => {
    setIsModalOpen(true);
    setSelectedExpense(expense);
  };
  return (
    <div className={style.container}>
      {data.map((expense) => (
        <ExpenseHistoryLineItem
          key={expense.ID}
          expense={expense}
          handleEdit={handleEdit}
        />
      ))}
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={data}
          getData={getData}
          selectedExpense={selectedExpense}
        />
      )}
    </div>
  );
}
