import React from "react"; //optional

function Day (props) {
  return (
<div className="day-item">
  <button className="day-item" onClick={props.setDay}>{props.name}</button>
</div>
  );
};
export default Day;