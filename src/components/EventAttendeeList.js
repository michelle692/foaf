import React, { useState, useEffect } from "react";

import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { BounceLoader } from "react-spinners";

function EventAttendeeList() {

    const [eventsList, setEventsList] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
            // get events
            const eventSnapshot = await getDocs(collection(db, "events"));
            const events = []
            eventSnapshot.forEach(doc => {
                events.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            // get event attendees
            for(let i = 0; i < events.length; i++) {
                const attendeeCollection = "events/" + events[i].eventName + "/attendees";
                const attendeeSnapShot = await getDocs(collection(db, attendeeCollection));
                const attendees = []
                attendeeSnapShot.forEach(doc => {
                    attendees.push({
                        ...doc.data()
                    })
                })
                events[i].attendees = attendees;
            }
            
            setEventsList([...events]);
            setLoading(false);
            } catch (error) {
            console.error("Error fetching attendee list");
            }
        };
        getData();
    }, []);

    return (
        <>
        {loading ? 
            (<BounceLoader />) :
            (<div className="event-list">
                {eventsList.map(event => (
                    <div key={event.id} className="event-list-item"> 
                        <h3 className="fragment-mono-regular"> {event.eventName} • {event.eventDate} </h3>
                        <hr style={{width: '100%' }}/>
    
                        {event.attendees.length > 0 ? 
                        (<table className="attendee-list schibsted-grotesk">
                            <tbody>
                                <tr>
                                    <th> Full Name </th>
                                    <th> Email </th>
                                </tr>
                            {event.attendees.map(attendee => (
                                <tr> 
                                    <td> {attendee.fname} {attendee.lname} </td>
                                    <td> {attendee.email} </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>) : 
                        (<p className="fragment-mono-regular"> No attendees yet. </p>)}
                    </div>
                ))
                }
            </div>)}
        </>
    )
}

export default EventAttendeeList;