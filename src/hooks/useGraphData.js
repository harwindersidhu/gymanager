import { useEffect, useState } from 'react';
// import axios from "axios";

export default function useGraphData() {

  function todayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  const today = todayDate();
  const [date, setDate] = useState(today);

  const [presentHourData, setPresentHourData] = useState(40);

  const [presentDayData, setPresentDayData] = useState({
    "7am": 38, "8am": 38, "9am": 35, "10am": 25, "11am": 20, "12pm": 20, "1pm": 16, "2pm": 26, "3pm": 30, "4pm": 40, "5pm": 50, "6pm": 10, "7pm": 10, "8pm": 10, "9pm": 10
  })
  //const labels = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];

  return {
    date,
    setDate,
    presentHourData,
    presentDayData
  };
} 