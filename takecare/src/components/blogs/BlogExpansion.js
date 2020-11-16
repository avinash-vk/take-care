import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comment from '../comments/Comments.js';
import '../cardstyles.css';

const BlogExpansion =()=>{
    const comments=[
        {
          id: 1,
          body:"https://www.youtube.com/watch?v=ysz5S6PUM-U",
          name:"One",
          date:"June 14th,2020"
        },
        {
          is: 2,
          body:"https://www.youtube.com/watch?v=ysz5S6PUM-U",
          name:"Two",
          date:"September 14th,2020"
        },
        {
          id: 3,
          body:"https://www.youtube.com/watch?v=ysz5S6PUM-U",
          name:"Three",
          date:"October 14th,2020"
        },
      ]
    return(
        <Card className="root">
        <CardHeader
          className="title"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="One"
          subheader="14th Sept, 2020"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            OK trial
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        Comments:
        <Comment comments={comments}/>
      </Card>
    )
}
export default BlogExpansion;