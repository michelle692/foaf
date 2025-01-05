import './App.css';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';

function App() {
  return (
    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barriecito&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mallanna&display=swap');
      </style>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<UpcomingEvents />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
