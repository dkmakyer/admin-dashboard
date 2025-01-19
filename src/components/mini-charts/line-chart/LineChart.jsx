// src/components/LineChart.js
import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import useRandomNumbers from "../../../hooks/useRandomNumber";

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    BarController, 
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {

    const generateRandomNumbers = useRandomNumbers();

    const data1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Units Sold",
                data: generateRandomNumbers(50, 500, 12),
                fill: false,
                backgroundColor: "rgb(0, 255, 128)",
                borderColor: "rgb(0, 255, 128)",
                tension: 0.37, // to manipulate line smoothness
            },
            {
                label: "Net Profit",
                data: generateRandomNumbers(4000, 9000, 12),
                backgroundColor: "rgba(0, 38, 255, 0.7)",
                borderColor: "rgb(0, 38, 255)",
                borderWidth: 1,
                type: 'bar',
            },
            {
                label: "Advertizing costs",
                data: generateRandomNumbers(500, 2000, 12),
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                tension: 0.2,
            },
            {
                label: "Refunds",
                data: generateRandomNumbers(500, 2000, 12),
                fill: false,
                backgroundColor: "rgb(54, 162, 235)",
                borderColor: "rgb(54, 162, 235)",
                tension: 0.,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    autoSkip: false, // Prevents skipping of ticks
                },
            },
            x: {
                ticks: {
                    autoSkip: false, // Prevents skipping of ticks
                    maxRotation: 0, // Prevents slanting of labels
                    minRotation: 0, // Prevents slanting of labels
                },
            },
        },
    };

    return (
        <div>
            <Line data={data1} options={options} />
        </div>
    );
};

export default LineChart;