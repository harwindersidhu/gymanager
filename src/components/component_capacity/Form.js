import React, { useState } from "react";
import SelectType from "./SelectType";

export default function Form(props) {

  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  function saveCapacityData() {
    props.onSave(time, numberOfPeople);
    setTime("7am");
    setNumberOfPeople("");
  }

  return (
    <div className="form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
<table>
  <tbody>
          <tr>
            <td><label className="time-label">Time: </label></td>
          {/* <input
            className="time-input"
            name="time"
            type="text"
            value={time}
            placeholder="Time"
            onChange={(event) => setTime(event.target.value)}
          /> */}
          <td><SelectType value={time} onChange={(val) => setTime(val)} /></td>
          </tr>
          <tr>
            <td>
          <label className="number-of-people-label">Number Of People Present: </label></td>
          <td><input
            className="number-of-people-input"
            name="number-of-people"
            type="number"
            value={numberOfPeople}
            placeholder="Number of People"
            onChange={(event) => setNumberOfPeople(event.target.value)}
          /></td>
        </tr>
        </tbody>
        </table>
      </form>

      <button
        className="form-button"
        onClick={saveCapacityData}
      >Submit</button>
    </div>
  );
}