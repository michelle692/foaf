import React, { useEffect, useState } from "react";

import '../styles/EventAttendees.css'
import EventAttendeeList from "../components/EventAttendeeList";
import { IconLogout } from "@tabler/icons-react";

function EventAttendees() {
  
  const [IsAdmin, setIsAdmin] = useState(false);
  const todaysDate = new Date().toLocaleDateString();

  useEffect(() => {
    const userAdminStatus = localStorage.getItem('IsAdmin') === 'true';
    setIsAdmin(userAdminStatus);
  })

  function handleLogout() {
    localStorage.setItem('IsAdmin', 'false');
    setIsAdmin(false);
  }

  return (
    <div className="attendees default-container">
      {IsAdmin ? (
        <>
          <a className="admin-login-button" href="/admin" onClick={handleLogout}> <IconLogout size={25} /> </a>
          <a href="/"> back to home </a>
          <h3 className="fragment-mono-regular"> {`Here are all the current events and attendees as of ` + todaysDate + `.`} </h3> 
          <EventAttendeeList />
        </>
        ) : (
        <>
          <h3 className="fragment-mono-regular"> You must be an admin to view this page. </h3>
        </>
      )}
    </div>
  )
}

export default EventAttendees;