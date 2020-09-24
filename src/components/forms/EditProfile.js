// React
import React, { useState, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router DOM
import { useHistory, Link } from 'react-router-dom';
// CreateProfile, Get Current Profile Actions
import { createProfile, getCurrentProfile } from '../../_actions/profile';
// Material UI Components
import {
  TextField,
  MenuItem,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Button,
} from '@material-ui/core';
// Create Profile CSS same as Edit
import '../../assets/css/CreateProfile.css';

const EditProfile = () => {
  const meProfile = useSelector((store) => store.profile);
  const { profile, loading } = meProfile;
  const [displaySocials, toggleDisplaySocials] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const INIT_STATE = {
    gender: loading || !profile.gender ? '' : profile.gender,
    level: loading || !profile.level ? '' : profile.level,
    bio: loading || !profile.bio ? '' : profile.bio,
    active: loading || profile.active ? true : false,
    playing_tyle: loading || !profile.playing_tyle ? '' : profile.playing_tyle,
    zip: loading || !profile.location[0].zip ? '' : profile.location[0].zip,
    facebook:
      loading || !profile.social.facebook ? '' : profile.social.facebook,
    instagram:
      loading || !profile.social.instagram ? '' : profile.social.instagram,
    linkedin:
      loading || !profile.social.linkedin ? '' : profile.social.linkedin,
  };
  const [values, setValues] = useState(INIT_STATE);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);
  const {
    gender,
    level,
    active,
    bio,
    playing_tyle,
    zip,
    facebook,
    instagram,
    linkedin,
  } = values;

  const [activeToggle, setActiveToggle] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((l) => ({ ...l, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(values, history, true));
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div id="CreateProfile" className="container">
      <div className="form-box-create">
        <div className="form-title">
          <h2>Profile</h2>
        </div>
        <form noValidate autoComplete="on">
          <div className="row">
            <div className="col-md-6">
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Gender"
                id="select"
                value={gender}
                select
                name="gender"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="non-binary">Non-Binary</MenuItem>
              </TextField>
            </div>
            <div className="col-md-6">
              <TextField
                fullWidth
                variant="outlined"
                label="Level"
                id="select"
                value={level}
                select
                margin="normal"
                name="level"
                onChange={handleChange}
              >
                <MenuItem value="I don't know">
                  <em>I don't know</em>
                </MenuItem>
                <MenuItem value="1">1.0</MenuItem>
                <MenuItem value="1.5">1.5</MenuItem>
                <MenuItem value="2.0">2.0</MenuItem>
                <MenuItem value="2.5">2.5</MenuItem>
                <MenuItem value="3.0">3.0</MenuItem>
                <MenuItem value="3.5">3.5</MenuItem>
                <MenuItem value="4.0">4.0</MenuItem>
                <MenuItem value="4.5">4.5</MenuItem>
                <MenuItem value="5.0">5.0</MenuItem>
              </TextField>
            </div>
            <div className="col-md-6">
              <TextField
                fullWidth
                variant="outlined"
                label="Active"
                id="select"
                value={active}
                select
                required
                helperText="Want your profile to be visible?"
                margin="normal"
                name="active"
                onChange={(e) => {
                  setValues({ ...values, active: !active });
                  setActiveToggle(!activeToggle);
                }}
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </TextField>
            </div>
            <div className="col-md-6">
              <TextField
                id="outlined-textarea"
                label="Zip Code"
                name="zip"
                type="number"
                value={zip}
                onChange={handleChange}
                helperText="e.g. 78745"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className="col-md-6">
              <TextField
                id="outlined-textarea"
                label="Tell us a little about yourself"
                name="bio"
                type="text"
                value={bio}
                onChange={handleChange}
                helperText=""
                multiline
                rows={4}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className="col-md-6">
              <TextField
                id="outlined-textarea"
                label="What is your playing style like?"
                name="playing_tyle"
                type="text"
                value={playing_tyle}
                onChange={handleChange}
                helperText=""
                multiline
                rows={4}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className="col-12">
              <Button
                onClick={() => toggleDisplaySocials(!displaySocials)}
                variant="outlined"
                size="small"
                color="primary"
                className="social-button float-left"
              >
                Enter Social Accounts
              </Button>
              <p> (Optional)</p>
            </div>
            {displaySocials && (
              <>
                <div className="col-md-4">
                  <FormControl variant="outlined" margin="normal">
                    <InputLabel htmlFor="facebook">Facebook URL</InputLabel>
                    <OutlinedInput
                      id="facebook"
                      type="text"
                      value={facebook.split(' ').join('')}
                      name="facebook"
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <i className="fab fa-facebook"></i>
                        </InputAdornment>
                      }
                      labelWidth={120}
                    />
                  </FormControl>
                </div>
                <div className="col-md-4">
                  <FormControl variant="outlined" margin="normal">
                    <InputLabel htmlFor="instagram">Instagram URL</InputLabel>
                    <OutlinedInput
                      id="instagram"
                      type="text"
                      value={instagram.split(' ').join('')}
                      name="instagram"
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <i className="fab fa-instagram"></i>
                        </InputAdornment>
                      }
                      labelWidth={120}
                    />
                  </FormControl>
                </div>
                <div className="col-md-4">
                  <FormControl variant="outlined" margin="normal">
                    <InputLabel htmlFor="linkedin">Linkedin URL</InputLabel>
                    <OutlinedInput
                      id="linkedin"
                      type="text"
                      value={linkedin.split(' ').join('')}
                      name="linkedin"
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <i className="fab fa-linkedin"></i>
                        </InputAdornment>
                      }
                      labelWidth={120}
                    />
                  </FormControl>
                </div>
              </>
            )}
            <Link className="submit-button" to="/dashboard">
              <Button
                // onClick={handleSubmit}
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </Link>

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

export default EditProfile;
