import React from "react";
import Day from "./Day";

export default function DayList(props) {

console.log('prpos inside DayList as received', props);
const days = Object.values(props.days)
console.log('days after extracting values DayList as received', days);
  const dayItem = days.map(
    day => {
      return (<li>
        <Day
          key={day.id}
          name={day.name}
        />
      </li>
      )
    }
  );
  return (
      <section className="day-list">
        <h6>
          {dayItem}
        </h6>
      </section>
  )
};


