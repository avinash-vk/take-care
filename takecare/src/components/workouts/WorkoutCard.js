import React, { Component } from 'react';
import './workouts.css'; 
import ReactPlayer from 'react-player/youtube'

const WorkoutCard =()=>{
    return(
        <div className="row">
        <div className="workoutcard">
          <div className="card">
            <div className="card-image">
              <video width="100%" height="100%" controls >
                <source src="videos/trial.mp4" type="video/mp4"/>
              </video>
              <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
              <span className="card-title">Card Title</span>
              <a className="btn-floating halfway-fab waves-effect waves-light purple floting">+</a>
            </div>
            <div className="card-content">
              <p className="caption" style={{textOverflow:'ellipsis'}}>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default WorkoutCard;