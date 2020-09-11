import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import HomeCards from './HomeCards';

// @material-ui/core components
import Search from '../forms/Search';

const Home = () => {
  let history = useHistory();

  const auth = useSelector((store) => store.auth);
  const { isAuth } = auth;

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  const handleSearch = (search) => {
    history.push(`/profiles?search=${search}`);
  };
  return (
    <>
      <div id="Home" className="px-0 container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Pickleball Pal</h1>
              <h3 className="mb-3">Find local players near you</h3>
              <Search searchFor={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      <HomeCards />
    </>
  );
};

export default Home;
