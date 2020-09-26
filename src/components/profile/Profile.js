// React
import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router DOM
import { useParams, Link } from 'react-router-dom';
// Loading Component
import Loading from '../layout/Loading';
// Material UI
import Button from '@material-ui/core/Button';
// Get Profile by ID Action
import { getProfileById } from '../../_actions/profile';
// Profile Components
import ProfileTop from './ProfileTop';
import ProfileBody from './ProfileBody';
import ProfilePlaces from './ProfilePlaces';

const Profile = () => {
  const { id } = useParams();
  const meProfile = useSelector((store) => store.profile);
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { profile, loading } = meProfile;

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);

  useEffect(() => {
    document.title = ` ${
      profile && profile.user.first_name + ' ' + profile.user.last_name
    }'s Profile`;
  }, [profile]);
  return (
    <>
      {profile === null || loading ? (
        <Loading type="spin" color="#3f50b5" />
      ) : (
        <>
          {' '}
          <div id="GoBack">
            {auth.isAuth &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile">
                  <Button variant="contained" color="secondary">
                    Edit Profile
                  </Button>
                </Link>
              )}
          </div>
          <ProfileTop social={profile.social} />
          <ProfileBody
            avatar={profile.user.avatar}
            first_name={profile.user.first_name}
            last_name={profile.user.last_name}
            active={profile.active}
            bio={profile.bio}
            playing_style={profile.playing_tyle}
            gender={profile.gender}
            level={profile.level}
          />
          <ProfilePlaces places={profile.places} />
        </>
      )}
    </>
  );
};

export default Profile;
