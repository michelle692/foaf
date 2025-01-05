import React from "react";

function Home() {
    return (
      <div className="default-container home">
        <div>
          <h1 className="barriecito-regular branding"> friend of a friend </h1> 
          <p className="mallanna-regular">
          From Connections to Friendships — Authentic Hangouts for a Digital Generation.
          </p>
        </div>
        
        <ul className="navbar"> 
            <li className="mallanna-regular">  sign-up for our upcoming events <a href="/sign-up" className="branding">here</a>  </li>
        </ul>
      </div>
    );
  }
  
  export default Home;
  