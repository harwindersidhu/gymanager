import React from "react";
import Schedule from "./Schedule";

export default function ScheduleList (props) {

  console.log('prpos inside ScheduleList as received', props);
const bookings = Object.values(props.bookings)
console.log('schedule after extracting values DayList as received', bookings);
  const scheduleItem = bookings.map(
    booking => {
      return (<li>
        <Schedule
          key={booking.id}
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


