import React from "react";
import { Route, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        
      <header>
        <img src="#"></img>
        </header>
        
      
        <ul>
        <Link exact to="/"><li>Home</li></Link>
          <Link to="/Jokes"><li>Humor Me</li></Link>
          <Link to="/Bored"><li>I'm Bored</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header;