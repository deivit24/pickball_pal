// React
import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router DOM
import { Link } from 'react-router-dom';
// Actions from Redux
import { addLike, removeLike, deletePost } from '../../_actions/post';
// Comment Form Component
import CommentForm from '../post/CommentForm';
// Moment
import Moment from 'react-moment';
import { Icon, Badge, Button } from '@material-ui/core';
// Post Card CSS
import '../../assets/css/PostCard.css';

const PostCard = ({
  showActions,
  post: {
    _id,
    text,
    first_name,
    last_name,
    avatar,
    user,
    location,
    likes,
    comments,
    date,
  },
}) => {
  const dispatch = useDispatch();

  let name =
    first_name.charAt(0).toUpperCase() +
    first_name.slice(1) +
    ' ' +
    last_name.charAt(0).toUpperCase() +
    last_name.slice(1);

  const auth = useSelector((store) => store.auth);

  return (
    <div id="PostCard" className="row mb-3">
      <div className="col-12 col-sm-offset-1 ">
        <div className=" post-card-box">
          <div className="panel-heading">
            <Link to={`/profile/${user}`}>
              <img
                className="[ img-circle pull-left ]"
                src={avatar}
                alt="Mouse0270"
              />
            </Link>
            <Link to={`/profile/${user}`}>
              <h3>{name}</h3>
              <p>{location}</p>
            </Link>

            <h5>
              Posted
              <Moment to={date} />
            </h5>
          </div>
          <div className="panel-body">
            <p>{text}</p>
          </div>

          {showActions ?? (
            <>
              <div className="panel-footer">
                <Badge
                  onClick={(e) => dispatch(addLike(_id))}
                  className="mr-3"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  badgeContent={likes.length}
                  color="primary"
                >
                  <Icon className="fas fa-thumbs-up" />
                </Badge>

                <Badge
                  onClick={(e) => dispatch(removeLike(_id))}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  className="mr-3"
                  color="primary"
                >
                  <Icon className="fas fa-thumbs-down" />
                </Badge>
                <Link to={`/posts/${_id}`}>
                  <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    className="mr-3"
                    badgeContent={comments.length}
                    color="primary"
                  >
                    <Icon className="fas fa-comments" />
                  </Badge>
                </Link>
                {!auth.loading && user === auth.user._id && (
                  <Button
                    id="DeleteButton"
                    onClick={(e) => dispatch(deletePost(_id))}
                    color="secondary"
                  >
                    <Icon className="fas fa-trash"></Icon>
                  </Button>
                )}
                <CommentForm postId={_id} color="black" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
