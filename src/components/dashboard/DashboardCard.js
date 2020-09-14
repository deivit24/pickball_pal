import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';
import '../../assets/css/DashboardCard.css';

const DashboardCard = ({ name, avatar }) => {
  return (
    <>
      <Card id="DashboardCard" variant="outlined">
        <CardMedia
          className="img"
          component="img"
          alt="Avatar Image"
          height="100%"
          image={avatar}
          title="Avatar Image"
        />
        <CardContent className="card-content">
          <h3 className="text-center mb-3">{name}</h3>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardCard;
