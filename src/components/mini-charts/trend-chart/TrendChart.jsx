import React from "react";
import "./TrendChart.css";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const SingleLineChart = () => {
    const generateRandomNumbers = useRandomNumbers();

    const data = {
        labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`), // Placeholder labels
        datasets: [
            {
                label: "Data",
                data: generateRandomNumbers(50, 500, 12),
                fill: false,
                borderColor: "rgb(0, 60, 255)",
                borderWidth: 0.5,
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                display: false, // Hide y-axis
            },
        },
    };

    return (
        <div className="w-[10vw] h-[15vh]">
            <Line data={data} options={options} />
        </div>
    );
};

export default SingleLineChart;