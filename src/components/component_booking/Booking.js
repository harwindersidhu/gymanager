import React from "react";
import "./Booking.scss";
import BulletinBoard from "../component_bulletin/BulletinBoard";
import useApplicationData from "../hooks/useApplicationData"

import DayList from "./DayList";
import ScheduleList from "./ScheduleList";
import Button from "./components/Button"
import Form from "./components/Form";

export default function Booking(props) {

  const {
    state,
    setDay,
    cancelBooking,
    createBooking,
    submitBooking
  } = useApplicationData();

  return (
    <>
    <div className="booking-view">
      <div className="facility-booking">
        <div className="days-view">
          { !state.bookingMode && <DayList days={state.days} onChange={setDay}/> }
          { !state.bookingMode && <Button  name={"Create Booking"} onChange={createBooking}/>}
          { state.bookingMode && <Button name={"Submit Booking"} onChange={submitBooking}/>}
        </div>
        <div className="schedule-view">
         { !state.bookingMode && <ScheduleList bookings={state.filteredBookings} onChange={cancelBooking}/>}
         { state.bookingMode && <Form />}
        </div>
      </div>
      <BulletinBoard />
      </div>
    </>
  );
}