import React from "react";
import { Doughnut } from "react-chartjs-2";import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Filled', 'Remaining'],
  datasets: [
    {
      data: [38, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export default function GraphPresentHour(props) {
  return (
    <div className="graph-present-hour">
      <Doughnut data={data}/>
    </div>
  );
}