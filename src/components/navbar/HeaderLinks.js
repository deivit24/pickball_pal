// React
import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router DOM
import { Link, useHistory } from 'react-router-dom';
// Logout action
import { logout } from '../../_actions/auth';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

import Button from './Button';
// Custom Styles
import styles from '../../assets/js/headerLinksStyle';

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  const history = useHistory();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const classes = useStyles();

  const { isAuth, loading } = auth;
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout(history));
  };
  const authLinks = (
    <>
      <ListItem className={classes.listItem}>
        <Link to="/dashboard">
          <Button color="transparent" className={classes.navLink}>
            <i className="fas fa-grip-horizontal"></i> Dashboard
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/posts">
          <Button color="transparent" className={classes.navLink}>
            <i className="fas fa-comment-alt"></i> Posts
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={handleLogout}
          color="transparent"
          className={classes.navLink}
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </Button>
      </ListItem>
    </>
  );

  const guestLinks = (
    <>
      <ListItem className={classes.listItem}>
        <Link to="/login">
          <Button color="transparent" className={classes.navLink}>
            Login
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/register">
          <Button color="transparent" className={classes.navLink}>
            Register
          </Button>
        </Link>
      </ListItem>
    </>
  );
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/profiles">
          <Button color="transparent" className={classes.navLink}>
            <i className="fas fa-users"></i> Players
          </Button>
        </Link>
      </ListItem>
      {!loading && <> {isAuth ? authLinks : guestLinks} </>}
    </List>
  );
};

export default HeaderLinks;
