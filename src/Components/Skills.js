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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 4,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      }
    },
  };
  
  const labels = ['HTML5', 'CSS', 'Javascript', 'APIs', 'React JS', 'GIT', 'AWS', 'Firebase'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Selflearn',
        data: [1,2,3,1,2,3,1],
        backgroundColor: 'rgba(31, 158, 211)',
      }
    ],
  };
  

const Skills = () => {
    return ( 
        <Bar options={options} data={data} />
    );
}
 
export default Skills;
