import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: '100%',
    border: 'none',
    boxShadow: '0 0 8px 2px #afafaf',
    borderRadius: '25px',
    paddingTop: '20px',
    marginBottom: '20px',
  },

  title: {
    fontSize: 14,
  },
  card: {
    paddingTop: '100px',
    background: '#f4f4f4',
    zIndex: '-1',
  },

  img: {
    width: '75%',
    margin: '0px auto -60px auto',
    borderRadius: '50%',

    zIndex: '50',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DashboardCard({ name, avatar, playing_style }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.img}
          component="img"
          alt="Avatar Image"
          height="100%"
          image={avatar}
          title="Avatar Image"
        />
        <CardContent className={classes.card}>
          <h3 className="text-center mb-3">{name}</h3>
          <h4>My playing style:</h4>
          <p>{playing_style}</p>
        </CardContent>
      </Card>
    </>
  );
}
