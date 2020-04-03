import React, { Component } from 'react';
import axios from "axios"
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import {ButtonBoredReload, ButtonHumorMe}  from '../../stories/ButtonBored/ButtonBored';
import { Route, Link } from "react-router-dom";
import "./Bored.css";


class Bored extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount = async () => {
    const response = await axios("http://www.boredapi.com/api/activity/")
    // debugger;
    console.log(response.data);
    this.setState({ results: response.data });

  }
  render() {
    const { results } = this.state;
    return (
      <div>
    

        <Header />

        <div className="activity">
          <h2>Activity</h2>
          <h3>{results.activity}</h3>
          <h2>Category</h2>
          <h3>{results.type}</h3>
          <h2>Number of Participants Needed</h2>
          <h3>{results.participants}</h3>
        </div>

        <div className="bored-buttons">
        <Link to="/Bored"><ButtonBoredReload button="boredPageButtonOne" label="Give Me A Different Task" /></Link>
        <Link to="/Jokes"><ButtonHumorMe button="boredPageButtonTwo" label="Humor Me"/></Link>
        </div>
          
       
      </div>


    );
  }
}




export default Bored;