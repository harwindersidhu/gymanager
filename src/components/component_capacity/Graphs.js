import React from "react";
import GraphPresentDay from "./GraphpresentDay";
import GraphPresentHour from "./GraphPresentHour";
import "./Graphs.scss";

export default function Graphs(props) {

  return (
    <div className="graphs-view">
      <div className="graph-one">
        <GraphPresentHour filled={props.presentHourData} remaining={50 - props.presentHourData}/>
        <label className="label-graph-one">Capacity Present Hour</label>
      </div>
      <div className="graph-two">
        <input type="date" value={props.date} onChange={(e) => props.setDate(e.target.value)} />
        <GraphPresentDay labels={Object.keys(props.presentDayData)} data={Object.values(props.presentDayData)}/>
        <label className="label-graph-two">Select date to see capacity of that date</label>
      </div>
    </div>
  );
}