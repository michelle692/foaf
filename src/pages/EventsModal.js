import React from "react";
import { eventList } from "../tempSrcData/events";

function EventsModal({ isOpen, onClose, children }) {

    if (!isOpen) return null;

    return (
        <dialog className="modal-container upcoming-events-modal">
            <button className="close-btn" onClick={onClose}> &times; </button>

            {/* add carousel for multiple events? ask karina */}
            
            {eventList.map((event) => (
                <div key={event.key} className="event-item">
                    <h2 className="branding-text">{event.eventName}</h2>
                    <p className="mallanna-regular"> {event.eventDescription} </p>
                    
                    <a href={`/sign-up/${event.key}`} className="signup-button fragment-mono-regular"> TICKETS & MORE INFO </a>
                </div>
            ))}
        </dialog>
    );
  }
  
  export default EventsModal;
  