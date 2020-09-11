import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPlaces } from '../../_actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import '../../assets/css/Login.css';

import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: '100%',
  },
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
}));
const INIT_STATE = {
  name: '',

  location: '',
};
const AddPlaces = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState(INIT_STATE);

  const { name, location } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((l) => ({ ...l, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlaces(values, history));
  };
  return (
    <div className="container">
      <div className={classes.root}>
        <div id="form-box">
          <div className="form-title">
            <h2>Add Location</h2>
          </div>
          <form noValidate autoComplete="on" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <TextField
                  id="outlined-full-width"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  helperText="Name of your location (eg. Westlake HS)"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </div>

              <div className="col-12">
                <TextField
                  id="outlined-full-width"
                  label="Location"
                  name="location"
                  value={location}
                  onChange={handleChange}
                  helperText="Location (eg. Westlake High School, Austin, TX)"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </div>

              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                className="submit-button"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlaces;
