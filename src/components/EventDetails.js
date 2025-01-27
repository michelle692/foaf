import React from "react";

import { IconCalendarEventFilled } from '@tabler/icons-react';
import { IconClock } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconArrowUpRight } from '@tabler/icons-react';

function EventDetails({ eventName, eventDate, eventTime, eventLocation, locationLink, eventDescription, entryFee }) {

    function formatDate(dateString) {
        const [month, day, year] = dateString.split("-");
        const date = new Date(Date.UTC(year, month - 1, day));        
        return date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).toUpperCase();
    }

    return (
        <>
            <h1 className="branding-text"> {eventName} </h1>

            <div style={{width: '100%', marginTop: '-1em'}}>
                <div className="event-details fragment-mono-regular">
                    <IconCalendarEventFilled style={{ marginLeft: '0.5em'}}/>
                    <p> {formatDate(eventDate)} </p> 
                </div>
                <div className="event-details fragment-mono-regular"> 
                    <IconClock style={{ marginLeft: '0.5em'}}/>
                    <p> {eventTime} </p> {/* TODO: MIGHT NEED TO FORMAT THIS WHEN RETRIEVING FROM DB */}
                </div>
                <div className="event-details fragment-mono-regular"> 
                    <IconMapPin style={{ marginLeft: '0.5em'}}/>
                    <a href={locationLink} target="blank"> {eventLocation} </a> <IconArrowUpRight />
                </div>
            </div>

            <p className="schibsted-grotesk"> {eventDescription} </p>
            <p className="schibsted-grotesk"> Entry Fee: {entryFee} </p>
        </>

    )

}

export default EventDetails;