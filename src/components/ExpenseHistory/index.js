import React, { useState } from "react";
import style from "./style.module.css";
import ExpenseHistoryLineItem from "../ExpenseHistoryLineItem";
import Modal from "../Modal";
import { del } from "../../utils/api";

export default function ExpenseHistory({ data, getData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const handleEdit = (expense) => {
    setIsModalOpen(true);
    setSelectedExpense(expense);
  };

  const handleDelete = async (expense) => {
    try {
      await del(`Table%201/${expense.id}`);
      await getData();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={style.container}>
      {data.map((expense) => (
        <ExpenseHistoryLineItem
          key={expense.ID}
          expense={expense}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
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
