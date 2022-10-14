import { useEffect, useState, createContext } from 'react';
import axios from "axios";

export const bulletinBoardContext = createContext();

export default function BulletinBoardProvider(props) {

  function todayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + sec;
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

  function saveBulletin(title, description) {
    console.log('we were in savebulletin', title, description)
    const bulletinData = {
      title: title,
      description: description,
      created_at: todayDate()
    };

    return axios.post(`/api/bulletinboard`, bulletinData)
      .then((response) => {
        setBulletinData((prev) => {
          const updatedData = [...prev];
          updatedData.push(response.data.stories);
          return updatedData;
        })
      })
      .catch((e) => console.log("Error while saving bulletin: ", e));
  }

  function editStatusOfBulletin(id, index) {
    const bulletinId = {
      id: id
    };

    return axios.put(`/api/bulletinboard`, bulletinId)
      .then((response) => {
        setBulletinData((prev) => {
          const updatedData = [...prev];
          updatedData.splice(index, 1); //Remove item from specified index
          return updatedData;
        })
      })
      .catch((e) => console.log("Error while saving bulletin: ", e));
  }

  const value = {
    today,
    bulletinData,
    saveBulletin,
    editStatusOfBulletin
  };

  return (
    <bulletinBoardContext.Provider value={value}>
      {props.children}
    </bulletinBoardContext.Provider>
  );
} 