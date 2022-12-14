import './App.css';
import Booking from './components/component_booking/Booking';
import GymCapacity from './components/component_capacity/GymCapacity';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BulletinBoardProvider from './providers/BulletinBoardProvider';
import Login from './components/Login';
import ContactUs from './components/component_contact/ContactUs';
import Register from './components/Register';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <BulletinBoardProvider>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<GymCapacity />} />
            <Route path='/book' element={<Booking />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
        </BulletinBoardProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
