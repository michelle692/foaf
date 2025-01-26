import React from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../tempSrcData/events";

import '../styles/EventSignUp.css';
import thumbnail from '../../public/images/hakuji_thumbnail.png';

function EventSignUp() {
    const { key } = useParams();
    const event = eventList.find((event) => event.key === parseInt(key));

    if (!event) {
        return <p> Event not found. </p>
    }

    return (
        <div className="event-signup">
            <div className="thumbnail">
                <img src={thumbnail}/>
            </div>
            <a href="/"> back to home </a>
        </div>
    );
  }
  
  export default EventSignUp;