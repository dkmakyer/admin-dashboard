import { useState } from "react";
import "./SalesContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faX } from "@fortawesome/free-solid-svg-icons";

const SalesContainer = ({
  time,
  date,
  bg,
  sales,
  orders,
  units,
  refunds,
  cost,
  payout,
  gross,
  net,
  topLoss,
  downLoss
}) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
  };

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
    <div className="sales-container relative w-[20%] flex flex-col">
      <div className={`sales-container-top ${bg} text-white p-2 `}>
        <h2>{time}</h2>
        <h3 className="text-[13px]">{date}</h3>
      </div>
      <div className="sales-container-middle p-2">
        <div className="mini-middle text-[13px] pb-2">
          <p className="text-gray-600 w-[50%] flex items-center justify-between">Sales <span className={`text-[12px] ${topLoss.split("")[0] === "-" ? "text-red-500" : "text-green-500"}`}>{topLoss}</span></p>
          <h1 className="text-3xl font-bold mb-[0.5rem]">${sales}</h1>
          <div className="order-details flex flex-row justify-between">
            <div className="order">
              <p className="text-gray-600">Order / Units</p>
              <h4 className="text-[1.1rem] font-[500]">
                {orders} / {units}
              </h4>
            </div>
            <div className="refunds translate-x-[-2rem]">
              <p className="text-gray-600">Refunds</p>
              <h4 className="text-[1.1rem] font-[500]">{refunds}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing p-2">
        <div className="mini-pricing text-[13px]  pb-2 grid grid-cols-2">
          <div className="cost">
            <p className="text-gray-600">Adv. cost</p>
            <h4 className="text-[1.1rem] font-[500]">$-{cost}</h4>
          </div>
          <div className="payout">
            <p className="text-gray-600">Est. payout</p>
            <h4 className="text-[1.1rem] font-[500]">${payout}</h4>
          </div>
          <div className="gross-profit">
            <p className="text-gray-600">Gross profit</p>
            <h4 className="text-[1.1rem] font-[500]">${gross}</h4>
          </div>
          <div className="net-profit">
            <p className="text-gray-600  flex items-center justify-between">Net profit <span className={`text-[12px] ${downLoss.split("")[0] === "-" ? "text-red-500" : "text-green-500"}`}>{downLoss}</span></p>
            <h4 className="text-[1.1rem] font-[500]">${net}</h4>
          </div>
        </div>
        <button
          className="more-button w-[100%] pt-[0.5rem] pl-[8%] text-blue-700 pb-[10px]"
          onClick={toggleDisplay}
        >
          More
        </button>
      </div>
      {display && (
        <div
          className="details-container absolute flex flex-col p-2 w-[100%] translate-y-[15px] translate-x-[-15px]"
        >
          <div className="details-date flex flex-row items-center justify-between mb-[0.5rem]">
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
      )}
    </div>
  );
};

export default SalesContainer;
