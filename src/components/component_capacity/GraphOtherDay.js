import React, { useState, useEffect } from "react";

export default function GraphOtherDay(props) {

  const [ date, setDate ] = useState("");
  // useEffect(() => {
  //   document.title = date
  // }, [date]);

  return (
    <div className="graph-other-day">
      <p className="selected_date_label">Graph for date: {date}</p>
      <label>Choose a date for which you want to see the capacity:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      
    </div>
  );
}