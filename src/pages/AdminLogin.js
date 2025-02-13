import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { handleAdminLogin } from "../firebase/admins";

import '../styles/AdminLogin.css';

function AdminLogin() {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   function handleLogin(username, password) {

      return async () => {
         const loginStatus = await handleAdminLogin(username, password);
         console.log(loginStatus)

         if (loginStatus) {
            navigate('/admin/events');
         }
      }
   }

   useEffect(() => {
      const userAdminStatus = localStorage.getItem('IsAdmin') === 'true';
      if (userAdminStatus) {
         navigate('/admin/events');
      }
   })

   return (
      <div className="admin-login default-container"> 
         <h3 className="fragment-mono-regular"> Log in as an admin. </h3>
         <form className="login-form">
            <label> Username: </label>
            <input 
               type="text" 
               onChange={(e) => setUsername(e.target.value)} 
            />

            <label> Password: </label>
            <input 
               type="password" 
               onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
               type="button" 
               className="submit-button fragment-mono-regular" 
               value="LOG IN" 
               onClick={handleLogin(username, password)}
            /> 
         </form>
         <a href="/"> back to home </a>
      </div>
   )
}

export default AdminLogin;