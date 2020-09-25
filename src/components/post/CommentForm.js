// React
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Add Comment Action
import { addComment } from '../../_actions/post';
// Material UI Components
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// Comment Form CSS
import '../../assets/css/CommentForm.css';

const CommentForm = ({ postId, color }) => {
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
          className={`mr-2 ${color}`}
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
          Comment
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
