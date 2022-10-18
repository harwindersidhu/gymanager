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

  function signUp(username, email, password, status, navigate) {

    let signUpApi = "/api/user";
    if (status === "admin") {
      signUpApi = "/api/admin"
    } 
    const userInfo = {
      username,
      email,
      password
    }

    return axios.post(signUpApi, userInfo)
      .then((response) => {
        console.log("Response from saving user: ", response.data.success);
        setError("");
        navigate("/login");
      })
      .catch((e) => {
        console.log("Error while saving user: ", e);
        setError("Error while register. Please try again!");
      });
  } 

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
      .catch((e) => {
        console.log("Error while getting user: ", e);
        setError("Error while login. Please try again!");
      });
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
    setError,
    signUp
  };

  return (
    <loginContext.Provider value={value}>
      {props.children}
    </loginContext.Provider>
  );
} 