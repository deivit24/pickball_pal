// React
import React from 'react';
// React Router DOM
import { Link } from 'react-router-dom';
/**
 * Going to use this way to import style to practise
 */
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    width: '100%',
  },
  cover: {
    width: 150,
    marginLeft: 'auto',
  },
  active: {
    color: 'green',
    marginLeft: 'auto',
  },
  notActive: {
    color: 'grey',
    marginLeft: 'auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const ProfileCard = ({
  profile: {
    user: { _id, first_name, last_name, avatar },
    location,
    level,
    active,
  },
}) => {
  const classes = useStyles();
  let play;
  if (active) {
    play = (
      <span className={classes.active}>
        <i className="far fa-user"></i>
      </span>
    );
  } else {
    play = (
      <span className={classes.notActive}>
        <i className="far fa-user"></i>
      </span>
    );
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {first_name} {last_name} {play}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Level: {level}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {location.length > 0 ? location[0].location : ''}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Link to={`/profile/${_id}`}>
            <Button variant="contained" color="primary">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
      <CardMedia className={classes.cover} image={avatar} title="Avatar" />
    </Card>
  );
};

export default ProfileCard;
