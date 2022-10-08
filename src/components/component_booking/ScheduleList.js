import React from "react";
import Schedule from "./Schedule";

export default function ScheduleList(props) {
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
  );
  return (
    <section className="schedule-list">
      <h6>
        {scheduleItem}
      </h6>
    </section>
  )
};


