import React, { useState } from "react";

import { db } from "../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

function SignupForm({ eventName }) {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');

    function resetForm() {
        setFName('');
        setLName('');
        setEmail('');
    }

    async function submitForm(fname, lname, email) {
        // add logic to submit to database
        var collectionName = "events/" + eventName + "/attendees";
        try {
            console.log(collectionName);
            const docRef = await addDoc(collection(db, collectionName), {
                fname: fname,
                lname: lname,
                email: email,
            });
            
            resetForm();
            console.log("attendee added for event: " + eventName);
        } catch (e) {
            console.error("error adding attendee: " + fname + " " + lname + ". Reason: " + e);
        }
    }

    return (
        <>
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
                <input type="button" className="submit-button fragment-mono-regular" onClick={() => submitForm(fname, lname, email)} value="SUBMIT" /> 
            </form>
        </>
    )

}

export default SignupForm;