import { useEffect, useState } from 'react';
import axios from "axios";

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

  const initialDayData = {"7am": 0, "8am": 0, "9am": 0, "10am": 0, "11am": 0, "12pm": 0, "1pm": 0, "2pm": 0, "3pm": 0, "4pm": 0, "5pm": 0, "6pm": 0, "7pm": 0, "8pm": 0, "9pm": 0}
  const [presentDayData, setPresentDayData] = useState(initialDayData);

  useEffect(() => {
    const lastUpdate = `/api/capacity/lastUpdate`;
    const getSpecificDateData = `/api/capacity/${date}`;

    Promise.all([
      axios.get(lastUpdate),
      axios.get(getSpecificDateData)
    ]).then((all) => {
      setPresentHourData(() => all[0].data);
      setPresentDayData(() => initialDayData);
      const gymCapacityArray = all[1].data.gymCapacity;
      for (const obj of gymCapacityArray) {
        const key = obj.time;
        const value = obj.number_of_people;
        // setPresentDayData({
        //   ...presentDayData,
        //   key: value 
        // })
        setPresentDayData( prev => {
          let dataObj = { ...prev };
          dataObj[key] = value;
          return dataObj;
        })
      }
    })
    .catch((e) => {
      console.log("Promise error: ", e)
    })
  }, [date]);

  return {
    date,
    setDate,
    presentHourData,
    presentDayData
  };
} 