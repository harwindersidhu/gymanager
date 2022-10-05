import React from "react"; //optional

function Schedule(props) {
  return (
    <div className="schedule-item">
        <h3>Facility Name: {props.room}</h3>
        <p>Day: {props.day} </p>
        <p>Time Slot Avilable: {props.time}</p>
        <p>Customer: {props.user}</p>
        <div className="schedule-item-footer">
        <button className="schedule-item cancel" onClick={props.cancelBooking}>Cancel Booking</button>
        </div>
    </div>
  );
};
export default Schedule;