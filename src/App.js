import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import Logo from "./Logo.png";
import Footer from "./Components/Footer/Footer"
import ButtonApp from './stories/ButtonApp/ButtonApp';
import { Route, Link } from "react-router-dom";
import Bored from './Components/Bored/Bored';
import Jokes from './Components/Jokes/Jokes';


function App () {
  return (
    <div>
     
      <div className="top-triangle-container">

      <div className="top-left-triangle">
        </div>
        <div>
        <Link exact to="/"><img src={Logo} alt="Logo"></img></Link> 
        </div>
        <div className="top-right-triangle">
      </div>
      </div>
       

  
 <Route path="/" exact render={() => (
        <>
          <Main />
          <div className="home-buttons">
          <Link to="/Bored"><ButtonApp button="homePageButtonOne" label="I'm Bored" /></Link>
          <Link to="/Jokes"><ButtonApp button="homePageButtonTwo" label="Humor Me" /></Link>      
          </div>
        </>
      )} />
      
      <Route path="/Bored" render={() => (
        <Bored/>
      )} />
       <Route path="/Jokes" render={() => (
        <Jokes/>
      )} />

<div className="bottom-triangle-container">
      <div className="bottom-left-triangle">
        </div>
        <div>
          <footer>
          <Footer />
        </footer>
        </div>
        <div className="bottom-right-triangle">
        </div>
      </div>






    </div>
  );
}

export default App;

// <Route path="/Profile/:heroId" render={(props) => (
//           <Profile {...props} />
// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }