import React from "react";
import { Doughnut } from "react-chartjs-2";import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraphPresentHour(props) {

  const data = {
    labels: ['Filled', 'Remaining'],
    datasets: [
      {
        data: [props.filled, props.remaining],
        backgroundColor: [
          'rgba(229,149,0)',
          'rgba(191,191,191)'
        ],
        borderColor: [
          'rgba(229,149,0)',
          'rgba(191,191,191)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="graph-present-hour">
      <Doughnut data={data}/>
    </div>
  );
}