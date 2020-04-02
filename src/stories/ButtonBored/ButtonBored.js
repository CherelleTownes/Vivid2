import React from 'react';
import "./ButtonBored.css";



const ButtonBoredReload = (props) => (
  <button onClick={() => window.location.reload(false)} className={props.button} style={props.style}>
    {props.label}
  </button>
)

const ButtonHumorMe = (props) => (
  <button className={props.button} style={props.style}>
    {props.label}
  </button>
)

export { ButtonBoredReload, ButtonHumorMe };
