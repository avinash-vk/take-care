import React, { Component } from 'react';
import './posts.css';
const PostCard =()=>{
    return(
    <div className="row">
    <div className="postcard">
      <div className="card small">
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1"/>
          <span className="card-title">Card Title</span>
          <a className="btn-floating halfway-fab waves-effect waves-light purple">+</a>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information</p>
        </div>
      </div>
    </div>
  </div>
    )
}
export default PostCard;