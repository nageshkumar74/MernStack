import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



 const PieChart = ({data})=>{
    const labels = data.map((item) => item.category); 
    const values = data.map((item) => item.count);    

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Items by Category',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',  // Red
                    'rgba(54, 162, 235, 0.2)',  // Blue
                    'rgba(255, 206, 86, 0.2)',  // Yellow
                    'rgba(75, 192, 192, 0.2)',  // Teal
                    'rgba(153, 102, 255, 0.2)', // Purple
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Items by Category',
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <Pie data={chartData} options={options} />
        </div>
    );
};



export default PieChart;