import React from 'react';
import { data } from '../data';
import CanvasJSReact from '../canvasJs/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const DonutChart = ({title}) => {

  const options = {
    title: {
      text: "Fruits"
    },
    animationEnabled: true,
    data: [
      {
        type: "doughnut",
        showInLegend: false,
        indexLabel: "{label}: {y}%",
        dataPoints: data,
      }
    ]
  };

  return (
    <div>
      <h1>{title}</h1>
				<CanvasJSChart options={options} />
    </div>
  )
};