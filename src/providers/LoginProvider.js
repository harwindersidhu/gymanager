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

  /**
   * 
   * @param {*} username 
   * @param {*} email 
   * @param {*} password 
   * @param {*} status admin or user
   * @param {*} navigate 
   * @returns This function call api to create user. If success it will navigate to login page,
   * if error, it will set the error which will be shown on register page.
   */
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

  /**
   * 
   * @param {*} email 
   * @param {*} password 
   * @returns This function call api to verify user, if user exists it will set the user with returned values (id, name, email, password, isadmin).
   * If user doesn't exist, it will set error that User not found.
   */
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

  /**
   * This function is called when logout button is pressed. It will set user object with all keys equal to ""
   */
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