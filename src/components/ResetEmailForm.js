import React, { useState } from "react";

function ResetEmailForm(oobCode) {

    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');

    function confirmPassword(e) {
    
          setPassword(e.target.value);
    
          if (newPassword === password) {
             // update password function from firebase
          }
       }

    return (
        <>
            <h3 className="fragment-mono-regular"> Reset your password. </h3>
            <form className="login-form">
               

               <label> New Password: </label>
               <input 
                  type="password" 
                  onChange={(e) => setNewPassword(e.target.value)} 
               />

               <label> Confirm Password: </label>
               <input 
                  type="password" 
                  onChange={(e) => confirmPassword(e)} 
               />
               <input 
                  type="button" 
                  className="submit-button fragment-mono-regular" 
                  value="RESET PASSWORD" 
                  
               /> 
                </form>
            </>
    )
}

export default ResetEmailForm;