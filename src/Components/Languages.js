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
    
    const labels = ['Spanish 🇪🇸', 'English 🇬🇧', 'French 🇫🇷', 'Portuguese 🇵🇹'];
    
    export const data = {
      labels,
      datasets: [
        {
          data: [100,90,60,50],
          backgroundColor: 'rgba(31, 158, 211)',
        }
      ],
    };
    
  
  const Languages = () => {
      return ( 
          <Bar options={options} data={data} />
      );
  }
export default Languages;
