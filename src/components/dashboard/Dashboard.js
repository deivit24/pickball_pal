/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentProfile, getMessages } from '../../_actions/profile';

import Loading from '../layout/Loading';

import DashboardCard from './DashboardCard';
import DashboardActions from './DashboardActions';

import DashboardNav from './DashboardNav';

import '../../assets/css/Dashboard.css';

const Dashboard = () => {
  const auth = useSelector((store) => store.auth);
  const meProfile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const { profile, loading } = meProfile;
  const { user } = auth;
  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(getMessages());
  }, [dispatch]);

  let result;

  let name =
    user &&
    user.first_name.toUpperCase() +
      ' ' +
      (user && user.last_name.toUpperCase());
  if (loading && profile === null) {
    result = <Loading type="spin" color="#3f50b5" />;
  } else {
    result = (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">
              <DashboardCard
                name={name}
                avatar={user && user.avatar}
                playing_style={profile && profile.playing_tyle}
              />
              {profile !== null ? <DashboardActions /> : ''}
            </div>

            <div className="col-sm-8">
              <DashboardNav />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{result}</>;
};

export default Dashboard;
