import React, { useState } from "react";

import { db } from "../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

function SignupForm({ title, labels }) {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');

    function resetForm() {
        setFName('');
        setLName('');
        setEmail('');
    }

    async function submitForm(fname, lname, email) {
        console.log("submit form")
        // add logic to submit to database
        try {
            const docRef = await addDoc(collection(db, "event-attendees"), {
                fname: fname,
                lname: lname,
                email: email
            });
            
            resetForm();
            console.log("attendee added for: " + fname + " " + lname);
        } catch (e) {
            console.error("error adding attendee: " +fname + " " + lname);
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