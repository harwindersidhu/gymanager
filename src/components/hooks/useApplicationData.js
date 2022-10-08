import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    bookings: [],
    filteredBookings: [],
    bookingMode: false
  });


  function setDay(day) {
    const bookingByDay = { ...state.bookings };
    const bookings = Object.values(bookingByDay)
    const filteredBookings = bookings.filter(booking => booking.day === day)
    setState(prev => ({ ...prev, day, bookings, filteredBookings }));
  }



  function cancelBooking(id) {//deleted row is unable to remove from filtered object
    return axios.delete(`/api/booking/delete/${id}`).then(() => {
      const filteredBookings = state.filteredBookings.filter(item => {
        return item.id !== id;
      });
      const bookings = state.bookings.filter(item => {
        return item.id !== id;
      });
      setState(prev => ({ ...prev, bookings, filteredBookings })) 
      //setting local state to null
    })
  }

  function createBooking(id) {
    state.bookingMode = !state.bookingMode;
    setState(prev => ({ ...prev }));
  }

  function saveBooking(newBooking) {
    state.bookingMode = !state.bookingMode;

    axios.post(`/api/booking/create`, newBooking);
    alert("Booking has been created!");


    return Promise.all([
      axios.get('/api/booking/days'),
      axios.get('/api/booking/')])
      .then((all) => {
        const days = all[0].data
        const bookings = all[1].data
        setState(prev => ({ ...prev, days, bookings }));
      });
  }

  function viewSchedule() {
    state.bookingMode = !state.bookingMode;
    setState(prev => ({ ...prev }));
  }

  useEffect(() => { //fetching data from API 
    Promise.all([
      axios.get('/api/booking/days'),
      axios.get('/api/booking/')])
      .then((all) => {
        const days = all[0].data
        const bookings = all[1].data
        setState(prev => ({ ...prev, days, bookings }));
      });
  }, []);

  return {
    state,
    setDay,
    cancelBooking,
    createBooking,
    viewSchedule,
    saveBooking
  }

}


