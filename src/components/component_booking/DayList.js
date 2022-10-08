import React from "react";
import Day from "./Day";

export default function DayList(props) {
const days = Object.values(props.days)
  const dayItem = days.map(
    day => {
      return (
      <li key={day.id}>
        <Day
          name={day.name}
          setDay={() => props.onChange(day.name)}
        />
      </li>
      )
    }
  );
  return (
    <>
      <section className="day-list">
        <h6>
          {dayItem}
        </h6>
      </section>
      </>
  )
};


