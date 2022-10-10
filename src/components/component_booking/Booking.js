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
    saveBooking,
    viewSchedule
  } = useApplicationData();

  return (
    <>
      <div className="booking-view">
        <div className="facility-booking">
          <div className="days-view">
            {!state.bookingMode && <DayList days={state.days} onChange={setDay} />}
            {!state.bookingMode && <Button name={"Create Booking"} onChange={createBooking} onSubmit={saveBooking} />}
            {state.bookingMode && <Button name={"View Schedule"} onChange={viewSchedule} />}
          </div>
          <div className="schedule-view">
            {!state.bookingMode && <ScheduleList bookings={state.filteredBookings} onChange={cancelBooking} day={state.day}/>}
            {state.bookingMode && <Form onSubmit={saveBooking} />}
          </div>
        </div>
        <BulletinBoard />
      </div>
    </>
  );
}