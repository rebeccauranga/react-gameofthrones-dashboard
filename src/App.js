
import React from 'react';
import './App.css';
import About from './About';
import Characters from './Characters';
import Resources from './Resources';
import CharacterDetails from './CharacterDetails';
import sigils from './sigils.png'

import {
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <div className="NavBar">
      <Link to="/">
          Home
        </Link> {" "}
        <Link to="/about">
          About
        </Link> {" "}
        <Link to="/characters">
          Characters
        </Link> {" "}
        <Link to="/resources">
          Resources
        </Link>
      </div>
      <h1 className="glow">GAME OF THRONES</h1>
      <img src={sigils} alt="House Sigils" />
      

      <Route path='/about' component={About} /> 
      <Route path='/characters' component={Characters} />
      <Route path='/resources' component={Resources} />
      <Route path='/gameofthrones' component={CharacterDetails} />
      <Route path='/gameofthrones/:id' component={Characters} />
  


    
    </div>
  );
}

export default App;


