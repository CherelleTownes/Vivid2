import React, { Component } from 'react';
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {ButtonJokes, ButtonJokesReload }  from '../../stories/ButtonJokes/ButtonJokes';
import { Route, Link } from "react-router-dom"
import Bored from '../Bored/Bored';

class Jokes extends Component {
  constructor() {
    super();
    this.state = {
    results: []
  }
  }
  componentDidMount = async() => {
    const response = await axios("https://sv443.net/jokeapi/v2/joke/any")
    debugger;
    console.log(response.data);
    this.setState({ results: response.data });
  }
  render() {
    const { results } = this.state;
    return (
      <div>
        <Header />
        <h1>THIS IS THE JOKES PAGE</h1>

        <h3>{results.joke}</h3>
        <h3>{results.setup}</h3>
        <h3>{results.delivery}</h3>


        
        <Link to="/Bored"><ButtonJokes button="jokePageButtonOne" label="I'm Bored, Give Me A Task Instead" /></Link>
        <Link to="/Jokes"><ButtonJokesReload button="jokesPageButtonTwo" label="Humor Me Again" /></Link>

        <footer>
          <Footer />
        </footer>
        
      </div>

  
    );
  }
 
}

export default Jokes;