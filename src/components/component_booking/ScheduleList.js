import React from "react";
import Schedule from "./Schedule";
import LandingPage from "./LandingPage";

export default function ScheduleList(props) {
  if (props.bookings.length !== 0) {
  const bookings = Object.values(props.bookings)
  const scheduleItem = bookings.map(
    (booking, index) => {
      return (<li key={booking.id}>
        <Schedule
          user={booking.user}
          time={booking.time}
          room={booking.room}
          day={booking.day}
          cancelBooking={() => props.onChange(booking.id)}
        />
      </li>
      )
  }
)
  return (
    <section className="schedule-list">
      <h6>
        {scheduleItem}
      </h6>
    </section>
  )
  }
  else 
  return (
    <section className="schedule-list">
      <LandingPage message={"No bookings to show"} />
      </section>)
};


