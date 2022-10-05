import React from "react";

export default function Form() {

  return (
    <div className="form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>

        <div className="time-div">
          <label className="time-label">Time: </label>
          <input
            className="time-input"
            name="time"
            type="text"
            placeholder="Time"
          />
        </div>

        <div className="number-of-people-div">
          <label className="number-of-people-label">Number Of People Present: </label>
          <input
            className="number-of-people-input"
            name="number-of-people"
            type="text"
            placeholder="Number of People"
          />
        </div>

      </form>

      <button
        className="form-button"
      >Submit</button>
    </div>
  );
}