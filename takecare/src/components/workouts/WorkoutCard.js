import React, { Component } from 'react';
import '../cardstyles.css';
import ReactPlayer from 'react-player/youtube'
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const WorkoutCard =(props)=>{
    return(
        /*<div className="row">
        <div className="workoutcard">
          <div className="card">
            <div className="card-image">
              <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
              <span className="card-title">Card Title</span>
              <a className="btn-floating halfway-fab waves-effect waves-light purple floting">+</a>
            </div>
            <div className="card-content">
              <p className="caption" style={{textOverflow:'ellipsis'}}>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </div>*/
      <Card className="root">
        <CardHeader
          className="title"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.date}
        />
          <ReactPlayer width="100%" height="100%" url={props.link} />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
}
export default WorkoutCard;