import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  
  const [state, setState] = useState({ 
    day : "Monday",
    days: [],
    bookings: [],
    filteredBookings: [],
    bookingMode: false
  });

 function setDay(day) {
   console.log("inside setDay")
   const bookingByDay = {...state.bookings};
    console.log('bookingByDay before setState', bookingByDay)
    const bookings = Object.values(bookingByDay)
    console.log('Bookings array after extraction', bookings)
    const filteredBookings = bookings.filter( booking => booking.day === day)
    console.log("filteredBooking", filteredBookings)
    setState(prev => ({ ...prev, day, bookings, filteredBookings })); 
    console.log('bookingByDay after setState', bookingByDay)
    console.log('state after setState', state)
 }

  function cancelBooking(id) {//deleted row is unable to remove from filtered object
    console.log('id received inside cancelBooking', id)
    console.log('state inside cancel booking', state)
    return axios.delete(`/api/booking/delete/${id}`).then(() => {
      console.log("state for possible filter", state)
      const filteredBookings = state.filteredBookings.filter( item => {
        return item.id !== id;
      });
      const bookings = state.bookings.filter( item => {
        return item.id !== id;
      });
      console.log('filtered bookings after filter', filteredBookings)
      console.log('state before delete', state)
      //delete state.filteredBookings;
      //console.log('state after delete', state)
      //console.log("new filtered bookings", filteredBookings)
      //delete filteredBookings[id]; //ensuring data with similar id is deleted before new is added on it to
      setState(prev => ({ ...prev, bookings, filteredBookings})) //setting local state to null
      console.log("state after setting filtered Bookings", state)
    })
  }

  function createBooking(id) {
    console.log("before toggle", state)
    state.bookingMode = !state.bookingMode;
    setState(prev => ({...prev}));
    console.log("after toggle", state)
  }

  function saveBooking(newBooking) {
    console.log('from inside useApplication', newBooking);
    return axios
    .post(`/api/booking/create`, newBooking)
    .then( res => {
        console.log('response from post req', res)
        //setState(prev => ({...prev}))
        });
  }

function viewSchedule(){
  console.log("before submit toggle", state)
  state.bookingMode = !state.bookingMode;
  setState(prev => ({...prev}));
  console.log("after submit toggle", state)
}

  useEffect(() => { //fetching data from API 
    Promise.all([
      axios.get('/api/booking/days'),
      axios.get('/api/booking/')])
      .then((all) => {
        const days = all[0].data
        const bookings = all[1].data
        // console.log("days after fetching", days);
        // console.log("bookings after fetching", bookings);
        setState(prev => ({ ...prev, days, bookings}));
      });
  }, []); 

// console.log('after axios days', state.days)
console.log('after axios day', state.day)


  return {
    state,
    setDay,
    cancelBooking,
    createBooking,
    viewSchedule,
    saveBooking
  }

}


