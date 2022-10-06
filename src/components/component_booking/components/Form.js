import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => { data.preventDefault(); console.log(data); }
  console.log(errors);

  return (
    <section className="create-booking">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Customer Name" {...register("Customer Name", {required: true, max: 30, min: 1})} />
      <select {...register("Day", { required: true })}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>
      <br />
      <select {...register("Time Slot")}>
        <option value="1pm">1pm</option>
        <option value="2pm">2pm</option>
        <option value="3pm">3pm</option>
        <option value="4pm">4pm</option>
        <option value="5pm">5pm</option>
      </select>
      <br />
      <select {...register("Facility Name")}>
        <option value="Multi-purpose Room">1pm</option>
        </select>
        <br />
      <input type="submit" onChange={(event) => props.createBooking(event.target.value)}/>
    </form>
    </section > 
  );
}