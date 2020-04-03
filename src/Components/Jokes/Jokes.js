import React, { Component } from 'react';
import axios from "axios";
import Header from "../Header/Header";
import {ButtonJokes, ButtonJokesReload }  from '../../stories/ButtonJokes/ButtonJokes';
import { Route, Link } from "react-router-dom"


class Jokes extends Component {
  constructor() {
    super();
    this.state = {
    results: []
  }
  }
  componentDidMount = async() => {
    const response = await axios("https://sv443.net/jokeapi/v2/joke/programming")
    console.log(response.data);
    this.setState({ results: response.data });
  }
  render() {
    const { results } = this.state;
    return (
      <div>
        <Header />
        <h1 className="jokes-header">A Little Jokey Joke</h1>

        <div className="jokes-content">
        <h3 className="jokes-results">{results.joke}</h3>
        <h3  className="jokes-results">{results.setup}</h3>
        <h3  className="jokes-results">{results.delivery}</h3>
        </div>

        <div className="jokes-buttons">
        <Link to="/Bored"><ButtonJokes button="jokePageButtonOne" label="I'm Bored, Give Me A Task Instead" /></Link>
        <Link to="/Jokes"><ButtonJokesReload button="jokesPageButtonTwo" label="Humor Me Again" /></Link>
        </div>
      </div>

  
    );
  }
 
}

export default Jokes;