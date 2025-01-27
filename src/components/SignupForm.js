import React, { useState } from "react";

function SignupForm({ title, labels }) {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');

    function submitForm() {
        // add logic to submit to database
        console.log("submit form")
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
                <button className="submit-button fragment-mono-regular" onClick={submitForm}> SUBMIT </button>
            </form>
        </>

    )

}

export default SignupForm;