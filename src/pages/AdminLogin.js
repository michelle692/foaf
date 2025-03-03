import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { handleAdminLogin } from "../firebase/admins";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import '../styles/AdminLogin.css';

function AdminLogin() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const auth = getAuth();

   function handleLogin(email, password) {
      if (email &&  password) {
         return async () => {
            const loginStatus = await handleAdminLogin(email, password);

            if (loginStatus) {
               navigate('/admin/events');
            }
         }
      }
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            navigate('/admin/events');
         }
      });
      
      // clear listener
      return () => unsubscribe();
    }, [auth, navigate]);

   return (
      <div className="admin-login default-container"> 
         <a href="/"> back to home </a>

         <h3 className="fragment-mono-regular"> Log in as an admin. </h3>
         <form className="login-form">
            <label> Email: </label>
            <input 
               type="text" 
               onChange={(e) => setEmail(e.target.value)} 
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
               onClick={handleLogin(email, password)}
            /> 
            
            <a href="/admin/reset-password"> Forgot your password? </a>

         </form>
      </div>
   )
}

export default AdminLogin;