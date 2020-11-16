import React, { Component } from 'react';
import Logo from './assets/logo.png'
const NavbarComp =()=>{
    return(
    <nav className="navbox col s12">
    <div className="nav-wrapper purple-text navbox">
   
      <a href="#" class="brand-logo purple-text logo">
      <img src={Logo} height='40px' width='30px' className="profileimg"/>
        take.care</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down navlist">
        <li className="active purple-text text-lighten-2 activated"><a href="#">HOME</a></li>
        <li><a href="#" className="purple-text text-lighten-2">EXPLORE</a></li>
        <li><a href="#" className="purple-text text-lighten-2">PROFILE</a></li>
        <li><a href="#"><img className="profileimg circle responsive-img" src="https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=30" alt="hello"/></a></li>
      </ul>
    </div>
  </nav>
    )
}
export default NavbarComp;