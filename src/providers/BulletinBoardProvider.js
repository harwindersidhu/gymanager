import { useEffect, useState, createContext } from 'react';
import axios from "axios";

export const bulletinBoardContext = createContext();

export default function BulletinBoardProvider(props) {

  /**
   * 
   * @returns This function gets present date in the format "yyyy-mm-dd hh:min:sec"
   */
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

  /**
   * Bulletin board api is called to get all active bulletins.
   */
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

  /**
   * This function implement the post api to save bulletin in database and updates the bulletinData array with new bulletin
   * @param {*} title title of bulletin
   * @param {*} description description in detail of bulletin
   * @returns updated bulletinData array
   */
  function saveBulletin(title, description) {
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

  /**
   * When admin click delete button of bulletin, it sets the status of bulletin as inActive and therefore it will not show on bulletin board
   * @param {*} id id of bulletin whose status has to be updated
   * @param {*} index index of bulletin in bulletinData array
   * @returns 
   */
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