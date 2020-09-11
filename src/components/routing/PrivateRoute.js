import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ exact, path, children }) => {
  const auth = useSelector((store) => store.auth);

  const { isAuth, loading } = auth;

  if (!isAuth && !loading) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
