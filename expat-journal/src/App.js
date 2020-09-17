  
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Link as SignLink  } from 'react-router-dom';
import Signup from "./components/Signup";
import Signin from "./components/Signin"


export default function App() {
  return (
    <div className="App">
      <nav>
      <div className='nav-link'>
      <SignLink to="/src/components/Signup" style={{paddingLeft: 13, textDecoration: 'none', color: 'black'}}>Signup</SignLink>
      <SignLink to="/src/components/Signin" style={{paddingLeft: 13, textDecoration: 'none', color:'black'}}>Signin</SignLink>
      </div>
      </nav> 
         <Route exact path="/src/Components/Signup" component={Signup} />
        <Route exact path="/src/Components/SignIn" component={Signin} />
           </div>
      
  );
};
