import './App.css';
import Booking from './components/Booking';
import GymCapacity from './components/GymCapacity';
import Navigation from './components/Navigation';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<GymCapacity />} />
          <Route path='/book' element={<Booking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
