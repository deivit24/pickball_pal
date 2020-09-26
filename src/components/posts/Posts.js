// React
import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Get Posts Action
import { getPosts } from '../../_actions/post';
// Search Component
import Search from '../forms/Search';
// Loading Component
import Loading from '../layout/Loading';
// Post Components
import PostCard from './PostCard';
import PostForm from './PostForm';
// Posts CSS
import '../../assets/css/Posts.css';

const Posts = () => {
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();
  const { posts, loading } = post;
  useEffect(() => {
    dispatch(getPosts());
    document.title = `Community Posts | Pickleball Pal`;
  }, [dispatch]);

  const handleSearch = (search) => {
    dispatch(getPosts());
  };

  return loading ? (
    <Loading type="spin" color="#3f50b5" />
  ) : (
    <>
      <div id="Posts">
        <div className="container-fluid">
          <h1>Welcome to the community</h1>
          <p>
            <i className="fas fa-users"></i> Filter Posts by location
          </p>
          <Search searchFor={handleSearch} />
        </div>
        <div className="posts container">
          <PostForm />
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
