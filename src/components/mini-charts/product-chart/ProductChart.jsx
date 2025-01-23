// src/components/ClimbingLineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
    Title,
    Tooltip,
    Legend
);

const ClimbingLineChart = () => {
    // const generateRandomNumbers = useRandomNumbers();
    const generateClimbingData = () => {
        const data = [];
        let previousValue = 100; 

        for (let i = 1; i <= 12; i++) {
            const increment = Math.floor(Math.random() * 50);
            previousValue += increment; 
            data.push(previousValue);
        }
        return data;
    };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Trend",
                data: generateClimbingData(),
                fill: false,
                backgroundColor: "rgb(225, 0, 255)",
                borderColor: "rgb(242, 105, 255)",
                tension: 0.1,
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
            <Line data={data} options={options} />
        </div>
    );
};

export default ClimbingLineChart;