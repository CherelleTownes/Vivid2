import React from 'react';
import "./ButtonJokes.css"


const ButtonJokes = (props) => (
  <button className={props.button} style={props.style}>
    {props.label}
  </button>
)

const ButtonJokesReload = (props) => (
  <button onClick={() => window.location.reload(false)} className={props.button} style={props.style}>
    {props.label}
  </button>
)

export { ButtonJokes, ButtonJokesReload };
