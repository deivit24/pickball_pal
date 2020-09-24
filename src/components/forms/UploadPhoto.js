// React
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// React Router DOM
import { useHistory } from 'react-router-dom';
// Upload Photo Action
import { uploadPhoto } from '../../_actions/profile';

import Button from '@material-ui/core/Button';

import '../../assets/css/UploadPhoto.css';

const UploadPhoto = () => {
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
    // get the first input element with the type of file
    const fd = new FormData();
    fd.append('image', image, image.name);

    dispatch(uploadPhoto(fd, history));
  };
  return (
    <div id="UploadPhoto" className="container">
      <div className="form-box">
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
  );
};

export default UploadPhoto;
