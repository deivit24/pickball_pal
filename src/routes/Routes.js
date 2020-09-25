// React
import React from 'react';
// React Route DOM
import { Switch, Route } from 'react-router-dom';
// Components for Routes
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Dashboard from '../components/dashboard/Dashboard';
import Profiles from '../components/profiles/Profiles';
import Profile from '../components/profile/Profile';
import Home from '../components/layout/Home';
import PrivateRoute from '../components/routing/PrivateRoute';
import NotFound404 from '../components/routing/NotFound404';
import CreateProfile from '../components/forms/CreateProfile';
import EditProfile from '../components/forms/EditProfile';
import UploadPhoto from '../components/forms/UploadPhoto';
import AddPlaces from '../components/forms/AddPlaces';
import Posts from '../components/posts/Posts';
import Post from '../components/post/Post';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/profiles">
        <Profiles />
      </Route>
      <Route exact path="/profile/:id">
        <Profile />
      </Route>
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/create-profile">
        <CreateProfile />
      </PrivateRoute>
      <PrivateRoute exact path="/edit-profile">
        <EditProfile />
      </PrivateRoute>
      <PrivateRoute exact path="/upload-photo">
        <UploadPhoto />
      </PrivateRoute>
      <PrivateRoute exact path="/add-places">
        <AddPlaces />
      </PrivateRoute>
      <PrivateRoute exact path="/posts">
        <Posts />
      </PrivateRoute>
      <PrivateRoute exact path="/posts/:id">
        <Post />
      </PrivateRoute>
      <Route>
        <NotFound404 />
      </Route>
    </Switch>
  );
};

export default Routes;
