import React from "react";
import "./Booking.scss";
import BulletinBoard from "../component_bulletin/BulletinBoard";
import useApplicationData from "../hooks/useApplicationData"

import DayList from "./DayList";
import ScheduleList from "./ScheduleList";

export default function Booking(props) {

  const {
    state,
    cancelBooking
  } = useApplicationData();

  return (
    <>
    <div className="booking-view">
      <div className="facility-booking">
        <div className="days-view">
          <DayList days={state.days}/>
        </div>
        <div className="schedule-view">
          <ScheduleList bookings={state.bookings} onChange={cancelBooking}/>
        </div>
      </div>
      <BulletinBoard />
      </div>
    </>
  );
}