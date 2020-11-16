import React, { Component } from 'react';
import './Header.css';
import {ReactComponent as Illustration} from './assets/peace.svg'
const Header =()=>{
    return(
        <div className="Header col s12">
            <h1 style={{paddingTop:'50px'}} className="">BELIEVE.BUILD.BECOME</h1>
            <Illustration height='500px' width='400px' className="illus"/>
            </div>
    )
}
export default Header;