import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/missions/MissionList';
import Rockets from './components/rockets/Rockets';
import Profile from './components/Profile';
// import './App.css';

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route className="navbar-link" path="/missions" element={<Missions />} />
        <Route className="navbar-link" path="/" element={<Rockets />} />
        <Route className="navbar-link" path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
