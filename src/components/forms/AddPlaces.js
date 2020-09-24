// React
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Add Place action
import { addPlaces } from '../../_actions/profile';
// Material UI Components
import { TextField, Button } from '@material-ui/core';

import '../../assets/css/AddPlaces.css';

const INIT_STATE = {
  name: '',
  location: '',
};
const AddPlaces = () => {
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
    <div id="AddPlaces" className="container">
      <div className="form-box">
        <div className="form-title">
          <h2>Add Place</h2>
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
  );
};

export default AddPlaces;
