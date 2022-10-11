import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function GraphPresentDay(props) {

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'number of people present',
        data: props.data,
        backgroundColor: [
          'rgba(229,149,0)'
        ],
        borderColor: [
          'rgba(229,149,0)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="graph-present-day">
      <Bar data={data} />
    </div>
  );
}