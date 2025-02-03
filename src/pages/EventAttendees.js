import React from "react";

import '../styles/EventAttendees.css'
import EventAttendeeList from "../components/EventAttendeeList";

function EventAttendees() {

   const IsAdmin = localStorage.getItem('IsAdmin');
   const todaysDate = new Date().toLocaleDateString();

 return (

    IsAdmin ? 
    (<div className="attendees default-container"> 
      <h3 className="fragment-mono-regular"> {`Here are all the current events and attendees as of ` + todaysDate + `.`} </h3> 
      
      <EventAttendeeList />
      
    </div>) : (
      <div className="attendees default-container"> 
         <h3 className="fragment-mono-regular"> You must be an admin to view this page. </h3> 
      </div>
    )
   
 )
}

export default EventAttendees;