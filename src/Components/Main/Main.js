import React from 'react';
// import Header from "./Components/Header/Header"
// import Footer from "./Components/Footer/Footer"
import ButtonApp from '../../stories/ButtonApp/ButtonApp';
import { Route, Link } from "react-router-dom";
import Bored from '../Bored/Bored';

// import {BrowserRouter as Router } from "react-router-dom"

function Main () {
  return (
    <div className="main-section">
      <h1 className="welcome">Welcome to Vivid!</h1>
      <h2 className="description">Cool activities and funny jokes to get you through the day. Are you bored? Have nothing to do? Click an option below to receive a funny joke or an activity suggestion. Enjoy!</h2>
    </div>
  );
}

export default Main;