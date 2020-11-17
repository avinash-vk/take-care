import './App.css';
import NavbarComp from '../src/components/basics/Navbar.js'
import Landing from '../src/views/landing/index.js'
import Explore from '../src/views/explore/index.js'
import Feed from '../src/views/feed/index.js'
import Profile from '../src/views/profile/index.js'
import Signin from '../src/views/auth/Signin.js'
import SignUp from '../src/views/auth/Signup.js'
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
        <Route exact path="/feed" component={Feed}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={Signin}/>

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
