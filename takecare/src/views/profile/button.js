import React, { Component } from 'react';
const Follow =({color,text,icon})=>{
    return(
    <a className="waves-effect waves-light btn purple"><i class="material-icons left">{icon}</i>{text}</a>
    )
}
export default Follow;

