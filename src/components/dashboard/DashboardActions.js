import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../../_actions/profile';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const DashboardActions = () => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-lg-6 mb-3">
        <Link to="/edit-profile">
          <Button fullWidth variant="outlined" color="primary">
            {' '}
            <i className="fas fa-user-circle mr-1"></i> Edit Profile
          </Button>
        </Link>
      </div>
      <div className="col-lg-6 mb-3">
        <Link to="/upload-photo">
          <Button fullWidth variant="outlined" color="primary">
            {' '}
            <i className="fas fa-upload mr-1"></i> Edit Photo
          </Button>
        </Link>
      </div>
      <div className="col-lg-12 mb-3">
        <Button
          onClick={() => dispatch(deleteAccount())}
          fullWidth
          variant="outlined"
          color="secondary"
        >
          {' '}
          <i className="fas fa-trash mr-1"></i> Delete Account
        </Button>
      </div>
    </div>
  );
};

export default DashboardActions;
