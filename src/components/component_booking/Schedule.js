import React from "react"; //optional

function Schedule (props) {
  return (
<div className="schedule-item">
  <button className="schedule-item" onClick={props.cancelBooking}>
  <h2>Location: {props.room}</h2>
  <h3>Day: {props.day} - Time Slot Avilable: {props.time}</h3>
  </button>
</div>
  );
};
export default Schedule;