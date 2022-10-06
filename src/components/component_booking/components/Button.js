import React from "react"; //optional

function Create (props) {
  return (
  <button className="createBooking" onClick={props.onChange}>{props.name}</button>
  );
};
export default Create;