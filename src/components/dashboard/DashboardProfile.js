import React, { useEffect } from 'react';
import { getCurrentProfile } from '../../_actions/profile';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../layout/Loading';
import Button from '@material-ui/core/Button';

const DashboardProfile = () => {
  const meProfile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const { profile, loading } = meProfile;

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  if (loading && profile === null) {
    return <Loading type="spin" color="#3f50b5" />;
  }
  if (profile !== null) {
    return (
      <>
        <div className="yes-profile mb-3">
          <h3 className="">Your Bio:</h3>
          <p>{profile.bio}</p>
        </div>
        <div className="yes-profile mb-3">
          <h3 className="pb-">Your Info:</h3>
          <div className="row">
            <div className="col-6">
              <p>
                <i className="fas fa-venus-mars"></i> Gender:
              </p>
            </div>
            <div className="col-6">
              <p>{profile.gender}</p>
            </div>
            <div className="col-6">
              <p>
                <i className="fas fa-baseball-ball"></i> Level:
              </p>
            </div>
            <div className="col-6">
              <p>{profile.level}</p>
            </div>
            <div className="col-6">
              <p>
                <i className="fas fa-globe-americas"></i> Active:
              </p>
            </div>
            <div className="col-6">
              <p>
                {profile.active
                  ? "I'm looking to play!"
                  : 'Not looking to play'}
              </p>
            </div>
            <div className="col-3">
              <p>
                <i className="fas fa-users"></i> Socials:
              </p>
            </div>
            <div className="col-3 text-center">
              <Link to={profile.social.instagram}>
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
            </div>
            <div className="col-3 text-center">
              <Link to={profile.social.facebook}>
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
            </div>
            <div className="col-3 text-center">
              <Link to={profile.social.linkedin}>
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
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
  }
};

export default DashboardProfile;