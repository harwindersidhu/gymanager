import React, { useState } from "react";

export default function BulletinForm(props) {

  // const [time, setTime] = useState("");
  // const [numberOfPeople, setNumberOfPeople] = useState("");

  // function saveCapacityData() {
  //   props.onSave(time, numberOfPeople);
  //   setTime("");
  //   setNumberOfPeople("")
  // }

  return (
    <div className="bulletin-form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>

        <div className="bulletin-form-title-div">
          <label className="bulletin-form-time-label">Title: </label>
          <input
            className="bulletin-form-title-input"
            name="title"
            type="text"
            placeholder="Title"
          />
        </div>

        <div className="description-div">
          <label className="description-label">Description </label>
          <textarea className="description-textarea" name="description" placeholder="Description"></textarea>
        </div>

      </form>

      <button
        className="bulletin-form-button"
      >Submit</button>
    </div>
  );
}