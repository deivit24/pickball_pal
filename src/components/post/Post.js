// React
import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router DOM
import { useParams } from 'react-router-dom';
// Loading
import Loading from '../layout/Loading';
// Get Post Action
import { getPost } from '../../_actions/post'; // Post Card Component
import PostCard from '../posts/PostCard';
// Comment Components
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
// Post CSS
import '../../assets/css/Post.css';
const Post = () => {
  const { id } = useParams();
  const singlePost = useSelector((store) => store.post);
  const dispatch = useDispatch();

  const { post, loading } = singlePost;

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return loading || post === null ? (
    <Loading type="spin" color="#3f50b5" />
  ) : (
    <div id="Post" className="container-fluid">
      <div className="comment-header">
        <h1>Leave a comment</h1>
        <CommentForm postId={post._id} color="white" />
      </div>
      <div className="post-card">
        <PostCard post={post} showActions={false} />{' '}
      </div>
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Post;
