import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

function SignupForm({ eventName }) {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    

    function resetForm() {
        setFName('');
        setLName('');
        setEmail('');
    }

    async function submitForm(fname, lname, email) {
        if (fname === '' || lname === '' || email === '') {
            alert("Please fill out all fields.")
            return;
        }

        const attendeeCollection = collection(db, "events/" + eventName + "/attendees");

        try {
            const docRef = await addDoc((attendeeCollection), {
                fname: fname,
                lname: lname,
                email: email,
            });
            
            resetForm();            
            alert("Thank you for signing up for " + eventName + ". We'll see you there!");
            
            setTimeout(() => {
                navigate('/');
            }, 1000);

        } catch (e) {
            alert("There was a server error. Please try again in a few minutes.");
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
                <input 
                    type="button" 
                    className="submit-button fragment-mono-regular" 
                    onClick={() => submitForm(fname, lname, email)} 
                    value="SUBMIT" 
                /> 
            </form>
        </>
    )

}

export default SignupForm;