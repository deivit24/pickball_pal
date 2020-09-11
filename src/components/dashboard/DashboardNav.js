import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentProfile, getMessages } from '../../_actions/profile';
import DashboardProfile from './DashboardProfile';
import DashboardPlaces from './DashboardPlaces';
import Conversation from '../messages/Conversation';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

const DashboardNav = () => {
  const auth = useSelector((store) => store.auth);
  const meProfile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const { messages } = meProfile;

  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(getMessages());
  }, [dispatch]);
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let dispalyMessages =
    messages.length === 0 ? (
      <p>No messages</p>
    ) : (
      messages.map((el) => (
        <div key={uuidv4()}>
          <Conversation conversation={el} />
        </div>
      ))
    );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Bio" {...a11yProps(0)} />
          <Tab label="Places" {...a11yProps(1)} />
          <Tab label="Messages" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <DashboardProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DashboardPlaces />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {dispalyMessages}
      </TabPanel>
    </div>
  );
};

export default DashboardNav;
