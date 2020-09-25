// React
import React, { useEffect } from 'react';
// React Router DOM
import { useLocation } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// Navbar and HeaderLink Components
import Navbar from './components/navbar/Navbar';
import HeaderLinks from './components/navbar/HeaderLinks';
// App CSS
import './App.css';
import logo from './assets/img/logo.png';
// Alert Message Components
import AlertMsg from './components/layout/AlertMsg';
// Routes
import Routes from './routes/Routes';
// Load User Action
import { loadUser } from './_actions/auth';
// Set Auth Token
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
