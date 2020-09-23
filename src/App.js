import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useDispatch } from 'react-redux';
import HeaderLinks from './components/navbar/HeaderLinks';
import './App.css';
import logo from './assets/img/logo.png';
import AlertMsg from './components/layout/AlertMsg';
import Routes from './routes/Routes';
import { loadUser } from './_actions/auth';
import setAuthToken from './_helpers/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  let pathname;

  if (
    location.pathname !== '/dashboard' &&
    location.pathname !== '/login' &&
    location.pathname !== '/register' &&
    location.pathname !== '/edit-profile' &&
    location.pathname !== '/upload-photo' &&
    location.pathname !== '/create-profile' &&
    location.pathname !== '/add-places'
  ) {
    pathname = 'transparent';
  } else {
    pathname = 'white';
  }

  return (
    <div className="App">
      <Navbar
        color={pathname}
        brand={logo}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'white',
        }}
      />
      <AlertMsg />
      <Routes />
    </div>
  );
};

export default App;
