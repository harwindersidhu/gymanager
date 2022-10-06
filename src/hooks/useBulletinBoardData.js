import { useEffect, useState } from 'react';
import axios from "axios";

export default function useBulletinBoardData() {

  function todayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    today = yyyy + '-' + mm + '-' + dd + ' ' +hh + ':' + min + ':' + sec;
    return today;
  }

  const today = todayDate();

  const [bulletinData, setBulletinData] = useState([]);

  useEffect(() => {
    const getBulletinData = `/api/bulletinboard`;

    Promise.all([
      axios.get(getBulletinData)
    ]).then((all) => {
      setBulletinData(() => all[0].data.stories);
    })
    .catch((e) => {
      console.log("Promise error: ", e)
    })
  }, []);

  return {
    today,
    bulletinData
  };
} 