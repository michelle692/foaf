import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import '../styles/AdminLogin.css';
import ResetEmailForm from "../components/ResetEmailForm";

function ResetPassword() {

   const [email, setEmail] = useState('');
   const [searchParams] = useSearchParams();
   const oobCode = searchParams.get('oobCode');

   async function sendResetLinkToEmail() {
      if (!email) {
         alert('Please enter an email address.');
         return;
      }
      const auth = getAuth();
      // const url = process.env.REACT_APP_RESET_PASSWORD_URL;

      try {
         await sendPasswordResetEmail(auth, email, {
            // url: url,
            handleCodeInApp: true
         });
         alert('Password reset link sent to email!');
      } catch (error) {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert('There was an error sending the reset link. Please try again.');
         console.log(errorCode, errorMessage);          
      }
   }

   return (
      <div className="admin-login default-container"> 

         {oobCode ? <ResetEmailForm oobCode={oobCode} /> : (
            <>
               <h3 className="fragment-mono-regular"> Enter your email to receive a reset link. </h3>
               <form className="login-form">
                  <label> Email: </label>
                  <input 
                     type="text" 
                     onChange={(e) => setEmail(e.target.value)} 
                  />
                  <input 
                     type="button" 
                     className="submit-button fragment-mono-regular" 
                     value="SEND RESET LINK" 
                     onClick={sendResetLinkToEmail}
                  /> 
               </form>
            </>  
            )     
         }
         
         <a href="/admin"> back to login </a>         

      </div>
   )
}

export default ResetPassword;