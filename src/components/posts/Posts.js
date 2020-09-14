import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../_actions/post';
import Search from '../forms/Search';
import Loading from '../layout/Loading';
import PostCard from './PostCard';
import PostForm from './PostForm';
import '../../assets/css/Posts.css';

const Posts = () => {
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();
  const { posts, loading } = post;
  useEffect(() => {
    dispatch(getPosts());
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
