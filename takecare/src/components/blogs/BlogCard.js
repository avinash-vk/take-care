import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import '../cardstyles.css';

const BlogCard =(props)=>{
    return(
        /*<div className="row">
            <div className="postcard">
                <div className="card">
                        <span className="card-title heading">Blog Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light purple floting">+</a>
                        <span className="date"><br></br>27th September 2020</span>
                    <div className="card-content">
                        <p className="blog" style={{textOverflow:'ellipsis'}}>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
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
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.blog}
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
export default BlogCard;