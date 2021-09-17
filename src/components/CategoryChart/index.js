import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import style from "./style.module.css";
import { getLineChartData } from "../../utils/utils";

export default function CategoryChart({ data, category }) {
  const { mappedData, dates } = getLineChartData(data, category);
  console.log(mappedData);
  const chartOptions = {
    title: {
      text: `Expense Chart of ${category}`,
    },
    xAxis: {
      categories: dates,
      label: "date",
    },
    labels: {
      items: [
        {
          html: `Day to day expense on ${category}`,
          style: {
            left: "50px",
            top: "18px",
            color:
              // theme
              (Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "black",
          },
        },
      ],
    },
    series: [
      {
        type: "column",
        name: "Expense",
        data: mappedData,
      },
      {
        type: "spline",
        name: "Expense",
        data: mappedData,
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: "white",
        },
        showInLegend: false,
      },
    ],
  };

  return (
    <div className={style.container}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        className={style.chart}
      />
    </div>
  );
}
