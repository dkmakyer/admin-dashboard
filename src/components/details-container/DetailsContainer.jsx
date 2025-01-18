import React from 'react'
import "./DetailsContainer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faX } from "@fortawesome/free-solid-svg-icons";

const DetailsContainer = ({toggleDisplay, time, sales, units, cost, gross, net,payout, hideTop}) => {

    const currentDate = new Date().toLocaleDateString();

    const salesDetails = [
      { label: "Sales", value: `$${sales}` },
      { label: "Units", value: units },
      { label: "Advertising Cost", value: `$-${cost}` },
      { label: "Shipping costs", value: "$-103.01" },
      { label: "Refund cost", value: "$-8.79" },
      { label: "BCMS fees", value: "$-151.77" },
      { label: "Cost of goods", value: "$0.00" },
      { label: "Gross profit", value: `$${gross}` },
      { label: "Expenses", value: "$-200.00" },
      { label: "Net profit", value: `$${net}` },
      { label: "Estimated payout", value: `$${payout}` },
      { label: "%Refunds", value: "1.72%" },
      { label: "Sellable returns", value: "100.00%" },
      { label: "Margin", value: "16.48%" },
      { label: "ROI", value: "0.00%" },
    ];
      const SalesDetailItem = ({ label, value }) => (
        <li className="flex items-center w-full border-b-2 mb-[0.1rem]">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="text-[11px] translate-y-[-1px]"
          />
          <div className="flex justify-between w-[95%]">
            <span className="ml-[1rem]">{label}</span>
            <span>{value}</span>
          </div>
        </li>
      );

  return (
    <>
      <div
          className="details-container absolute flex flex-col p-2 translate-y-[15px] translate-x-[-15px]"
        >
          <div className={`details-date  ${hideTop === true ? "hidden" : ""} flex flex-row items-center justify-between mb-[0.5rem]`}>
            <div>
            <h2>{time}</h2>
            <p className="text-[12px] border-b-2">{currentDate}</p>
            </div>
            <div className="closeIcon text-[12px] mr-[10px]" onClick={toggleDisplay}><FontAwesomeIcon icon={faX} /></div>
          </div>
          <div>
            <ul className="text-[0.9rem] w-[15vw] bg-white-900">
              {salesDetails.map((detail, index) => (
                <SalesDetailItem
                  key={index}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}

export default DetailsContainer
