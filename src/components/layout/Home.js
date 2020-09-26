// React
import React, { useEffect } from 'react';
// Redux
import { useSelector } from 'react-redux';
// React Router DOM
import { Redirect, useHistory, Link } from 'react-router-dom';
// Home Cards
import HomeCards from './HomeCards';
import HomeMission from './HomeMission';
import HomeFooter from './HomeFooter';
// @material-ui/core components
import Button from '@material-ui/core/Button';
import Search from '../forms/Search';
// Home CSS
import '../../assets/css/Home.css';

const Home = () => {
  let history = useHistory();
  const auth = useSelector((store) => store.auth);
  const { isAuth } = auth;

  useEffect(() => {
    document.title = `Welcome to Pickleball Pal`;
  }, []);
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
              <h1>Welcome to Pickleball Pal</h1>
              <h3 className="mb-3">Find local pickleball players near you</h3>
              <Search searchFor={handleSearch} />
              <Link className="mr-3" to="/register">
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </Link>
              <Link to="/profiles">
                <Button variant="contained" color="primary">
                  View Players
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HomeCards />
      <HomeMission />
      <HomeFooter />
    </>
  );
};

export default Home;
