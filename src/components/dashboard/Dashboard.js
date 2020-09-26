// React
import React, { useEffect } from 'react';
// React Router Dom
// import { Redirect, Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Get Current Profile and Get Messages actions
import { getCurrentProfile, getMessages } from '../../_actions/profile';
// Loading
import Loading from '../layout/Loading';
// Dashboard Components
import DashboardCard from './DashboardCard';
import DashboardActions from './DashboardActions';
import DashboardNav from './DashboardNav';

const Dashboard = () => {
  const auth = useSelector((store) => store.auth);
  const meProfile = useSelector((store) => store.profile);

  const dispatch = useDispatch();
  const { profile, loading } = meProfile;
  const { user } = auth;

  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(getMessages());
    document.title = ` ${user && user.first_name}'s Dashboard`;
  }, [dispatch, user]);

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
        <div id="Dashboard" className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <DashboardCard name={name} avatar={user && user.avatar} />
              {profile !== null ? <DashboardActions /> : ''}
            </div>

            <div className="col-md-8">
              <DashboardNav />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{result}</>;
};

export default Dashboard;
