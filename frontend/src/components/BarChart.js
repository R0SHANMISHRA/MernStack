import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ barChart }) => {
  const data = {
    labels: barChart.map((item) => item.range),
    datasets: [
      {
        label: 'Number of Items',
        data: barChart.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h3>Bar Chart</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;