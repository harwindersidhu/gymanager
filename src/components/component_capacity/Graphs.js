import React, { useState } from "react";
import GraphPresentDay from "./GraphpresentDay";
import GraphPresentHour from "./GraphPresentHour";
import "./Graphs.scss";

export default function Graphs(props) {

  return (
    <div className="graphs-view">
      <div className="graph-one">
        {/* <SelectType value={graphType} onChange={(val) => setGraphType(val)} /> */}
        <GraphPresentHour filled={props.presentHourData} remaining={50 - props.presentHourData}/>
      </div>
      <div className="graph-two">
        <input type="date" value={props.date} onChange={(e) => props.setDate(e.target.value)} />
        <GraphPresentDay labels={Object.keys(props.presentDayData)} data={Object.values(props.presentDayData)}/>
      </div>
    </div>
  );
}