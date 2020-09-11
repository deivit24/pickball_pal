import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const DashboardNoProfile = () => {
  return (
    <div className="no-profile">
      <h2>You haven't created a profile yet. Please add some info </h2>
      <Link to="/create-profile">
        {' '}
        <Button variant="contained" color="primary">
          Create Profile
        </Button>{' '}
      </Link>
      <img
        src="https://media3.giphy.com/media/llUrLQUiwRhFEpqTFi/giphy.gif"
        alt=""
      />
    </div>
  );
};

export default DashboardNoProfile;
