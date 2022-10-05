import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  
  const [state, setState] = useState({ 
    days: [],
    bookings: []
  });

  console.log('initial state',state)

  function cancelBooking(id) {
    // console.log("inside cancelBooking")
    // const booking = {
    //   ...state.bookings[id]
    // };
    // console.log("local booking");
    // const bookings = {
    //   ...state.bookings,
    //   [id]: booking
    //};
    console.log("local bookings");
console.log("before axios call");
    return axios.delete(`/api/booking/delete/${id}`).then(() => {
      const bookings = state.bookings;
      delete bookings[id];
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
      axios.get('/api/booking')])
      .then((all) => {
        const days = all[0].data
        const bookings = all[1].data;
        console.log("days after fetching", days);
        console.log("bookings after fetching", bookings);
        setState(prev => ({ ...prev, days, bookings}));
      });
  }, []); 

console.log('after axios days', state.days)
console.log('after axios bookings', state.bookings)


  return {
    state,
    cancelBooking,
    createBooking
  }

}