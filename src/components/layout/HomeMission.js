import React from 'react';
import img from '../../assets/img/pickleball.jpg';

import '../../assets/css/HomeMission.css';

const HomeMission = () => {
  return (
    <div id="HomeMission">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h1>We're on a mission</h1>
            <p>
              Our goal is to grow Pickleball by making it easier to connect with
              players, get practice, and play matches at your local courts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMission;
