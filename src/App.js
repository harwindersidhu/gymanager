import './App.css';
import Booking from './components/Booking';
import BulletinBoard from './components/BulletinBoard';
import GymCapacity from './components/GymCapacity';
import Navigation from './components/Navigation';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {

  const [currentNavSelection, setCurrentNavSelection] = useState("gym capacity");

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation onChange={val => setCurrentNavSelection(val)} />
        <BulletinBoard />
        {currentNavSelection === "gym capacity" && <GymCapacity />}
        {currentNavSelection === "book" && <Booking />}
      </div>
    </BrowserRouter>
  );
}

export default App;
