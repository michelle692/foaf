import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import '../styles/AdminLogin.css';

function AdminLogin() {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleLogin = () => {
      if (username === 'admin_user' && password === 'admin_password') {
         localStorage.setItem('IsAdmin', 'true');
         navigate('/admin/events');
      } else {
        alert('Invalid credentials');
      }
    };

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
               onClick={handleLogin}/> 
         </form>
      </div>
   )
}

export default AdminLogin;