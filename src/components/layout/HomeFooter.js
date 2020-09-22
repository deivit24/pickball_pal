import React from 'react';
import '../../assets/css/HomeFooter.css';

const HomeFooter = () => {
  return (
    <div id="HomeFooter">
      <div className="container">
        <h1>
          Created by{' '}
          <a href="https://deivitsalazar.com" target="a_blank">
            {' '}
            David Salazar
          </a>
        </h1>
      </div>
    </div>
  );
};

export default HomeFooter;
