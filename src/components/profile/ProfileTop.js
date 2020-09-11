import React from 'react';
import '../../assets/css/ProfileTop.css';

const ProfileTop = ({ social }) => {
  return (
    <div id="ProfileTop" className="container-fluid px-0">
      <div className="socials">
        {social && social.facebook && (
          <a href={social.facebook} target="a_blank">
            {' '}
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="a_blank">
            {' '}
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target="a_blank">
            {' '}
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
