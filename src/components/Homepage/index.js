import React, { useState, useEffect } from "react";
import { DatePicker } from "react-rainbow-components";
import ExpenseChart from "../ExpenseChart";
import ExpenseHistory from "../ExpenseHistory";
import ModalWFooter from "../Modal";
import style from "./style.module.css";

export default function Homepage({ data, getData }) {
  const startOfMonth = new Date().setDate(1);
  const [startDate, setStartDate] = useState(new Date(startOfMonth));
  const [endDate, setEndDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const filteredData = data.filter(
      (expense) => new Date(expense.Date) >= startDate
    );
    filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    setSelectedData(filteredData);
  }, [startDate, endDate, data]);

  return (
    <div className={style.container}>
      <div className={style.datePickerWrapper}>
        <DatePicker
          value={startDate}
          // minDate={new Date(2018, 0, 4)}
          maxDate={new Date()}
          label="Start Date"
          onChange={(value) => setStartDate(value)}
        />
        <DatePicker
          value={endDate}
          minDate={startDate}
          maxDate={new Date()}
          label="End Date"
          onChange={(value) => setEndDate(value)}
        />
      </div>
      {selectedData && <ExpenseChart data={selectedData} />}
      <button onClick={() => setIsModalOpen(true)}>Add Expense</button>
      {selectedData && <ExpenseHistory data={selectedData} getData={getData} />}
      <ModalWFooter
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={data}
        getData={getData}
      />
    </div>
  );
}
