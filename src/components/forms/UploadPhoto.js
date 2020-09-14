import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { uploadPhoto } from '../../_actions/profile';
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

const UploadPhoto = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    image: null,
    imageAlt: 'avatar',
  });

  const { image } = values;
  let disabled;
  if (image !== null) {
    disabled = false;
  } else {
    disabled = true;
  }
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ image: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // get the first input element with the type of file,

    const fd = new FormData();
    fd.append('image', image, image.name);

    console.log(fd);
    dispatch(uploadPhoto(fd, history));
  };
  return (
    <div className="container">
      <div className={classes.root}>
        <div id="form-box">
          <div className="form-title">
            <h2>Upload Photo</h2>
          </div>
          <form
            noValidate
            autoComplete="on"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-12">
                <input
                  accept="image/*"
                  type="file"
                  label="Name"
                  name="image"
                  id="upload-photo"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="upload-photo">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  className="submit-button"
                  disabled={disabled}
                >
                  Upload
                </Button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
