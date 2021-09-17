import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import style from "./style.module.css";
import { getPieChartData } from "../../utils/utils";
import { useHistory } from "react-router-dom";

export default function ExpenseChart({ data }) {
  const mappedData = getPieChartData(data);
  const history = useHistory();
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
        events: {
          click: function (e) {
            console.log("e in event", e.point.options.name, e);
            history.push(`/category/${e.point.options.name}`);
          },
        },
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

  return (
    <div className={style.container}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
