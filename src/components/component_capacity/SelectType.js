import React from "react";

export default function SelectType(props) {
  return (
    <label>
      Select the type of graph:
      <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
        <option value="presentHour">Present hour</option>
        <option value="presentDay">Present day</option>
        <option value="otherDay">Other day</option>
      </select>
    </label>

  );
}