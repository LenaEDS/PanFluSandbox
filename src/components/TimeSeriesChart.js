import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import outputData from './OUTPUT_day0.json';

const TimeSeriesChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const processData = (data) => {
      const infectedCounts = data.data.map(node => {
        const I_U_H_sum = node.compartments.I.U.H.reduce((acc, val) => acc + val, 0);
        const I_U_L_sum = node.compartments.I.U.L.reduce((acc, val) => acc + val, 0);
        const I_V_H_sum = node.compartments.I.V.H.reduce((acc, val) => acc + val, 0);
        const I_V_L_sum = node.compartments.I.V.L.reduce((acc, val) => acc + val, 0);
        return I_U_H_sum + I_U_L_sum + I_V_H_sum + I_V_L_sum;
      });

      setChartData({
        labels: infectedCounts.map((_, index) => `Node ${index + 1}`),
        datasets: [
          {
            label: 'Total Infected Count',
            data: infectedCounts,
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      });
    };

    processData(outputData);
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Total Infected Count Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TimeSeriesChart;
