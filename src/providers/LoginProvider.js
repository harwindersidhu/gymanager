import { useState, createContext } from 'react';
import axios from "axios";

export const loginContext = createContext();

export default function LoginProvider(props) {

  const [user, setUser] = useState({
    "id": "",
    "name": "",
    "email": "",
    "password": "",
    "isadmin": ""
  });

  const [error, setError] = useState("");

  function login(email, password) {
    return axios.get(`/api/user/${email}/${password}`)
      .then((response) => {
        if (response.data.length > 0) {
          setUser(() => response.data[0]);
          setError("");
        } else {
          setError("User not found");
        }
      })
      .catch((e) => console.log("Error while saving bulletin: ", e));
  }

  function logout() {
    setUser({
      "id": "",
      "name": "",
      "email": "",
      "password": "",
      "isadmin": ""
    })
  }

  const value = {
    user,
    error,
    login,
    logout,
    setError
  };

  return (
    <loginContext.Provider value={value}>
      {props.children}
    </loginContext.Provider>
  );
} 