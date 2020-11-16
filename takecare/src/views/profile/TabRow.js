import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PostCard2 from '../../components/posts/PostCard2';
import BlogCard from '../../components/blogs/BlogCard';
import SpotifyCard from '../../components/spotify/SpotifyCard';
import WorkoutCard from '../../components/workouts/WorkoutCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'white',
    color:'purple',
  },

  rootgrid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const data =[
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
  const data3=[
    {
      blog:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
      title:"One",
      date:"June 14th,2020"
    },
    {
      blog:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
      title:"TWo",
      date:"September 14th,2020"
    },
    {
      blog:"This impressive paella is a perfect party dish and a fun meal to cook This impressive paella is a perfect party dish and a fun meal to cook together with your gu",
      title:"Three",
      date:"October 14th,2020" 
    },
  ]
  const data4=[
    {
      link:"https://www.youtube.com/watch?v=ysz5S6PUM-U",
      title:"One",
      date:"June 14th,2020"
    },
    {
      link:"https://www.youtube.com/watch?v=ysz5S6PUM-U",
      title:"Two",
      date:"September 14th,2020"
    },
    {
      link:"https://www.youtube.com/watch?v=ysz5S6PUM-U",
      title:"Three",
      date:"October 14th,2020"
    },
  ]
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
        TabIndicatorProps={{
            style: {
              background:'purple',
              color:'#4B0082'
            }
          }}
          indicatorColor={"white"}
        >
          <Tab label="WORKOUTS" {...a11yProps(0)} />
          <Tab label="BLOGS" {...a11yProps(1)} />
          <Tab label="MOMENTS" {...a11yProps(2)} />
          <Tab label="PLAYLISTS" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className={classes.rootgrid}>
        <Grid container spacing={3}>
          {data4.map((value) => ( 
            <Grid item xs><WorkoutCard date={value.date} link={value.link} title={value.title}/></Grid>
          ))}
        </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.rootgrid}>
        <Grid container spacing={3}>
          {data3.map((value) => ( 
            <Grid item xs><BlogCard date={value.date} blog={value.blog} title={value.title}/></Grid>
          ))}
        </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={classes.rootgrid}>
      <Grid container spacing={3}>
      {data.map((value) => ( 
          <Grid item xs><PostCard2 date={value.date} url={value.url} title={value.title}/></Grid>
      ))}
        </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
<div className={classes.rootgrid}>
      <Grid container spacing={3}>
      {data2.map((value) => ( 
          <Grid item xs><SpotifyCard name={value.name}  title={value.title} link={value.link}/></Grid>
      ))}
        </Grid>
    </div>

      </TabPanel>
    </div>
  );
}