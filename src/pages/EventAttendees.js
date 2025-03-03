import React, { useEffect, useState } from "react";
import { handleSignOut } from "../firebase/admins";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import '../styles/EventAttendees.css'
import EventAttendeeList from "../components/EventAttendeeList";
import { IconLogout } from "@tabler/icons-react";

function EventAttendees() {
  
  const [user, setUser] = useState('');
  const todaysDate = new Date().toLocaleDateString();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    // clear listener
    return () => unsubscribe();
  }, [])

  return (
    <div className="default-container attendees">
      {user ? (
        <>
          <a className="admin-login-button" href="/admin" onClick={handleSignOut}> <IconLogout size={25} /> </a>
          <a href="/"> back to home </a>
          <br />
          <h2 className="schibsted-grotesk"> {`Hi, ` + user.displayName + '.'} </h2>
          <h3 className="fragment-mono-regular"> {`Here are all the current events and attendees as of ` + todaysDate + `.`} </h3> 
          <EventAttendeeList />
        </>
        ) : (
        <>
          <h3 className="fragment-mono-regular"> You must be an admin to view this page. </h3>
          <a href="/admin"> click here to login </a>
        </>
      )}
    </div>
  )
}

export default EventAttendees;