import React, { Component } from 'react';
import '../../landing/components/Header.css';
import {ReactComponent as Divider} from '../../../components/basics/assets/Divider.svg'
import Recommended from './Recommended.js'
import PostCard from '../../../components/posts/PostCard2.js';
import SpotifyCard from '../../../components/spotify/SpotifyCard.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor:'white',
      color:'purple',
    },
    rootgrid: {
      flexGrow: 1,
    },
  }));
const Header =()=>{
    const classes = useStyles();
    const tileData=[
        {
            date:"September 14th,2020",
            title:"Shrimp and Chorizo Paella",
            url:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          },
          {
            date:"September 16th,2020",
            title:"Vegan Doughnut",
            url:"https://images.unsplash.com/photo-1511557878388-bfbc44c72e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          },
          {
            date:"September 15th,2020",
            title:"Berry'd Alive Delight",
            url:"https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          },
      ]
      const data2=[
        {
          link:"https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          title:"Live From Space",
          name:"Mac Miller"
        },
        {
          link:"https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          title:"Live From Space",
          name:"Mac Miller"
        },
        {
          link:"https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          title:"Live From Space",
          name:"Mac Miller"
        },
      ]
    return(
        <div className="Header col s12">
            <h1 style={{paddingTop:'50px'}} className="">~ GROW TOGETHER ~</h1>
            <div className="container" style={{backgroundColor:"black",height:"1500px",padding:"10px"}}>
                <h6>Recommended for you!</h6>
                <Divider></Divider>
                <Recommended tileData={tileData}/>
                <h6>See what's popping around you!</h6>
                <Divider></Divider>
                <h6 style={{fontStyle:"italic"}}>Music</h6>
                <div className={classes.rootgrid}>
                <Grid container alignItems="center" spacing={2}>
                {data2.map((value) => ( 
                    <Grid item xs><SpotifyCard name={value.name}  title={value.title} link={value.link}/></Grid>
                ))}
                </Grid>
                </div>
                <Divider></Divider>
                <h6 style={{fontStyle:"italic"}}>Moments</h6>
                <div className={classes.rootgrid}>
                <Grid container alignItems="center" justify="center">
                {tileData.map((value) => ( 
                    <Grid item xs><PostCard date={value.date} url={value.url} title={value.title}/></Grid>
                ))}
                </Grid>
                </div>
            </div>
            </div>
    )
}
export default Header;