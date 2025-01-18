import React from "react";
import "./Charts.css";
import LineChart from "../mini-charts/line-chart/LineChart";
import DetailsContainer from "../details-container/DetailsContainer";

const Charts = () => {
  return (
    <div className="chart-container flex flex-rows h-[60vh]">
      <div className="w-[60%] h-[100%]">
        <LineChart />
      </div>
      <div className="translate-x-[12rem]">
        <div className="flex flex-rows items-center justify-between w-[16.4vw] translate-x-[-1rem]"><button className="firstDateButton p-[3px] rounded">17/01-18/01</button><button className="secondDateButton p-[3px] rounded">All Period</button></div>
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
  );
};

export default Charts;
