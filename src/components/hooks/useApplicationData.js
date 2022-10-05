import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  
  const [state, setState] = useState({ 
    days: [],
    bookings:[]
  });

  console.log(state)

  function cancelBooking(id) {
    console.log("inside cancelBooking")
    const booking = {
      ...state.bookings[id]
    };
console.log("before axios call");
    return axios.delete(`/api/booking/delete/${id}`).then(() => {
      setState({ ...state, booking }) //setting local state to null
    })
  }

  function createBooking(id) {
    const booking = {
      ...state.bookings[id]
    };

    return axios.post(`/api/booking/${id}`).then(() => {
      setState({ ...state, booking }) //setting local state to null
    })
  }

  useEffect(() => { //fetching data from API 
    Promise.all([
      axios.get('/api/booking/days'),
      axios.get('/api/booking')])
      .then((all) => {
        const days = all[0].data
        const bookings = all[1].data;
        setState(prev => ({ ...prev, days, bookings}));
      });

  }, []); 



  return {
    state,
    cancelBooking,
    createBooking
  }

}