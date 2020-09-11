import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../layout/Loading';
import Button from '@material-ui/core/Button';
import { useParams, Link } from 'react-router-dom';
import { getProfileById } from '../../_actions/profile';
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
  console.log(id);
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
