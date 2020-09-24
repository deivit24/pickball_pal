// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// React Router DOM
import { useHistory } from 'react-router-dom';
// Material UI Components
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Message Form Component
import MessageForm from '../messages/MessageForm';
// Loading
import Loading from '../layout/Loading';
// Moment js
import Moment from 'react-moment';
// Conversation CSS
import '../../assets/css/Conversation.css';

const Conversation = ({ conversation }) => {
  let history = useHistory();
  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  if (user === null) {
    return <Loading type="spin" color="#3f50b5" />;
  }

  let messageName;
  let replyId;

  if (conversation[0].sender_id !== user._id) {
    messageName = conversation[0].first_name + ' ' + conversation[0].last_name;
    replyId = conversation[0].sender_id;
  } else {
    messageName =
      conversation[0].rec_first_name + ' ' + conversation[0].rec_last_name;
    replyId = conversation[0].receiver_id;
  }

  const handleClose = () => {
    // For somereason I can only get htis to work when I pushed to the dashboard.Will work on this for later versions
    history.push('/');
  };

  return (
    <Accordion className="mb-2">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> {messageName}</Typography>
      </AccordionSummary>
      <AccordionDetails id="Details">
        <div id="Conversation">
          <div className="conversation-box">
            {conversation.map((conv) => (
              <div key={conv._id} className="row">
                <div className=" col-8 message">
                  <p>{conv.message}</p>
                  <Moment to={conv.date_sent}></Moment>
                </div>
                <div
                  className={`col-4 ${
                    user._id === conv.sender_id ? 'order-first' : ''
                  } message-box`}
                >
                  <img src={conv.avatar} alt="avatar" /> <br />
                  <p className="text-muted">
                    {conv.first_name} {conv.last_name}
                  </p>
                </div>
              </div>
            ))}
            <div className="anchor"></div>
          </div>
          <div className="message-form">
            <MessageForm replyId={replyId} handleClose={handleClose} />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Conversation;
