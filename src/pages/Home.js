import React from "react";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";

import EventsModal from "./EventsModal";
import '../styles/Navbar.css';
import '../styles/EventsModal.css';

const BrandText = () => {
  return (
    <ReactCurvedText
      width={1050} 
      height={215}
      cx={525}
      cy={400}
      rx={675}
      ry={300}
      startOffset={285}
      reversed={true}
      text="FRIEND OF A FRIEND"
      textProps={{ className: "branding-text"}}
    />
  )
}

function Home() {

    const [eventsModalOpen, setEventsModalOpen] = useState(false);
    const openEventsModal = () => setEventsModalOpen(true);
    const closeEventsModal = () => setEventsModalOpen(false);


    return (
      <div className="default-container home">
        <ul className="navbar"> 
            <li className="fragment-mono-regular"> <a onClick={openEventsModal}> UPCOMING EVENTS </a> </li>
            <li className="fragment-mono-regular"> <a> WORK WITH US</a> </li>
            <li className="fragment-mono-regular"> <a> ABOUT US </a> </li>
        </ul>

        <div>
          <BrandText />
          <p className="mallanna-regular">
          From Connections to Friendships — Authentic Hangouts for a Digital Generation.
          </p>
        </div>

        <EventsModal isOpen={eventsModalOpen} onClose={closeEventsModal} />

      </div>
    );
  }
  
  export default Home;
  