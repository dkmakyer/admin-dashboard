import { useState } from "react";
import "./SalesContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
}) => {
    const [activeItem , setActiveItem] = useState(null);

  const toggleActive = (item) => {
    if(activeItem == item){
        setActiveItem(null);
    }else{
        setActiveItem(item);
    }
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
      <div className={`sales-container-top ${bg} text-white p-2`}>
        <h2>{time}</h2>
        <h3 className="text-[13px]">{date}</h3>
      </div>
      <div className="sales-container-middle p-2">
        <div className="mini-middle pb-2">
          <p className="text-gray-600">Sales</p>
          <h1 className="text-2xl font-bold">${sales}</h1>
          <div className="order-details flex flex-row justify-between">
            <div className="order">
              <p className="text-gray-600">Order / Units</p>
              <h4 className="text-[0.9rem] font-bold">
                {orders} / {units}
              </h4>
            </div>
            <div className="refunds translate-x-[-2rem]">
              <p className="text-gray-600">Refunds</p>
              <h4 className="text-[0.9rem] font-bold">{refunds}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing p-2">
        <div className="mini-pricing pb-2 grid grid-cols-2">
          <div className="cost">
            <p className="text-gray-600">Adv. cost</p>
            <h4 className="text-[0.9rem] font-bold">$-{cost}</h4>
          </div>
          <div className="payout">
            <p className="text-gray-600">Est. payout</p>
            <h4 className="text-[0.9rem] font-bold">${payout}</h4>
          </div>
          <div className="gross-profit">
            <p className="text-gray-600">Gross profit</p>
            <h4 className="text-[0.9rem] font-bold">${gross}</h4>
          </div>
          <div className="net-profit">
            <p className="text-gray-600">Net profit</p>
            <h4 className="text-[0.9rem] font-bold">${net}</h4>
          </div>
        </div>
      </div>
      <button
        className="more-button text-blue-700 pb-[10px]"
        onClick={() => toggleActive(time)}
      >
        More
      </button>
      {
        activeItem === time && (        <div className="details-container absolute flex flex-col p-2 w-[100%] ">
            <div className="details-date mb-[0.5rem]">
              <h2>{time}</h2>
              <p className="text-[12px] border-b-2">{currentDate}</p>
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
          </div>)
      }
    </div>
  );
};

export default SalesContainer;
