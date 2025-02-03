import './App.css';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import Home from './pages/Home';
import EventsModal from './pages/EventsModal'
import EventSignUp from './pages/EventSignUp';
import AdminLogin from './pages/AdminLogin';
import EventAttendees from './pages/EventAttendees';

function App() {
  return (
    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barriecito&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mallanna&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fragment+Mono:ital@0;1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap');
      </style>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsModal />} />
          <Route path="/sign-up/:key" element={<EventSignUp />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/events" element={<EventAttendees />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
