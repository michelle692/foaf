import React, { useState }from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../tempSrcData/events";

import '../styles/EventSignUp.css';
import thumbnail from '../images/hakuji_thumbnail.svg';
import EventDetails from "../components/EventDetails";
import SignupForm from "../components/SignupForm";

function EventSignUp() {
    const { key } = useParams();
    const event = eventList.find((event) => event.key === parseInt(key));


    if (!event) {
        return <p> Event not found. </p>
    }

    return (
        <div className="event-signup">
            <div className="thumbnail">
                <img src={thumbnail} />
                {/* <img src={event.thumbnailPath}/> */}
            </div>

            <div className="signup-form">
                <a href="/"> back to home </a>

                <EventDetails 
                    eventName={event.eventName} 
                    eventTime={event.eventTime} 
                    eventDate={event.eventDate}
                    eventLocation={event.eventLocation}
                    locationLink={event.locationLink}
                    eventDescription={event.eventDescription}
                    entryFee={event.entryFee}
                />

                <hr />

                <SignupForm eventName={event.eventName}/>

            </div>
        </div>
    );
  }
  
  export default EventSignUp;