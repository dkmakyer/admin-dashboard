import {useState} from "react";
import "./SalesContainer.css";

const SalesContainer = ({time, date, bg, sales, orders, units, refunds, cost, payout, gross, net,}) => {
    const [active, setActive] = useState(false);
    function setIsActive(){
        setActive((prev) => !prev);
      }
  return (
    <>
      <div className="sales-container w-[20%] flex flex-col">
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
                <h4 className="text-[0.9rem] font-bold">{orders} / {units}</h4>
              </div>
              <div className="refunds translate-x-[-2rem]">
                <p className="text-gray-600">Refunds</p>
                <h4 className="text-[0.9rem] font-bold">{refunds}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing p-2 ">
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
        <button className={`${active ? "more-button" : "" } text-blue-700 text-[1.1rem]`} onClick={() => setIsActive()}>More</button>
      </div>
    </>
  );
};

export default SalesContainer;
