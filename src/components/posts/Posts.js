import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../_actions/post';
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

  return loading ? (
    <Loading type="spin" color="#3f50b5" />
  ) : (
    <>
      <div id="Posts">
        <div className="container-fluid">
          <h1>Welcome to the community</h1>
          <PostForm />
        </div>
        <div className="posts container">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
