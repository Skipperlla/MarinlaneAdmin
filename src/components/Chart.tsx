import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "01.10.2021",
    usd: 0,
  },
  {
    name: "02.10.2021",
    usd: 75,
  },
  {
    name: "03.10.2021",
    usd: 0,
  },
  {
    name: "04.10.2021",
    usd: 0,
  },
  {
    name: "05.10.2021",
    usd: 0,
  },
  {
    name: "06.10.2021",
    usd: 0,
  },
  {
    name: "07.10.2021",
    usd: 0,
  },
  {
    name: "08.10.2021",
    usd: 0,
  },
  {
    name: "09.10.2021",
    usd: 0,
  },
  {
    name: "10.10.2021",
    usd: 487,
  },
  {
    name: "11.10.2021",
    usd: 0,
  },
  {
    name: "12.10.2021",
    usd: 0,
  },
  {
    name: "13.10.2021",
    usd: 0,
  },
  {
    name: "14.10.2021",
    usd: 563,
  },
  {
    name: "15.10.2021",
    usd: 0,
  },
  {
    name: "16.10.2021",
    usd: 45,
  },
  {
    name: "17.10.2021",
    usd: 0,
  },
  {
    name: "18.10.2021",
    usd: 0,
  },
  {
    name: "19.10.2021",
    usd: 104,
  },
  {
    name: "20.10.2021",
    usd: 561,
  },
  {
    name: "21.10.2021",
    usd: 107,
  },
  {
    name: "22.10.2021",
    usd: 0,
  },
  {
    name: "23.10.2021",
    usd: 0,
  },
  {
    name: "24.10.2021",
    usd: 158,
  },
  {
    name: "25.10.2021",
    usd: 0,
  },
  {
    name: "26.10.2021",
    usd: 0,
  },
  {
    name: "27.10.2021",
    usd: 0,
  },
  {
    name: "28.10.2021",
    usd: 0,
  },
  {
    name: "29.10.2021",
    usd: 0,
  },
  {
    name: "30.10.2021",
    usd: 720,
  },
  {
    name: "01.11.2021",
    usd: 0,
  },
];
const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="usd" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
