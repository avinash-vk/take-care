import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth:345,
    backgroundColor:'darkgrey',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    color:'black'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft:20
  },
  playIcon: {
    height: 38,
    width: 38,
    color:'white'
  },
}));

export default function SpotifyCard({name,title,link}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="save">
            <SaveIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={link}
      />
    </Card>
  );
}
