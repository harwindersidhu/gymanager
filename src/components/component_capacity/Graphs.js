import React, { useState } from "react";
// import GraphOtherDay from "./GraphOtherDay";
import GraphPresentDay from "./GraphpresentDay";
import GraphPresentHour from "./GraphPresentHour";
import "./Graphs.scss";
// import SelectType from "./SelectType";

function todayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

export default function Graphs(props) {

  // const [graphType, setGraphType] = useState("presentHour");
  const today = todayDate();
  const [date, setDate] = useState(today);

  return (
    <div className="graphs-view">
      <div className="graph-one">
        {/* <SelectType value={graphType} onChange={(val) => setGraphType(val)} /> */}
        <GraphPresentHour />
      </div>
      <div className="graph-two">
        {/* {graphType === "presentHour" && <GraphPresentHour />}
        {graphType === "presentDay" && <GraphPresentDay />} */}
        {/* {graphType === "otherDay" && <GraphOtherDay />} */}
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <GraphPresentDay />
      </div>
    </div>
  );
}