import React, { Component } from 'react';
//import './Header.css';
import {ReactComponent as Divider} from './assets/Divider.svg'
const Subhead =({subhead})=>{
    return(
        <>
        <div className="Subhead">
           {subhead}
            <br></br>
        <Divider className="dividerline"/>
        </div>
        
        </>
    )
}
export default Subhead;