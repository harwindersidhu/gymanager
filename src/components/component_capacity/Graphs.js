import React, { useState } from "react";
import GraphOtherDay from "./GraphOtherDay";
import GraphPresentDay from "./GraphpresentDay";
import GraphPresentHour from "./GraphPresentHour";
import "./Graphs.scss";
import SelectType from "./SelectType";

export default function Graphs(props) {

  const [graphType, setGraphType] = useState("presentHour");

  return (
    <div className="graphs-view">
      <div className="select-view">
        <SelectType value={graphType} onChange={(val) => setGraphType(val)} />
      </div>
      <div className="graph">
        {graphType === "presentHour" && <GraphPresentHour />}
        {graphType === "presentDay" && <GraphPresentDay />}
        {graphType === "otherDay" && <GraphOtherDay />}
      </div>
    </div>
  );
}