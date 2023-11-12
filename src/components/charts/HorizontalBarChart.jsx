import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  animation: {
    duration: 1000, 
    easing: 'easeInOutCubic', 
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [400, 300, 600, 200, 500, 250, 350],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [700, 450, 300, 8000, 100, 550, 650],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function HorizontalBarChart() {
    const width = window.innerWidth;
  return <div style={{width: "100%"}}>
    <Bar width={width-600} height={"300px"} options={options} data={data} />
  </div>;
}
