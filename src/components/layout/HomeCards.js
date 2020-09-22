import React from 'react';

import { Link } from 'react-router-dom';

// @material-ui/core components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../../assets/css/HomeCards.css';
import earth from '../../assets/img/earth.jpg';
import person from '../../assets/img/person.jpg';
import message from '../../assets/img/message.jpg';

const HomeCards = () => {
  return (
    <div id="HomeCards" className="container">
      <h1>Perks of signing up</h1>
      <Grid container className="grid" spacing={3}>
        <Grid item sm={12} md={4}>
          <Paper className="paper">
            <img src={person} alt="" />
            <h4>Create a Profile</h4>
            <p>
              You can create and edit a profile that other players can find. You
              can display your bio, playing style level, social media accounts,
              and where you play.
            </p>
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className="paper">
            <img src={message} alt="" />
            <h4>Direct Message Players</h4>
            <p>
              You can send other players direct messages and directly set up
              your own match or practice schedule with the player. We take no
              payment for connecting players.{' '}
            </p>
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className="paper">
            <img src={earth} alt="" />
            <h4>Post to the Community</h4>
            <p>
              You can post to the Pickleball community and filter posts by
              location. That way your post doesn't get lost in the world.
              Comment and like other posts as well.{' '}
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Link to="/register">
        <Button variant="contained" color="primary" size="large">
          Create Profile
        </Button>
      </Link>
    </div>
  );
};

export default HomeCards;
