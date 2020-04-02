
import React from 'react';
import "./ButtonApp.css"


const ButtonApp = (props) => (
  <button className={props.button} style={props.style}>
    {props.label}
  </button>
)
export default ButtonApp; 