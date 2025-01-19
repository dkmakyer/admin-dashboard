import React from "react";
import "./Charts.css";
import LineChart from "../mini-charts/line-chart/LineChart";
import DetailsContainer from "../details-container/DetailsContainer";
import Calendar from "../calendar/Calendar";

const Charts = () => {
  return (
    <div className="chart-container flex flex-rows h-[60vh]">
      <div className="w-[60%] h-[100%]">
        <LineChart />
      </div>
      <div className="relative translate-x-[12rem]">
        <div className="flex flex-rows items-center justify-between w-[16.4vw] translate-x-[-1rem]">
          <Calendar />
          <button className="fixed top-0 translate-x-[9.3rem] secondDateButton p-[3px] rounded hover:bg-blue-200 text-white-500">
            All Period
          </button>
        </div>
        <div className="fixed top-0 translate-y-[2rem] z-[-5]">
        <DetailsContainer
          hideTop={true}
          sales="1,178.23"
          cost="32.04"
          gross="574.33"
          net="89.11"
          payout="849.32"
        />
        </div>
      </div>
    </div>
  );
};

export default Charts;
