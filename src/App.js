import './App.css';
import Booking from './components/component_booking/Booking';
import GymCapacity from './components/component_capacity/GymCapacity';
import Navigation from './components/Navigation';
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BulletinBoardProvider from './providers/BulletinBoardProvider';
import Login from './components/Login';
import { loginContext } from './providers/LoginProvider';
import ContactUs from './components/component_contact/ContactUs';
import Register from './components/Register';

function App() {

  const { user } = useContext(loginContext);

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        {/* {user.email === "" && <Login />}
        {user.email !== "" && <BulletinBoardProvider> */}
        <BulletinBoardProvider>
          <Routes>
          <Route path='/register' element={<Register />} />
            {user.email === "" && <Route path='/' element={<Login />} />}
            
            {user.email !== "" && <Route path='/' element={<GymCapacity />} />}
            {user.email !== "" && <Route path='/book' element={<Booking />} />}
            {user.email !== "" && <Route path='/contact' element={<ContactUs />} />}
          </Routes>
        </BulletinBoardProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
