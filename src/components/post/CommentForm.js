import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../_actions/post';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(postId, { text }));
    setText('');
  };
  return (
    <div id="CommentForm">
      <form action="" autoComplete="off" noValidate>
        <Input
          className="mr-2"
          multiline
          rowsMax={4}
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="comment"
        />
        <Button
          className="ml-2"
          onClick={handleSubmit}
          variant="contained"
          size="small"
          color="primary"
        >
          Post
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
