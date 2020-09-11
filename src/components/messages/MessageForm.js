import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postMessage, getMessages } from '../../_actions/profile';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const MessageForm = ({ id, handleClose }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMessage(id, { message }));
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
          rowsMax={4}
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
