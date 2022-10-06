import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form(props) {
   const { register } = useForm();


  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");


  function createLocalState() {
    let bookingObject = {user: user, room: room, time: time, day: day}
    console.log('from inside form ',bookingObject)
    props.saveBooking(bookingObject);
    setTime("");
    setRoom("");
    setUser("");
    setDay("");
  }

  return (
    <div className="create-booking">
      <form onSubmit={event => event.preventDefault()}>
        <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="customer-name">Customer Name: </label>
            </td>
            <td>
              <input name="customer-name" id="customer-name" type="text" placeholder="Customer Name" {...register("Customer Name", { required: true, max: 30, min: 1 })} onChange={(e) => setUser(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="day">Select day: </label>
            </td>
            <td>
            <select name="day" id="day" {...register("Day", { required: true })} onClick={(e) => setDay(e.target.value)}>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="time-slot">Select time slot: </label>
            </td>
            <td>
            <select name="time-slot" id="time-slot" {...register("Time Slot")} onClick={(e) => setTime(e.target.value)}>
              <option value="1pm">1pm</option>
              <option value="2pm">2pm</option>
              <option value="3pm">3pm</option>
              <option value="4pm">4pm</option>
              <option value="5pm">5pm</option>
            </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="location">Select location: </label>
            </td>
            <td>
              <select name="location" id="location" {...register("Facility Name")} onClick={(e) => setRoom(e.target.value)}>
                <option value="Multi-purpose Room - 1">Multi-purpose Room - 1</option>
                <option value="Multi-purpose Room - 2">Multi-purpose Room - 2</option>
              </select>
              </td>
          </tr>
          </tbody>
        </table>       
        <button className="create-booking" type="submit" onClick={createLocalState}>Save</button>
      </form>
    </div >
  );
}