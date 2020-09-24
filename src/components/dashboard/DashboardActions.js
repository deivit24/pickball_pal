// React
import React from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Delete Account Action
import { deleteAccount } from '../../_actions/profile';
import { setAlert } from '../../_actions/alert';
// React Router Dom
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// Confirm Alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const DashboardActions = () => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();

    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete account?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteAccount()),
        },
        {
          label: 'No',
          onClick: () => dispatch(setAlert('Good Choice', 'info')),
        },
      ],
    });
  };
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
          onClick={handleDelete}
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
