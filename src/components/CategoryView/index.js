import React from "react";
import { useParams } from "react-router-dom";
import CategoryChart from "../CategoryChart";
import ExpenseHistory from "../ExpenseHistory";
export default function CategoryView({ data, getData }) {
  const { category } = useParams();
  console.log("category", category);
  return (
    <div>
      <CategoryChart category={category} data={data} />
      <ExpenseHistory category={category} data={data} getData={getData} />
    </div>
  );
}
