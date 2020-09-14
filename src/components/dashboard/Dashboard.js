/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentProfile, getMessages } from '../../_actions/profile';
import { getUserPosts } from '../../_actions/post';
import Loading from '../layout/Loading';
import PostCard from '../posts/PostCard';
import DashboardCard from './DashboardCard';
import DashboardActions from './DashboardActions';

import DashboardNav from './DashboardNav';

import '../../assets/css/Dashboard.css';

const Dashboard = () => {
  const auth = useSelector((store) => store.auth);
  const meProfile = useSelector((store) => store.profile);
  // const post = useSelector((store) => store.post);
  const dispatch = useDispatch();
  const { profile, loading } = meProfile;
  const { user } = auth;
  // const { posts } = post;
  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(getMessages());
    // dispatch(getUserPosts());
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
        <div id="Dashboard" className="container mt-5">
          <div className="row">
            <div className="col-sm-4 ">
              <DashboardCard name={name} avatar={user && user.avatar} />
              {profile !== null ? <DashboardActions /> : ''}
              {/* <br />
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))} */}
            </div>

            <div className="col-sm-8">
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
