import React from "react";
import Day from "./Day";

export default function DayList(props) {
  const dayItem = props.days.map(
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


