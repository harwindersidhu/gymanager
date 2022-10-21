import React, { useState } from "react";
import SelectType from "./SelectType";

export default function Form(props) {

  const [time, setTime] = useState("7am");
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  function saveCapacityData() {
    props.onSave(time, numberOfPeople);
    setTime("7am");
    setNumberOfPeople(0);
  }

  return (
    <div className="form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <table>
          <tbody>
            <tr>
              <td><label className="time-label">Time: </label></td>
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