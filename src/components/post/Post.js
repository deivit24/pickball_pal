import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Loading from '../layout/Loading';
import { getPost } from '../../_actions/post';
import PostCard from '../posts/PostCard';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
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
        <CommentForm postId={post._id} />
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
