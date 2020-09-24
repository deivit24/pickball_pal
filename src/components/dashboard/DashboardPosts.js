// React
import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Get users posts
import { getUserPosts } from '../../_actions/post';
// Loading
import Loading from '../layout/Loading';
// PostCard Component
import PostCard from '../posts/PostCard';

const DashboardPosts = () => {
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();

  const { posts, loading } = post;
  useEffect(() => {
    dispatch(getUserPosts());
  }, [dispatch]);

  let result;

  if (loading) {
    result = <Loading type="spin" color="#3f50b5" />;
  }
  if (posts.length === 0) {
    result = (
      <>
        <div id="DashboardPosts" className="container mt-5">
          <h4>You haven't posted anything yet</h4>
        </div>
      </>
    );
  } else {
    result = (
      <>
        <div id="DashboardPosts" className="container mt-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </>
    );
  }

  return <>{result}</>;
};

export default DashboardPosts;
