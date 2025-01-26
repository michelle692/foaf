import React, { useState }from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../tempSrcData/events";

import '../styles/EventSignUp.css';
import thumbnail from '../images/hakuji_thumbnail.png';

import { IconCalendarEventFilled } from '@tabler/icons-react';
import { IconClock } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';

function EventSignUp() {
    const { key } = useParams();
    const event = eventList.find((event) => event.key === parseInt(key));
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');

    if (!event) {
        return <p> Event not found. </p>
    }

    function formatDate(dateString) {
        const [month, day, year] = dateString.split("-");
        const date = new Date(Date.UTC(year, month - 1, day));        
        return date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

    return (
        <div className="event-signup">
            <div className="thumbnail">
                <img src={thumbnail} />
                {/* <img src={event.thumbnailPath}/> */}
            </div>

            <div className="signup-form">
                <a href="/"> back to home </a>
                <h1 className="branding-text"> {event.eventName} </h1>

                <div style={{width: '100%', marginTop: '-1em'}}>
                    <div className="event-details fragment-mono-regular">
                        <IconCalendarEventFilled />
                        <p> {formatDate(event.eventDate)} </p> 
                    </div>
                    <div className="event-details fragment-mono-regular"> 
                        <IconClock />
                        <p> {event.eventTime} </p> 
                    </div>
                    <div className="event-details fragment-mono-regular"> 
                        <IconMapPin />
                        <p> {event.eventLocation} </p> 
                    </div>
                </div>

                <p className="schibsted-grotesk"> {event.eventDescription} </p>
                <p className="schibsted-grotesk"> Entry Fee: {event.entryFee} </p>

                <hr />

                <h2 className="branding-text"> TICKETS </h2>

                <form>
                    <label className="fragment-mono-regular"> FIRST NAME </label>
                    <input 
                        type="text"
                        id="fname"
                        value={fname}
                        onChange={(e) => setFName(e.target.value)}
                        className="schibsted-grotesk"
                    />
                    <label className="fragment-mono-regular"> LAST NAME </label>
                    <input 
                        type="text"
                        id="lname"
                        value={lname}
                        onChange={(e) => setLName(e.target.value)}
                        className="schibsted-grotesk"
                    />
                    <label className="fragment-mono-regular"> EMAIL ADDRESS </label>
                    <input  
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="schibsted-grotesk"
                    />
                    <button className="submit-button fragment-mono-regular"> SUBMIT </button>
                </form>
            </div>
        </div>
    );
  }
  
  export default EventSignUp;