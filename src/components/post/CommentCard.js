// React
import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router Dom
import { Link } from 'react-router-dom';
import { Avatar, Grid, Paper, Button, Icon } from '@material-ui/core';
// Moment
import Moment from 'react-moment';
// Delete Comment Action
import { deleteComment } from '../../_actions/post';

const CommentCard = ({
  postId,
  comment: { _id, text, first_name, last_name, avatar, user, date },
}) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <Paper style={{ padding: '20px', marginBottom: '10px' }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Link to={`/profile/${user}`}>
          <Grid item>
            <Avatar alt="avatar" src={avatar} />
          </Grid>
        </Link>
        <Grid justifycontent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: 'left' }}>
            {first_name} {last_name}
          </h4>
          <p style={{ textAlign: 'left' }}>{text}</p>
          <div className="row">
            <p style={{ textAlign: 'left', color: 'gray' }}>
              Posted <Moment to={date} />
            </p>
            {!auth.loading && user === auth.user._id && (
              <Button
                onClick={(e) => dispatch(deleteComment(postId, _id))}
                color="secondary"
                style={{ marginLeft: 'auto' }}
              >
                <Icon className="fas fa-trash"></Icon>
              </Button>
            )}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentCard;
