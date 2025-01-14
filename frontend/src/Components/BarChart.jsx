import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const labels = data.map((item) => item.range); // Extract price ranges
    const values = data.map((item) => item.count); // Extract item counts

    const chartData = {
        labels,
        datasets: [
            {
                label: "Items in Price Range",
                data: values, // Corrected reference to the values array
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Light teal
                borderColor: "rgba(75, 192, 192, 1)", // Teal border
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { // Fixed the typo
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Price Range Distribution",
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
