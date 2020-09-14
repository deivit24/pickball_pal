import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../_actions/post';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import '../../assets/css/PostForm.css';
const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ text }));
    setText('');
  };
  return (
    <div id="PostForm">
      <form action="" autoComplete="off" noValidate>
        <Input
          id="outlined-multiline-flexible"
          label="New Post"
          multiline
          className="mr-2"
          rowsMax={4}
          name="text"
          value={text}
          onChange={handleChange}
          variant="filled"
          placeholder="New Post"
        />

        <Button
          onClick={handleSubmit}
          size="small"
          variant="contained"
          color="primary"
        >
          Post
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
