// React
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Post Message Action
import { postMessage } from '../../_actions/profile';
// Material UI Components
import { Input, Button } from '@material-ui/core';

const MessageForm = ({ replyId, handleClose }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMessage(replyId, { message }));
    setMessage('');
    handleClose();
  };
  return (
    <div id="MessageForm">
      <form action="" autoComplete="off" noValidate>
        <Input
          id="outlined-multiline-flexible"
          className="mr-2"
          multiline
          fullWidth
          rows={4}
          name="message"
          value={message}
          onChange={handleChange}
          placeholder="message"
        />
        <br />
        <Button
          className="mt-3 "
          onClick={handleSubmit}
          variant="contained"
          size="small"
          color="primary"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default MessageForm;
