import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import style from "./style.module.css";
import { getPieChartData } from "../../utils/utils";

export default function ExpenseChart({ data }) {
  const mappedData = getPieChartData(data);
  const chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Expenditure in September, 2021",
    },
    tooltip: {
      formatter: function () {
        return "<b>" + this.point.name + "</b>: $<b>" + this.y + "</b>";
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Expenditure",
        colorByPoint: true,
        data: mappedData,
      },
    ],
  };
  const [hoverData, setHoverData] = useState(null);

  return (
    <div className={style.container}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <h3>Hovering over {hoverData}</h3>
    </div>
  );
}
