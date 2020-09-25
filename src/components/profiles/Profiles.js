// React
import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Loading
import Loading from '../layout/Loading';
// Search Component
import Search from '../forms/Search';
// Get Profiles Action
import { getProfiles } from '../../_actions/profile';
// Profile Card Component
import ProfileCard from './ProfileCard';
// Profile CSS
import '../../assets/css/Profiles.css';

const Profiles = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const { profiles, loading } = profile;

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  const handleSearch = (search) => {
    dispatch(getProfiles());
    console.log(search);
  };
  return (
    <>
      {loading ? (
        <Loading type="spin" color="#3f50b5" />
      ) : (
        <div id="Profiles">
          <div className="profiles-header">
            <h1>Find a Pickleball Pal</h1>
            <p>
              <i className="fas fa-users"></i> Browse and connect with other
              players
            </p>
            <Search searchFor={handleSearch} />
          </div>
          <div className="container">
            <div className="row">
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <div className="col-md-6 mb-4" key={profile._id}>
                    <ProfileCard profile={profile} />
                  </div>
                ))
              ) : (
                <h2>No Profiles Found </h2>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profiles;
