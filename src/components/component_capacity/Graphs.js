import React, { useState } from "react";
// import GraphOtherDay from "./GraphOtherDay";
import GraphPresentDay from "./GraphpresentDay";
import GraphPresentHour from "./GraphPresentHour";
import "./Graphs.scss";
import useGraphData from "../../hooks/useGraphData";

export default function Graphs(props) {

  const { date, setDate } = useGraphData();

  return (
    <div className="graphs-view">
      <div className="graph-one">
        {/* <SelectType value={graphType} onChange={(val) => setGraphType(val)} /> */}
        <GraphPresentHour />
      </div>
      <div className="graph-two">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <GraphPresentDay />
      </div>
    </div>
  );
}