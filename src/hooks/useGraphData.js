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

  // function setDate

  return {
    date,
    setDate
  };
} 