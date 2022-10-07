import React, { useState, useContext } from "react";
import { bulletinBoardContext } from "../../providers/BulletinBoardProvider";

export default function BulletinForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { saveBulletin } = useContext(bulletinBoardContext);

  function saveBulletinData() {
    saveBulletin(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="bulletin-form-main-div">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>

        <div className="bulletin-form-title-div">
          <label className="bulletin-form-time-label">Title: </label>
          <input
            className="bulletin-form-title-input"
            name="title"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="description-div">
          <label className="description-label">Description </label>
          <textarea
            className="description-textarea"
            name="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}>
          </textarea>
        </div>

      </form>

      <button
        className="bulletin-form-button"
        onClick={saveBulletinData}
      >Submit</button>
    </div>
  );
}