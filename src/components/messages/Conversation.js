import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { getMessages, getCurrentProfile } from '../../_actions/profile';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageForm from '../messages/MessageForm';
import Loading from '../layout/Loading';
import Moment from 'react-moment';
import '../../assets/css/Conversation.css';
// import { getMessages } from '../../_actions/profile';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Conversation = ({ conversation }) => {
  let history = useHistory();
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const dispatch = useDispatch();
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
    console.log('it worked');
    console.log(replyId);
    // eslint-disable-next-line no-restricted-globals
    // location.reload();

    history.push('/');
  };

  return (
    <Accordion className="mb-2">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}> {messageName}</Typography>
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
