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
      <table>
      <tbody>
        <tr>
          

          <td><label className="bulletin-form-time-label">Title: </label></td>
          <td><input
            className="bulletin-form-title-input"
            name="title"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          /></td>

        </tr>
        <tr>
      
          <td><label className="description-label">Description </label></td>
          <td><textarea
            className="description-textarea"
            name="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}>
          </textarea></td>
  
        </tr>
        </tbody>
        </table>
      </form>

      <button
        className="bulletin-form-button"
        onClick={saveBulletinData}
      >Submit</button>
    </div>
  );
}