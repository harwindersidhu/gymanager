import './App.css';
import Booking from './components/Booking';
import BulletinBoard from './components/BulletinBoard';
import GymCapacity from './components/GymCapacity';
import Navigation from './components/Navigation';
import React, { useState } from "react";

function App() {

  const [currentNavSelection, setCurrentNavSelection] = useState("gym capacity");

  return (
    <div className="App">
      <Navigation onChange={val => setCurrentNavSelection(val)}/>
      <BulletinBoard />
      { currentNavSelection === "gym capacity" && <GymCapacity /> }
      { currentNavSelection === "book" && <Booking /> }
    </div>
  );
}

export default App;
