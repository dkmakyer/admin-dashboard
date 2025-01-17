import {useState} from "react";
import "./SalesContainer.css";

const SalesContainer = () => {
    const [active, setActive] = useState(false);
    function setIsActive(){
        setActive((prev) => !prev);
      }
  return (
    <>
      <div className="sales-container w-[20%] flex flex-col">
        <div className="sales-container-top bg-blue-500 text-white p-2">
          <h2>Today</h2>
          <h3 className="text-[13px]">May 2</h3>
        </div>
        <div className="sales-container-middle p-2">
          <div className="mini-middle pb-2">
            <p className="text-gray-600">Sales</p>
            <h1 className="text-2xl font-bold">$212.87</h1>
            <div className="order-details flex flex-row justify-between">
              <div className="order">
                <p className="text-gray-600">Order / Units</p>
                <h4 className="text-[0.9rem] font-bold">24 / 32</h4>
              </div>
              <div className="refunds translate-x-[-2rem]">
                <p className="text-gray-600">Refunds</p>
                <h4 className="text-[0.9rem] font-bold">1</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing p-2 ">
          <div className="mini-pricing pb-2 grid grid-cols-2">
            <div className="cost">
              <p className="text-gray-600">Adv. cost</p>
              <h4 className="text-[0.9rem] font-bold">$-17.36</h4>
            </div>
            <div className="payout">
              <p className="text-gray-600">Est. payout</p>
              <h4 className="text-[0.9rem] font-bold">$-17.36</h4>
            </div>
            <div className="gross-profit">
              <p className="text-gray-600">Gross profit</p>
              <h4 className="text-[0.9rem] font-bold">$-17.36</h4>
            </div>
            <div className="net-profit">
              <p className="text-gray-600">Net profit</p>
              <h4 className="text-[0.9rem] font-bold">$-17.36</h4>
            </div>
          </div>
        </div>
        <button className={`${active ? "more-button" : "" } text-blue-700`} onClick={() => setIsActive()}>More</button>
      </div>
    </>
  );
};

export default SalesContainer;
