import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageModal from '../messages/MessageModal';
import '../../assets/css/ProfileBody.css';

import { newConversation } from '../../_actions/profile';
const ProfileBody = ({
  avatar,
  first_name,
  last_name,
  bio,
  playing_style,
  active,
  gender,
  level,
}) => {
  const { id } = useParams();
  const auth = useSelector((store) => store.auth);
  const { user } = auth;
  const dispatch = useDispatch();

  function capFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const handleSubmit = () => {
    dispatch(newConversation(id));
  };
  let messageMe = false;
  if (!user) {
    messageMe = true;
  }
  let display;
  if (user && user._id === id) {
    display = 'd-none';
  }
  let name = capFirst(first_name) + ' ' + capFirst(last_name);
  return (
    <>
      <div id="ProfileBody" className="container text-center">
        <img src={avatar} className="mx-auto mb-3" alt="" />
        <h3>{name}</h3>
        {active ? (
          <p>
            {' '}
            <i className="fas fa-globe-americas active"></i> Looking to play
          </p>
        ) : (
          <p>
            {' '}
            <i className="fas fa-globe-americas not-active"></i> Not looking to
            play
          </p>
        )}
        <div className="row">
          <div className="col-6">
            <p>{capFirst(gender)}</p>
          </div>
          <div className="col-6">
            <p>Level: {level}</p>
          </div>
          <MessageModal
            messageMe={messageMe}
            display={`${display}`}
            name={name}
            id={id}
            handleSubmit={handleSubmit}
          />
          {/* <Button
            className={`mx-auto ${display}`}
            variant="contained"
            color="primary"
            disabled={messageMe}
            onClick={handleSubmit}
          >
            Message Me
          </Button> */}
        </div>
      </div>
      <div id="ProfileInfo" className="container">
        <div className="row mt-3">
          <div className="col-12 mb-3">
            <h4>About Me</h4>
            <p className="bio mb-3">{bio}</p>
            <h4>Playing Style</h4>
            <p className="bio mb-3">{playing_style}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;
