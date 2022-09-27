import './App.css';
import Booking from './components/Booking';
import BulletinBoard from './components/BulletinBoard';
import GymCapacity from './components/GymCapacity';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BulletinBoard />
      <GymCapacity />
      <Booking />
    </div>
  );
}

export default App;
