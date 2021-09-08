import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";
import ExpenseChart from "../ExpenseChart";

import style from "./style.module.css";

export default function Homepage({ data }) {
  const startOfMonth = new Date().setDate(1);
  const [startDate, setStartDate] = useState(startOfMonth);
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={style.container}>
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
      {data && <ExpenseChart data={data} />}
    </div>
  );
}
