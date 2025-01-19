import React from 'react';
import "./ProfitsAndLoss.css";
import useRandomNumbers from '../../hooks/useRandomNumber';

const ProfitsAndLoss = () => {
    const generateRandomNumber = useRandomNumbers();

    // Populate salesDetails with random numbers
    const salesDetails = [
        { label: "Sales" },
        { label: "Units" },
        { label: "Advertising Cost" },
        { label: "Shipping costs" },
        { label: "Refund cost" },
        { label: "BCMS fees" },
        { label: "Cost of goods" },
        { label: "Gross profit" },
        { label: "Expenses" },
        { label: "Net profit" },
        { label: "Estimated payout" },
        { label: "%Refunds" },
        { label: "Sellable returns" },
        { label: "Margin" },
        { label: "ROI" },
    ];

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className='profits-and-loss-container w-[100%] p-4 text-gray-700'>
            <table className="profits-and-loss-table">
                <thead>
                    <tr className='border-b'>
                        <th className='border-r text-left p-[2px]'>Metrics</th>
                        {months.map((month) => (
                            <th key={month} className='m-[40px] p-2 text-right'>{month}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {salesDetails.map((detail) => {
                        let dataSet = [];
                        for (let month of months) {
                            if (detail.label === "Units" || detail.label === "Sellable returns") {
                                dataSet.push(`${generateRandomNumber(50, 2000,1)}`);
                            } else if (detail.label === "Margin" || detail.label === "ROI" || detail.label === "%Refunds") {
                                dataSet.push(`${generateRandomNumber(0, 20,1)}%`);
                            } else if (detail.label === "Advertising Cost" || detail.label === "Shipping costs" || detail.label === "Refund cost" || detail.label === "BCMS fees" || detail.label === "Expenses") {
                                dataSet.push(`$- ${generateRandomNumber(100, 500,1)}.00`);
                            } else {
                                dataSet.push(`$ ${generateRandomNumber(2000, 20000,1)}.00`);
                            }
                        }

                        return (
                            <tr className="border-b text-[15px] h-[1.5rem]" key={detail.label}>
                                <td className='border-r p-[0.2rem]'>{detail.label}</td>
                                {dataSet.map((value, index) => (
                                    <td key={index} className='border-b text-[12px] pl-4 text-right'>{value}</td> // Populate with the calculated value for each month
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProfitsAndLoss;