import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function ExpenseChart({ data }) {
  const mappedData = data.map((ele) => ({ name: ele.Category, y: ele.Amount }));
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
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
  });

  const updateSeries = () => {
    setChartOptions({
      series: [{ data: [Math.random() * 5, 2, 1] }],
    });
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={updateSeries}>Update Series</button>
    </div>
  );
}
