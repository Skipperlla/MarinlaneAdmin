import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "30 Day Paid Raveneu",
    },
  },
};

const labels = [
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
  "16.11.2021",
];
const Labels = ["12", "12"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: Labels,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
