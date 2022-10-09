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

        <div className="time-div">
          <label className="time-label">Time: </label>
          {/* <input
            className="time-input"
            name="time"
            type="text"
            value={time}
            placeholder="Time"
            onChange={(event) => setTime(event.target.value)}
          /> */}
          <SelectType value={time} onChange={(val) => setTime(val)} />
        </div>

        <div className="number-of-people-div">
          <label className="number-of-people-label">Number Of People Present: </label>
          <input
            className="number-of-people-input"
            name="number-of-people"
            type="number"
            value={numberOfPeople}
            placeholder="Number of People"
            onChange={(event) => setNumberOfPeople(event.target.value)}
          />
        </div>

      </form>

      <button
        className="form-button"
        onClick={saveCapacityData}
      >Submit</button>
    </div>
  );
}