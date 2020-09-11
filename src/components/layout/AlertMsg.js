import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { removeAlert } from '../../_actions/alert';

import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '5%',
    left: '5%',
    width: 'auto',
    zIndex: '50',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertMsg() {
  const classes = useStyles();

  const alerts = useSelector((st) => st.alert);
  const dispatch = useDispatch();

  const deleteAlert = (id) => {
    dispatch(removeAlert(id));
  };
  let alertMessage;
  if (alerts !== null && alerts.length > 0) {
    alertMessage = alerts.map((alert) => (
      <div key={alert.id}>
        <Alert
          variant="filled"
          severity={alert.alertType}
          onClose={() => deleteAlert(alert.id)}
        >
          {alert.msg}
        </Alert>
      </div>
    ));
  } else {
    alertMessage = '';
  }

  return <div className={classes.root}>{alertMessage}</div>;
}
