import React, { useContext }from 'react';
import { useForm } from 'react-hook-form';
import Error from '../Error';
import { loginContext } from "../../../providers/LoginProvider";


export default function Form(props) {

  const { user } = useContext(loginContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = data => { props.onSubmit(data) }
  const onErrors = errors => console.error('errors form', errors);


  return (
    <div className="create-booking">
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="customer-name">Customer Name: </label>
              </td>
              <td>
                <input name="user" id="customer-name" type="text" placeholder={user.name} {...register("user", { required: "Error: Cannot submit empty field", max: 30, min: 1 })} />
                {errors?.user && <Error message={errors.user.message}></Error>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="day">Select day: </label>
              </td>
              <td>
                <select name="day" id="day" {...register("day", { required: true })}>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="time-slot">Select time slot: </label>
              </td>
              <td>
                <select name="time" id="time-slot" {...register("time")} >
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
                <select name="room" id="location" {...register("room")} >
                  <option value="1">Multi-purpose Room - 1</option>
                  <option value="2">Multi-purpose Room - 2</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button className="create-booking" type="submit">Save</button>
      </form>
    </div >
  );
}