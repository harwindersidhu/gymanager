import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  
  const [state, setState] = useState({ 
    day : "Monday",
    days: [],
    bookings: [],
    filteredBookings: []
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

  function cancelBooking(id) {
    return axios.delete(`/api/booking/delete/${id}`).then(() => {
      const bookings = state.bookings;
      delete bookings[id]; //ensuring data with similar id is deleted before new is added on it to
      setState(prev => ({ ...prev, bookings })) //setting local state to null
    })
  }

  function createBooking(id) {
    const booking = {
      ...state.bookings[id]
    };

    return axios.post(`/api/booking/${id}`).then(() => {
      setState({ ...state, booking }) //setting local state to null //prev
    })
  }

  useEffect(() => { //fetching data from API 
    Promise.all([
      axios.get('/api/booking/days'),
      axios.get('/api/booking/')])
      .then((all) => {
        const days = all[0].data
        const bookings = all[1].data;
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
    createBooking
  }

}


