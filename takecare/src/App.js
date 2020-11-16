import './App.css';
import NavbarComp from '../src/components/basics/Navbar.js'
import Landing from '../src/views/landing/index.js'
import Explore from '../src/views/explore/index.js'
import Feed from '../src/views/feed/index.js'
import Profile from '../src/views/profile/index.js'
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  const [auth, setAuth] = useState(true); // make it false later.
  let routes;
  // authenticated routing
  if (auth) {
    routes = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        
      </Switch>
    );
  } else {
    // implement later.
  }

  return (
    <BrowserRouter>
      <NavbarComp />
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;
